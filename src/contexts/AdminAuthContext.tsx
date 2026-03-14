import { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

export type AdminRole = 'super_admin' | 'editor';

export interface AdminRecord {
  id: string;
  user_id: string;
  email: string;
  full_name: string;
  role: AdminRole;
  is_active: boolean;
  created_at: string;
  last_login: string | null;
}

interface AdminAuthContextType {
  user: User | null;
  session: Session | null;
  adminRecord: AdminRecord | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
  isSuperAdmin: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const fetchAdminRecord = async (userId: string): Promise<AdminRecord | null> => {
  try {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .maybeSingle();

    if (error || !data) return null;
    return data as AdminRecord;
  } catch {
    return null;
  }
};

const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
const ACTIVITY_CHECK_INTERVAL_MS = 60 * 1000;

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [adminRecord, setAdminRecord] = useState<AdminRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const initializedRef = useRef(false);
  const signInInProgressRef = useRef(false);
  const lastActivityRef = useRef(Date.now());

  useEffect(() => {
    const updateActivity = () => { lastActivityRef.current = Date.now(); };
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(evt => window.addEventListener(evt, updateActivity, { passive: true }));
    return () => { events.forEach(evt => window.removeEventListener(evt, updateActivity)); };
  }, []);

  useEffect(() => {
    if (!user || !adminRecord) return;

    const interval = setInterval(async () => {
      const inactive = Date.now() - lastActivityRef.current > SESSION_TIMEOUT_MS;
      if (inactive) {
        setUser(null);
        setSession(null);
        setAdminRecord(null);
        await supabase.auth.signOut();
        return;
      }

      if (user) {
        const record = await fetchAdminRecord(user.id);
        if (!record) {
          setUser(null);
          setSession(null);
          setAdminRecord(null);
          await supabase.auth.signOut();
        }
      }
    }, ACTIVITY_CHECK_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [user, adminRecord]);

  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!mounted) return;

        if (session?.user) {
          const record = await fetchAdminRecord(session.user.id);
          if (!mounted) return;
          if (record) {
            setSession(session);
            setUser(session.user);
            setAdminRecord(record);
          } else {
            await supabase.auth.signOut();
          }
        }
      } catch {
        // ignore
      } finally {
        if (mounted) {
          initializedRef.current = true;
          setLoading(false);
        }
      }
    };

    initialize();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (!initializedRef.current) return;
      if (signInInProgressRef.current) return;

      if (event === 'SIGNED_OUT') {
        setSession(null);
        setUser(null);
        setAdminRecord(null);
        return;
      }

      if (event === 'TOKEN_REFRESHED' && newSession) {
        setSession(newSession);
        setUser(newSession.user);
        return;
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    signInInProgressRef.current = true;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return { error };

      if (data.user) {
        const record = await fetchAdminRecord(data.user.id);
        if (!record) {
          await supabase.auth.signOut();
          return { error: { message: 'Access denied. You are not authorized as an admin.' } };
        }
        setAdminRecord(record);
        setUser(data.user);
        setSession(data.session);

        supabase
          .from('admins')
          .update({ last_login: new Date().toISOString() })
          .eq('user_id', data.user.id)
          .then(() => {});
      }

      return { error: null };
    } finally {
      signInInProgressRef.current = false;
    }
  };

  const signOut = async () => {
    setUser(null);
    setSession(null);
    setAdminRecord(null);
    await supabase.auth.signOut();
  };

  const value = {
    user,
    session,
    adminRecord,
    loading,
    signIn,
    signOut,
    isAdmin: !!user && !!adminRecord,
    isSuperAdmin: !!user && adminRecord?.role === 'super_admin',
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
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
  const { data, error } = await supabase
    .from('admins')
    .select('*')
    .eq('user_id', userId)
    .eq('is_active', true)
    .maybeSingle();

  if (error || !data) return null;
  return data as AdminRecord;
};

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [adminRecord, setAdminRecord] = useState<AdminRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        const record = await fetchAdminRecord(session.user.id);
        setAdminRecord(record);
        if (!record) {
          await supabase.auth.signOut();
          setUser(null);
          setSession(null);
        }
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      (async () => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          const record = await fetchAdminRecord(session.user.id);
          setAdminRecord(record);
          if (!record) {
            await supabase.auth.signOut();
            setUser(null);
            setSession(null);
            setAdminRecord(null);
          }
        } else {
          setAdminRecord(null);
        }
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error };

    if (data.user) {
      const record = await fetchAdminRecord(data.user.id);
      if (!record) {
        await supabase.auth.signOut();
        return { error: { message: 'Access denied. You are not authorized as an admin.' } };
      }
      setAdminRecord(record);

      await supabase
        .from('admins')
        .update({ last_login: new Date().toISOString() })
        .eq('user_id', data.user.id);
    }

    return { error: null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setAdminRecord(null);
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

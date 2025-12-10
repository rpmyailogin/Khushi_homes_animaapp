import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { supabase } from '@/lib/supabase';

export const AdminLoginPage = () => {
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [checkingFirstTime, setCheckingFirstTime] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn, signUp, isAdmin } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin Login - Khushi Homes";
    if (isAdmin) {
      navigate('/admin/dashboard');
    }
  }, [isAdmin, navigate]);

  useEffect(() => {
    const checkFirstTimeSetup = async () => {
      try {
        const { count } = await supabase
          .from('blogs')
          .select('*', { count: 'exact', head: true });

        const { data: { users } } = await supabase.auth.admin.listUsers();

        setIsFirstTime(!users || users.length === 0);
      } catch (err) {
        setIsFirstTime(true);
      } finally {
        setCheckingFirstTime(false);
      }
    };

    checkFirstTimeSetup();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isFirstTime) {
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }

        if (password.length < 6) {
          setError('Password must be at least 6 characters');
          setLoading(false);
          return;
        }

        const { error } = await signUp(email, password);
        if (error) {
          setError(error.message);
        } else {
          navigate('/admin/dashboard');
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError('Invalid email or password');
        } else {
          navigate('/admin/dashboard');
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (checkingFirstTime) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
          <p className="mt-4 text-sm text-zinc-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg border border-zinc-200 p-8">
        <div className="mb-8 text-center">
          <img
            src="/Khushi_homes_logo.svg"
            alt="Khushi Homes"
            className="h-12 mx-auto mb-4"
          />
          <h1 className="text-2xl font-medium text-black mb-2">
            {isFirstTime ? 'Admin Setup' : 'Admin Login'}
          </h1>
          <p className="text-sm text-zinc-600">
            {isFirstTime
              ? 'Create your admin account to get started'
              : 'Sign in to access the admin panel'
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black transition-colors"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black transition-colors"
              placeholder="••••••••"
            />
          </div>

          {isFirstTime && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black transition-colors"
                placeholder="••••••••"
              />
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 px-6 hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : isFirstTime ? 'Create Admin Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-zinc-600 hover:text-black transition-colors"
          >
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
};

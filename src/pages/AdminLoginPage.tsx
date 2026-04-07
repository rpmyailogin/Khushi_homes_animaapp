import { useState, useEffect, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { KhushiLogo } from '@/components/KhushiLogo';
import { checkRateLimit } from '@/lib/security';

export const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lockoutUntil, setLockoutUntil] = useState<number | null>(null);
  const { signIn, isAdmin, loading: authLoading } = useAdminAuth();
  const navigate = useNavigate();
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Admin Login - Khushi Homes";
  }, []);

  if (!authLoading && isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const getRemainingLockout = () => {
    if (!lockoutUntil) return 0;
    return Math.max(0, Math.ceil((lockoutUntil - Date.now()) / 1000));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;

    const remaining = getRemainingLockout();
    if (remaining > 0) {
      setError(`Too many failed attempts. Please try again in ${remaining} seconds.`);
      return;
    }

    if (!checkRateLimit('admin-login', 5, 300000)) {
      setLockoutUntil(Date.now() + 300000);
      setError('Too many login attempts. Please try again in 5 minutes.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const { error } = await signIn(email, password);
      if (error) {
        setError('Invalid email or password.');
      } else {
        navigate('/admin/dashboard');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg border border-zinc-200 p-8">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <KhushiLogo className="h-12" />
          </div>
          <h1 className="text-2xl font-medium text-black mb-2">Admin Login</h1>
          <p className="text-sm text-zinc-600">Sign in to access the admin panel</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
            <input ref={honeypotRef} type="text" name="company" autoComplete="off" tabIndex={-1} />
          </div>
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
              maxLength={254}
              className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black transition-colors text-black caret-black"
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
              maxLength={128}
              className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black transition-colors text-black caret-black"
              placeholder="••••••••"
            />
          </div>

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
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="block text-sm text-zinc-600 hover:text-black transition-colors"
          >
            Back to Website
          </a>
        </div>
      </div>
    </div>
  );
};

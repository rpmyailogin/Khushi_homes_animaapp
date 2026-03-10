import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { supabase } from '@/lib/supabase';
import type { AdminRecord, AdminRole } from '@/contexts/AdminAuthContext';

interface NewAdminForm {
  email: string;
  full_name: string;
  role: AdminRole;
  password: string;
}

const EMPTY_FORM: NewAdminForm = {
  email: '',
  full_name: '',
  role: 'editor',
  password: '',
};

export const AdminAdminsPage = () => {
  const { isSuperAdmin, adminRecord } = useAdminAuth();
  const navigate = useNavigate();
  const [admins, setAdmins] = useState<AdminRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<NewAdminForm>(EMPTY_FORM);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  useEffect(() => {
    document.title = "Manage Admins - Khushi Homes Admin";
    if (!isSuperAdmin) {
      navigate('/admin/dashboard');
    }
  }, [isSuperAdmin, navigate]);

  const fetchAdmins = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .order('created_at', { ascending: true });

    if (!error && data) {
      setAdmins(data as AdminRecord[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleToggleActive = async (admin: AdminRecord) => {
    if (admin.user_id === adminRecord?.user_id) return;

    const { error } = await supabase
      .from('admins')
      .update({ is_active: !admin.is_active })
      .eq('id', admin.id);

    if (!error) {
      setAdmins((prev) =>
        prev.map((a) => (a.id === admin.id ? { ...a, is_active: !a.is_active } : a))
      );
    }
  };

  const handleRoleChange = async (admin: AdminRecord, role: AdminRole) => {
    if (admin.user_id === adminRecord?.user_id) return;

    const { error } = await supabase
      .from('admins')
      .update({ role })
      .eq('id', admin.id);

    if (!error) {
      setAdmins((prev) =>
        prev.map((a) => (a.id === admin.id ? { ...a, role } : a))
      );
    }
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    setFormLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
      });

      if (signUpError) {
        setFormError(signUpError.message);
        setFormLoading(false);
        return;
      }

      if (!data.user) {
        setFormError('Failed to create auth user.');
        setFormLoading(false);
        return;
      }

      const { error: insertError } = await supabase
        .from('admins')
        .insert({
          user_id: data.user.id,
          email: form.email,
          full_name: form.full_name,
          role: form.role,
          is_active: true,
        });

      if (insertError) {
        setFormError(insertError.message);
        setFormLoading(false);
        return;
      }

      setFormSuccess(`Admin account created for ${form.email}.`);
      setForm(EMPTY_FORM);
      setShowForm(false);
      fetchAdmins();
    } catch (err: any) {
      setFormError(err.message || 'An error occurred');
    } finally {
      setFormLoading(false);
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Never';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-medium text-black mb-2">Admin Users</h1>
          <p className="text-zinc-600">Manage who has access to the admin panel</p>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setFormError('');
            setFormSuccess('');
          }}
          className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          {showForm ? 'Cancel' : '+ Add Admin'}
        </button>
      </div>

      {formSuccess && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">
          {formSuccess}
        </div>
      )}

      {showForm && (
        <div className="mb-8 bg-white border border-zinc-200 p-6">
          <h2 className="text-lg font-medium text-black mb-4">Create New Admin</h2>
          <form onSubmit={handleCreateAdmin} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Full Name</label>
              <input
                type="text"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-zinc-300 focus:outline-none focus:border-black transition-colors text-sm"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-zinc-300 focus:outline-none focus:border-black transition-colors text-sm"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                minLength={6}
                className="w-full px-4 py-2 border border-zinc-300 focus:outline-none focus:border-black transition-colors text-sm"
                placeholder="Min 6 characters"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Role</label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value as AdminRole })}
                className="w-full px-4 py-2 border border-zinc-300 focus:outline-none focus:border-black transition-colors text-sm bg-white"
              >
                <option value="editor">Editor</option>
                <option value="super_admin">Super Admin</option>
              </select>
            </div>

            {formError && (
              <div className="md:col-span-2 bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">
                {formError}
              </div>
            )}

            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                disabled={formLoading}
                className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formLoading ? 'Creating...' : 'Create Admin'}
              </button>
              <button
                type="button"
                onClick={() => { setShowForm(false); setForm(EMPTY_FORM); setFormError(''); }}
                className="px-6 py-2 border border-zinc-300 text-zinc-700 text-sm font-medium hover:bg-zinc-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      ) : (
        <div className="bg-white border border-zinc-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="text-left px-6 py-3 font-medium text-zinc-700">Name</th>
                <th className="text-left px-6 py-3 font-medium text-zinc-700">Email</th>
                <th className="text-left px-6 py-3 font-medium text-zinc-700">Role</th>
                <th className="text-left px-6 py-3 font-medium text-zinc-700">Status</th>
                <th className="text-left px-6 py-3 font-medium text-zinc-700">Last Login</th>
                <th className="text-left px-6 py-3 font-medium text-zinc-700">Created</th>
                <th className="text-left px-6 py-3 font-medium text-zinc-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {admins.map((admin) => {
                const isSelf = admin.user_id === adminRecord?.user_id;
                return (
                  <tr key={admin.id} className="hover:bg-zinc-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-black">
                      {admin.full_name || '—'}
                      {isSelf && (
                        <span className="ml-2 text-xs text-zinc-500 font-normal">(you)</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-zinc-700">{admin.email}</td>
                    <td className="px-6 py-4">
                      {isSelf ? (
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                          {admin.role === 'super_admin' ? 'Super Admin' : 'Editor'}
                        </span>
                      ) : (
                        <select
                          value={admin.role}
                          onChange={(e) => handleRoleChange(admin, e.target.value as AdminRole)}
                          className="px-2 py-1 text-xs border border-zinc-300 bg-white focus:outline-none focus:border-black transition-colors"
                        >
                          <option value="editor">Editor</option>
                          <option value="super_admin">Super Admin</option>
                        </select>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium ${
                          admin.is_active
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}
                      >
                        {admin.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-zinc-600">{formatDate(admin.last_login)}</td>
                    <td className="px-6 py-4 text-zinc-600">{formatDate(admin.created_at)}</td>
                    <td className="px-6 py-4">
                      {isSelf ? (
                        <span className="text-xs text-zinc-400">—</span>
                      ) : (
                        <button
                          onClick={() => handleToggleActive(admin)}
                          className={`text-xs font-medium px-3 py-1 border transition-colors ${
                            admin.is_active
                              ? 'border-red-200 text-red-600 hover:bg-red-50'
                              : 'border-green-200 text-green-600 hover:bg-green-50'
                          }`}
                        >
                          {admin.is_active ? 'Deactivate' : 'Activate'}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {admins.length === 0 && (
            <div className="text-center py-12 text-zinc-500">No admin users found.</div>
          )}
        </div>
      )}

      <div className="mt-6 bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
        <strong>Note:</strong> Deactivating an admin prevents them from logging in but does not delete their account. You cannot deactivate your own account.
      </div>
    </AdminLayout>
  );
};

import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

interface NewsletterSubscription {
  id: string;
  email: string;
  name: string | null;
  subscribed_at: string;
  is_active: boolean;
  preferences: {
    blog_updates: boolean;
    newsletters: boolean;
    offers: boolean;
  };
}

export const AdminNewsletterPage = () => {
  const [subscribers, setSubscribers] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    document.title = "Newsletter Subscribers - Khushi Homes Admin";
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .select('*')
        .order('subscribed_at', { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      fetchSubscribers();
    } catch (error: any) {
      alert('Error updating status: ' + error.message);
    }
  };

  const deleteSubscriber = async (id: string) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setSubscribers(subscribers.filter(s => s.id !== id));
    } catch (error: any) {
      alert('Error deleting subscriber: ' + error.message);
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['Email', 'Name', 'Subscribed At', 'Status', 'Blog Updates', 'Newsletters', 'Offers'],
      ...filteredSubscribers.map(sub => [
        sub.email,
        sub.name || '',
        new Date(sub.subscribed_at).toLocaleString(),
        sub.is_active ? 'Active' : 'Inactive',
        sub.preferences.blog_updates ? 'Yes' : 'No',
        sub.preferences.newsletters ? 'Yes' : 'No',
        sub.preferences.offers ? 'Yes' : 'No',
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredSubscribers = subscribers.filter(sub => {
    if (filter === 'active') return sub.is_active;
    if (filter === 'inactive') return !sub.is_active;
    return true;
  });

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-medium text-black mb-2">Newsletter Subscribers</h1>
          <p className="text-zinc-600">Manage your email subscribers</p>
        </div>
        <button
          onClick={exportToCSV}
          className="px-6 py-3 bg-black text-white hover:bg-red-600 transition-colors"
        >
          Export to CSV
        </button>
      </div>

      <div className="bg-white border border-zinc-200 p-4 mb-6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-black">Filter:</span>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm ${
              filter === 'all' ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            All ({subscribers.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 text-sm ${
              filter === 'active' ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            Active ({subscribers.filter(s => s.is_active).length})
          </button>
          <button
            onClick={() => setFilter('inactive')}
            className={`px-4 py-2 text-sm ${
              filter === 'inactive' ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            Inactive ({subscribers.filter(s => !s.is_active).length})
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      ) : filteredSubscribers.length === 0 ? (
        <div className="bg-white border border-zinc-200 p-12 text-center">
          <p className="text-zinc-600">No subscribers found</p>
        </div>
      ) : (
        <div className="bg-white border border-zinc-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                    Subscriber
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                    Preferences
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                    Subscribed
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-zinc-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-zinc-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-black">{subscriber.email}</div>
                      {subscriber.name && (
                        <div className="text-sm text-zinc-500">{subscriber.name}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {subscriber.preferences.blog_updates && (
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800">Blog Updates</span>
                        )}
                        {subscriber.preferences.newsletters && (
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800">Newsletters</span>
                        )}
                        {subscriber.preferences.offers && (
                          <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800">Offers</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleActive(subscriber.id, subscriber.is_active)}
                        className={`px-3 py-1 text-xs font-medium ${
                          subscriber.is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {subscriber.is_active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600">
                      {new Date(subscriber.subscribed_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteSubscriber(subscriber.id)}
                        className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 border border-red-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

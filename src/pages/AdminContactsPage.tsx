import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  project_type: string;
  status: string;
  created_at: string;
}

export const AdminContactsPage = () => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    document.title = "Contact Submissions - Khushi Homes Admin";
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      fetchContacts();
    } catch (error: any) {
      alert('Error updating status: ' + error.message);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact submission?')) return;

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setContacts(contacts.filter(c => c.id !== id));
      if (selectedContact?.id === id) setSelectedContact(null);
    } catch (error: any) {
      alert('Error deleting contact: ' + error.message);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-zinc-100 text-zinc-800';
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-black mb-2">Contact Submissions</h1>
        <p className="text-zinc-600">View and manage contact form submissions</p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      ) : contacts.length === 0 ? (
        <div className="bg-white border border-zinc-200 p-12 text-center">
          <p className="text-zinc-600">No contact submissions yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white border border-zinc-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-50 border-b border-zinc-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                        Project Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {contacts.map((contact) => (
                      <tr
                        key={contact.id}
                        onClick={() => setSelectedContact(contact)}
                        className={`cursor-pointer hover:bg-zinc-50 ${
                          selectedContact?.id === contact.id ? 'bg-blue-50' : ''
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-black">{contact.name}</div>
                          <div className="text-sm text-zinc-500">{contact.email}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600">{contact.project_type}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 text-xs font-medium ${getStatusColor(contact.status)}`}>
                            {contact.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {selectedContact ? (
              <div className="bg-white border border-zinc-200 p-6 sticky top-4">
                <h2 className="text-xl font-medium text-black mb-4">Contact Details</h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase">Name</label>
                    <p className="text-sm text-black mt-1">{selectedContact.name}</p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase">Email</label>
                    <p className="text-sm text-black mt-1">
                      <a href={`mailto:${selectedContact.email}`} className="text-blue-600 hover:underline">
                        {selectedContact.email}
                      </a>
                    </p>
                  </div>

                  {selectedContact.phone && (
                    <div>
                      <label className="text-xs font-medium text-zinc-500 uppercase">Phone</label>
                      <p className="text-sm text-black mt-1">
                        <a href={`tel:${selectedContact.phone}`} className="text-blue-600 hover:underline">
                          {selectedContact.phone}
                        </a>
                      </p>
                    </div>
                  )}

                  {selectedContact.subject && (
                    <div>
                      <label className="text-xs font-medium text-zinc-500 uppercase">Subject</label>
                      <p className="text-sm text-black mt-1">{selectedContact.subject}</p>
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase">Project Type</label>
                    <p className="text-sm text-black mt-1">{selectedContact.project_type}</p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase">Message</label>
                    <p className="text-sm text-black mt-1 whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase">Submitted</label>
                    <p className="text-sm text-black mt-1">
                      {new Date(selectedContact.created_at).toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase block mb-2">Status</label>
                    <select
                      value={selectedContact.status}
                      onChange={(e) => updateStatus(selectedContact.id, e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-300 focus:outline-none focus:border-black text-sm bg-white"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  <button
                    onClick={() => deleteContact(selectedContact.id)}
                    className="w-full px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 transition-colors"
                  >
                    Delete Submission
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-zinc-200 p-12 text-center">
                <p className="text-zinc-600">Select a contact to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

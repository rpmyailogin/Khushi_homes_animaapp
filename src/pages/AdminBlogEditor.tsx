import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';
import { useAdminAuth } from '@/contexts/AdminAuthContext';

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['blockquote', 'code-block'],
    [{ align: [] }],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const quillFormats = [
  'header', 'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent', 'blockquote', 'code-block',
  'align', 'link',
];

export const AdminBlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAdminAuth();
  const isEditMode = !!id;
  const quillRef = useRef<ReactQuill>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    author: 'Khushi Homes',
    category: 'general',
    tags: '',
    is_featured: false,
    is_published: false,
  });
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = isEditMode ? "Edit Blog - Khushi Homes Admin" : "Create Blog - Khushi Homes Admin";
    if (isEditMode) {
      fetchBlog();
    }
  }, [id, isEditMode]);

  const fetchBlog = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        author: data.author,
        category: data.category,
        tags: Array.isArray(data.tags) ? data.tags.join(', ') : '',
        is_featured: data.is_featured,
        is_published: data.is_published,
      });
      setContent(data.content || '');
      setFeaturedImageUrl(data.featured_image || '');
    } catch (error: any) {
      setError('Error loading blog: ' + error.message);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setFeaturedImage(file);
      setFeaturedImageUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('blog-images')
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let imageUrl = featuredImageUrl;

      if (featuredImage) {
        setUploading(true);
        imageUrl = await uploadImage(featuredImage);
        setUploading(false);
      }

      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const blogData = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content,
        featured_image: imageUrl,
        author: formData.author,
        category: formData.category,
        tags: tagsArray,
        is_featured: formData.is_featured,
        is_published: formData.is_published,
        published_at: formData.is_published ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
        created_by: user?.id,
      };

      if (isEditMode) {
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([blogData]);
        if (error) throw error;
      }

      navigate('/admin/blogs');
    } catch (error: any) {
      setError(error.message || 'An error occurred');
      setLoading(false);
      setUploading(false);
    }
  };

  return (
    <AdminLayout>
      <style>{`
        .ql-editor {
          min-height: 400px;
          font-size: 15px;
          line-height: 1.7;
          font-family: inherit;
        }
        .ql-editor h1 { font-size: 2em; font-weight: 700; margin: 0.5em 0; }
        .ql-editor h2 { font-size: 1.5em; font-weight: 600; margin: 0.5em 0; }
        .ql-editor h3 { font-size: 1.25em; font-weight: 600; margin: 0.5em 0; }
        .ql-editor h4 { font-size: 1em; font-weight: 600; margin: 0.5em 0; }
        .ql-editor p { margin-bottom: 0.75em; }
        .ql-editor ul, .ql-editor ol { padding-left: 1.5em; margin-bottom: 0.75em; }
        .ql-editor li { margin-bottom: 0.25em; }
        .ql-editor blockquote { border-left: 4px solid #d1d5db; padding-left: 1em; color: #6b7280; margin: 1em 0; }
        .ql-editor pre { background: #f3f4f6; padding: 1em; border-radius: 4px; overflow-x: auto; }
        .ql-toolbar { border-color: #d4d4d8 !important; }
        .ql-container { border-color: #d4d4d8 !important; }
      `}</style>

      <div className="mb-8">
        <h1 className="text-3xl font-medium text-black mb-2">
          {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>
        <p className="text-zinc-600">
          {isEditMode ? 'Update your blog post' : 'Add a new blog post to your website'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Basic Information</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Slug * (URL-friendly version)
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                required
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="blog-post-url"
              />
              <p className="text-xs text-zinc-500 mt-1">
                URL: /blog/{formData.slug || 'your-slug-here'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Excerpt * (Short description shown on blog listing)
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                required
                rows={3}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black resize-none"
                placeholder="Brief summary of the blog post"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Content * (Full blog post)
              </label>
              <p className="text-xs text-zinc-500 mb-2">
                Paste directly from Word — bold, headings, lists and other formatting will be preserved.
              </p>
              <div className="border border-zinc-300">
                <ReactQuill
                  ref={quillRef}
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your full blog content here, or paste from Word..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Featured Image</h2>
          <p className="text-sm text-zinc-600 mb-4">
            Recommended size: 1200×675px (16:9 ratio) • Max 5MB
          </p>

          {featuredImageUrl && (
            <div className="mb-4">
              <img
                src={featuredImageUrl}
                alt="Preview"
                className="w-full max-w-2xl h-auto border border-zinc-200"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={handleImageChange}
            className="block w-full text-sm text-zinc-600 file:mr-4 file:py-2 file:px-4 file:border file:border-zinc-300 file:text-sm file:font-medium file:bg-white hover:file:bg-zinc-50"
          />
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Metadata</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Author</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black bg-white"
              >
                <option value="general">General</option>
                <option value="tips">Tips & Advice</option>
                <option value="guides">Guides</option>
                <option value="news">News & Updates</option>
                <option value="design">Design Ideas</option>
                <option value="construction">Construction</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-black mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="construction, home design, tips"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Publishing Options</h2>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_published}
                onChange={(e) => setFormData(prev => ({ ...prev, is_published: e.target.checked }))}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-black">Publish this blog post</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_featured}
                onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-black">Feature this blog post</span>
            </label>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3">
            {error}
          </div>
        )}

        <div className="flex items-center gap-4 pb-8">
          <button
            type="submit"
            disabled={loading || uploading}
            className="px-8 py-3 bg-black text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading Image...' : loading ? 'Saving...' : isEditMode ? 'Update Blog Post' : 'Create Blog Post'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/blogs')}
            className="px-8 py-3 border border-zinc-300 text-black hover:bg-zinc-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

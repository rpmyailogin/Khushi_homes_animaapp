import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';
import { useAdminAuth } from '@/contexts/AdminAuthContext';

export const AdminProjectEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAdminAuth();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    short_description: '',
    description: '',
    location: '',
    project_type: 'residential',
    completion_date: '',
    area_sqft: '',
    budget_range: '',
    client_name: '',
    display_order: '0',
    is_featured: false,
    is_published: false,
  });
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState<string>('');
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [galleryImageUrls, setGalleryImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = isEditMode ? "Edit Project - Khushi Homes Admin" : "Create Project - Khushi Homes Admin";
    if (isEditMode) {
      fetchProject();
    }
  }, [id, isEditMode]);

  const fetchProject = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        title: data.title,
        slug: data.slug,
        short_description: data.short_description,
        description: data.description,
        location: data.location || '',
        project_type: data.project_type,
        completion_date: data.completion_date || '',
        area_sqft: data.area_sqft?.toString() || '',
        budget_range: data.budget_range || '',
        client_name: data.client_name || '',
        display_order: data.display_order?.toString() || '0',
        is_featured: data.is_featured,
        is_published: data.is_published,
      });
      setFeaturedImageUrl(data.featured_image || '');
      setGalleryImageUrls(data.gallery_images || []);
    } catch (error: any) {
      setError('Error loading project: ' + error.message);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleGalleryImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const validFiles = files.filter(file => {
        if (file.size > 5 * 1024 * 1024) {
          alert(`${file.name} is too large. Max size is 5MB`);
          return false;
        }
        return true;
      });
      setGalleryImages([...galleryImages, ...validFiles]);
      const urls = validFiles.map(file => URL.createObjectURL(file));
      setGalleryImageUrls([...galleryImageUrls, ...urls]);
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
    setGalleryImageUrls(galleryImageUrls.filter((_, i) => i !== index));
  };

  const uploadImage = async (file: File, bucket: string): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      setUploading(true);
      let imageUrl = featuredImageUrl;
      let galleryUrls = galleryImageUrls;

      if (featuredImage) {
        imageUrl = await uploadImage(featuredImage, 'project-images');
      }

      if (galleryImages.length > 0) {
        const newGalleryUrls = await Promise.all(
          galleryImages.map(file => uploadImage(file, 'project-images'))
        );
        galleryUrls = [...galleryImageUrls, ...newGalleryUrls];
      }
      setUploading(false);

      const projectData = {
        title: formData.title,
        slug: formData.slug,
        short_description: formData.short_description,
        description: formData.description,
        featured_image: imageUrl,
        gallery_images: galleryUrls,
        location: formData.location || null,
        project_type: formData.project_type,
        completion_date: formData.completion_date || null,
        area_sqft: formData.area_sqft ? parseInt(formData.area_sqft) : null,
        budget_range: formData.budget_range || null,
        client_name: formData.client_name || null,
        display_order: parseInt(formData.display_order),
        is_featured: formData.is_featured,
        is_published: formData.is_published,
        updated_at: new Date().toISOString(),
        created_by: user?.id,
      };

      if (isEditMode) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([projectData]);

        if (error) throw error;
      }

      navigate('/admin/projects');
    } catch (error: any) {
      setError(error.message || 'An error occurred');
      setLoading(false);
      setUploading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-black mb-2">
          {isEditMode ? 'Edit Project' : 'Add New Project'}
        </h1>
        <p className="text-zinc-600">
          {isEditMode ? 'Update project details' : 'Add a new project to your portfolio'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Basic Information</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Project Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="Enter project title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Slug * (URL-friendly version)
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="project-url"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Short Description * (For cards)
              </label>
              <textarea
                value={formData.short_description}
                onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                required
                rows={2}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black resize-none"
                placeholder="Brief description for project cards"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Full Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={8}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black resize-none"
                placeholder="Detailed project description"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Featured Image</h2>
          <p className="text-sm text-zinc-600 mb-4">
            Recommended size: 1200×900px (4:3 ratio) • Max 5MB
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
            onChange={handleFeaturedImageChange}
            className="block w-full text-sm text-zinc-600 file:mr-4 file:py-2 file:px-4 file:border file:border-zinc-300 file:text-sm file:font-medium file:bg-white hover:file:bg-zinc-50"
          />
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Gallery Images</h2>
          <p className="text-sm text-zinc-600 mb-4">
            Recommended size: 1600×1200px (4:3 ratio) • Max 5MB each
          </p>

          {galleryImageUrls.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
              {galleryImageUrls.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-40 object-cover border border-zinc-200"
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="absolute top-2 right-2 bg-red-600 text-white w-6 h-6 flex items-center justify-center hover:bg-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={handleGalleryImagesChange}
            multiple
            className="block w-full text-sm text-zinc-600 file:mr-4 file:py-2 file:px-4 file:border file:border-zinc-300 file:text-sm file:font-medium file:bg-white hover:file:bg-zinc-50"
          />
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Project Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Project Type *
              </label>
              <select
                value={formData.project_type}
                onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                required
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black bg-white"
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="renovation">Renovation</option>
                <option value="interior-design">Interior Design</option>
                <option value="new-construction">New Construction</option>
                <option value="rebuild">Rebuild</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="City, State"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Completion Date
              </label>
              <input
                type="date"
                value={formData.completion_date}
                onChange={(e) => setFormData({ ...formData, completion_date: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Area (sq ft)
              </label>
              <input
                type="number"
                value={formData.area_sqft}
                onChange={(e) => setFormData({ ...formData, area_sqft: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="2500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Budget Range
              </label>
              <input
                type="text"
                value={formData.budget_range}
                onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="$100k - $200k"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Client Name
              </label>
              <input
                type="text"
                value={formData.client_name}
                onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="Client name (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Display Order
              </label>
              <input
                type="number"
                value={formData.display_order}
                onChange={(e) => setFormData({ ...formData, display_order: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="0"
              />
              <p className="text-xs text-zinc-500 mt-1">Lower numbers appear first</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Publishing Options</h2>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.is_published}
                onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-black">Publish this project</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.is_featured}
                onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-black">Feature this project</span>
            </label>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3">
            {error}
          </div>
        )}

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={loading || uploading}
            className="px-8 py-3 bg-black text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading Images...' : loading ? 'Saving...' : isEditMode ? 'Update Project' : 'Create Project'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/projects')}
            className="px-8 py-3 border border-zinc-300 text-black hover:bg-zinc-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

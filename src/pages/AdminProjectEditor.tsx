import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { X } from 'lucide-react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { validateImageFile, sanitizeFileName } from '@/lib/security';

const MAX_IMAGE_SLOTS = 5;

interface ImageSlot {
  file: File | null;
  previewUrl: string;
  uploadedUrl: string;
}

const emptySlot = (): ImageSlot => ({ file: null, previewUrl: '', uploadedUrl: '' });

export const AdminProjectEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAdminAuth();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    location: '',
    project_type: 'new-construction',
    bedrooms: '',
    bathrooms: '',
    garage_spaces: '',
    home_size_sqm: '',
    land_size_sqm: '',
    budget_range: '',
    completion_year: '',
    short_description: '',
    description: '',
    property_features: '',
    display_order: '0',
    is_featured: false,
    is_published: false,
  });

  const [images, setImages] = useState<ImageSlot[]>(
    Array.from({ length: MAX_IMAGE_SLOTS }, emptySlot)
  );

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = isEditMode ? 'Edit Project - Khushi Homes Admin' : 'Create Project - Khushi Homes Admin';
    if (isEditMode) fetchProject();
  }, [id, isEditMode]);

  const fetchProject = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      const allImages: string[] = [
        ...(data.featured_image ? [data.featured_image] : []),
        ...(Array.isArray(data.gallery_images) ? data.gallery_images : []),
      ].slice(0, MAX_IMAGE_SLOTS);

      const slots: ImageSlot[] = Array.from({ length: MAX_IMAGE_SLOTS }, (_, i) => ({
        file: null,
        previewUrl: allImages[i] || '',
        uploadedUrl: allImages[i] || '',
      }));

      setImages(slots);

      const completionYear = data.completion_date
        ? String(new Date(data.completion_date).getFullYear())
        : '';

      setFormData({
        title: data.title || '',
        slug: data.slug || '',
        location: data.location || '',
        project_type: data.project_type || 'new-construction',
        bedrooms: data.bedrooms?.toString() || '',
        bathrooms: data.bathrooms?.toString() || '',
        garage_spaces: data.garage_spaces?.toString() || '',
        home_size_sqm: data.home_size_sqm?.toString() || '',
        land_size_sqm: data.land_size_sqm?.toString() || '',
        budget_range: data.budget_range || '',
        completion_year: completionYear,
        short_description: data.short_description || '',
        description: data.description || '',
        property_features: Array.isArray(data.property_features)
          ? data.property_features.join(', ')
          : '',
        display_order: data.display_order?.toString() || '0',
        is_featured: data.is_featured || false,
        is_published: data.is_published || false,
      });
    } catch (err: any) {
      setError('Error loading project: ' + err.message);
    }
  };

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({ ...prev, title, slug: generateSlug(title) }));
  };

  const handleImageChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const validation = validateImageFile(file);
    if (!validation.valid) {
      alert(validation.error);
      e.target.value = '';
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    setImages(prev => {
      const next = [...prev];
      next[index] = { file, previewUrl, uploadedUrl: '' };
      return next;
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => {
      const next = [...prev];
      next[index] = emptySlot();
      return next;
    });
  };

  const uploadImage = async (file: File): Promise<string> => {
    const path = sanitizeFileName(file.name);
    const { error: uploadError } = await supabase.storage
      .from('project-images')
      .upload(path, file);
    if (uploadError) throw uploadError;
    return supabase.storage.from('project-images').getPublicUrl(path).data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      setUploading(true);
      const finalUrls: string[] = [];

      for (const slot of images) {
        if (slot.file) {
          const url = await uploadImage(slot.file);
          finalUrls.push(url);
        } else if (slot.uploadedUrl) {
          finalUrls.push(slot.uploadedUrl);
        }
      }

      setUploading(false);

      const featuredImage = finalUrls[0] || null;
      const galleryImages = finalUrls.slice(1);

      const features = formData.property_features
        ? formData.property_features.split(',').map(f => f.trim()).filter(Boolean)
        : [];

      const completionDate = formData.completion_year
        ? `${formData.completion_year}-01-01`
        : null;

      const projectData = {
        title: formData.title,
        slug: formData.slug,
        location: formData.location || null,
        project_type: formData.project_type,
        bedrooms: formData.bedrooms ? parseInt(formData.bedrooms) : null,
        bathrooms: formData.bathrooms ? parseInt(formData.bathrooms) : null,
        garage_spaces: formData.garage_spaces ? parseInt(formData.garage_spaces) : null,
        home_size_sqm: formData.home_size_sqm ? parseInt(formData.home_size_sqm) : null,
        land_size_sqm: formData.land_size_sqm ? parseInt(formData.land_size_sqm) : null,
        budget_range: formData.budget_range || null,
        completion_date: completionDate,
        short_description: formData.short_description,
        description: formData.description,
        property_features: features,
        featured_image: featuredImage,
        gallery_images: galleryImages,
        display_order: parseInt(formData.display_order),
        is_featured: formData.is_featured,
        is_published: formData.is_published,
        updated_at: new Date().toISOString(),
        created_by: user?.id,
      };

      if (isEditMode) {
        const { error } = await supabase.from('projects').update(projectData).eq('id', id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('projects').insert([projectData]);
        if (error) throw error;
      }

      navigate('/admin/projects');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setLoading(false);
      setUploading(false);
    }
  };

  const field = (key: keyof typeof formData, value: string) =>
    setFormData(prev => ({ ...prev, [key]: value }));

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
          <h2 className="text-xl font-medium text-black mb-2">Project Images</h2>
          <p className="text-sm text-zinc-500 mb-5">
            Upload up to 5 images. The <strong>first image</strong> is the featured/hero image shown prominently. Images 2–5 appear as side navigation thumbnails. Max 5MB each.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {images.map((slot, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                  {i === 0 ? 'Featured Image' : `Image ${i + 1}`}
                </span>
                <div className="relative border-2 border-dashed border-zinc-300 overflow-hidden bg-zinc-50 flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                  {slot.previewUrl ? (
                    <>
                      <img
                        src={slot.previewUrl}
                        alt={`Image ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-1.5 right-1.5 bg-red-600 text-white w-6 h-6 flex items-center justify-center hover:bg-red-700 z-10"
                      >
                        <X size={13} />
                      </button>
                      <label className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs text-center py-1 cursor-pointer hover:bg-black/70 transition-colors">
                        Change
                        <input
                          type="file"
                          accept="image/jpeg,image/jpg,image/png,image/webp"
                          onChange={(e) => handleImageChange(i, e)}
                          className="hidden"
                        />
                      </label>
                    </>
                  ) : (
                    <label className="flex flex-col items-center justify-center cursor-pointer w-full h-full p-3 text-center">
                      <span className="text-3xl text-zinc-300 mb-1 leading-none">+</span>
                      <span className="text-xs text-zinc-400">Click to upload</span>
                      <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={(e) => handleImageChange(i, e)}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-5">Basic Information</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  placeholder="e.g. Modern 4-Bedroom Family Home"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Project Type *
                </label>
                <select
                  value={formData.project_type}
                  onChange={(e) => field('project_type', e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black bg-white"
                >
                  <option value="new-construction">New Construction</option>
                  <option value="residential">Residential</option>
                  <option value="renovation">Renovation</option>
                  <option value="rebuild">Rebuild</option>
                  <option value="commercial">Commercial</option>
                  <option value="interior-design">Interior Design</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => field('location', e.target.value)}
                required
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="e.g. 14 Maple Grove, Doncaster East VIC 3109"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Short Description * <span className="font-normal text-zinc-500">(shown on property card)</span>
              </label>
              <textarea
                value={formData.short_description}
                onChange={(e) => field('short_description', e.target.value)}
                required
                rows={2}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black resize-none"
                placeholder="Brief summary shown on the project card"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Full Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => field('description', e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black resize-none"
                placeholder="Detailed description of the project..."
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-5">Property Specifications</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Bedrooms</label>
              <input
                type="number"
                min="0"
                value={formData.bedrooms}
                onChange={(e) => field('bedrooms', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="4"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Bathrooms</label>
              <input
                type="number"
                min="0"
                value={formData.bathrooms}
                onChange={(e) => field('bathrooms', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Garage Spaces</label>
              <input
                type="number"
                min="0"
                value={formData.garage_spaces}
                onChange={(e) => field('garage_spaces', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Home Size (m²)</label>
              <input
                type="number"
                min="0"
                value={formData.home_size_sqm}
                onChange={(e) => field('home_size_sqm', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Land Size (m²)</label>
              <input
                type="number"
                min="0"
                value={formData.land_size_sqm}
                onChange={(e) => field('land_size_sqm', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="648"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Year Completed</label>
              <input
                type="number"
                min="1990"
                max="2050"
                value={formData.completion_year}
                onChange={(e) => field('completion_year', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="2024"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Investment / Budget Range
              </label>
              <input
                type="text"
                value={formData.budget_range}
                onChange={(e) => field('budget_range', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="e.g. $850,000 - $950,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Property Features
                <span className="font-normal text-zinc-500 ml-1.5">(comma-separated)</span>
              </label>
              <input
                type="text"
                value={formData.property_features}
                onChange={(e) => field('property_features', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
                placeholder="Chef's Kitchen, Butler's Pantry, Alfresco Entertaining Area, Theatre Room"
              />
              <p className="text-xs text-zinc-500 mt-1">
                Each feature separated by a comma will appear as a tag on the property card
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-zinc-200 p-6">
          <h2 className="text-xl font-medium text-black mb-4">Publishing</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.is_published}
                  onChange={(e) => setFormData(prev => ({ ...prev, is_published: e.target.checked }))}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-black">Publish this project</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-black">Feature this project</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Display Order</label>
              <input
                type="number"
                value={formData.display_order}
                onChange={(e) => field('display_order', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black"
              />
              <p className="text-xs text-zinc-500 mt-1">Lower numbers appear first</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                URL Slug <span className="font-normal text-zinc-500">(auto-generated)</span>
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => field('slug', e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-black text-sm text-zinc-600"
              />
            </div>
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

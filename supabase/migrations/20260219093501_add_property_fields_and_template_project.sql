/*
  # Add Property-Specific Fields & Template Project

  1. New Columns on `projects` Table
    - `bedrooms` (integer) - Number of bedrooms
    - `bathrooms` (integer) - Number of bathrooms
    - `garage_spaces` (integer) - Number of garage/car spaces
    - `land_size_sqm` (integer) - Land size in square metres
    - `property_features` (jsonb) - Array of key property feature strings

  2. Template Project
    - Inserts one published, featured residential property (4-bed family home)
      as a reference template for the projects page, covering all available fields

  3. Notes
    - All new columns are optional (nullable) for backward compatibility
    - property_features defaults to empty array
    - Template project uses Pexels stock images as placeholders until real photos are uploaded
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'bedrooms'
  ) THEN
    ALTER TABLE projects ADD COLUMN bedrooms integer;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'bathrooms'
  ) THEN
    ALTER TABLE projects ADD COLUMN bathrooms integer;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'garage_spaces'
  ) THEN
    ALTER TABLE projects ADD COLUMN garage_spaces integer;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'land_size_sqm'
  ) THEN
    ALTER TABLE projects ADD COLUMN land_size_sqm integer;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'projects' AND column_name = 'property_features'
  ) THEN
    ALTER TABLE projects ADD COLUMN property_features jsonb DEFAULT '[]'::jsonb;
  END IF;
END $$;

INSERT INTO projects (
  title,
  slug,
  description,
  short_description,
  featured_image,
  gallery_images,
  location,
  project_type,
  completion_date,
  area_sqft,
  budget_range,
  client_name,
  bedrooms,
  bathrooms,
  garage_spaces,
  land_size_sqm,
  property_features,
  is_featured,
  is_published,
  display_order
)
SELECT
  'Modern 4-Bedroom Family Home',
  'modern-4-bedroom-family-home-doncaster',
  'This stunning custom-built family home in Doncaster East was designed to maximise natural light and seamless indoor-outdoor living. The open-plan ground floor features a chef''s kitchen with stone benchtops and a butler''s pantry, a spacious living and dining zone that flows to the alfresco entertaining area, and a dedicated theatre room. Upstairs, the master suite boasts a walk-in wardrobe and a luxurious ensuite complete with a freestanding bath. Three additional bedrooms each include built-in wardrobes and are served by a beautifully appointed main bathroom. The home also features a double lock-up garage with internal access, 6.6kW solar system, ducted heating and cooling throughout, and professionally landscaped gardens.',
  'A beautifully crafted 4-bedroom family home featuring open-plan living, a chef''s kitchen, alfresco entertaining, and premium finishes throughout in sought-after Doncaster East.',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
  '["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200"]'::jsonb,
  '14 Maple Grove, Doncaster East VIC 3109',
  'new-construction',
  '2024-09-15',
  3229,
  '$850,000 - $950,000',
  'Thompson Family',
  4,
  3,
  2,
  648,
  '["Chef''s Kitchen with Stone Benchtops","Butler''s Pantry","Alfresco Entertaining Area","Theatre Room","Master Suite with Walk-in Wardrobe","Ducted Heating & Cooling","6.6kW Solar System","Double Lock-Up Garage","Professional Landscaping","Smart Home Technology"]'::jsonb,
  true,
  true,
  1
WHERE NOT EXISTS (
  SELECT 1 FROM projects WHERE slug = 'modern-4-bedroom-family-home-doncaster'
);

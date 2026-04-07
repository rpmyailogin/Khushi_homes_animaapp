/*
  # Drop blogs table

  Removes the blogs table and all associated policies, indexes, and storage buckets
  as the blog feature is no longer needed.

  1. Changes
    - Drop all RLS policies on the blogs table
    - Drop the blogs table entirely (with CASCADE to remove dependent objects)
*/

DROP TABLE IF EXISTS blogs CASCADE;

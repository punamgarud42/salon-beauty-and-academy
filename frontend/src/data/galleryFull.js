import { getItem } from '../lib/storage';

/**
 * Full gallery — original icon illustrations on category-gradient tiles,
 * same approach as the homepage preview and service/course cards (see
 * data/gallery.js for the reasoning on avoiding stock/scraped photos).
 * `size` controls the masonry span in GalleryGrid ('tall' | 'wide' | null).
 */
const DEFAULT_GALLERY_ITEMS = [
  { id: 'gal-1', category: 'Bridal', icon: 'veil', title: 'Bridal Look, Reception Day', size: 'tall' },
  { id: 'gal-2', category: 'Hair', icon: 'scissors', title: 'Balayage Finish', size: null },
  { id: 'gal-3', category: 'Makeup', icon: 'lipstick', title: 'Editorial Glam', size: 'wide' },
  { id: 'gal-4', category: 'Skin', icon: 'leaf', title: 'Post-Facial Glow', size: null },
  { id: 'gal-5', category: 'Mehendi', icon: 'henna', title: 'Bridal Mehendi Detail', size: 'tall' },
  { id: 'gal-6', category: 'Academy', icon: 'graduationCap', title: 'Student Practicum Day', size: null },
  { id: 'gal-7', category: 'Hair', icon: 'scissors', title: 'Layered Cut', size: null },
  { id: 'gal-8', category: 'Makeup', icon: 'lipstick', title: 'Party-Ready Makeup', size: null },
  { id: 'gal-9', category: 'Bridal', icon: 'veil', title: 'Reception Saree Draping', size: 'wide' },
  { id: 'gal-10', category: 'Skin', icon: 'leaf', title: 'Express Clean-Up Result', size: null },
  { id: 'gal-11', category: 'Mehendi', icon: 'henna', title: 'Festive Occasion Mehendi', size: null },
  { id: 'gal-12', category: 'Academy', icon: 'graduationCap', title: 'Graduation Day', size: 'tall' },
];

export function getAllGalleryItems() {
  return getItem('galleryItems', DEFAULT_GALLERY_ITEMS);
}

export function getGalleryItemCategories() {
  return Array.from(new Set(getAllGalleryItems().map((g) => g.category)));
}

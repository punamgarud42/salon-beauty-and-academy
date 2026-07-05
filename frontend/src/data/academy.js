import { getItem } from '../lib/storage';

/**
 * Academy highlights shown on the homepage. Phase 4 builds the full course
 * catalogue; this is intentionally a short, homepage-sized list, kept
 * separate from the (larger) course list Phase 4 will introduce in
 * data/courses.js so this file doesn't need to change when that lands.
 */
const DEFAULT_HIGHLIGHTS = [
  { id: 'hl-certified', title: 'Government-Certified Courses', detail: 'Recognised diplomas in cosmetology and hairdressing.' },
  { id: 'hl-placement', title: '100% Placement Support', detail: 'Salon partnerships across the city for graduating students.' },
  { id: 'hl-handson', title: 'Hands-On, Small Batches', detail: 'Capped batch sizes so every student gets real practice time.' },
];

export function getAcademyHighlights() {
  return getItem('academyHighlights', DEFAULT_HIGHLIGHTS);
}

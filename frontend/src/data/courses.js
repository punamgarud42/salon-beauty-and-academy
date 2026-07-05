import { getItem } from '../lib/storage';

/**
 * Full course catalogue. `icon` keys into the shared SalonIcon set
 * (components/ui/SalonIcon.jsx) — same original line-art used for services,
 * no stock photography. getAllCourses() checks for an owner-edited override
 * in localStorage first, same pattern as data/services.js, so Phase 8's
 * admin dashboard can manage this list without any changes here later.
 */
const DEFAULT_COURSES = [
  {
    id: 'crs-hairdressing-diploma',
    name: 'Professional Hairdressing Diploma',
    description: 'A comprehensive diploma covering cutting, coloring, styling and salon management.',
    fee: 45000,
    duration: '6 months',
    mode: 'Full-time',
    category: 'Hair',
    icon: 'graduationCap',
    eligibility: '10th pass or above, no prior experience required.',
  },
  {
    id: 'crs-hair-fundamentals',
    name: 'Hair Cutting & Styling Fundamentals',
    description: 'A focused short course in modern cutting techniques and blow-dry styling.',
    fee: 12000,
    duration: '4 weeks',
    mode: 'Weekend',
    category: 'Hair',
    icon: 'scissors',
    eligibility: 'Open to beginners; no prior experience required.',
  },
  {
    id: 'crs-makeup-artistry',
    name: 'Advanced Makeup Artistry',
    description: 'HD, airbrush and editorial makeup techniques with a live-model practicum.',
    fee: 35000,
    duration: '3 months',
    mode: 'Weekend',
    category: 'Makeup',
    icon: 'lipstick',
    eligibility: '12th pass or above, basic makeup knowledge preferred.',
  },
  {
    id: 'crs-skincare-certificate',
    name: 'Certificate in Skincare & Facials',
    description: 'Skin analysis, facials and treatment protocols using professional-grade products.',
    fee: 18000,
    duration: '6 weeks',
    mode: 'Full-time',
    category: 'Skin',
    icon: 'leaf',
    eligibility: '10th pass or above, no prior experience required.',
  },
  {
    id: 'crs-mehendi-mastery',
    name: 'Bridal Mehendi Mastery',
    description: 'Traditional and Indo-Arabic bridal mehendi design, from fine lines to full hands.',
    fee: 12000,
    duration: '4 weeks',
    mode: 'Weekend',
    category: 'Mehendi',
    icon: 'henna',
    eligibility: 'Open to beginners; a steady hand and patience recommended.',
  },
  {
    id: 'crs-bridal-styling',
    name: 'Bridal Styling & Draping',
    description: 'Saree draping, bridal hairstyling and complete look coordination for wedding season.',
    fee: 22000,
    duration: '8 weeks',
    mode: 'Weekend',
    category: 'Bridal',
    icon: 'veil',
    eligibility: 'Basic hairstyling or makeup background preferred, not mandatory.',
  },
];

export function getAllCourses() {
  return getItem('courses', DEFAULT_COURSES);
}

export function getCourseById(id) {
  return getAllCourses().find((c) => c.id === id) ?? null;
}

export function getCourseCategories() {
  return Array.from(new Set(getAllCourses().map((c) => c.category)));
}

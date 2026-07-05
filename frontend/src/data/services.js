import { getItem } from '../lib/storage';

/**
 * Full service catalogue.
 *
 * `durationMinutes` (not just the display `duration` string) is what the
 * booking engine (lib/booking.js) uses to generate real time slots and
 * detect conflicts — keep both in sync if you edit an entry.
 *
 * `icon` keys into the original SalonIcon set — see components/ui/SalonIcon.jsx.
 *
 * getAllServices()/getFeaturedServices() both read the same 'services' key
 * in localStorage, so Phase 8's admin dashboard editing this list updates
 * both the full Services page and the homepage preview automatically.
 */
const DEFAULT_SERVICES = [
  {
    id: 'svc-hair-styling',
    name: 'Signature Hair Styling',
    description: 'Precision cuts and finishes tailored to your face shape and lifestyle.',
    price: 899,
    duration: '45 min',
    durationMinutes: 45,
    category: 'Hair',
    icon: 'scissors',
    featured: true,
  },
  {
    id: 'svc-hair-spa',
    name: 'Deep Repair Hair Spa',
    description: 'Keratin-infused spa treatment to restore shine and reduce breakage.',
    price: 1299,
    duration: '60 min',
    durationMinutes: 60,
    category: 'Hair',
    icon: 'scissors',
    featured: false,
  },
  {
    id: 'svc-hair-color',
    name: 'Global Hair Color',
    description: 'Ammonia-free global colour with a complimentary gloss finish.',
    price: 2499,
    duration: '90 min',
    durationMinutes: 90,
    category: 'Hair',
    icon: 'scissors',
    featured: false,
  },
  {
    id: 'svc-bridal-makeup',
    name: 'Bridal Makeup',
    description: 'HD and airbrush bridal looks with a full pre-wedding trial included.',
    price: 8999,
    duration: '3 hr',
    durationMinutes: 180,
    category: 'Makeup',
    icon: 'veil',
    featured: true,
  },
  {
    id: 'svc-party-makeup',
    name: 'Party Makeup',
    description: 'Event-ready makeup with lashes, contouring and long-wear setting.',
    price: 1999,
    duration: '75 min',
    durationMinutes: 75,
    category: 'Makeup',
    icon: 'lipstick',
    featured: false,
  },
  {
    id: 'svc-skin-glow',
    name: 'Radiance Facial',
    description: 'A deep-cleanse and brightening facial using cold-pressed botanical actives.',
    price: 1499,
    duration: '60 min',
    durationMinutes: 60,
    category: 'Skin',
    icon: 'leaf',
    featured: true,
  },
  {
    id: 'svc-skin-cleanup',
    name: 'Express Clean-Up',
    description: 'A quick refresh facial clean-up, ideal before an event or on a lunch break.',
    price: 699,
    duration: '30 min',
    durationMinutes: 30,
    category: 'Skin',
    icon: 'leaf',
    featured: false,
  },
  {
    id: 'svc-mehendi',
    name: 'Bridal Mehendi',
    description: 'Fine-line traditional and Indo-Arabic mehendi design, front and back.',
    price: 4999,
    duration: '2–4 hr',
    durationMinutes: 180,
    category: 'Mehendi',
    icon: 'henna',
    featured: true,
  },
  {
    id: 'svc-mehendi-simple',
    name: 'Simple Occasion Mehendi',
    description: 'Elegant one-hand or two-hand design for festivals and small events.',
    price: 799,
    duration: '45 min',
    durationMinutes: 45,
    category: 'Mehendi',
    icon: 'henna',
    featured: false,
  },
];

export function getAllServices() {
  return getItem('services', DEFAULT_SERVICES);
}

export function getFeaturedServices() {
  const all = getAllServices();
  const featured = all.filter((s) => s.featured);
  return (featured.length ? featured : all).slice(0, 4);
}

export function getServiceById(id) {
  return getAllServices().find((s) => s.id === id) ?? null;
}

export function getServiceCategories() {
  const all = getAllServices();
  return Array.from(new Set(all.map((s) => s.category)));
}

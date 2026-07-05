import { getItem } from '../lib/storage';

const DAY = 1000 * 60 * 60 * 24;

/**
 * Full offers catalogue. getFeaturedOffer() keeps the exact behavior the
 * Phase 2 homepage preview already relies on (first active offer) so that
 * component didn't need to change; getAllOffers()/getActiveOffers() are new
 * for the full Offers page (Phase 6).
 *
 * `endsAt` values are generated relative to "now" so the demo always shows
 * live countdowns regardless of when this is reviewed — replace with real
 * fixed dates for actual campaigns.
 */
const DEFAULT_OFFERS = [
  {
    id: 'offer-monsoon',
    title: 'Monsoon Glow Package',
    description: '20% off any facial + hair spa combo, this month only.',
    discountLabel: '20% OFF',
    code: 'MONSOON20',
    category: 'Skin',
    endsAt: new Date(Date.now() + DAY * 9).toISOString(),
  },
  {
    id: 'offer-bridal',
    title: 'Bridal Season Special',
    description: 'Book your bridal package early and save on makeup + mehendi combos.',
    discountLabel: '15% OFF',
    code: 'BRIDAL15',
    category: 'Bridal',
    endsAt: new Date(Date.now() + DAY * 20).toISOString(),
  },
  {
    id: 'offer-academy',
    title: 'Academy Early Bird',
    description: 'Enroll 2 weeks before batch start and get ₹2,000 off your course fee.',
    discountLabel: '₹2,000 OFF',
    code: 'EARLYBIRD',
    category: 'Academy',
    endsAt: new Date(Date.now() + DAY * 15).toISOString(),
  },
  {
    id: 'offer-mehendi',
    title: 'Festival Mehendi Offer',
    description: 'Flat discount on all festive mehendi bookings this season.',
    discountLabel: '10% OFF',
    code: 'FESTIVE10',
    category: 'Mehendi',
    endsAt: new Date(Date.now() + DAY * 5).toISOString(),
  },
  {
    id: 'offer-firstvisit',
    title: 'First Visit Welcome Offer',
    description: 'New clients get a flat discount on their first salon service.',
    discountLabel: '₹200 OFF',
    code: 'WELCOME200',
    category: 'Hair',
    endsAt: new Date(Date.now() + DAY * 30).toISOString(),
  },
];

export function getAllOffers() {
  return getItem('offers', DEFAULT_OFFERS);
}

export function getActiveOffers() {
  const now = Date.now();
  return getAllOffers().filter((o) => new Date(o.endsAt).getTime() > now);
}

export function getFeaturedOffer() {
  const active = getActiveOffers();
  return active[0] ?? getAllOffers()[0] ?? null;
}

export function getOfferCategories() {
  return Array.from(new Set(getAllOffers().map((o) => o.category)));
}

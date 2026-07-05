import { getItem } from '../lib/storage';

/**
 * Full testimonials list. getTestimonialPreview() keeps the same shape and
 * key ('testimonials' in localStorage) it always has — Phase 2's homepage
 * preview just takes the first 3 — so Phase 8's admin editing this list
 * updates both the homepage preview and the full Testimonials page (Phase 6)
 * automatically.
 */
const DEFAULT_TESTIMONIALS = [
  { id: 'tm-1', name: 'Ananya R.', role: 'Bridal client', rating: 5, quote: 'My bridal look lasted the entire wedding without a single touch-up. Genuinely the best decision I made.' },
  { id: 'tm-2', name: 'Priya D.', role: 'Regular client, 2 years', rating: 5, quote: 'The facials here changed my skin. The staff actually listen to what you want instead of upselling.' },
  { id: 'tm-3', name: 'Sneha K.', role: 'Academy graduate, 2024 batch', rating: 5, quote: 'I walked in knowing nothing about hairdressing and walked out with a job offer before graduation.' },
  { id: 'tm-4', name: 'Ritika M.', role: 'Hair color client', rating: 4, quote: 'Colour came out exactly like the reference photo I brought in. Small wait on a Saturday but worth it.' },
  { id: 'tm-5', name: 'Kavya S.', role: 'Mehendi client', rating: 5, quote: 'Booked bridal mehendi for my sister — the detailing was incredible and it stayed dark for over two weeks.' },
  { id: 'tm-6', name: 'Divya P.', role: 'Makeup Artistry student', rating: 5, quote: 'Small batch sizes meant I actually got hands-on time every single class, not just demonstrations.' },
  { id: 'tm-7', name: 'Meera J.', role: 'Party makeup client', rating: 4, quote: 'Great party makeup that held up through a long evening. Would book again for any event.' },
  { id: 'tm-8', name: 'Isha T.', role: 'Skin & facial client', rating: 5, quote: 'The skin consultation before my facial was more thorough than most dermatologist visits I\'ve had.' },
];

export function getAllTestimonials() {
  return getItem('testimonials', DEFAULT_TESTIMONIALS);
}

export function getTestimonialPreview() {
  return getAllTestimonials().slice(0, 3);
}

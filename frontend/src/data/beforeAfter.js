import { getItem } from '../lib/storage';

/**
 * Before/after pairs, one per category.
 *
 * IMPORTANT — these are illustrative placeholders (a muted "before" panel
 * vs a vibrant "after" panel, same icon), NOT real client photos. Two
 * honest reasons for that:
 *   1. This project has no real client photography to use.
 *   2. Before/after claims are sensitive — publishing a fake "result" photo
 *      would misrepresent real outcomes, even as a placeholder.
 *
 * The BeforeAfterSlider component itself is fully functional (drag/touch/
 * keyboard all work) — replace `beforeIcon`/`afterIcon` here with real
 * before/after photo URLs (with the client's consent) whenever you have
 * them, and the slider works identically with <img> content instead.
 */
const DEFAULT_BEFORE_AFTER = [
  { id: 'ba-hair', category: 'Hair', icon: 'scissors', label: 'Hair Color & Style Transformation' },
  { id: 'ba-skin', category: 'Skin', icon: 'leaf', label: 'Facial Treatment Glow-Up' },
  { id: 'ba-makeup', category: 'Makeup', icon: 'lipstick', label: 'Bridal Makeup Transformation' },
  { id: 'ba-mehendi', category: 'Mehendi', icon: 'henna', label: 'Mehendi Depth & Stain Development' },
];

export function getAllBeforeAfter() {
  return getItem('beforeAfter', DEFAULT_BEFORE_AFTER);
}

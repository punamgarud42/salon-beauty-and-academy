import Reveal from './Reveal.jsx';
import PromoBanner from '../offers/PromoBanner.jsx';
import { getFeaturedOffer } from '../../data/offers.js';
import './OffersPreview.css';

export default function OffersPreview() {
  const offer = getFeaturedOffer();
  if (!offer) return null;

  return (
    <section className="offers-preview">
      <div className="container">
        <Reveal direction="up">
          <PromoBanner offer={offer} />
        </Reveal>
      </div>
    </section>
  );
}

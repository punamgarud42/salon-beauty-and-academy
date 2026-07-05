import { useState } from 'react';
import SalonIcon from '../ui/SalonIcon.jsx';
import GalleryLightbox from './GalleryLightbox.jsx';
import Reveal from '../home/Reveal.jsx';
import { getCategoryGradient } from '../../lib/categoryTheme.js';
import './GalleryGrid.css';

export default function GalleryGrid({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => {
          const [c1, c2] = getCategoryGradient(item.category);
          return (
            <Reveal
              direction="up"
              delay={(i % 6) * 60}
              key={item.id}
              className={`gallery-grid__tile-wrap ${item.size ? `gallery-grid__tile-wrap--${item.size}` : ''}`}
            >
              <button
                className="gallery-grid__tile"
                style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                onClick={() => setActiveIndex(i)}
                aria-label={`View ${item.title}`}
              >
                <SalonIcon name={item.icon} size={40} className="gallery-grid__icon" />
                <span className="gallery-grid__label">{item.title}</span>
              </button>
            </Reveal>
          );
        })}
      </div>

      {activeIndex !== null && (
        <GalleryLightbox
          items={items}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}

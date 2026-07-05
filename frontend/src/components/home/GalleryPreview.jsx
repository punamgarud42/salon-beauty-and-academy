import Button from '../ui/Button.jsx';
import KumkumDivider from '../ui/KumkumDivider.jsx';
import SalonIcon from '../ui/SalonIcon.jsx';
import Reveal from './Reveal.jsx';
import { getGalleryPreview } from '../../data/gallery.js';
import { useLanguage } from '../../context/LanguageContext';
import './GalleryPreview.css';

/**
 * GalleryPreview — original icon illustrations on gradient tiles stand in
 * for real work photos (see data/gallery.js for why). Phase 5 builds the
 * full filterable masonry gallery with lightbox and before/after slider;
 * this section is the teaser.
 */
export default function GalleryPreview() {
  const { t } = useLanguage();
  const tiles = getGalleryPreview();

  return (
    <section className="gallery-preview">
      <div className="container">
        <Reveal direction="up">
          <p className="eyebrow">{t('gallerySection.eyebrow')}</p>
          <h2>{t('gallerySection.heading')}</h2>
          <KumkumDivider align="left" />
        </Reveal>

        <div className="gallery-preview__grid">
          {tiles.map((tile, i) => (
            <Reveal direction="up" delay={i * 60} key={tile.id} className="gallery-preview__tile-wrap">
              <div
                className="gallery-preview__tile"
                style={{ background: `linear-gradient(150deg, ${tile.accent[0]}, ${tile.accent[1]})` }}
              >
                <SalonIcon name={tile.icon} size={44} className="gallery-preview__tile-icon" />
                <span className="gallery-preview__tile-label">{tile.category}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" className="gallery-preview__footer">
          <Button variant="ghost" size="lg" href="#/gallery">{t('gallerySection.viewAll')}</Button>
        </Reveal>
      </div>
    </section>
  );
}

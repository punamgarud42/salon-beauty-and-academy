import Button from '../ui/Button.jsx';
import KumkumDivider from '../ui/KumkumDivider.jsx';
import Reveal from './Reveal.jsx';
import ServiceCard from '../services/ServiceCard.jsx';
import { getFeaturedServices } from '../../data/services.js';
import { useLanguage } from '../../context/LanguageContext';
import './FeaturedServices.css';

/**
 * FeaturedServices — homepage preview of the salon menu, using the same
 * ServiceCard the full Services page (Phase 3) renders, so a service looks
 * identical whether you meet it here or there.
 */
export default function FeaturedServices() {
  const { t } = useLanguage();
  const services = getFeaturedServices();

  return (
    <section className="featured-services">
      <div className="container">
        <Reveal direction="up">
          <p className="eyebrow">{t('servicesSection.eyebrow')}</p>
          <h2>{t('servicesSection.heading')}</h2>
          <KumkumDivider align="left" />
        </Reveal>

        <div className="featured-services__grid">
          {services.map((svc, i) => (
            <Reveal direction="up" delay={i * 90} key={svc.id}>
              <ServiceCard service={svc} />
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" className="featured-services__footer">
          <Button variant="ghost" size="lg" href="#/services">{t('servicesSection.viewAll')}</Button>
        </Reveal>
      </div>
    </section>
  );
}

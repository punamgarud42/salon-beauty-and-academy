import { useMemo, useState } from 'react';
import ServiceCard from '../components/services/ServiceCard.jsx';
import KumkumDivider from '../components/ui/KumkumDivider.jsx';
import FilterTabs from '../components/ui/FilterTabs.jsx';
import Reveal from '../components/home/Reveal.jsx';
import { getAllServices, getServiceCategories } from '../data/services.js';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

export default function Services() {
  const { t } = useLanguage();
  const allServices = useMemo(() => getAllServices(), []);
  const categories = useMemo(() => getServiceCategories(), []);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allServices
    : allServices.filter((s) => s.category === activeCategory);

  return (
    <section className="services-page container">
      <Reveal direction="up">
        <p className="eyebrow">{t('servicesPage.eyebrow')}</p>
        <h1>{t('servicesPage.heading')}</h1>
        <KumkumDivider align="left" />
        <p className="services-page__lede">
          {t('servicesPage.lede')}
        </p>
      </Reveal>

      <Reveal direction="up" delay={80}>
        <FilterTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
      </Reveal>

      <div className="services-page__grid">
        {filtered.map((svc, i) => (
          <Reveal direction="up" delay={i * 60} key={svc.id}>
            <ServiceCard service={svc} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="services-page__empty">{t('servicesPage.empty')}</p>
      )}
    </section>
  );
}

import { useMemo, useState } from 'react';
import PromoBanner from '../components/offers/PromoBanner.jsx';
import KumkumDivider from '../components/ui/KumkumDivider.jsx';
import FilterTabs from '../components/ui/FilterTabs.jsx';
import Reveal from '../components/home/Reveal.jsx';
import { getActiveOffers, getOfferCategories } from '../data/offers.js';
import { useLanguage } from '../context/LanguageContext';
import './Offers.css';

export default function Offers() {
  const { t } = useLanguage();
  const allOffers = useMemo(() => getActiveOffers(), []);
  const categories = useMemo(() => getOfferCategories(), []);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allOffers
    : allOffers.filter((o) => o.category === activeCategory);

  return (
    <section className="offers-page container">
      <Reveal direction="up">
        <p className="eyebrow">{t('offersPage.eyebrow')}</p>
        <h1>{t('offersPage.heading')}</h1>
        <KumkumDivider align="left" />
        <p className="offers-page__lede">
          {t('offersPage.lede')}
        </p>
      </Reveal>

      <Reveal direction="up" delay={60}>
        <FilterTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
      </Reveal>

      <div className="offers-page__list">
        {filtered.map((offer, i) => (
          <Reveal direction="up" delay={i * 80} key={offer.id}>
            <PromoBanner offer={offer} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="offers-page__empty">{t('offersPage.empty')}</p>
      )}
    </section>
  );
}

import Logo from '../../assets/logo.jsx';
import KumkumDivider from '../ui/KumkumDivider.jsx';
import SocialLinks from '../ui/SocialLinks.jsx';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

export default function Footer({ navItems }) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <div className="footer__brand">
            <Logo size={36} />
            <span className="footer__brand-name">{t('common.brand')}</span>
          </div>
          <p className="footer__about">{t('footer.about')}</p>
          <SocialLinks size={36} />
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">{t('footer.quickLinks')}</h4>
          <KumkumDivider width={70} />
          <ul className="footer__list">
            {navItems.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">{t('footer.contactUs')}</h4>
          <KumkumDivider width={70} />
          <ul className="footer__list footer__list--contact">
            <li>Shop 12, MG Road, Nagpur, Maharashtra</li>
            <li><a href="tel:+911234567890">+91 12345 67890</a></li>
            <li><a href="mailto:hello@verme.example">hello@verme.example</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">{t('footer.hours')}</h4>
          <KumkumDivider width={70} />
          <p className="footer__hours">{t('footer.hoursValue')}</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} {t('common.brand')}. {t('footer.rights')}</p>
      </div>
    </footer>
  );
}

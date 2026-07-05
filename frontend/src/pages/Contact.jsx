import ContactForm from '../components/contact/ContactForm.jsx';
import MapPlaceholder from '../components/contact/MapPlaceholder.jsx';
import SocialLinks from '../components/ui/SocialLinks.jsx';
import KumkumDivider from '../components/ui/KumkumDivider.jsx';
import Reveal from '../components/home/Reveal.jsx';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact-page container">
      <Reveal direction="up">
        <p className="eyebrow">{t('contactPage.eyebrow')}</p>
        <h1>{t('contactPage.heading')}</h1>
        <KumkumDivider align="left" />
        <p className="contact-page__lede">{t('contactPage.lede')}</p>
      </Reveal>

      <div className="contact-page__grid">
        <Reveal direction="left" className="contact-page__form-col">
          <ContactForm />
        </Reveal>

        <Reveal direction="right" className="contact-page__info-col">
          <MapPlaceholder address="Shop 12, MG Road, Nagpur, Maharashtra" />

          <div className="contact-page__details">
            <div>
              <span className="contact-page__details-label">{t('contactPage.phoneLabel')}</span>
              <a href="tel:+911234567890">+91 12345 67890</a>
            </div>
            <div>
              <span className="contact-page__details-label">{t('contactPage.emailLabel')}</span>
              <a href="mailto:hello@verme.example">hello@verme.example</a>
            </div>
            <div>
              <span className="contact-page__details-label">{t('footer.hours')}</span>
              <span>{t('footer.hoursValue')}</span>
            </div>
          </div>

          <div>
            <span className="contact-page__details-label">{t('contactPage.followLabel')}</span>
            <SocialLinks size={40} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

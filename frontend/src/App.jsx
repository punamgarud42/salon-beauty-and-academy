import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollProgressBar from './components/widgets/ScrollProgressBar.jsx';
import WhatsAppButton from './components/widgets/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Booking from './pages/Booking.jsx';
import Academy from './pages/Academy.jsx';
import Enrollment from './pages/Enrollment.jsx';
import Gallery from './pages/Gallery.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Offers from './pages/Offers.jsx';
import Contact from './pages/Contact.jsx';
import { useHashRoute } from './router/useHashRoute.js';

/**
 * buildRoutes — maps a hash path to a page component. Every nav
 * destination is now real (Phases 3–7) — no more "coming soon" placeholders
 * needed. ComingSoon.jsx is kept around as a component in case a future
 * phase needs it again.
 */
function buildRoutes() {
  return {
    '/': { component: Home },
    '/services': { component: Services },
    '/book': { component: Booking },
    '/academy': { component: Academy },
    '/enroll': { component: Enrollment },
    '/gallery': { component: Gallery },
    '/testimonials': { component: Testimonials },
    '/offers': { component: Offers },
    '/contact': { component: Contact },
  };
}

function AppShell() {
  const { t } = useLanguage();
  const { path } = useHashRoute();

  const navItems = [
    { href: '#/', label: t('nav.home') },
    { href: '#/services', label: t('nav.services') },
    { href: '#/academy', label: t('nav.academy') },
    { href: '#/gallery', label: t('nav.gallery') },
    { href: '#/testimonials', label: t('nav.testimonials') },
    { href: '#/offers', label: t('nav.offers') },
    { href: '#/contact', label: t('nav.contact') },
  ];

  const routes = buildRoutes();
  const route = routes[path] ?? routes['/'];
  const PageComponent = route.component;

  return (
    <>
      <ScrollProgressBar />
      <Navbar navItems={navItems} />
      <main>
        <PageComponent {...(route.props ?? {})} />
      </main>
      <Footer navItems={navItems} />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

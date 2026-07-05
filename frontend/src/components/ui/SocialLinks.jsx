import { SOCIALS } from '../../data/socials.js';
import './SocialLinks.css';

export default function SocialLinks({ size = 36 }) {
  return (
    <div className="social-links">
      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="social-links__link"
          style={{ width: size, height: size }}
        >
          <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={s.icon} />
          </svg>
        </a>
      ))}
    </div>
  );
}

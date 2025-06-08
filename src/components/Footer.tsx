// src/components/Footer.tsx
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // İkonları import ediyoruz

export default function Footer() {
  const socialLinks = [
    { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: 'https://github.com/BILDEK/mini-e-ticaret', icon: FaGithub, label: 'GitHub' }, // Kendi GitHub linkini ekleyebilirsin
  ];

  const quickLinks = [
    { href: '/about', label: 'Hakkımızda' },
    { href: '/contact', label: 'İletişim' },
    { href: '/faq', label: 'Sıkça Sorulan Sorular' },
    { href: '/privacy-policy', label: 'Gizlilik Politikası' },
    { href: '/terms-of-service', label: 'Hizmet Şartları' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Şirket Bilgileri / Logo */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
              MiniEcom
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Kaliteli ürünler, harika fiyatlar. Müşteri memnuniyeti önceliğimizdir.
            </p>
          </div>

          {/* Hızlı Erişim Linkleri */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Hızlı Erişim</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Bize Ulaşın</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@miniecom.com" className="hover:text-yellow-400 transition-colors">
                  info@miniecom.com
                </a>
              </li>
              <li>
                <a href="tel:+905551234567" className="hover:text-yellow-400 transition-colors">
                  +90 (555) 123 45 67
                </a>
              </li>
              <li className="text-gray-400">
                123 E-ticaret Sokak, Mağaza Apt. No:5, <br />
                İstanbul, Türkiye
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Bizi Takip Edin</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-2xl"
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              En son haberler ve kampanyalar için sosyal medyada bize katılın!
            </p>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MiniEcom. Tüm hakları saklıdır.
            {' '}
            <Link href="https://github.com/BILDEK" className="hover:text-yellow-400 transition-colors"> {/* Kendi GitHub profilini ekleyebilirsin */}
              BILDEK
            </Link>
            {' '}
            tarafından geliştirildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
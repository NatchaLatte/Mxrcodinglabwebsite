import { Code2, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-red-500" />
              <span className="text-xl">MXR Coding Lab</span>
            </div>
            <p className="text-gray-400">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-red-400">{t.footer.courses}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#courses" className="hover:text-white transition-colors">{t.courses.scratch.title}</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">{t.courses.roblox.title}</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">{t.courses.python.title}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-red-400">{t.footer.about}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">{t.footer.aboutItems.why}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.footer.aboutItems.contact}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.aboutItems.privacy}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.aboutItems.terms}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-red-400">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

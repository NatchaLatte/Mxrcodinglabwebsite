import { Code2, Rocket, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-red-700 dark:from-red-800 dark:via-red-900 dark:to-red-950">
      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-white" />
            <span className="text-white text-2xl">MXR Coding Lab</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-yellow-300 transition-colors"
            >
              {t.nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('courses')} 
              className="text-white hover:text-yellow-300 transition-colors"
            >
              {t.nav.courses}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-yellow-300 transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <span className="text-yellow-300">{t.hero.subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-6xl">
              {t.hero.title1}
              <br />
              <span className="text-yellow-300">{t.hero.title2}</span>
            </h1>
            <p className="text-xl text-red-100 dark:text-red-200">
              {t.hero.description}
              <br />
              {t.hero.description2}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-red-900 hover:bg-yellow-300"
                onClick={() => scrollToSection('courses')}
              >
                <Rocket className="w-5 h-5 mr-2" />
                {t.hero.viewCourses}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-red-600"
                onClick={() => scrollToSection('contact')}
              >
                {t.hero.register}
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl">500+</div>
                <div className="text-red-100 dark:text-red-200">{t.hero.stats.students}</div>
              </div>
              <div>
                <div className="text-3xl">3</div>
                <div className="text-red-100 dark:text-red-200">{t.hero.stats.courses}</div>
              </div>
              <div>
                <div className="text-3xl">95%</div>
                <div className="text-red-100 dark:text-red-200">{t.hero.stats.satisfaction}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1674049406486-4b1f6e1845fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY29kaW5nJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYyNjk4NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Kids coding"
                className="w-full h-auto"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-red-900 px-6 py-3 rounded-full shadow-lg animate-bounce">
              {t.hero.registerNow}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
}

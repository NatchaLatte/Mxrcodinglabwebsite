import { Target, Users, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Target,
      title: t.about.features.f1.title,
      description: t.about.features.f1.desc,
    },
    {
      icon: Users,
      title: t.about.features.f2.title,
      description: t.about.features.f2.desc,
    },
    {
      icon: Award,
      title: t.about.features.f3.title,
      description: t.about.features.f3.desc,
    },
    {
      icon: Heart,
      title: t.about.features.f4.title,
      description: t.about.features.f4.desc,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-red-50 dark:to-red-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-red-900 dark:text-red-100 mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1636772523547-5577d04e8dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHByb2dyYW1taW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MjczNjA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Children programming classroom"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl text-red-900 dark:text-red-100">
              {t.about.whyCoding}
            </h3>
            <p className="text-lg text-foreground">
              {t.about.whyCodingDesc}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-600 dark:bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <span className="text-foreground">{t.about.benefits.b1}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-600 dark:bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <span className="text-foreground">{t.about.benefits.b2}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-600 dark:bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <span className="text-foreground">{t.about.benefits.b3}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-600 dark:bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <span className="text-foreground">{t.about.benefits.b4}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600 dark:border-red-500"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 dark:from-red-500 dark:to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl text-red-900 dark:text-red-100 mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Users, Clock, Trophy, Laptop, GraduationCap, Smile } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function WhyChooseUs() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: Users,
      title: t.why.benefits.b1.title,
      description: t.why.benefits.b1.desc,
      color: 'bg-red-500',
    },
    {
      icon: Clock,
      title: t.why.benefits.b2.title,
      description: t.why.benefits.b2.desc,
      color: 'bg-orange-500',
    },
    {
      icon: Trophy,
      title: t.why.benefits.b3.title,
      description: t.why.benefits.b3.desc,
      color: 'bg-pink-500',
    },
    {
      icon: Laptop,
      title: t.why.benefits.b4.title,
      description: t.why.benefits.b4.desc,
      color: 'bg-red-600',
    },
    {
      icon: GraduationCap,
      title: t.why.benefits.b5.title,
      description: t.why.benefits.b5.desc,
      color: 'bg-orange-600',
    },
    {
      icon: Smile,
      title: t.why.benefits.b6.title,
      description: t.why.benefits.b6.desc,
      color: 'bg-red-700',
    },
  ];

  const testimonials = [
    {
      text: t.why.testimonials.t1.text,
      author: t.why.testimonials.t1.author,
    },
    {
      text: t.why.testimonials.t2.text,
      author: t.why.testimonials.t2.author,
    },
    {
      text: t.why.testimonials.t3.text,
      author: t.why.testimonials.t3.author,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-950 dark:from-red-950 dark:via-red-900 dark:to-black text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            {t.why.title}
          </h2>
          <p className="text-xl text-red-100 dark:text-red-200 max-w-3xl mx-auto">
            {t.why.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 border border-white/20"
            >
              <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3">{benefit.title}</h3>
              <p className="text-red-100 dark:text-red-200">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <h3 className="text-3xl text-center mb-12">{t.why.testimonials.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 dark:bg-white/5 p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="mb-4 text-red-100 dark:text-red-200">
                  "{testimonial.text}"
                </p>
                <p className="text-red-200 dark:text-red-300">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

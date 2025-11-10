import { Palette, Gamepad2, Code } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

export function Courses() {
  const { t } = useLanguage();
  
  const courses = [
    {
      title: t.courses.scratch.title,
      icon: Palette,
      age: `7-12 ${t.courses.ageRange}`,
      level: t.courses.levels.beginner,
      color: 'from-orange-500 to-red-500',
      description: t.courses.scratch.desc,
      features: t.courses.scratch.features,
      duration: `12 ${t.courses.duration}`,
      sessions: `24 ${t.courses.sessions}`,
    },
    {
      title: t.courses.roblox.title,
      icon: Gamepad2,
      age: `10-15 ${t.courses.ageRange}`,
      level: t.courses.levels.intermediate,
      color: 'from-red-500 to-pink-500',
      description: t.courses.roblox.desc,
      features: t.courses.roblox.features,
      duration: `16 ${t.courses.duration}`,
      sessions: `32 ${t.courses.sessions}`,
    },
    {
      title: t.courses.python.title,
      icon: Code,
      age: `12-17 ${t.courses.ageRange}`,
      level: t.courses.levels.advanced,
      color: 'from-red-600 to-red-800',
      description: t.courses.python.desc,
      features: t.courses.python.features,
      duration: `20 ${t.courses.duration}`,
      sessions: `40 ${t.courses.sessions}`,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-red-900 dark:text-red-100 mb-4">
            {t.courses.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.courses.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-red-300 dark:hover:border-red-700">
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-4`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {course.description}
                </CardDescription>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary">{course.age}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>⏱️ {course.duration}</span>
                    <span>📚 {course.sessions}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90`}
                  onClick={scrollToContact}
                >
                  {t.courses.learnMore}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Hero />
          <About />
          <Courses />
          <WhyChooseUs />
          <ContactForm />
          <Footer />
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

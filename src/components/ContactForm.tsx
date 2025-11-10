import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactForm() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.contact.form.success, {
      description: t.contact.form.successDesc,
    });
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      phone: '',
      email: '',
      course: '',
      message: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-red-50 dark:from-red-950/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-red-900 dark:text-red-100 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-red-900 dark:text-red-100 mb-6">{t.contact.info.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-md border border-border">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">{t.contact.info.phone}</div>
                    <div className="text-lg">02-XXX-XXXX, 098-XXX-XXXX</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-md border border-border">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">{t.contact.info.email}</div>
                    <div className="text-lg">info@mxrcodinglab.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-md border border-border">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">{t.contact.info.address}</div>
                    <div className="text-lg whitespace-pre-line">
                      {t.contact.info.addressText}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-orange-600 dark:from-red-800 dark:to-orange-800 text-white p-8 rounded-2xl">
              <h4 className="text-2xl mb-4">{t.contact.info.hours}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{t.contact.info.weekday}</span>
                  <span>{t.contact.info.weekdayTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.info.weekend}</span>
                  <span>{t.contact.info.weekendTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="parentName">{t.contact.form.parentName} *</Label>
                <Input
                  id="parentName"
                  required
                  placeholder={t.contact.form.parentNamePlaceholder}
                  value={formData.parentName}
                  onChange={(e) => handleChange('parentName', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="childName">{t.contact.form.childName} *</Label>
                  <Input
                    id="childName"
                    required
                    placeholder={t.contact.form.childNamePlaceholder}
                    value={formData.childName}
                    onChange={(e) => handleChange('childName', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="childAge">{t.contact.form.age} *</Label>
                  <Input
                    id="childAge"
                    type="number"
                    required
                    placeholder={t.contact.form.agePlaceholder}
                    min="7"
                    max="17"
                    value={formData.childAge}
                    onChange={(e) => handleChange('childAge', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">{t.contact.form.phone} *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder={t.contact.form.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">{t.contact.form.email} *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="course">{t.contact.form.course} *</Label>
                <Select value={formData.course} onValueChange={(value) => handleChange('course', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder={t.contact.form.coursePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scratch">{t.contact.form.courseOptions.scratch}</SelectItem>
                    <SelectItem value="roblox">{t.contact.form.courseOptions.roblox}</SelectItem>
                    <SelectItem value="python">{t.contact.form.courseOptions.python}</SelectItem>
                    <SelectItem value="consult">{t.contact.form.courseOptions.consult}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">{t.contact.form.message}</Label>
                <Textarea
                  id="message"
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="mt-2"
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-700 dark:to-orange-700 hover:opacity-90" size="lg">
                <Send className="w-5 h-5 mr-2" />
                {t.contact.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

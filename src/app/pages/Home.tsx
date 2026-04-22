import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Shield, MapPin, Clock, Users, Star } from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      name: language === 'fr' ? 'Marie L.' : 'Marie L.',
      rating: 5,
      text: language === 'fr'
        ? 'CarePath m\'a aidée à trouver une clinique sans rendez-vous près de chez moi en quelques minutes. Très utile!'
        : 'CarePath helped me find a walk-in clinic near me in minutes. Very helpful!',
    },
    {
      name: language === 'fr' ? 'Jean P.' : 'Jean P.',
      rating: 5,
      text: language === 'fr'
        ? 'Enfin un outil clair pour naviguer le système de santé. Les temps d\'attente en temps réel sont parfaits.'
        : 'Finally a clear tool to navigate the health system. Real-time wait times are perfect.',
    },
    {
      name: language === 'fr' ? 'Sarah K.' : 'Sarah K.',
      rating: 5,
      text: language === 'fr'
        ? 'J\'ai trouvé un médecin de famille grâce à CarePath après 2 ans de recherche. Merci!'
        : 'I found a family doctor through CarePath after 2 years of searching. Thank you!',
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: language === 'fr' ? 'Où aller' : 'Where to Go',
      description: language === 'fr'
        ? 'Recommandations personnalisées selon votre situation'
        : 'Personalized recommendations based on your situation',
    },
    {
      icon: Clock,
      title: language === 'fr' ? 'Temps d\'attente' : 'Wait Times',
      description: language === 'fr'
        ? 'Estimations en temps réel pour les urgences'
        : 'Real-time estimates for emergency rooms',
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Médecin de famille' : 'Family Doctor',
      description: language === 'fr'
        ? 'Trouvez des cliniques qui acceptent de nouveaux patients'
        : 'Find clinics accepting new patients',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('home.title')}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-emerald-50">
              {t('home.subtitle')}
            </p>
            <Link
              to="/describe"
              className="inline-flex items-center space-x-2 bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <span className="text-lg font-semibold">{t('home.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="mt-8 flex items-center justify-center space-x-2 text-emerald-50">
              <Shield className="w-5 h-5" />
              <p className="text-sm">{t('home.disclaimer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-emerald-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-900">{feature.title}</h3>
                <p className="text-emerald-700 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-emerald-900">
            {t('home.testimonials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-emerald-100 shadow-md"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-emerald-700 mb-4 leading-relaxed">{testimonial.text}</p>
                <p className="font-semibold text-emerald-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === 'fr'
              ? 'Prêt à commencer votre parcours santé?'
              : 'Ready to start your health journey?'}
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            {language === 'fr'
              ? 'Obtenez des recommandations personnalisées en quelques minutes.'
              : 'Get personalized recommendations in minutes.'}
          </p>
          <Link
            to="/describe"
            className="inline-flex items-center space-x-2 bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all transform hover:scale-105"
          >
            <span className="text-lg font-semibold">{t('home.cta')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Send } from 'lucide-react';

export default function Testimonials() {
  const { t, language } = useLanguage();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');

  const testimonials = [
    {
      name: 'Marie Laurent',
      rating: 5,
      date: language === 'fr' ? 'Il y a 2 jours' : '2 days ago',
      text: language === 'fr'
        ? 'CarePath m\'a sauvé du stress! J\'ai pu trouver une clinique sans rendez-vous en quelques minutes. L\'interface est super intuitive et les informations sont à jour.'
        : 'CarePath saved me from stress! I was able to find a walk-in clinic in minutes. The interface is super intuitive and the information is up to date.',
    },
    {
      name: 'Jean-Paul Tremblay',
      rating: 5,
      date: language === 'fr' ? 'Il y a 1 semaine' : '1 week ago',
      text: language === 'fr'
        ? 'Enfin un outil clair pour naviguer le système de santé! Les temps d\'attente en temps réel sont un vrai plus. Je recommande à tout le monde.'
        : 'Finally a clear tool to navigate the health system! Real-time wait times are a real plus. I recommend it to everyone.',
    },
    {
      name: 'Sarah Kim',
      rating: 5,
      date: language === 'fr' ? 'Il y a 2 semaines' : '2 weeks ago',
      text: language === 'fr'
        ? 'J\'ai trouvé un médecin de famille après 2 ans de recherche grâce à CarePath. Le suivi de mes demandes administratives est aussi très pratique.'
        : 'I found a family doctor after 2 years of searching thanks to CarePath. Tracking my administrative requests is also very practical.',
    },
    {
      name: 'Ahmed Hassan',
      rating: 4,
      date: language === 'fr' ? 'Il y a 3 semaines' : '3 weeks ago',
      text: language === 'fr'
        ? 'Très utile pour trouver où aller selon ma situation. Le mode bilingue est parfait pour moi et ma famille. Quelques petits bugs mais rien de grave.'
        : 'Very useful for finding where to go based on my situation. Bilingual mode is perfect for me and my family. A few minor bugs but nothing serious.',
    },
    {
      name: 'Linda Chen',
      rating: 5,
      date: language === 'fr' ? 'Il y a 1 mois' : '1 month ago',
      text: language === 'fr'
        ? 'L\'application m\'a aidée à naviguer le système de santé quand je suis arrivée au Canada. Les explications sont claires et rassurantes.'
        : 'The app helped me navigate the health system when I arrived in Canada. The explanations are clear and reassuring.',
    },
    {
      name: 'Robert Dubois',
      rating: 5,
      date: language === 'fr' ? 'Il y a 1 mois' : '1 month ago',
      text: language === 'fr'
        ? 'Excellent service! J\'ai pu prendre un rendez-vous rapidement et suivre mes documents médicaux au même endroit. Très bien pensé.'
        : 'Excellent service! I was able to make an appointment quickly and track my medical documents in one place. Very well thought out.',
    },
  ];

  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'fr' ? 'Merci pour votre avis!' : 'Thank you for your review!');
    setRating(0);
    setReview('');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{t('testimonials.title')}</h1>
          <p className="text-lg text-gray-600">{t('testimonials.subtitle')}</p>
        </div>

        {/* Average Rating */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 mb-12 border border-blue-200 text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('testimonials.rating')}</h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-5xl font-bold text-gray-900">{averageRating}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.round(parseFloat(averageRating))
                      ? 'text-yellow-500 fill-yellow-500'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600">
            {language === 'fr' ? 'Basé sur' : 'Based on'} {testimonials.length} {language === 'fr' ? 'avis' : 'reviews'}
          </p>
        </div>

        {/* Leave a Review */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-blue-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('testimonials.leave')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">
                {language === 'fr' ? 'Votre note' : 'Your Rating'}
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 ${
                        star <= (hoverRating || rating)
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-gray-900">
                {language === 'fr' ? 'Votre avis' : 'Your Review'}
              </label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder={language === 'fr'
                  ? 'Partagez votre expérience avec CarePath...'
                  : 'Share your experience with CarePath...'}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>

            <button
              type="submit"
              disabled={!rating || !review}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>{language === 'fr' ? 'Envoyer mon avis' : 'Submit Review'}</span>
            </button>
          </form>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:border-blue-300 transition-all"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router';
import { Check, Zap, Crown, Star } from 'lucide-react';

export default function Pricing() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 4.99,
      credits: 50,
      icon: Zap,
      color: 'blue',
      features: [
        language === 'fr' ? '50 crédits' : '50 credits',
        language === 'fr' ? 'Accès aux services de base' : 'Access to basic services',
        language === 'fr' ? 'Support par email' : 'Email support',
        language === 'fr' ? 'Recherche de médecin' : 'Doctor search',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 9.99,
      credits: 150,
      icon: Star,
      color: 'purple',
      popular: true,
      features: [
        language === 'fr' ? '150 crédits' : '150 credits',
        language === 'fr' ? 'Toutes les fonctionnalités Basic' : 'All Basic features',
        language === 'fr' ? 'Rappels automatiques' : 'Automatic reminders',
        language === 'fr' ? 'Stockage de documents' : 'Document storage',
        language === 'fr' ? 'Support prioritaire' : 'Priority support',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 19.99,
      credits: 500,
      icon: Crown,
      color: 'yellow',
      features: [
        language === 'fr' ? '500 crédits' : '500 credits',
        language === 'fr' ? 'Toutes les fonctionnalités Pro' : 'All Pro features',
        language === 'fr' ? 'Téléconsultations illimitées' : 'Unlimited teleconsultations',
        language === 'fr' ? 'Gestionnaire de santé dédié' : 'Dedicated health manager',
        language === 'fr' ? 'Support 24/7' : '24/7 support',
        language === 'fr' ? 'Analyses de santé avancées' : 'Advanced health analytics',
      ],
    },
  ];

  const handleSelectPlan = (plan: typeof plans[0]) => {
    // Only pass serializable data to navigate state
    navigate('/payment', {
      state: {
        plan: {
          id: plan.id,
          name: plan.name,
          price: plan.price,
          credits: plan.credits,
          color: plan.color,
        }
      }
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            {language === 'fr' ? 'Choisissez votre forfait' : 'Choose Your Plan'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'fr'
              ? 'Achetez des crédits pour accéder à toutes les fonctionnalités de CarePath'
              : 'Purchase credits to access all CarePath features'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-xl p-8 border-2 transition-all hover:scale-105 ${
                  plan.popular
                    ? 'border-purple-500 ring-4 ring-purple-100'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {language === 'fr' ? 'Plus populaire' : 'Most Popular'}
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-${plan.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-10 h-10 text-${plan.color}-600`} />
                </div>

                <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}€</span>
                  <span className="text-gray-600 ml-2">{language === 'fr' ? '/ mois' : '/ month'}</span>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 mb-6 text-center border border-blue-200">
                  <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                    {plan.credits}
                  </p>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' ? 'crédits' : 'credits'}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700'
                  }`}
                >
                  {language === 'fr' ? 'Acheter' : 'Purchase'}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            {language === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'fr' ? 'Comment fonctionnent les crédits ?' : 'How do credits work?'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Les crédits vous permettent d\'accéder aux services premium comme les téléconsultations, le stockage de documents, et plus encore.'
                  : 'Credits allow you to access premium services like teleconsultations, document storage, and more.'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'fr' ? 'Les crédits expirent-ils ?' : 'Do credits expire?'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Non, vos crédits n\'expirent jamais. Utilisez-les à votre rythme.'
                  : 'No, your credits never expire. Use them at your own pace.'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'fr' ? 'Puis-je changer de forfait ?' : 'Can I change plans?'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Oui, vous pouvez acheter des crédits supplémentaires à tout moment.'
                  : 'Yes, you can purchase additional credits at any time.'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'fr' ? 'Moyens de paiement acceptés ?' : 'Accepted payment methods?'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Carte bancaire, Apple Pay, Google Pay, et PayPal.'
                  : 'Credit card, Apple Pay, Google Pay, and PayPal.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

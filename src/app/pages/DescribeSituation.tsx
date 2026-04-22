import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function DescribeSituation() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const [formData, setFormData] = useState({
    language: 'en',
    postalCode: '',
    age: '',
    healthCard: '',
    symptoms: '',
    urgency: 'medium',
    hasDoctor: '',
  });

  const questions = [
    {
      id: 'language',
      label: t('describe.language'),
      type: 'select',
      options: [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Français' },
      ],
    },
    {
      id: 'postalCode',
      label: t('describe.postalCode'),
      type: 'text',
      placeholder: 'K1A 0A9',
    },
    {
      id: 'age',
      label: t('describe.age'),
      type: 'number',
      placeholder: '25',
    },
    {
      id: 'healthCard',
      label: t('describe.healthCard'),
      type: 'radio',
      options: [
        { value: 'yes', label: t('describe.yes') },
        { value: 'no', label: t('describe.no') },
      ],
    },
    {
      id: 'symptoms',
      label: t('describe.symptoms'),
      type: 'textarea',
      placeholder: language === 'fr'
        ? 'Décrivez ce qui vous inquiète...'
        : 'Describe what concerns you...',
    },
    {
      id: 'urgency',
      label: t('describe.urgency'),
      type: 'radio',
      options: [
        { value: 'low', label: t('describe.urgency.low') },
        { value: 'medium', label: t('describe.urgency.medium') },
        { value: 'high', label: t('describe.urgency.high') },
      ],
    },
    {
      id: 'hasDoctor',
      label: t('describe.hasDoctor'),
      type: 'radio',
      options: [
        { value: 'yes', label: t('describe.yes') },
        { value: 'no', label: t('describe.no') },
      ],
    },
  ];

  const currentQuestion = questions[step];

  const handleInputChange = (value: string) => {
    setFormData({
      ...formData,
      [currentQuestion.id]: value,
    });
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowRecommendation(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const getRecommendation = () => {
    if (formData.urgency === 'high') {
      return {
        type: 'emergency',
        message: language === 'fr'
          ? 'Nous vous recommandons de consulter aux urgences ou d\'appeler le 911 si la situation est critique.'
          : 'We recommend visiting the emergency room or calling 911 if the situation is critical.',
        icon: AlertCircle,
        color: 'red',
      };
    } else if (formData.urgency === 'medium') {
      return {
        type: 'walkin',
        message: language === 'fr'
          ? 'Une clinique sans rendez-vous serait appropriée pour votre situation.'
          : 'A walk-in clinic would be appropriate for your situation.',
        icon: CheckCircle,
        color: 'blue',
      };
    } else {
      return {
        type: 'telehealth',
        message: language === 'fr'
          ? 'Une téléconsultation ou un appel au 811 pourrait répondre à vos besoins.'
          : 'A telehealth consultation or a call to 811 could address your needs.',
        icon: CheckCircle,
        color: 'green',
      };
    }
  };

  if (showRecommendation) {
    const recommendation = getRecommendation();
    const Icon = recommendation.icon;

    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
            <div className={`w-16 h-16 bg-${recommendation.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <Icon className={`w-10 h-10 text-${recommendation.color}-600`} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">
              {language === 'fr' ? 'Recommandation' : 'Recommendation'}
            </h2>
            <p className="text-lg text-center text-gray-700 mb-8 leading-relaxed">
              {recommendation.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/where-to-go')}
                className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all"
              >
                {language === 'fr' ? 'Voir les options' : 'View Options'}
              </button>
              <button
                onClick={() => {
                  setShowRecommendation(false);
                  setStep(0);
                }}
                className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors"
              >
                {language === 'fr' ? 'Recommencer' : 'Start Over'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{t('describe.title')}</h1>
          <p className="text-lg text-gray-600">{t('describe.subtitle')}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              {language === 'fr' ? 'Question' : 'Question'} {step + 1} / {questions.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(((step + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
          <label className="block text-xl font-semibold mb-6 text-gray-900">
            {currentQuestion.label}
          </label>

          {currentQuestion.type === 'text' || currentQuestion.type === 'number' ? (
            <input
              type={currentQuestion.type}
              value={formData[currentQuestion.id as keyof typeof formData]}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            />
          ) : currentQuestion.type === 'textarea' ? (
            <textarea
              value={formData[currentQuestion.id as keyof typeof formData]}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={currentQuestion.placeholder}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            />
          ) : currentQuestion.type === 'select' ? (
            <select
              value={formData[currentQuestion.id as keyof typeof formData]}
              onChange={(e) => handleInputChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            >
              {currentQuestion.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : currentQuestion.type === 'radio' ? (
            <div className="space-y-3">
              {currentQuestion.options?.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer hover:bg-blue-50 transition-colors"
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option.value}
                    checked={formData[currentQuestion.id as keyof typeof formData] === option.value}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-gray-900">{option.label}</span>
                </label>
              ))}
            </div>
          ) : null}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 0 && (
              <button
                onClick={handleBack}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
              >
                {t('common.back')}
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all"
            >
              {step === questions.length - 1 ? t('describe.submit') : t('common.next')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

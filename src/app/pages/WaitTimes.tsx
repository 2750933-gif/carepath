import { useLanguage } from '../context/LanguageContext';
import { Clock, MapPin, ExternalLink } from 'lucide-react';

export default function WaitTimes() {
  const { t, language } = useLanguage();

  const hospitals = [
    {
      name: language === 'fr' ? 'Hôpital d\'Ottawa - Campus Général' : 'The Ottawa Hospital - General Campus',
      address: '501 Smyth Rd, Ottawa',
      waitTime: '2h 15min',
      waitRange: '1h 45min - 3h',
      updated: language === 'fr' ? 'Il y a 15 minutes' : '15 minutes ago',
      severity: 'medium',
    },
    {
      name: language === 'fr' ? 'Hôpital d\'Ottawa - Campus Civic' : 'The Ottawa Hospital - Civic Campus',
      address: '1053 Carling Ave, Ottawa',
      waitTime: '1h 45min',
      waitRange: '1h 15min - 2h 30min',
      updated: language === 'fr' ? 'Il y a 8 minutes' : '8 minutes ago',
      severity: 'low',
    },
    {
      name: language === 'fr' ? 'Hôpital Queensway Carleton' : 'Queensway Carleton Hospital',
      address: '3045 Baseline Rd, Ottawa',
      waitTime: '3h 30min',
      waitRange: '2h 45min - 4h 15min',
      updated: language === 'fr' ? 'Il y a 22 minutes' : '22 minutes ago',
      severity: 'high',
    },
    {
      name: language === 'fr' ? 'Hôpital Montfort' : 'Montfort Hospital',
      address: '713 Montreal Rd, Ottawa',
      waitTime: '2h 00min',
      waitRange: '1h 30min - 2h 45min',
      updated: language === 'fr' ? 'Il y a 12 minutes' : '12 minutes ago',
      severity: 'medium',
    },
    {
      name: language === 'fr' ? 'Centre hospitalier pour enfants de l\'est de l\'Ontario (CHEO)' : 'Children\'s Hospital of Eastern Ontario (CHEO)',
      address: '401 Smyth Rd, Ottawa',
      waitTime: '1h 30min',
      waitRange: '1h - 2h',
      updated: language === 'fr' ? 'Il y a 5 minutes' : '5 minutes ago',
      severity: 'low',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'high':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{t('wait.title')}</h1>
          <p className="text-lg text-gray-600">{t('wait.subtitle')}</p>
        </div>

        {/* Info Banner */}
        <div className="mb-8 bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start space-x-3">
            <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {language === 'fr' ? 'À propos des temps d\'attente' : 'About Wait Times'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === 'fr'
                  ? 'Les temps d\'attente sont des estimations basées sur des données en temps réel. Les urgences mettant la vie en danger sont traitées en priorité.'
                  : 'Wait times are estimates based on real-time data. Life-threatening emergencies are prioritized.'}
              </p>
            </div>
          </div>
        </div>

        {/* Hospitals List */}
        <div className="space-y-6">
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:border-blue-300 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{hospital.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{hospital.address}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {t('wait.updated')}: {hospital.updated}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="text-center">
                    <div className={`px-6 py-3 rounded-xl border-2 ${getSeverityColor(hospital.severity)}`}>
                      <div className="text-sm font-medium mb-1">{t('wait.time')}</div>
                      <div className="text-2xl font-bold">{hospital.waitTime}</div>
                      <div className="text-xs mt-1">{hospital.waitRange}</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-full sm:w-auto">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('wait.details')}</span>
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{t('wait.directions')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">
            {language === 'fr' ? 'Légende des temps d\'attente' : 'Wait Time Legend'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-700">
                {language === 'fr' ? 'Court (< 2h)' : 'Short (< 2h)'}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-gray-700">
                {language === 'fr' ? 'Moyen (2-3h)' : 'Medium (2-3h)'}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-700">
                {language === 'fr' ? 'Long (> 3h)' : 'Long (> 3h)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

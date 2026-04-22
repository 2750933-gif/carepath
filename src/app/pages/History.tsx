import { useLanguage } from '../context/LanguageContext';
import { Clock, Calendar, FileText, Bell, MapPin, Stethoscope } from 'lucide-react';

export default function History() {
  const { t, language } = useLanguage();

  const recentSearches = [
    {
      type: 'where-to-go',
      title: language === 'fr' ? 'Où aller - Clinique sans rendez-vous' : 'Where to Go - Walk-in Clinic',
      date: language === 'fr' ? 'Il y a 2 heures' : '2 hours ago',
      icon: MapPin,
    },
    {
      type: 'wait-times',
      title: language === 'fr' ? 'Temps d\'attente - Hôpital d\'Ottawa' : 'Wait Times - The Ottawa Hospital',
      date: language === 'fr' ? 'Hier' : 'Yesterday',
      icon: Clock,
    },
    {
      type: 'family-doctor',
      title: language === 'fr' ? 'Recherche de médecin de famille' : 'Family Doctor Search',
      date: language === 'fr' ? 'Il y a 3 jours' : '3 days ago',
      icon: Stethoscope,
    },
  ];

  const reminders = [
    {
      type: 'appointment',
      title: language === 'fr' ? 'Rendez-vous - Dr. Sarah Johnson' : 'Appointment - Dr. Sarah Johnson',
      date: language === 'fr' ? '22 avril 2026, 10:00' : 'April 22, 2026, 10:00 AM',
      location: language === 'fr' ? 'Clinique médicale Gloucester' : 'Gloucester Medical Clinic',
      urgent: true,
      icon: Calendar,
      color: 'blue',
    },
    {
      type: 'prescription',
      title: language === 'fr' ? 'Renouvellement d\'ordonnance' : 'Prescription Renewal',
      date: language === 'fr' ? '25 avril 2026' : 'April 25, 2026',
      description: language === 'fr' ? 'Renouveler votre ordonnance à la pharmacie' : 'Renew your prescription at the pharmacy',
      urgent: false,
      icon: FileText,
      color: 'green',
    },
    {
      type: 'followup',
      title: language === 'fr' ? 'Suivi médical' : 'Medical Follow-up',
      date: language === 'fr' ? '30 avril 2026' : 'April 30, 2026',
      description: language === 'fr' ? 'Appeler pour résultats de tests' : 'Call for test results',
      urgent: false,
      icon: Bell,
      color: 'purple',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{t('history.title')}</h1>
          <p className="text-lg text-gray-600">{t('history.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Searches */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('history.recentSearches')}</h2>
            <div className="space-y-4">
              {recentSearches.length > 0 ? (
                recentSearches.map((search, index) => {
                  const Icon = search.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-blue-300 transition-all cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{search.title}</h3>
                          <p className="text-sm text-gray-600">{search.date}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
                  <p className="text-gray-600">{t('history.noHistory')}</p>
                </div>
              )}
            </div>
          </div>

          {/* Reminders */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('history.reminders')}</h2>
            <div className="space-y-4">
              {reminders.map((reminder, index) => {
                const Icon = reminder.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all ${
                      reminder.urgent
                        ? 'border-blue-500 ring-4 ring-blue-100'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${reminder.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 text-${reminder.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{reminder.title}</h3>
                          {reminder.urgent && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                              {language === 'fr' ? 'Urgent' : 'Urgent'}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {reminder.date}
                        </p>
                        {reminder.location && (
                          <p className="text-sm text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 inline mr-1" />
                            {reminder.location}
                          </p>
                        )}
                        {reminder.description && (
                          <p className="text-sm text-gray-700 mt-2">{reminder.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            {language === 'fr' ? 'Actions rapides' : 'Quick Actions'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button className="px-6 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
              {language === 'fr' ? 'Nouveau rendez-vous' : 'New Appointment'}
            </button>
            <button className="px-6 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
              {language === 'fr' ? 'Ajouter un rappel' : 'Add Reminder'}
            </button>
            <button className="px-6 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
              {language === 'fr' ? 'Voir mes documents' : 'View Documents'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

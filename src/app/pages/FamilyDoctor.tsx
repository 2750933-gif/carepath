import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Users, CheckCircle, Clock } from 'lucide-react';

export default function FamilyDoctor() {
  const { t, language } = useLanguage();
  const [searchData, setSearchData] = useState({
    postalCode: '',
    language: 'en',
    patientType: 'adult',
  });
  const [showResults, setShowResults] = useState(false);

  const clinics = [
    {
      name: language === 'fr' ? 'Clinique médicale Gloucester' : 'Gloucester Medical Clinic',
      address: '2225 Riverside Dr, Ottawa',
      accepting: true,
      languages: ['English', 'Français'],
      distance: '2.5 km',
      patientTypes: ['adult', 'family'],
    },
    {
      name: language === 'fr' ? 'Centre de santé familiale Carlington' : 'Carlington Family Health Centre',
      address: '900 Merivale Rd, Ottawa',
      accepting: true,
      languages: ['English', 'Français', 'Arabic'],
      distance: '4.2 km',
      patientTypes: ['adult', 'child', 'family'],
    },
    {
      name: language === 'fr' ? 'Appletree Medical Group' : 'Appletree Medical Group',
      address: '1385 Bank St, Ottawa',
      accepting: false,
      languages: ['English'],
      distance: '3.8 km',
      patientTypes: ['adult'],
    },
    {
      name: language === 'fr' ? 'Clinique Sandy Hill' : 'Sandy Hill Clinic',
      address: '221 Nelson St, Ottawa',
      accepting: true,
      languages: ['English', 'Français'],
      distance: '5.1 km',
      patientTypes: ['adult', 'family'],
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{t('doctor.title')}</h1>
          <p className="text-lg text-gray-600">{t('doctor.subtitle')}</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  {t('doctor.postalCode')}
                </label>
                <input
                  type="text"
                  value={searchData.postalCode}
                  onChange={(e) => setSearchData({ ...searchData, postalCode: e.target.value })}
                  placeholder="K1A 0A9"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  {t('doctor.language')}
                </label>
                <select
                  value={searchData.language}
                  onChange={(e) => setSearchData({ ...searchData, language: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  {t('doctor.patientType')}
                </label>
                <select
                  value={searchData.patientType}
                  onChange={(e) => setSearchData({ ...searchData, patientType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                >
                  <option value="adult">{t('doctor.patientType.adult')}</option>
                  <option value="child">{t('doctor.patientType.child')}</option>
                  <option value="family">{t('doctor.patientType.family')}</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all"
            >
              {t('doctor.search')}
            </button>
          </form>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'fr' ? 'Résultats de recherche' : 'Search Results'}
            </h2>

            {clinics.map((clinic, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 border-2 transition-all ${
                  clinic.accepting
                    ? 'border-green-300 hover:border-green-400'
                    : 'border-gray-200 opacity-75'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{clinic.name}</h3>
                      {clinic.accepting && (
                        <span className="inline-flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          <CheckCircle className="w-4 h-4" />
                          <span>{t('doctor.accepting')}</span>
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{clinic.address}</span>
                        <span className="text-blue-600">• {clinic.distance}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{clinic.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  {clinic.accepting && (
                    <div className="flex flex-col gap-2 w-full lg:w-auto">
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all">
                        {t('doctor.apply')}
                      </button>
                      <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        {language === 'fr' ? 'Voir détails' : 'View Details'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            {language === 'fr' ? 'Informations importantes' : 'Important Information'}
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                {language === 'fr'
                  ? 'La recherche d\'un médecin de famille peut prendre plusieurs mois.'
                  : 'Finding a family doctor may take several months.'}
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                {language === 'fr'
                  ? 'Utilisez le bouton "Postuler" pour soumettre votre demande à la clinique.'
                  : 'Use the "Apply" button to submit your application to the clinic.'}
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                {language === 'fr'
                  ? 'Vous pouvez suivre l\'état de vos demandes dans la section "Historique".'
                  : 'You can track your applications in the "History" section.'}
              </span>
            </li>
          </ul>

          <div className="mt-6">
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
              <Clock className="w-5 h-5" />
              <span>{t('doctor.track')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

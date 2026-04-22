import { useLanguage } from '../context/LanguageContext';
import { CreditCard, FileText, ClipboardList, StickyNote, FileCheck, Download, Share2, Upload } from 'lucide-react';

export default function Documents() {
  const { t, language } = useLanguage();

  const documentCategories = [
    {
      id: 'healthCard',
      title: t('documents.healthCard'),
      icon: CreditCard,
      color: 'blue',
      count: 1,
      documents: [
        {
          name: language === 'fr' ? 'Carte santé Ontario' : 'Ontario Health Card',
          date: language === 'fr' ? 'Valide jusqu\'en 2028' : 'Valid until 2028',
        },
      ],
    },
    {
      id: 'prescriptions',
      title: t('documents.prescriptions'),
      icon: FileText,
      color: 'green',
      count: 3,
      documents: [
        {
          name: language === 'fr' ? 'Prescription - Dr. Johnson' : 'Prescription - Dr. Johnson',
          date: '2026-04-15',
        },
        {
          name: language === 'fr' ? 'Prescription - Dr. Smith' : 'Prescription - Dr. Smith',
          date: '2026-03-20',
        },
        {
          name: language === 'fr' ? 'Prescription - Dr. Lee' : 'Prescription - Dr. Lee',
          date: '2026-02-10',
        },
      ],
    },
    {
      id: 'results',
      title: t('documents.results'),
      icon: ClipboardList,
      color: 'purple',
      count: 2,
      documents: [
        {
          name: language === 'fr' ? 'Résultats de laboratoire' : 'Lab Results',
          date: '2026-04-10',
        },
        {
          name: language === 'fr' ? 'Imagerie médicale' : 'Medical Imaging',
          date: '2026-03-25',
        },
      ],
    },
    {
      id: 'notes',
      title: t('documents.notes'),
      icon: StickyNote,
      color: 'yellow',
      count: 5,
      documents: [
        {
          name: language === 'fr' ? 'Notes de consultation' : 'Consultation Notes',
          date: '2026-04-15',
        },
      ],
    },
    {
      id: 'forms',
      title: t('documents.forms'),
      icon: FileCheck,
      color: 'red',
      count: 2,
      documents: [
        {
          name: language === 'fr' ? 'Formulaire de consentement' : 'Consent Form',
          date: '2026-04-01',
        },
        {
          name: language === 'fr' ? 'Formulaire d\'inscription' : 'Registration Form',
          date: '2026-03-15',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{t('documents.title')}</h1>
          <p className="text-lg text-gray-600">{t('documents.subtitle')}</p>
        </div>

        {/* Upload Section */}
        <div className="mb-8">
          <button className="w-full sm:w-auto px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all flex items-center justify-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>{t('documents.upload')}</span>
          </button>
        </div>

        {/* Document Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-blue-300 transition-all overflow-hidden"
              >
                {/* Category Header */}
                <div className={`bg-${category.color}-50 p-6 border-b border-${category.color}-100`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${category.color}-100 rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${category.color}-600`} />
                    </div>
                    <span className={`px-3 py-1 bg-${category.color}-100 text-${category.color}-700 rounded-full text-sm font-semibold`}>
                      {category.count}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>

                {/* Documents List */}
                <div className="p-6">
                  <div className="space-y-3">
                    {category.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 mb-1">{doc.name}</h4>
                        <p className="text-sm text-gray-600">{doc.date}</p>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">{t('documents.download')}</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">{t('documents.share')}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            {language === 'fr' ? 'Sécurité et confidentialité' : 'Security & Privacy'}
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                {language === 'fr'
                  ? 'Vos documents sont stockés de manière sécurisée et chiffrée.'
                  : 'Your documents are stored securely and encrypted.'}
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                {language === 'fr'
                  ? 'Seuls vous et les professionnels de santé autorisés peuvent accéder à vos documents.'
                  : 'Only you and authorized healthcare professionals can access your documents.'}
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                {language === 'fr'
                  ? 'Vous pouvez télécharger ou supprimer vos documents à tout moment.'
                  : 'You can download or delete your documents at any time.'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

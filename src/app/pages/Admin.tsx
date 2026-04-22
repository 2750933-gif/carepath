import { useLanguage } from '../context/LanguageContext';
import { FileCheck, FileText, MessageSquare, Plus, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function Admin() {
  const { t, language } = useLanguage();

  const requests = [
    {
      id: '001',
      type: language === 'fr' ? 'Demande de médecin de famille' : 'Family Doctor Request',
      clinic: language === 'fr' ? 'Clinique médicale Gloucester' : 'Gloucester Medical Clinic',
      date: '2026-04-10',
      status: 'pending',
    },
    {
      id: '002',
      type: language === 'fr' ? 'Soins de longue durée' : 'Long-term Care',
      facility: language === 'fr' ? 'Résidence Riverdale' : 'Riverdale Residence',
      date: '2026-03-25',
      status: 'processed',
    },
    {
      id: '003',
      type: language === 'fr' ? 'Soins à domicile' : 'Home Care',
      provider: language === 'fr' ? 'Soins à domicile Ottawa' : 'Ottawa Home Care',
      date: '2026-02-15',
      status: 'rejected',
    },
  ];

  const forms = [
    {
      name: language === 'fr' ? 'Formulaire d\'inscription au médecin de famille' : 'Family Doctor Registration Form',
      status: 'incomplete',
    },
    {
      name: language === 'fr' ? 'Demande de soins à domicile' : 'Home Care Application',
      status: 'complete',
    },
    {
      name: language === 'fr' ? 'Formulaire de consentement' : 'Consent Form',
      status: 'complete',
    },
  ];

  const messages = [
    {
      from: language === 'fr' ? 'Clinique médicale Gloucester' : 'Gloucester Medical Clinic',
      subject: language === 'fr' ? 'Mise à jour de votre demande' : 'Update on Your Application',
      date: language === 'fr' ? 'Il y a 2 jours' : '2 days ago',
      unread: true,
    },
    {
      from: language === 'fr' ? 'Centre de santé Ontario' : 'Ontario Health Center',
      subject: language === 'fr' ? 'Informations importantes' : 'Important Information',
      date: language === 'fr' ? 'Il y a 5 jours' : '5 days ago',
      unread: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'processed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'processed':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{t('admin.title')}</h1>
          <p className="text-lg text-gray-600">{t('admin.subtitle')}</p>
        </div>

        {/* New Request Button */}
        <div className="mb-8">
          <button className="w-full sm:w-auto px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all flex items-center justify-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>{t('admin.newRequest')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Requests */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('admin.requests')}</h2>
              <div className="space-y-4">
                {requests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{request.type}</h3>
                        <p className="text-gray-600 text-sm mb-1">
                          {request.clinic || request.facility || request.provider}
                        </p>
                        <p className="text-gray-500 text-sm">{language === 'fr' ? 'Soumis le' : 'Submitted'}: {request.date}</p>
                      </div>
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(request.status)}`}>
                        {getStatusIcon(request.status)}
                        <span className="text-sm font-semibold">{t(`admin.status.${request.status}`)}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                        {language === 'fr' ? 'Voir détails' : 'View Details'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Forms */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('admin.forms')}</h2>
              <div className="space-y-4">
                {forms.map((form, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{form.name}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          form.status === 'complete'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {form.status === 'complete'
                            ? language === 'fr' ? 'Complet' : 'Complete'
                            : language === 'fr' ? 'Incomplet' : 'Incomplete'}
                        </span>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        {form.status === 'complete'
                          ? language === 'fr' ? 'Voir' : 'View'
                          : language === 'fr' ? 'Compléter' : 'Complete'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('admin.messages')}</h2>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-6 border-2 transition-all ${
                    message.unread
                      ? 'border-blue-500 ring-4 ring-blue-100'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{message.from}</h3>
                      <p className="text-sm text-gray-600">{message.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">{message.date}</p>
                    {message.unread && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {language === 'fr' ? 'Nouveau' : 'New'}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                {language === 'fr' ? 'Voir tous les messages' : 'View All Messages'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, ChevronDown, ChevronUp, Shield, Lock, FileCheck } from 'lucide-react';

export default function Help() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: language === 'fr'
        ? 'Comment utiliser CarePath pour trouver où aller?'
        : 'How do I use CarePath to find where to go?',
      answer: language === 'fr'
        ? 'Commencez par décrire votre situation dans la section "Décrire ma situation". Répondez aux questions sur vos symptômes et votre niveau d\'inquiétude. CarePath vous donnera des recommandations personnalisées sur où aller (urgence, clinique sans rendez-vous, télémédecine, etc.).'
        : 'Start by describing your situation in the "Describe My Situation" section. Answer questions about your symptoms and level of concern. CarePath will give you personalized recommendations on where to go (emergency, walk-in clinic, telemedicine, etc.).',
    },
    {
      question: language === 'fr'
        ? 'Comment trouver un médecin de famille?'
        : 'How do I find a family doctor?',
      answer: language === 'fr'
        ? 'Allez dans la section "Médecin de famille" et entrez votre code postal, langue préférée et type de patient. CarePath vous montrera les cliniques qui acceptent de nouveaux patients près de chez vous. Vous pouvez postuler directement via l\'application.'
        : 'Go to the "Family Doctor" section and enter your postal code, preferred language, and patient type. CarePath will show you clinics accepting new patients near you. You can apply directly through the app.',
    },
    {
      question: language === 'fr'
        ? 'Les temps d\'attente sont-ils exacts?'
        : 'Are wait times accurate?',
      answer: language === 'fr'
        ? 'Les temps d\'attente sont des estimations basées sur des données en temps réel des hôpitaux. Ils peuvent varier selon l\'afflux de patients et la gravité des cas. Les urgences mettant la vie en danger sont toujours traitées en priorité.'
        : 'Wait times are estimates based on real-time hospital data. They may vary depending on patient influx and case severity. Life-threatening emergencies are always prioritized.',
    },
    {
      question: language === 'fr'
        ? 'Mes documents sont-ils sécurisés?'
        : 'Are my documents secure?',
      answer: language === 'fr'
        ? 'Oui, tous vos documents sont stockés de manière sécurisée et chiffrée. Seuls vous et les professionnels de santé autorisés peuvent y accéder. CarePath respecte toutes les lois canadiennes sur la protection des données de santé (PHIPA).'
        : 'Yes, all your documents are stored securely and encrypted. Only you and authorized healthcare professionals can access them. CarePath complies with all Canadian health data protection laws (PHIPA).',
    },
    {
      question: language === 'fr'
        ? 'Puis-je utiliser CarePath en cas d\'urgence?'
        : 'Can I use CarePath in an emergency?',
      answer: language === 'fr'
        ? 'Pour les urgences mettant la vie en danger, composez toujours le 911 immédiatement. CarePath est un outil de navigation et d\'orientation, pas un service d\'urgence. Utilisez-le pour des situations non urgentes ou pour trouver des informations avant de consulter.'
        : 'For life-threatening emergencies, always call 911 immediately. CarePath is a navigation and guidance tool, not an emergency service. Use it for non-urgent situations or to find information before seeking care.',
    },
    {
      question: language === 'fr'
        ? 'Comment suivre mes demandes administratives?'
        : 'How do I track my administrative requests?',
      answer: language === 'fr'
        ? 'Allez dans la section "Administration & Documents" pour voir toutes vos demandes (médecin de famille, soins de longue durée, etc.). Vous pouvez voir le statut de chaque demande (en cours, traité, refusé) et recevoir des notifications de mise à jour.'
        : 'Go to the "Administration & Documents" section to see all your requests (family doctor, long-term care, etc.). You can see the status of each request (pending, processed, rejected) and receive update notifications.',
    },
    {
      question: language === 'fr'
        ? 'CarePath peut-il me donner un diagnostic médical?'
        : 'Can CarePath give me a medical diagnosis?',
      answer: language === 'fr'
        ? 'Non, CarePath ne fournit pas de diagnostic médical. C\'est un outil de navigation qui vous aide à comprendre où aller et comment accéder aux soins. Seul un professionnel de santé qualifié peut poser un diagnostic.'
        : 'No, CarePath does not provide medical diagnosis. It\'s a navigation tool that helps you understand where to go and how to access care. Only a qualified healthcare professional can make a diagnosis.',
    },
    {
      question: language === 'fr'
        ? 'L\'utilisation de CarePath est-elle gratuite?'
        : 'Is CarePath free to use?',
      answer: language === 'fr'
        ? 'Oui, CarePath est un service gratuit pour tous les résidents de l\'Ontario. Il n\'y a aucun frais pour utiliser l\'application, créer un compte ou accéder aux informations.'
        : 'Yes, CarePath is a free service for all Ontario residents. There are no fees to use the app, create an account, or access information.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{t('help.title')}</h1>
          <p className="text-lg text-gray-600">{t('help.subtitle')}</p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('help.search')}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-lg"
            />
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {expandedFaq === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{t('help.disclaimer')}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {language === 'fr'
                ? 'CarePath est un outil de navigation et ne remplace pas les conseils médicaux professionnels. En cas d\'urgence, composez le 911.'
                : 'CarePath is a navigation tool and does not replace professional medical advice. In case of emergency, call 911.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{t('help.privacy')}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {language === 'fr'
                ? 'Vos données personnelles et médicales sont protégées par chiffrement et conformes aux lois canadiennes (PHIPA).'
                : 'Your personal and medical data is protected by encryption and compliant with Canadian laws (PHIPA).'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{t('help.compliance')}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {language === 'fr'
                ? 'CarePath respecte toutes les normes de conformité en matière de santé numérique et de protection des données.'
                : 'CarePath complies with all digital health and data protection compliance standards.'}
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-blue-100 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            {language === 'fr' ? 'Besoin d\'aide supplémentaire?' : 'Need More Help?'}
          </h2>
          <p className="text-gray-600 mb-6">
            {language === 'fr'
              ? 'Notre équipe est là pour vous aider. Contactez-nous pour toute question.'
              : 'Our team is here to help. Contact us with any questions.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all">
              {language === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
              {language === 'fr' ? 'Appeler le 811' : 'Call 811'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

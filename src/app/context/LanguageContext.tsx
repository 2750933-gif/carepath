import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.describe': 'Décrire ma situation',
    'nav.whereToGo': 'Où aller ?',
    'nav.waitTimes': 'Temps d\'attente',
    'nav.familyDoctor': 'Médecin de famille',
    'nav.appointment': 'Rendez-vous',
    'nav.history': 'Historique',
    'nav.documents': 'Mes documents',
    'nav.admin': 'Administration',
    'nav.testimonials': 'Témoignages',
    'nav.help': 'Aide',
    'nav.dashboard': 'Tableau de bord',
    'nav.pricing': 'Forfaits',

    // Home
    'home.title': 'CarePath – Votre guide intelligent dans le système de santé',
    'home.subtitle': 'Trouvez où aller, quand consulter et comment avancer dans votre parcours de soins.',
    'home.cta': 'Commencer',
    'home.disclaimer': 'Sans diagnostic médical. Juste une aide claire pour vous orienter.',
    'home.testimonials.title': 'Ce que disent nos utilisateurs',

    // Describe Situation
    'describe.title': 'Décrivez votre situation',
    'describe.subtitle': 'Répondez à quelques questions pour obtenir des recommandations personnalisées',
    'describe.language': 'Langue préférée',
    'describe.postalCode': 'Code postal',
    'describe.age': 'Âge',
    'describe.healthCard': 'Avez-vous une carte santé de l\'Ontario ?',
    'describe.symptoms': 'Décrivez vos symptômes ou préoccupations',
    'describe.urgency': 'Niveau d\'inquiétude',
    'describe.urgency.low': 'Faible',
    'describe.urgency.medium': 'Moyen',
    'describe.urgency.high': 'Élevé',
    'describe.hasDoctor': 'Avez-vous un médecin de famille ?',
    'describe.submit': 'Obtenir des recommandations',
    'describe.yes': 'Oui',
    'describe.no': 'Non',

    // Where to Go
    'where.title': 'Où aller ?',
    'where.subtitle': 'Recommandations basées sur votre situation',
    'where.recommended': 'Recommandé pour vous',
    'where.emergency': 'Urgence (911)',
    'where.emergency.desc': 'Situations mettant la vie en danger',
    'where.walkin': 'Clinique sans rendez-vous',
    'where.walkin.desc': 'Soins non urgents le jour même',
    'where.telemedicine': 'Télémédecine',
    'where.telemedicine.desc': 'Consultation virtuelle',
    'where.811': 'Télésanté Ontario (811)',
    'where.811.desc': 'Conseils d\'infirmières 24/7',
    'where.pharmacy': 'Pharmacie',
    'where.pharmacy.desc': 'Conseils et vaccinations',
    'where.community': 'Centre communautaire',
    'where.community.desc': 'Services de santé locaux',
    'where.call': 'Appeler',
    'where.book': 'Réserver',
    'where.consult': 'Consulter',

    // Wait Times
    'wait.title': 'Temps d\'attente aux urgences',
    'wait.subtitle': 'Estimations en temps réel pour les hôpitaux d\'Ottawa',
    'wait.hospital': 'Hôpital',
    'wait.time': 'Temps d\'attente estimé',
    'wait.updated': 'Mis à jour',
    'wait.details': 'Voir détails',
    'wait.directions': 'Itinéraire',

    // Family Doctor
    'doctor.title': 'Trouver un médecin de famille',
    'doctor.subtitle': 'Recherchez des cliniques qui acceptent de nouveaux patients',
    'doctor.search': 'Commencer ma recherche',
    'doctor.postalCode': 'Votre code postal',
    'doctor.language': 'Langue préférée',
    'doctor.patientType': 'Type de patient',
    'doctor.patientType.adult': 'Adulte',
    'doctor.patientType.child': 'Enfant',
    'doctor.patientType.family': 'Famille',
    'doctor.accepting': 'Accepte de nouveaux patients',
    'doctor.apply': 'Postuler',
    'doctor.track': 'Suivre ma demande',

    // Appointment
    'appointment.title': 'Prendre rendez-vous',
    'appointment.subtitle': 'Réservez une consultation avec un professionnel de santé',
    'appointment.service': 'Type de service',
    'appointment.service.gp': 'Médecin généraliste',
    'appointment.service.specialist': 'Spécialiste',
    'appointment.service.telehealth': 'Téléconsultation',
    'appointment.selectDate': 'Sélectionner une date',
    'appointment.selectTime': 'Sélectionner une heure',
    'appointment.bookNow': 'Réserver maintenant',
    'appointment.confirm': 'Confirmation',
    'appointment.confirmed': 'Rendez-vous confirmé !',

    // History
    'history.title': 'Historique & Rappels',
    'history.subtitle': 'Vos recherches et rendez-vous récents',
    'history.recentSearches': 'Recherches récentes',
    'history.reminders': 'Rappels',
    'history.noHistory': 'Aucun historique pour le moment',
    'history.appointment': 'Rendez-vous',
    'history.prescription': 'Ordonnance',
    'history.followup': 'Suivi',

    // Documents
    'documents.title': 'Mes documents',
    'documents.subtitle': 'Gérez vos documents de santé',
    'documents.healthCard': 'Carte santé',
    'documents.prescriptions': 'Ordonnances',
    'documents.results': 'Résultats',
    'documents.notes': 'Notes',
    'documents.forms': 'Formulaires',
    'documents.download': 'Télécharger PDF',
    'documents.share': 'Partager',
    'documents.upload': 'Téléverser',

    // Admin
    'admin.title': 'Administration & Documents',
    'admin.subtitle': 'Gérez vos demandes administratives',
    'admin.requests': 'Mes demandes',
    'admin.forms': 'Formulaires',
    'admin.messages': 'Messagerie',
    'admin.status.pending': 'En cours',
    'admin.status.processed': 'Traité',
    'admin.status.rejected': 'Refusé',
    'admin.newRequest': 'Nouvelle demande',

    // Testimonials
    'testimonials.title': 'Témoignages & Avis',
    'testimonials.subtitle': 'Partagez votre expérience',
    'testimonials.leave': 'Laisser un avis',
    'testimonials.rating': 'Note moyenne',

    // Help
    'help.title': 'Aide & FAQ',
    'help.subtitle': 'Questions fréquentes',
    'help.search': 'Rechercher une question...',
    'help.disclaimer': 'Clause de non-responsabilité',
    'help.privacy': 'Politique de confidentialité',
    'help.compliance': 'Conformité',

    // Dashboard
    'dashboard.title': 'Tableau de bord administrateur',
    'dashboard.users': 'Utilisateurs',
    'dashboard.newUsers': 'Nouveaux utilisateurs',
    'dashboard.sessions': 'Sessions',
    'dashboard.completedSessions': 'Sessions terminées',
    'dashboard.recommendations': 'Recommandations suivies',
    'dashboard.searches': 'Recherches médecin',
    'dashboard.waitViews': 'Vues temps d\'attente',
    'dashboard.bookings': 'Réservations',
    'dashboard.overview': 'Vue d\'ensemble',

    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.cancel': 'Annuler',
    'common.save': 'Enregistrer',
    'common.back': 'Retour',
    'common.next': 'Suivant',
    'common.search': 'Rechercher',
    'common.filter': 'Filtrer',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.describe': 'Describe Situation',
    'nav.whereToGo': 'Where to Go',
    'nav.waitTimes': 'Wait Times',
    'nav.familyDoctor': 'Family Doctor',
    'nav.appointment': 'Appointment',
    'nav.history': 'History',
    'nav.documents': 'My Documents',
    'nav.admin': 'Administration',
    'nav.testimonials': 'Testimonials',
    'nav.help': 'Help',
    'nav.dashboard': 'Dashboard',
    'nav.pricing': 'Pricing',

    // Home
    'home.title': 'CarePath – Your smart guide through the health system',
    'home.subtitle': 'Find where to go, when to seek care, and how to move through your health journey.',
    'home.cta': 'Get started',
    'home.disclaimer': 'No medical diagnosis. Just clear guidance to help you navigate.',
    'home.testimonials.title': 'What our users say',

    // Describe Situation
    'describe.title': 'Describe Your Situation',
    'describe.subtitle': 'Answer a few questions to get personalized recommendations',
    'describe.language': 'Preferred Language',
    'describe.postalCode': 'Postal Code',
    'describe.age': 'Age',
    'describe.healthCard': 'Do you have an Ontario Health Card?',
    'describe.symptoms': 'Describe your symptoms or concerns',
    'describe.urgency': 'Urgency Level',
    'describe.urgency.low': 'Low',
    'describe.urgency.medium': 'Medium',
    'describe.urgency.high': 'High',
    'describe.hasDoctor': 'Do you have a family doctor?',
    'describe.submit': 'Get Recommendations',
    'describe.yes': 'Yes',
    'describe.no': 'No',

    // Where to Go
    'where.title': 'Where to Go',
    'where.subtitle': 'Recommendations based on your situation',
    'where.recommended': 'Recommended for you',
    'where.emergency': 'Emergency (911)',
    'where.emergency.desc': 'Life-threatening situations',
    'where.walkin': 'Walk-in Clinic',
    'where.walkin.desc': 'Same-day non-urgent care',
    'where.telemedicine': 'Telemedicine',
    'where.telemedicine.desc': 'Virtual consultation',
    'where.811': 'Telehealth Ontario (811)',
    'where.811.desc': '24/7 nurse advice',
    'where.pharmacy': 'Pharmacy',
    'where.pharmacy.desc': 'Advice and vaccinations',
    'where.community': 'Community Center',
    'where.community.desc': 'Local health services',
    'where.call': 'Call',
    'where.book': 'Book',
    'where.consult': 'Consult',

    // Wait Times
    'wait.title': 'Emergency Wait Times',
    'wait.subtitle': 'Real-time estimates for Ottawa hospitals',
    'wait.hospital': 'Hospital',
    'wait.time': 'Estimated Wait',
    'wait.updated': 'Updated',
    'wait.details': 'View Details',
    'wait.directions': 'Directions',

    // Family Doctor
    'doctor.title': 'Find a Family Doctor',
    'doctor.subtitle': 'Search for clinics accepting new patients',
    'doctor.search': 'Start My Search',
    'doctor.postalCode': 'Your Postal Code',
    'doctor.language': 'Preferred Language',
    'doctor.patientType': 'Patient Type',
    'doctor.patientType.adult': 'Adult',
    'doctor.patientType.child': 'Child',
    'doctor.patientType.family': 'Family',
    'doctor.accepting': 'Accepting New Patients',
    'doctor.apply': 'Apply',
    'doctor.track': 'Track My Application',

    // Appointment
    'appointment.title': 'Book an Appointment',
    'appointment.subtitle': 'Schedule a consultation with a healthcare provider',
    'appointment.service': 'Service Type',
    'appointment.service.gp': 'General Practitioner',
    'appointment.service.specialist': 'Specialist',
    'appointment.service.telehealth': 'Telehealth',
    'appointment.selectDate': 'Select a Date',
    'appointment.selectTime': 'Select a Time',
    'appointment.bookNow': 'Book Now',
    'appointment.confirm': 'Confirmation',
    'appointment.confirmed': 'Appointment Confirmed!',

    // History
    'history.title': 'History & Reminders',
    'history.subtitle': 'Your recent searches and appointments',
    'history.recentSearches': 'Recent Searches',
    'history.reminders': 'Reminders',
    'history.noHistory': 'No history yet',
    'history.appointment': 'Appointment',
    'history.prescription': 'Prescription',
    'history.followup': 'Follow-up',

    // Documents
    'documents.title': 'My Documents',
    'documents.subtitle': 'Manage your health documents',
    'documents.healthCard': 'Health Card',
    'documents.prescriptions': 'Prescriptions',
    'documents.results': 'Results',
    'documents.notes': 'Notes',
    'documents.forms': 'Forms',
    'documents.download': 'Download PDF',
    'documents.share': 'Share',
    'documents.upload': 'Upload',

    // Admin
    'admin.title': 'Administration & Documents',
    'admin.subtitle': 'Manage your administrative requests',
    'admin.requests': 'My Requests',
    'admin.forms': 'Forms',
    'admin.messages': 'Messages',
    'admin.status.pending': 'Pending',
    'admin.status.processed': 'Processed',
    'admin.status.rejected': 'Rejected',
    'admin.newRequest': 'New Request',

    // Testimonials
    'testimonials.title': 'Testimonials & Reviews',
    'testimonials.subtitle': 'Share your experience',
    'testimonials.leave': 'Leave a Review',
    'testimonials.rating': 'Average Rating',

    // Help
    'help.title': 'Help & FAQ',
    'help.subtitle': 'Frequently Asked Questions',
    'help.search': 'Search for a question...',
    'help.disclaimer': 'Disclaimer',
    'help.privacy': 'Privacy Policy',
    'help.compliance': 'Compliance',

    // Dashboard
    'dashboard.title': 'Admin Dashboard',
    'dashboard.users': 'Users',
    'dashboard.newUsers': 'New Users',
    'dashboard.sessions': 'Sessions',
    'dashboard.completedSessions': 'Completed Sessions',
    'dashboard.recommendations': 'Recommendations Followed',
    'dashboard.searches': 'Doctor Searches',
    'dashboard.waitViews': 'Wait Time Views',
    'dashboard.bookings': 'Bookings',
    'dashboard.overview': 'Overview',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.search': 'Search',
    'common.filter': 'Filter',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

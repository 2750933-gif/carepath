import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Calendar, ExternalLink, AlertCircle, Stethoscope, Video, Hospital, Pill, Building2, Clock, MapPin, User } from 'lucide-react';

export default function WhereToGo() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'services' | 'doctors' | 'hospitals'>('services');

  const services = [
    {
      id: 'emergency',
      title: t('where.emergency'),
      description: t('where.emergency.desc'),
      icon: AlertCircle,
      color: 'red',
      recommended: false,
      actions: [
        { label: t('where.call'), icon: Phone, action: '911' },
      ],
    },
    {
      id: 'walkin',
      title: t('where.walkin'),
      description: t('where.walkin.desc'),
      icon: Stethoscope,
      color: 'slate',
      recommended: true,
      actions: [
        { label: t('where.book'), icon: Calendar, link: '/appointment' },
        { label: t('where.consult'), icon: ExternalLink },
      ],
    },
    {
      id: 'telemedicine',
      title: t('where.telemedicine'),
      description: t('where.telemedicine.desc'),
      icon: Video,
      color: 'indigo',
      recommended: false,
      actions: [
        { label: t('where.book'), icon: Calendar, link: '/appointment' },
      ],
    },
    {
      id: '811',
      title: t('where.811'),
      description: t('where.811.desc'),
      icon: Phone,
      color: 'cyan',
      recommended: false,
      actions: [
        { label: t('where.call'), icon: Phone, action: '811' },
      ],
    },
    {
      id: 'pharmacy',
      title: t('where.pharmacy'),
      description: t('where.pharmacy.desc'),
      icon: Pill,
      color: 'emerald',
      recommended: false,
      actions: [
        { label: t('where.consult'), icon: ExternalLink },
      ],
    },
    {
      id: 'community',
      title: t('where.community'),
      description: t('where.community.desc'),
      icon: Building2,
      color: 'violet',
      recommended: false,
      actions: [
        { label: t('where.consult'), icon: ExternalLink },
      ],
    },
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: language === 'fr' ? 'Médecine générale' : 'General Practice',
      clinic: language === 'fr' ? 'Clinique médicale Gloucester' : 'Gloucester Medical Clinic',
      address: '2225 Riverside Dr, Ottawa',
      distance: '2.5 km',
      waitTime: '15-30 min',
      accepting: true,
      languages: ['English', 'Français'],
    },
    {
      name: 'Dr. Mohamed Ali',
      specialty: language === 'fr' ? 'Médecine familiale' : 'Family Medicine',
      clinic: language === 'fr' ? 'Centre de santé Carlington' : 'Carlington Health Centre',
      address: '900 Merivale Rd, Ottawa',
      distance: '4.2 km',
      waitTime: '20-40 min',
      accepting: true,
      languages: ['English', 'Français', 'Arabic'],
    },
    {
      name: 'Dr. Marie Leblanc',
      specialty: language === 'fr' ? 'Médecine générale' : 'General Practice',
      clinic: language === 'fr' ? 'Clinique Sandy Hill' : 'Sandy Hill Clinic',
      address: '221 Nelson St, Ottawa',
      distance: '3.8 km',
      waitTime: '30-45 min',
      accepting: true,
      languages: ['Français', 'English'],
    },
    {
      name: 'Dr. James Chen',
      specialty: language === 'fr' ? 'Pédiatrie' : 'Pediatrics',
      clinic: 'Appletree Medical Group',
      address: '1385 Bank St, Ottawa',
      distance: '5.1 km',
      waitTime: '25-35 min',
      accepting: false,
      languages: ['English', 'Mandarin'],
    },
    {
      name: 'Dr. Amira Patel',
      specialty: language === 'fr' ? 'Médecine interne' : 'Internal Medicine',
      clinic: language === 'fr' ? 'Clinique Centretown' : 'Centretown Clinic',
      address: '420 Cooper St, Ottawa',
      distance: '3.2 km',
      waitTime: '15-25 min',
      accepting: true,
      languages: ['English', 'Hindi', 'Punjabi'],
    },
    {
      name: 'Dr. Pierre Dubois',
      specialty: language === 'fr' ? 'Médecine familiale' : 'Family Medicine',
      clinic: language === 'fr' ? 'Clinique Montfort' : 'Montfort Clinic',
      address: '713 Montreal Rd, Ottawa',
      distance: '6.5 km',
      waitTime: '20-30 min',
      accepting: true,
      languages: ['Français', 'English'],
    },
  ];

  const hospitals = [
    {
      name: language === 'fr' ? 'Hôpital d\'Ottawa - Campus Général' : 'The Ottawa Hospital - General Campus',
      address: '501 Smyth Rd, Ottawa',
      distance: '7.2 km',
      waitTime: '2h 15min',
      severity: 'medium',
      departments: [
        language === 'fr' ? 'Urgences' : 'Emergency',
        language === 'fr' ? 'Cardiologie' : 'Cardiology',
        language === 'fr' ? 'Chirurgie' : 'Surgery'
      ],
    },
    {
      name: language === 'fr' ? 'Hôpital d\'Ottawa - Campus Civic' : 'The Ottawa Hospital - Civic Campus',
      address: '1053 Carling Ave, Ottawa',
      distance: '5.8 km',
      waitTime: '1h 45min',
      severity: 'low',
      departments: [
        language === 'fr' ? 'Urgences' : 'Emergency',
        language === 'fr' ? 'Neurologie' : 'Neurology',
        language === 'fr' ? 'Oncologie' : 'Oncology'
      ],
    },
    {
      name: language === 'fr' ? 'Hôpital Queensway Carleton' : 'Queensway Carleton Hospital',
      address: '3045 Baseline Rd, Ottawa',
      distance: '9.1 km',
      waitTime: '3h 30min',
      severity: 'high',
      departments: [
        language === 'fr' ? 'Urgences' : 'Emergency',
        language === 'fr' ? 'Orthopédie' : 'Orthopedics',
        language === 'fr' ? 'Médecine générale' : 'General Medicine'
      ],
    },
    {
      name: language === 'fr' ? 'Hôpital Montfort' : 'Montfort Hospital',
      address: '713 Montreal Rd, Ottawa',
      distance: '6.5 km',
      waitTime: '2h 00min',
      severity: 'medium',
      departments: [
        language === 'fr' ? 'Urgences' : 'Emergency',
        language === 'fr' ? 'Maternité' : 'Maternity',
        language === 'fr' ? 'Pédiatrie' : 'Pediatrics'
      ],
    },
    {
      name: language === 'fr' ? 'CHEO (Hôpital pour enfants)' : 'CHEO (Children\'s Hospital)',
      address: '401 Smyth Rd, Ottawa',
      distance: '7.0 km',
      waitTime: '1h 30min',
      severity: 'low',
      departments: [
        language === 'fr' ? 'Urgences pédiatriques' : 'Pediatric Emergency',
        language === 'fr' ? 'Soins intensifs' : 'Intensive Care',
        language === 'fr' ? 'Spécialités' : 'Specialties'
      ],
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-emerald-100 text-emerald-700 border-emerald-300';
      case 'medium':
        return 'bg-amber-100 text-amber-700 border-amber-300';
      case 'high':
        return 'bg-rose-100 text-rose-700 border-rose-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-emerald-900">{t('where.title')}</h1>
          <p className="text-lg text-emerald-700">{t('where.subtitle')}</p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedCategory('services')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === 'services'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
            }`}
          >
            {language === 'fr' ? 'Services de santé' : 'Health Services'}
          </button>
          <button
            onClick={() => setSelectedCategory('doctors')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === 'doctors'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
            }`}
          >
            {language === 'fr' ? 'Médecins disponibles' : 'Available Doctors'}
          </button>
          <button
            onClick={() => setSelectedCategory('hospitals')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === 'hospitals'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
            }`}
          >
            {language === 'fr' ? 'Hôpitaux' : 'Hospitals'}
          </button>
        </div>

        {/* Services Grid */}
        {selectedCategory === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl p-6 shadow-md border transition-all hover:shadow-xl ${
                    service.recommended
                      ? 'border-emerald-400 ring-2 ring-emerald-200'
                      : 'border-emerald-100 hover:border-emerald-300'
                  }`}
                >
                  {service.recommended && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                        {t('where.recommended')}
                      </span>
                    </div>
                  )}

                  <div className={`w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 text-emerald-700`} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-emerald-900">{service.title}</h3>
                  <p className="text-emerald-700 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.actions.map((action, index) => {
                      const ActionIcon = action.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            if (action.action) {
                              window.location.href = `tel:${action.action}`;
                            } else if (action.link) {
                              window.location.href = action.link;
                            }
                          }}
                          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
                        >
                          <ActionIcon className="w-4 h-4" />
                          <span>{action.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Doctors List */}
        {selectedCategory === 'doctors' && (
          <div className="space-y-4">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-emerald-100 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-emerald-900 mb-1">{doctor.name}</h3>
                        <p className="text-emerald-700">{doctor.specialty}</p>
                      </div>
                      {doctor.accepting && (
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                          {language === 'fr' ? 'Accepte nouveaux patients' : 'Accepting Patients'}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-emerald-700">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4" />
                        <span>{doctor.clinic}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{doctor.address}</span>
                        <span className="text-emerald-600">• {doctor.distance}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{language === 'fr' ? 'Attente' : 'Wait'}: {doctor.waitTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{doctor.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-full lg:w-auto">
                    <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-colors">
                      {language === 'fr' ? 'Prendre rendez-vous' : 'Book Appointment'}
                    </button>
                    <button className="px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors">
                      {language === 'fr' ? 'Voir profil' : 'View Profile'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hospitals List */}
        {selectedCategory === 'hospitals' && (
          <div className="space-y-6">
            {hospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-emerald-100 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-emerald-900">{hospital.name}</h3>
                    <div className="flex items-center space-x-2 text-emerald-700 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{hospital.address}</span>
                      <span className="text-emerald-600">• {hospital.distance}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {hospital.departments.map((dept, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                        >
                          {dept}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="text-center">
                      <div className={`px-6 py-3 rounded-xl border-2 ${getSeverityColor(hospital.severity)}`}>
                        <div className="text-sm font-medium mb-1">{language === 'fr' ? 'Temps d\'attente' : 'Wait Time'}</div>
                        <div className="text-2xl font-bold">{hospital.waitTime}</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                      <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-colors flex items-center justify-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>{language === 'fr' ? 'Détails' : 'Details'}</span>
                      </button>
                      <button className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors flex items-center justify-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{language === 'fr' ? 'Itinéraire' : 'Directions'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

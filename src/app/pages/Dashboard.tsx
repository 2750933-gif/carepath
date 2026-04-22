import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router';
import { Users, UserPlus, Activity, CheckCircle, TrendingUp, Search, Eye, Calendar, Coins, CreditCard, Plus, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const { t, language } = useLanguage();
  const { credits, transactions } = useUser();
  const navigate = useNavigate();

  // Données réalistes pour les graphiques
  const userGrowthData = [
    { month: language === 'fr' ? 'Jan' : 'Jan', users: 8420, newUsers: 1240 },
    { month: language === 'fr' ? 'Fév' : 'Feb', users: 9680, newUsers: 1260 },
    { month: language === 'fr' ? 'Mar' : 'Mar', users: 10920, newUsers: 1240 },
    { month: language === 'fr' ? 'Avr' : 'Apr', users: 12140, newUsers: 1220 },
    { month: language === 'fr' ? 'Mai' : 'May', users: 11890, newUsers: -250 },
    { month: language === 'fr' ? 'Juin' : 'Jun', users: 12547, newUsers: 657 },
  ];

  const appointmentsData = [
    { day: language === 'fr' ? 'Lun' : 'Mon', appointments: 145, completed: 132 },
    { day: language === 'fr' ? 'Mar' : 'Tue', appointments: 178, completed: 165 },
    { day: language === 'fr' ? 'Mer' : 'Wed', appointments: 156, completed: 148 },
    { day: language === 'fr' ? 'Jeu' : 'Thu', appointments: 189, completed: 176 },
    { day: language === 'fr' ? 'Ven' : 'Fri', appointments: 201, completed: 188 },
    { day: language === 'fr' ? 'Sam' : 'Sat', appointments: 98, completed: 92 },
    { day: language === 'fr' ? 'Dim' : 'Sun', appointments: 67, completed: 61 },
  ];

  const servicesDistribution = [
    { name: language === 'fr' ? 'Cliniques' : 'Clinics', value: 4523, color: '#475569' },
    { name: language === 'fr' ? 'Télémédecine' : 'Telemedicine', value: 2891, color: '#6366f1' },
    { name: language === 'fr' ? 'Urgences' : 'Emergency', value: 1234, color: '#ef4444' },
    { name: language === 'fr' ? 'Pharmacies' : 'Pharmacies', value: 3456, color: '#10b981' },
    { name: language === 'fr' ? 'Autres' : 'Others', value: 1542, color: '#94a3b8' },
  ];

  const activityData = [
    { hour: '00h', searches: 23, appointments: 5 },
    { hour: '04h', searches: 12, appointments: 2 },
    { hour: '08h', searches: 245, appointments: 78 },
    { hour: '12h', searches: 456, appointments: 156 },
    { hour: '16h', searches: 378, appointments: 134 },
    { hour: '20h', searches: 289, appointments: 89 },
    { hour: '23h', searches: 67, appointments: 12 },
  ];

  const kpis = [
    {
      title: t('dashboard.users'),
      value: '12,547',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'indigo',
      previous: '11,168',
    },
    {
      title: t('dashboard.newUsers'),
      value: '1,234',
      subtitle: language === 'fr' ? 'Cette semaine' : 'This week',
      change: '+8.2%',
      trend: 'up',
      icon: UserPlus,
      color: 'emerald',
      previous: '1,141',
    },
    {
      title: t('dashboard.sessions'),
      value: '45,678',
      subtitle: language === 'fr' ? 'Ce mois' : 'This month',
      change: '+15.3%',
      trend: 'up',
      icon: Activity,
      color: 'cyan',
      previous: '39,612',
    },
    {
      title: t('dashboard.completedSessions'),
      value: '78.4%',
      change: '+5.1%',
      trend: 'up',
      icon: CheckCircle,
      color: 'teal',
      previous: '74.6%',
    },
    {
      title: t('dashboard.recommendations'),
      value: '65.2%',
      change: '+3.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'orange',
      previous: '62.8%',
    },
    {
      title: t('dashboard.searches'),
      value: '8,945',
      change: '+22.1%',
      trend: 'up',
      icon: Search,
      color: 'pink',
      previous: '7,327',
    },
    {
      title: t('dashboard.waitViews'),
      value: '15,234',
      change: '+18.7%',
      trend: 'up',
      icon: Eye,
      color: 'violet',
      previous: '12,837',
    },
    {
      title: t('dashboard.bookings'),
      value: '3,456',
      change: '+9.4%',
      trend: 'up',
      icon: Calendar,
      color: 'rose',
      previous: '3,160',
    },
  ];

  const recentActivity = [
    {
      user: 'Marie L.',
      action: language === 'fr' ? 'A trouvé un médecin de famille' : 'Found a family doctor',
      time: language === 'fr' ? 'Il y a 5 minutes' : '5 minutes ago',
    },
    {
      user: 'Jean P.',
      action: language === 'fr' ? 'A consulté les temps d\'attente' : 'Checked wait times',
      time: language === 'fr' ? 'Il y a 12 minutes' : '12 minutes ago',
    },
    {
      user: 'Sarah K.',
      action: language === 'fr' ? 'A réservé un rendez-vous' : 'Booked an appointment',
      time: language === 'fr' ? 'Il y a 18 minutes' : '18 minutes ago',
    },
    {
      user: 'Ahmed H.',
      action: language === 'fr' ? 'A téléversé un document' : 'Uploaded a document',
      time: language === 'fr' ? 'Il y a 25 minutes' : '25 minutes ago',
    },
    {
      user: 'Linda C.',
      action: language === 'fr' ? 'A laissé un avis' : 'Left a review',
      time: language === 'fr' ? 'Il y a 32 minutes' : '32 minutes ago',
    },
  ];

  const topClinics = [
    {
      name: language === 'fr' ? 'Clinique médicale Gloucester' : 'Gloucester Medical Clinic',
      applications: 245,
      acceptanceRate: 68,
      trend: 'up',
    },
    {
      name: language === 'fr' ? 'Centre de santé familiale Carlington' : 'Carlington Family Health Centre',
      applications: 198,
      acceptanceRate: 72,
      trend: 'up',
    },
    {
      name: language === 'fr' ? 'Appletree Medical Group' : 'Appletree Medical Group',
      applications: 176,
      acceptanceRate: 45,
      trend: 'down',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-green-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-emerald-900">{t('dashboard.title')}</h1>
            <p className="text-lg text-emerald-700">{t('dashboard.overview')}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-emerald-700">{language === 'fr' ? 'Dernière mise à jour' : 'Last updated'}</p>
            <p className="text-sm font-semibold text-emerald-900">{new Date().toLocaleString(language === 'fr' ? 'fr-FR' : 'en-US')}</p>
          </div>
        </div>

        {/* Credits Card */}
        <div className="mb-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 mb-2 text-sm uppercase tracking-wide">{language === 'fr' ? 'Votre solde' : 'Your Balance'}</p>
              <div className="flex items-center space-x-3">
                <Coins className="w-10 h-10" />
                <span className="text-5xl font-bold">{credits}</span>
                <span className="text-2xl text-emerald-100">{language === 'fr' ? 'crédits' : 'credits'}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/pricing')}
              className="flex items-center space-x-2 bg-white text-emerald-700 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors shadow-lg"
            >
              <Plus className="w-5 h-5" />
              <span className="font-semibold">{language === 'fr' ? 'Acheter des crédits' : 'Buy Credits'}</span>
            </button>
          </div>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            const TrendIcon = kpi.trend === 'up' ? ArrowUp : ArrowDown;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-emerald-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${kpi.color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${kpi.color}-600`} />
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                    kpi.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    <TrendIcon className="w-3 h-3" />
                    <span className="text-xs font-semibold">{kpi.change}</span>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-emerald-700 mb-1">{kpi.title}</h3>
                <div className="flex items-baseline space-x-2">
                  <p className="text-2xl font-bold text-emerald-900">{kpi.value}</p>
                  {kpi.subtitle && (
                    <span className="text-xs text-emerald-600">{kpi.subtitle}</span>
                  )}
                </div>
                <p className="text-xs text-emerald-600 mt-1">
                  {language === 'fr' ? 'vs' : 'vs'} {kpi.previous} {language === 'fr' ? 'précéd.' : 'prev.'}
                </p>
              </div>
            );
          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* User Growth Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-emerald-100">
            <h2 className="text-xl font-bold text-emerald-900 mb-6">
              {language === 'fr' ? 'Croissance des utilisateurs' : 'User Growth'}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userGrowthData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  labelStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Appointments Chart */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-emerald-100">
            <h2 className="text-xl font-bold text-emerald-900 mb-6">
              {language === 'fr' ? 'Rendez-vous de la semaine' : 'Weekly Appointments'}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={appointmentsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  labelStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                />
                <Legend />
                <Bar dataKey="appointments" fill="#06b6d4" name={language === 'fr' ? 'Total' : 'Total'} radius={[8, 8, 0, 0]} />
                <Bar dataKey="completed" fill="#10b981" name={language === 'fr' ? 'Complétés' : 'Completed'} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Services Distribution */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-emerald-100">
            <h2 className="text-xl font-bold text-emerald-900 mb-6">
              {language === 'fr' ? 'Distribution des services' : 'Services Distribution'}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={servicesDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {servicesDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Activity by Hour */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-emerald-100">
            <h2 className="text-xl font-bold text-emerald-900 mb-6">
              {language === 'fr' ? 'Activité par heure' : 'Activity by Hour'}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="hour" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  labelStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                />
                <Legend />
                <Line type="monotone" dataKey="searches" stroke="#8b5cf6" strokeWidth={2} name={language === 'fr' ? 'Recherches' : 'Searches'} />
                <Line type="monotone" dataKey="appointments" stroke="#f59e0b" strokeWidth={2} name={language === 'fr' ? 'Rendez-vous' : 'Appointments'} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        {transactions.length > 0 && (
          <div className="mb-8 bg-white rounded-xl shadow-md p-8 border border-emerald-100">
            <h2 className="text-xl font-bold text-emerald-900 mb-6">
              {language === 'fr' ? 'Dernières transactions' : 'Recent Transactions'}
            </h2>
            <div className="space-y-4">
              {transactions.slice(0, 5).map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-lg border border-emerald-200 hover:bg-emerald-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900">{transaction.plan}</h3>
                      <p className="text-sm text-emerald-700">
                        {new Date(transaction.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-emerald-900">{transaction.amount}€</p>
                    <p className="text-sm text-emerald-600 font-semibold">+{transaction.credits} crédits</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-emerald-100">
            <h2 className="text-xl font-bold text-emerald-900 mb-6">
              {language === 'fr' ? 'Activité récente' : 'Recent Activity'}
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-emerald-50/50 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-emerald-900">{activity.user}</p>
                    <p className="text-sm text-emerald-700">{activity.action}</p>
                    <p className="text-xs text-emerald-600 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Clinics */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-emerald-100">
            <h2 className="text-xl font-bold text-emerald-900 mb-6">
              {language === 'fr' ? 'Cliniques les plus populaires' : 'Most Popular Clinics'}
            </h2>
            <div className="space-y-4">
              {topClinics.map((clinic, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-lg border border-emerald-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900">{clinic.name}</h3>
                      <p className="text-sm text-emerald-700">
                        {clinic.applications} {language === 'fr' ? 'demandes' : 'applications'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <p className="text-xl font-bold text-emerald-900">{clinic.acceptanceRate}%</p>
                      {clinic.trend === 'up' ? (
                        <ArrowUp className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-rose-600" />
                      )}
                    </div>
                    <p className="text-xs text-emerald-700">
                      {language === 'fr' ? 'Taux d\'acceptation' : 'Acceptance Rate'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

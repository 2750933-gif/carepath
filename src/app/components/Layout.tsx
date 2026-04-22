import { Outlet, Link, useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { Home, FileText, MapPin, Clock, UserPlus, Calendar, History, FolderOpen, FileCheck, Star, HelpCircle, LayoutDashboard, Menu, X, Globe, Coins, CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const { t, language, setLanguage } = useLanguage();
  const { credits } = useUser();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('nav.home'), path: '/', icon: Home },
    { name: t('nav.describe'), path: '/describe', icon: FileText },
    { name: t('nav.whereToGo'), path: '/where-to-go', icon: MapPin },
    { name: t('nav.waitTimes'), path: '/wait-times', icon: Clock },
    { name: t('nav.familyDoctor'), path: '/family-doctor', icon: UserPlus },
    { name: t('nav.appointment'), path: '/appointment', icon: Calendar },
    { name: t('nav.history'), path: '/history', icon: History },
    { name: t('nav.documents'), path: '/documents', icon: FolderOpen },
    { name: t('nav.admin'), path: '/admin', icon: FileCheck },
    { name: t('nav.testimonials'), path: '/testimonials', icon: Star },
    { name: t('nav.help'), path: '/help', icon: HelpCircle },
  ];

  const adminNav = { name: t('nav.dashboard'), path: '/dashboard', icon: LayoutDashboard };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="min-h-screen bg-green-50/30">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                CarePath
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-emerald-900 hover:bg-emerald-50/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              {/* Pricing Link - Desktop */}
              <Link
                to="/pricing"
                className="hidden lg:flex items-center space-x-2 px-4 py-2 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">{t('nav.pricing')}</span>
              </Link>

              {/* Credits Display - Desktop */}
              <Link
                to="/pricing"
                className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-sm"
              >
                <Coins className="w-4 h-4" />
                <span className="text-sm font-semibold">{credits}</span>
              </Link>

              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-emerald-50 text-emerald-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-emerald-100 bg-white">
            <nav className="px-4 py-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-emerald-900 hover:bg-emerald-50/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              <div className="border-t border-emerald-100 mt-4 pt-4">
                <Link
                  to={adminNav.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-emerald-900 hover:bg-emerald-50/50 mb-2"
                >
                  <adminNav.icon className="w-5 h-5" />
                  <span>{adminNav.name}</span>
                </Link>

                {/* Pricing Link */}
                <Link
                  to="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-emerald-900 hover:bg-emerald-50/50 border border-emerald-200 mb-2"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>{t('nav.pricing')}</span>
                </Link>

                {/* Credits in Mobile Menu */}
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <Coins className="w-5 h-5" />
                    <span className="font-semibold">{language === 'fr' ? 'Mes crédits' : 'My Credits'}</span>
                  </div>
                  <span className="text-xl font-bold">{credits}</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-emerald-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">CarePath</h3>
              <p className="text-emerald-700">
                {language === 'fr'
                  ? 'Votre guide intelligent dans le système de santé canadien.'
                  : 'Your smart guide through the Canadian health system.'}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">
                {language === 'fr' ? 'Liens rapides' : 'Quick Links'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/help" className="text-emerald-700 hover:text-emerald-900 transition-colors">
                    {t('help.disclaimer')}
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-emerald-700 hover:text-emerald-900 transition-colors">
                    {t('help.privacy')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">
                {language === 'fr' ? 'Contact' : 'Contact'}
              </h3>
              <p className="text-emerald-700">
                {language === 'fr'
                  ? 'Pour les urgences, composez le 911'
                  : 'For emergencies, dial 911'}
              </p>
              <p className="text-emerald-700 mt-2">
                {language === 'fr'
                  ? 'Conseils santé : 811'
                  : 'Health advice: 811'}
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-100 text-center text-emerald-700">
            © 2026 CarePath. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'fr' ? 'Page non trouvée' : 'Page Not Found'}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {language === 'fr'
            ? 'Désolé, la page que vous recherchez n\'existe pas.'
            : 'Sorry, the page you are looking for does not exist.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all"
          >
            <Home className="w-5 h-5" />
            <span>{language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === 'fr' ? 'Retour' : 'Go Back'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

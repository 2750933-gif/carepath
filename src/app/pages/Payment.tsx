import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { useUser } from '../context/UserContext';
import { CreditCard, Smartphone, Wallet, CheckCircle, Lock, ArrowLeft } from 'lucide-react';

type PaymentMethod = 'card' | 'apple' | 'google' | 'paypal';

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { addCredits, addTransaction } = useUser();

  const plan = location.state?.plan || {
    id: 'basic',
    name: 'Basic',
    price: 4.99,
    credits: 50,
    color: 'blue',
  };

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Card form state
  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: '',
  });

  const paymentMethods = [
    {
      id: 'card' as PaymentMethod,
      name: language === 'fr' ? 'Carte bancaire' : 'Credit Card',
      icon: CreditCard,
      available: true,
    },
    {
      id: 'apple' as PaymentMethod,
      name: 'Apple Pay',
      icon: Smartphone,
      available: true,
    },
    {
      id: 'google' as PaymentMethod,
      name: 'Google Pay',
      icon: Smartphone,
      available: true,
    },
    {
      id: 'paypal' as PaymentMethod,
      name: 'PayPal',
      icon: Wallet,
      available: true,
    },
  ];

  const handleCardInputChange = (field: string, value: string) => {
    if (field === 'number') {
      value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (value.replace(/\s/g, '').length > 16) return;
    }
    if (field === 'expiry') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      if (value.length > 5) return;
    }
    if (field === 'cvv') {
      value = value.replace(/\D/g, '');
      if (value.length > 3) return;
    }

    setCardData({ ...cardData, [field]: value });
  };

  const getCardType = (number: string): string | null => {
    const cleaned = number.replace(/\s/g, '');
    if (/^4/.test(cleaned)) return 'visa';
    if (/^5[1-5]/.test(cleaned)) return 'mastercard';
    if (/^3[47]/.test(cleaned)) return 'amex';
    return null;
  };

  const handlePayment = async () => {
    setProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create transaction
    const transaction = {
      id: Math.random().toString(36).substr(2, 9),
      plan: plan.name,
      amount: plan.price,
      credits: plan.credits,
      date: new Date().toISOString(),
      status: 'success' as const,
    };

    // Add credits and transaction
    addCredits(plan.credits);
    addTransaction(transaction);

    setProcessing(false);
    setSuccess(true);

    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

  if (success) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-green-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {language === 'fr' ? 'Paiement réussi !' : 'Payment Successful!'}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'fr'
                ? `${plan.credits} crédits ont été ajoutés à votre compte`
                : `${plan.credits} credits have been added to your account`}
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-6 border border-blue-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">{language === 'fr' ? 'Forfait' : 'Plan'}:</span>
                <span className="font-semibold text-gray-900">{plan.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">{language === 'fr' ? 'Montant' : 'Amount'}:</span>
                <span className="font-semibold text-gray-900">{plan.price}€</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{language === 'fr' ? 'Crédits' : 'Credits'}:</span>
                <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-xl">
                  +{plan.credits}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              {language === 'fr'
                ? 'Redirection vers le tableau de bord...'
                : 'Redirecting to dashboard...'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate('/pricing')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{language === 'fr' ? 'Retour aux forfaits' : 'Back to plans'}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                {language === 'fr' ? 'Informations de paiement' : 'Payment Information'}
              </h2>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4 text-gray-900">
                  {language === 'fr' ? 'Méthode de paiement' : 'Payment Method'}
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        disabled={!method.available}
                        className={`flex items-center justify-center space-x-3 p-4 border-2 rounded-xl transition-all ${
                          paymentMethod === method.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-300'
                        } ${!method.available && 'opacity-50 cursor-not-allowed'}`}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="font-medium">{method.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Card Payment Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">
                      {language === 'fr' ? 'Nom sur la carte' : 'Name on Card'}
                    </label>
                    <input
                      type="text"
                      value={cardData.name}
                      onChange={(e) => handleCardInputChange('name', e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-900">
                      {language === 'fr' ? 'Numéro de carte' : 'Card Number'}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cardData.number}
                        onChange={(e) => handleCardInputChange('number', e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        <img
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='24'%3E%3Crect fill='%231434CB' width='40' height='24' rx='4'/%3E%3Cpath fill='%23fff' d='M16 8h8v8h-8z'/%3E%3Cpath fill='%23FFAC12' d='M20 8h4v8h-4z'/%3E%3C/svg%3E"
                          alt="Visa"
                          className={`h-6 ${getCardType(cardData.number) === 'visa' ? 'opacity-100' : 'opacity-30'}`}
                        />
                        <img
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='24'%3E%3Crect fill='%23EB001B' width='40' height='24' rx='4'/%3E%3Ccircle fill='%23FF5F00' cx='20' cy='12' r='7'/%3E%3Ccircle fill='%23F79E1B' cx='20' cy='12' r='7'/%3E%3C/svg%3E"
                          alt="Mastercard"
                          className={`h-6 ${getCardType(cardData.number) === 'mastercard' ? 'opacity-100' : 'opacity-30'}`}
                        />
                        <img
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='24'%3E%3Crect fill='%23006FCF' width='40' height='24' rx='4'/%3E%3Ctext x='20' y='16' text-anchor='middle' fill='%23fff' font-family='Arial' font-size='10' font-weight='bold'%3EAE%3C/text%3E%3C/svg%3E"
                          alt="Amex"
                          className={`h-6 ${getCardType(cardData.number) === 'amex' ? 'opacity-100' : 'opacity-30'}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">
                        {language === 'fr' ? 'Date d\'expiration' : 'Expiry Date'}
                      </label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) => handleCardInputChange('expiry', e.target.value)}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">CVV</label>
                      <input
                        type="text"
                        value={cardData.cvv}
                        onChange={(e) => handleCardInputChange('cvv', e.target.value)}
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Apple Pay */}
              {paymentMethod === 'apple' && (
                <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-8 text-center">
                  <Smartphone className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Apple Pay</h3>
                  <p className="text-gray-300 mb-6">
                    {language === 'fr'
                      ? 'Paiement sécurisé avec Touch ID ou Face ID'
                      : 'Secure payment with Touch ID or Face ID'}
                  </p>
                </div>
              )}

              {/* Google Pay */}
              {paymentMethod === 'google' && (
                <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 text-center">
                  <Smartphone className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-2xl font-bold mb-2">Google Pay</h3>
                  <p className="text-gray-600 mb-6">
                    {language === 'fr'
                      ? 'Paiement rapide et sécurisé avec Google'
                      : 'Fast and secure payment with Google'}
                  </p>
                </div>
              )}

              {/* PayPal */}
              {paymentMethod === 'paypal' && (
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center">
                  <Wallet className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">PayPal</h3>
                  <p className="text-blue-100 mb-6">
                    {language === 'fr'
                      ? 'Vous serez redirigé vers PayPal pour finaliser le paiement'
                      : 'You will be redirected to PayPal to complete the payment'}
                  </p>
                </div>
              )}

              {/* Security Notice */}
              <div className="mt-6 flex items-start space-x-3 p-4 bg-green-50 rounded-xl border border-green-200">
                <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  {language === 'fr'
                    ? 'Vos informations de paiement sont sécurisées et chiffrées. Nous n\'enregistrons jamais vos données de carte bancaire.'
                    : 'Your payment information is secure and encrypted. We never store your credit card data.'}
                </p>
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePayment}
                disabled={processing || (paymentMethod === 'card' && (!cardData.name || !cardData.number || !cardData.expiry || !cardData.cvv))}
                className="w-full mt-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {processing ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{language === 'fr' ? 'Traitement en cours...' : 'Processing...'}</span>
                  </span>
                ) : (
                  `${language === 'fr' ? 'Payer' : 'Pay'} ${plan.price}€`
                )}
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 sticky top-4">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                {language === 'fr' ? 'Récapitulatif' : 'Order Summary'}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">{language === 'fr' ? 'Forfait' : 'Plan'}:</span>
                  <span className="font-semibold text-gray-900">{plan.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{language === 'fr' ? 'Crédits' : 'Credits'}:</span>
                  <span className="font-semibold text-gray-900">{plan.credits}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-semibold text-gray-900">{language === 'fr' ? 'Total' : 'Total'}:</span>
                  <span className="text-2xl font-bold text-gray-900">{plan.price}€</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-blue-200">
                <p className="text-sm text-gray-700 text-center">
                  {language === 'fr'
                    ? '🎉 Vos crédits seront disponibles immédiatement après le paiement'
                    : '🎉 Your credits will be available immediately after payment'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

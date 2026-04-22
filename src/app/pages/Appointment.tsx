import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';

export default function Appointment() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: 'gp', label: t('appointment.service.gp') },
    { id: 'specialist', label: t('appointment.service.specialist') },
    { id: 'telehealth', label: t('appointment.service.telehealth') },
  ];

  const dates = [
    { id: '2026-04-21', label: language === 'fr' ? 'Lun 21 avril' : 'Mon Apr 21', available: true },
    { id: '2026-04-22', label: language === 'fr' ? 'Mar 22 avril' : 'Tue Apr 22', available: true },
    { id: '2026-04-23', label: language === 'fr' ? 'Mer 23 avril' : 'Wed Apr 23', available: false },
    { id: '2026-04-24', label: language === 'fr' ? 'Jeu 24 avril' : 'Thu Apr 24', available: true },
    { id: '2026-04-25', label: language === 'fr' ? 'Ven 25 avril' : 'Fri Apr 25', available: true },
  ];

  const timeSlots = [
    { id: '09:00', label: '09:00 AM', available: true },
    { id: '10:00', label: '10:00 AM', available: true },
    { id: '11:00', label: '11:00 AM', available: false },
    { id: '13:00', label: '01:00 PM', available: true },
    { id: '14:00', label: '02:00 PM', available: true },
    { id: '15:00', label: '03:00 PM', available: true },
    { id: '16:00', label: '04:00 PM', available: false },
  ];

  const handleBooking = () => {
    setStep(4);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{t('appointment.title')}</h1>
          <p className="text-lg text-gray-600">{t('appointment.subtitle')}</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center flex-1">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= stepNum
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {stepNum}
                  </div>
                  <span className={`text-sm font-medium ${step >= stepNum ? 'text-gray-900' : 'text-gray-500'}`}>
                    {stepNum === 1 && t('appointment.service')}
                    {stepNum === 2 && t('appointment.selectDate')}
                    {stepNum === 3 && t('appointment.selectTime')}
                  </span>
                </div>
                {stepNum < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step > stepNum ? 'bg-gradient-to-r from-blue-600 to-green-600' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('appointment.service')}</h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center p-6 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={selectedService === service.id}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-4 text-lg text-gray-900">{service.label}</span>
                  </label>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!selectedService}
                className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('common.next')}
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('appointment.selectDate')}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {dates.map((date) => (
                  <button
                    key={date.id}
                    onClick={() => date.available && setSelectedDate(date.id)}
                    disabled={!date.available}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedDate === date.id
                        ? 'border-blue-500 bg-blue-50'
                        : date.available
                        ? 'border-gray-300 hover:border-blue-300'
                        : 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <CalendarIcon className="w-6 h-6 mb-2" />
                      <span className="text-sm font-medium text-center">{date.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  {t('common.back')}
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('common.next')}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('appointment.selectTime')}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => slot.available && setSelectedTime(slot.id)}
                    disabled={!slot.available}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedTime === slot.id
                        ? 'border-blue-500 bg-blue-50'
                        : slot.available
                        ? 'border-gray-300 hover:border-blue-300'
                        : 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <Clock className="w-6 h-6 mb-2" />
                      <span className="text-sm font-medium">{slot.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  {t('common.back')}
                </button>
                <button
                  onClick={handleBooking}
                  disabled={!selectedTime}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('appointment.bookNow')}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('appointment.confirmed')}</h2>
              <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('appointment.service')}:</span>
                    <span className="font-semibold text-gray-900">
                      {services.find((s) => s.id === selectedService)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === 'fr' ? 'Date' : 'Date'}:</span>
                    <span className="font-semibold text-gray-900">
                      {dates.find((d) => d.id === selectedDate)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === 'fr' ? 'Heure' : 'Time'}:</span>
                    <span className="font-semibold text-gray-900">
                      {timeSlots.find((t) => t.id === selectedTime)?.label}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setStep(1);
                  setSelectedService('');
                  setSelectedDate('');
                  setSelectedTime('');
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:to-green-700 transition-all"
              >
                {language === 'fr' ? 'Nouveau rendez-vous' : 'Book Another'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

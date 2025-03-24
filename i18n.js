import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Создаем кастомный детектор языка
const customLanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const detectedLng = typeof window !== 'undefined' 
      ? window.localStorage.getItem('i18nextLng') || 'ru'
      : 'ru';
    callback(detectedLng);
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(Backend)
  .use(customLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'kg', 'uz'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false, // Отключаем Suspense для SSR
    }
  });

export default i18n;
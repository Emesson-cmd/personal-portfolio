import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import ptTranslation from './locales/pt.json';
import esTranslation from './locales/es.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbacklng: 'en',
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

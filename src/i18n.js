// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    language: 'English',
    // Add other English translations here
  },
  ar: {
    language: 'العربية',
    // Add other Arabic translations here
  },
};

const i18n = createI18n({
  locale: 'en', // set default locale
  fallbackLocale: 'en', // fallback locale
  messages,
});

export default i18n;

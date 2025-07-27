import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    navItems: {
                        home: 'Home',
                        schedule: 'Schedule',
                        prices: 'Prices',
                        locations: 'Locations',
                        courses: 'Courses & Classes',
                        contact: 'Contact'
                    },
                    contact: {
                        ourTeam: 'Our Team',
                        questions: "Got a question?\nWe would love to hear from you!"
                    }
                }
            },
            nl: {
                translation: {
                    navItems: {
                        home: 'Home',
                        schedule: 'Schema',
                        prices: 'Prijzen',
                        locations: 'Locaties',
                        courses: 'Cursussen & Klassen',
                        contact: 'Contact'
                    },
                    contact: {
                        ourTeam: 'Ons Team',
                        questions: "Heb je een vraag?\nWij horen graag van u!"
                    }
                }
            }
        }
    });

export default i18n;
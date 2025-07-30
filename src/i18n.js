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
                    home: {
                        news: {
                            header: 'News',
                            tryOuts: {
                                title: 'Try-Outs starting in September!',
                                content: 'Join our Try-Outs on September 1st, 2nd and 3rd at two beautiful locations! Sign up easily for the level of your choice and try something new.',
                                link: 'Sign up here!'
                            },
                            location: {
                                title: 'Excited to reveal our locations!',
                                content: 'We got you covered in Amsterdam East and West with lovely and spacious dance rooms.',
                                link: 'Join us where ever suits you best.'
                            }
                        },
                        cover: {
                            lineOne: 'At Lumos we can show you the moves and give you the confidence to shine on every dancefloor, everywhere!',
                            lineTwo: 'We offer a range of courses to suit all levels and styles of dance.'
                        }
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
                    home: {
                        news: {
                            header: 'Nieuws',
                            tryOuts: {
                                title: 'Try-Outs vanaf September!',
                                content: 'Word lid van onze Try-Outs op 1, 2 en 3 september op twee prachtige locaties! Meld u gemakkelijk aan voor het niveau van uw keuze en probeer iets nieuws.',
                                link: 'Meld u hier aan!'
                            },
                            location: {
                                title: 'Opgewonden om onze locaties te onthullen!',
                                content: 'We hebben je bedekt in Amsterdam East en West met mooie en ruime dansruimten.',
                                link: 'Ga met ons mee, waar je het beste bij je past.'
                            }
                        },
                        cover: {
                            lineOne: 'Bij Lumos kunnen we je de bewegingen laten zien en je het vertrouwen geven om overal op elke dansvloer te schitteren!',
                            lineTwo: 'We bieden een reeks cursussen die passen bij alle niveaus en stijlen van dans.'
                        }
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
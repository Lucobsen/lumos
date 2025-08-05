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
                            lineOne: 'Vamos a bailar!',
                            lineTwo: 'Never feel lost again at Latin parties! Get dozens of new moves in your pocket within just a few weeks with our classes. Discover how much value Salsa & Bachata can add to your life in so many ways! An experience of instant happiness by moving the body, enjoying the best latin music, and making new friends.',
                            lineThree: 'Time to try something new, whether you’re an experienced dancer or curious to find out what Salsa & Bachata is all about!'
                        }
                    },
                    prices: {
                        header: 'Check out our courses & prices!',
                        sixWeekCourse: {
                            title: '6-week course',
                            beginners: 'for Beginners',
                            improvers: 'for Improvers',
                            info: 'Valid for Salsa or Bachata. Each week you join on the same day and time. You will be registered automatically for all 6 weeks.\n*P.S. Sign up during our Try- Outs and get an amazing discount!'
                        },
                        sixWeekCombo: {
                            title: '6-week combo',
                            subtitle: 'Double the fun:\nSalsa and Bachata for Beginners or Improvers',
                            info: 'Follow a Salsa and Bachata course of Beginners or Improvers. Each week you join on the same days and time. You will be registered automatically for all 12 classes. Valid for 14 weeks.\n*P.S. Sign up during our Try- Outs and get an amazing discount!',
                        },
                        punchCardSix: {
                            title: 'Punch card - 6 classes',
                            subtitle: 'for Improvers, Intermediate and Solo classes',
                            info: 'Purchase 6 separate classes and join whenever it suits you. Register for each class through our Bueno Students app. Valid for 8 weeks.\n*P.S. Sign up during our Try- Outs and get an amazing discount!',
                        },
                        punchCardTwelve: {
                            title: 'Punch card - 12 classes',
                            subtitle: 'for Improvers, Intermediate and Solo classes',
                            info: 'Purchase 12 separate classes and join whenever it suits you. Register for each class through our Bueno Students app. Valid for 4 months.\n*P.S. Sign up during our Try- Outs and get an amazing discount!',
                        },
                        singleClass: {
                            title: 'Single Classes',
                            subtitle: 'for Improvers or Intermediate',
                            info: '1. Select a class in the schedule and register directly for that specific class\n2. Buy a single credit and register later for a class of choice. Valid for 1 month',
                        },
                        buy: 'Buy Item'
                    },
                    locations: {
                        header: 'Come dance at our stunning locations!'
                    },
                    courses: {
                        header: 'Have a look at our classes!'
                    },
                    contact: {
                        ourTeam: 'Our Team',
                        ownerAndTeacher: 'Owner & Teacher',
                        contactUs: "Contact Us",
                        teacher: 'Teacher',
                    }
                }
            },
            nl: {
                translation: {
                    navItems: {
                        home: 'Home',
                        schedule: 'Rooster',
                        prices: 'Prijzen',
                        locations: 'Locaties',
                        courses: 'Cursussen & Lessen',
                        contact: 'Contact'
                    },
                    home: {
                        news: {
                            header: 'Nieuws',
                            tryOuts: {
                                title: 'Try-Outs vanaf september!',
                                content: 'Doe mee aan onze Try-Outs op 1, 2 en 3 september op twee prachtige locaties! Meld je snel aan voor het niveau wat bij je past en probeer iets nieuws :)',
                                link: 'Schrijf je hier in!'
                            },
                            location: {
                                title: 'Bekijk onze nieuwe locaties!',
                                content: 'Wij hebben twee mooie zalen voor jullie met genoeg ruimte om alle nieuwe dansmoves uit te oefenen. In Amsterdam Oost zitten we in de prachtige Kompaszaal op het KNSM eiland en in West gebruiken we de prachtige Veemvloer, naast de Pontsteiger. Een echte Amsterdamse omgeving!',
                                link: 'Ga met ons mee, waar je het beste bij je past.'
                            }
                        },
                        cover: {
                            lineOne: 'Vamos a bailar!',
                            lineTwo: 'Voel je nooit meer ongemakkelijk/verloren op Latin feesten! Al binnen een paar weken heb jij tientallen nieuwe moves in je dans pocket. Ontdek hoeveel waarde Salsa & Bachata aan je leven toevoegt op verschillende manieren! Krijg een instant happiness ervaring door te bewegen, geniet van de beste Latin muziek en maak snel nieuwe vrienden.',
                            lineThree: 'Tijd om iets nieuws te proberen: of je nu een ervaren danser bent of wilt ontdekken waar de hele Salsa & Bachata hype over gaat!',
                        }
                    },
                    prices: {
                        header: 'Bekijk onze cursussen en prijzen!',
                        sixWeekCourse: {
                            title: '6-weekse cursus',
                            beginners: 'voor Beginners',
                            improvers: 'voor Improvers',
                            info: 'Geldig voor Salsa of Bachata. Je danst elke week op dezelfde dag en tijd. We schrijven je automatisch in voor alle 6 weken.\n*P.S. Meld je aan tijdens onze Try-Outs en ontvang geweldige kortingen!'
                        }, sixWeekCombo: {
                            title: '6-weekse combo cursus',
                            subtitle: 'Double the fun:\nSalsa en Bachata voor Beginners of Improvers',
                            info: 'Volg een Salsa én Bachata voor Beginners (level 1) of Improvers (level 2). Je danst elke week op dezelfde dagen en tijden. We schrijven je automatisch in voor alle 12 lessen.\n*P.S. Meld je aan tijdens onze Try-Outs en ontvang geweldige kortingen!',
                        },
                        punchCardSix: {
                            title: 'Strippenkaart - 6 lessen',
                            subtitle: 'voor Improvers, Intermediate en Solo classes',
                            info: 'Krijg 6 losse lessen en schrijf je in wanneer het jou uitkomt. Meld je aan voor een les naar keuze via onze Bueno Students app. Geldig voor 3 maanden voor improvers, intermediate en Footwork lessen.\n*P.S. Meld je aan tijdens onze Try-Outs en ontvang geweldige kortingen!',
                        },
                        punchCardTwelve: {
                            title: 'Strippenkaart - 12 lessen',
                            subtitle: 'voor Improvers, Intermediate en Solo classes',
                            info: 'Krijg 12 losse lessen en schrijf je in wanneer het jou uitkomt. Meld je aan voor een les naar keuze via onze Bueno Students app. Geldig voor 4 maanden voor improvers, intermediate en Footwork lessen.\n*P.S. Meld je aan tijdens onze Try-Outs en ontvang geweldige kortingen!',
                        },
                        singleClass: {
                            title: 'Losse les',
                            subtitle: 'voor Improvers of Intermediate',
                            info: '1. Klik op een les in ons rooster (link to schedule page) en meld je direct aan\n2. Liever op een ander moment? Koop dan hier een losse les en meld je later aan voor een les naar keuze met je credit. Geldig voor 1 maand.',
                        },
                        buy: 'Kopen'
                    },
                    locations: {
                        header: 'Kom dansen op onze prachtige locaties!'
                    },
                    courses: {
                        header: 'Bekijk onze lessen!'
                    },
                    contact: {
                        ourTeam: 'Ons Team',
                        ownerAndTeacher: 'Eigenaar & Docent',
                        teacher: 'Docent',
                        contactUs: "Neem contact met ons op"
                    }
                }
            }
        }
    });

export default i18n;
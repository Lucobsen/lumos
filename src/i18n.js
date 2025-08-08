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
                    days: {
                        monday: 'Monday',
                        tuesday: 'Tuesday',
                        wednesday: 'Wednesday',
                        thursday: 'Thursday',
                        friday: 'Friday',
                        saturday: 'Saturday',
                        sunday: 'Sunday'
                    },
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
                                link: 'Our locations'
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
                            info: 'Valid for Salsa or Bachata. Each week you join on the same day and time. You choose for which Course you sign up.\n*P.S. Sign up during our Try- Outs and get an amazing discount!'
                        },
                        sixWeekCombo: {
                            title: '6-week combo',
                            subtitle: 'Double the fun:\nSalsa and Bachata for Beginners or Improvers',
                            info: 'Follow a Salsa and Bachata course of Beginners or Improvers. Each week you join on the same days and time. You choose for which Beginner or Improver Course you sign up. Valid for 14 weeks.\n*P.S. Sign up during our Try- Outs and get an amazing discount!',
                        },
                        punchCardSix: {
                            title: 'Punch card - 6 single classes',
                            subtitle: 'for Improvers, Intermediate and Solo classes',
                            info: 'Purchase 6 separate classes and join whenever it suits you. Register for each class through our Bueno Students app. Valid for 8 weeks.\n*P.S. Sign up during our Try- Outs and get an amazing discount!',
                        },
                        punchCardTwelve: {
                            title: 'Punch card - 12 single classes',
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
                        header: 'Have a look at our classes!',
                        dates: 'Dates & Times',
                        levelInfo: 'Level Info',
                        info: {
                            salsa: {
                                beginners: 'The First Aid kit of Salsa dancing! You’ll learn the world-famous basic step and start with simple combinations.\nThink of the famous right turn, left turn, Cross Body Lead, and more.\nThis course focuses on timing, musicality, connection, and the core principles of leading and following.',
                                improvers: 'We dive deeper into Cross Body Lead variations (with inside and outside turns), and this is where the real Salsa fun begins!\nYou’ll learn to dance the combinations more smoothly, and we’ll refine your leading and following techniques.\nWe also explore musical accents more consciously and introduce cool moves like the Copa, as well as the universally loved Open Break.',
                                intermediate: 'In this level, we focus more on technique, styling, and musicality — so you can dance freely and confidently on the floor.\nWe’ll work on advanced combinations like Double Spins, 360 Turns, Copa Variations, and Hammerlocks.\nSpecial attention is given to how you execute the moves and whether you stay on beat — ‘cause dancing off beat is something we all want to avoid!'
                            },
                            bachata: {
                                beginners: 'The First Aid kit of Bachata dancing! You’ll learn the world-famous basic step and start with easy combinations. You’ll discover how to dance in a relaxed way to the music and start building a solid connection with your partner. In this level, you’ll learn fun turns, smooth movements, and the basics of leading and following.',
                                improvers: 'In this level, we focus on helping you lead or follow with control and flow. We’ll introduce typical hip movements and the famous head rolls. You’ll notice that you’ll start executing the moves more naturally to the music. Every combination comes with clear technique breakdowns — so it all sticks properly in your muscle memory.',
                                intermediate: 'Here we move into more complex combinations. The pace is a bit faster and you’ll learn exciting figures like Body Rolls, Dips, Shadow Position, and more. You’ll become a more expressive dancer and learn how to interpret the music - together with your partner. We put more emphasis on precise leading and following technique, so you feel confident and comfortable with yourself and your dance partner on the dance floor.',
                                footwork: 'No partner, just you and the music! In this class, it’s all about musicality, body control, and coordination — building on your experience and style. You’ll learn creative step variations and how to connect them to the music, to help you understand Bachata dancing even more! Footwork is a great way to feel more comfortable in your dancing.It’s the perfect space to explore your own movement, improve your technique, and have fun dancing solo!'
                            }
                        }
                    },
                    contact: {
                        ourTeam: 'Our Team',
                        ownerAndTeacher: 'Owner & Teacher',
                        contactUs: "Questions? We are happy to help!",
                        teacher: 'Teacher',
                        faq: {
                            questionOne: 'Do I need to bring a dance partner?',
                            answerOne: 'No! During the classes, we will switch partners, so everyone gets to dance with a partner. If it turns out the ratios are not equal and we need more leaders or followers, we will arrange more people through our Whatsapp Groups. If you prefer not to switch, that is, of course, also fine. However, we always recommend dancing with different people, so your leading/following skills will be developed to the fullest.',
                            questionTwo: 'Can I join a course after it has already started?',
                            answerTwo: 'This is possible for Beginners and Improvers until the 3rd week of the course. This means that it’s possible to miss the first 2 weeks, but not more. Would you still like to join in the 3rd week or later? Please contact us through Whatsapp or Email so we can discuss the options.',
                            questionThree: 'What clothes should I wear?',
                            answerThree: 'Going to dance classes, you should think of it a bit like going to the gym. This doesn’t mean we are going to lift weights or make you run. However, it is important to be able to move your body and lift your arms in a comfortable way. Clothes that are too tight or too warm are going to hinder your dancing. Make sure to wear dancing shoes, or shoes with a sole that allows you to spin. This is especially important for your feet and knees to prevent any pain. When coming straight from work, we ask you to bring an extra/fresh shirt.',
                            questionFour: 'Do you teach Salsa LA or Cuban Salsa?',
                            answerFour: 'We teach Salsa LA On1. This is also called Cross Body lead style or Salsa en Linea.',
                            questionFive: 'What type of Bachata do you teach?',
                            answerFive: 'In Levels 1 we teach a balanced Bachata style without leaning fully into Sensual or Dominican. From Level 2 onwards we lean more into Sensual Style.',
                        }
                    }
                }
            },
            nl: {
                translation: {
                    days: {
                        monday: 'maandag',
                        tuesday: 'dinsdag',
                        wednesday: 'woensdag',
                        thursday: 'donderdag',
                        friday: 'vrijdag',
                        saturday: 'zaterdag',
                        sunday: 'zondag'
                    },
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
                                link: 'Onze locaties'
                            }
                        },
                        cover: {
                            lineOne: 'Vamos a bailar!',
                            lineTwo: 'Voel je nooit meer ongemakkelijk op Latin feesten! Al binnen een paar weken heb jij tientallen nieuwe moves in je dans pocket. Ontdek hoeveel waarde Salsa & Bachata aan je leven toevoegt op verschillende manieren! Krijg een instant happiness ervaring door te bewegen, geniet van de beste Latin muziek en maak snel nieuwe vrienden.',
                            lineThree: 'Tijd om iets nieuws te proberen: of je nu een ervaren danser bent of wilt ontdekken waar de hele Salsa & Bachata hype over gaat!',
                        }
                    },
                    prices: {
                        header: 'Bekijk onze cursussen en prijzen!',
                        sixWeekCourse: {
                            title: '6-weekse cursus',
                            beginners: 'voor Beginners',
                            improvers: 'voor Improvers',
                            info: 'Geldig voor Salsa of Bachata. Je danst elke week op dezelfde dag en tijd. Kies zelf voor welke cursus jij je inschrijft.\n*P.S. Meld je aan tijdens onze Try-Outs en ontvang geweldige kortingen!'
                        }, sixWeekCombo: {
                            title: '6-weekse combo cursus',
                            subtitle: 'Double the fun:\nSalsa en Bachata voor Beginners of Improvers',
                            info: 'Volg een Salsa én Bachata voor Beginners (level 1) of Improvers (level 2). Je danst elke week op dezelfde dagen en tijden. Kies zelf voor welke Beginners- of Improverscursus jij je inschrijft.\n*P.S. Meld je aan tijdens onze Try-Outs en ontvang geweldige kortingen!',
                        },
                        punchCardSix: {
                            title: 'Strippenkaart - 6 losse lessen',
                            subtitle: 'voor Improvers, Intermediate en Solo classes',
                            info: 'Krijg 6 losse lessen en schrijf je in wanneer het jou uitkomt. Meld je aan voor een les naar keuze via onze Bueno Students app. Geldig voor 3 maanden voor improvers, intermediate en Footwork lessen.\n*P.S. Meld je aan tijdens onze Try-Outs en ontvang geweldige kortingen!',
                        },
                        punchCardTwelve: {
                            title: 'Strippenkaart - 12 losse lessen',
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
                        header: 'Bekijk onze lessen!',
                        dates: 'Datum & Tijden',
                        levelInfo: 'Niveau Info',
                        info: {
                            salsa: {
                                beginners: 'De First Aid kit in Salsa dansen! Je leert de wereldberoemde basic step en je begint met eenvoudige combinaties. Zo krijg je de veelvoorkomende right turn, left turn, Cross Body Lead en meer. De nadruk in deze cursus ligt op het tellen, muzikaliteit, connectie en de eerste principes van leiden en volgen.',
                                improvers: 'We verdiepen de Cross Body Lead Variaties (met inside turn, outside turn) en dit is waar de Salsa fun begint! Je leert combinaties vloeiender te dansen en we verbeteren de Leading en Following technieken. We gaan bewuster om met muzikale accenten en introduceren leuke moves zoals de “Copa” en starten met de universele open break.',
                                intermediate: 'In dit niveau is er meer aandacht voor techniek, styling en muzikaliteit — zodat je vrij kunt dansen op de dansvloer. We werken aan meer geavanceerde combinaties zoals Double Spins, 360 turns, Copa Variaties, en Hammerlocks. Er wordt vooral gelet op hoe je alles uitvoert én of het op maat van de muziek is, want dancing off beat willen we natuurlijk voorkomen.',
                            },
                            bachata: {
                                beginners: 'De First Aid kit in Bachata dansen! Je leert de wereldberoemde basic step en je begint met eenvoudige combinaties. Je leert relaxed dansen op de muziek en ontwikkelt een basisconnectie met je partner. Zo leer je in dit niveau leuke draaien, sierlijke bewegingen en de beginselen van leiden en volgen.',
                                improvers: 'In dit niveau zorgen we dat je soepel en met controle leert leiden of volgen. We leren je o.a. de typische hip movements en de beroemde head rolls. Je zult merken dat je de figuren steeds makkelijker op de muziek kunt uitvoeren. De juiste techniek wordt bij elke combinatie aangeleerd, zodat alles correct in je muscle memory blijft hangen.',
                                intermediate: 'We gaan aan de slag met complexere combinaties. Het tempo ligt wat hoger en je krijgt toffe figuren, zoals Body Rolls, Dips, Shadow Position en meer. Je leert expressiever te dansen en hoe om te gaan met de muziek - samen met je partner. Er wordt hier strenger gelet op de juiste Leading en Following technieken, zodat jij straks op de dansvloer comfortabel met jezelf en je danspartner omgaat.',
                                footwork: 'Geen partner nodig – alleen jij en de muziek! In deze les draait alles om muzikaliteit, lichaamscontrole en coördinatie — en om het verder ontwikkelen van jouw stijl en ervaring. Je leert creatieve variaties en hoe je die met de muziek verbindt, zodat je Bachata nóg beter gaat begrijpen. Footwork is een geweldige manier om je zelfverzekerder en vrijer te voelen in je dansen. Het is de perfecte les om met je eigen bewegingen te experimenteren, je techniek te verbeteren en vooral om lekker solo te genieten van het dansen!',
                            }
                        }
                    },
                    contact: {
                        ourTeam: 'Ons Team',
                        ownerAndTeacher: 'Eigenaar & Docent',
                        teacher: 'Docent',
                        contactUs: "Stel je vraag, wij helpen graag verder!",
                        faq: {
                            questionOne: 'Heb ik een danspartner nodig?',
                            answerOne: 'Nee! Tijdens de lessen wisselen we van partner, zodat iedereen kan dansen. Wanneer blijkt dat de verhouding niet gelijk is en we meer leaders of followers nodig hebben, dan regelen we dit via onze WhatsApp-groepen. Als je liever niet van partner wisselt, is dat natuurlijk ook helemaal prima. We raden echter altijd aan om met verschillende mensen te dansen, zodat je leading- en following vaardigheden zich optimaal ontwikkelen!',
                            questionTwo: 'Kan ik tussentijds instromen bij een beginners of improvers cursus?',
                            answerTwo: 'Dit is mogelijk voor Beginners en Improvers tot en met de 3e week van de cursus. Dit betekent dat je de eerste 2 weken kunt missen, maar helaas niet meer dan dat. Wil je toch instromen in de 3e week of later? Neem dan contact met ons op via WhatsApp of e-mail, zodat we samen de mogelijkheden kunnen bespreken!',
                            questionThree: 'Wat voor kleding moet ik dragen?',
                            answerThree: 'Naar dansles gaan kun je een beetje vergelijken met een bezoek aan de sportschool. Dat betekent niet dat we gewichten gaan tillen of je laten rennen, maar het is wel nodig om de juiste kleding te dragen. Het is belangrijk dat je je lichaam goed kunt bewegen en je armen gemakkelijk kan optillen. Te strakke of te warme kleding belemmert je dansen. Zorg ervoor dat je dansschoenen draagt, of schoenen met een zool waarop je goed kunt draaien. Dit is vooral belangrijk om pijn aan je voeten en knieën te voorkomen.Kom je direct van werk? Dan vragen we je om een extra/ schoon shirt mee te nemen.',
                            questionFour: 'Geven jullie Salsa LA of Cubaanse Salsa?',
                            answerFour: 'We geven Salsa LA On1. Dit wordt ook wel Salsa en linea of Cross Body Style genoemd.',
                            questionFive: 'Welke soort Bachata geven jullie?',
                            answerFive: 'In Level 1 geven we les in een gebalanceerde Bachata-stijl, zonder volledig de nadruk te leggen op Sensual of Dominican. Vanaf Level 2 richten we ons meer op de Sensual Style.'
                        }
                    }
                }
            }
        }
    });

export default i18n;
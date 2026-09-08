/* =========================================================
   BTSM
   BEST TAXI SERVICE IN MAURITIUS
========================================================= */


/* =========================================================
   BUSINESS
========================================================= */

const BUSINESS_NAME =
    "BTSM - Best Taxi Service in Mauritius";

const WHATSAPP_NUMBER =
    "23052532214";

const BUSINESS_PHONE =
    "+230 5253 2214";

const BUSINESS_EMAIL =
    "info.mauritiustaxi@proton.me";


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector) =>
    document.querySelector(selector);

const $$ = (selector) =>
    document.querySelectorAll(selector);


/* =========================================================
   GLOBAL STATE
========================================================= */

let CURRENT_LANGUAGE =
    "en";

let LAST_BOOKING_MESSAGE =
    "";

let LAST_BOOKING_ID =
    "";

let PHONE_INPUT =
    null;


/* =========================================================
   BASIC TRANSLATIONS
========================================================= */

const TRANSLATIONS = {

    en: {

        "brand.tagline":
            "BEST TAXI SERVICE IN MAURITIUS",

        "nav.home":
            "Home",

        "nav.services":
            "Services",

        "nav.transfers":
            "Transfers",

        "nav.excursions":
            "Excursions",

        "nav.experiences":
            "Experiences",

        "nav.fleet":
            "Fleet",

        "nav.why":
            "Why Us",

        "nav.faq":
            "FAQ",

        "nav.bookTransfer":
            "Book a Transfer",

        "common.bookNow":
            "Book Now",

        "hero.eyebrow":
            "MAURITIUS AIRPORT TRANSFERS • PRIVATE TOURS",

        "hero.title":
            "Your Mauritius journey.<br><em>Beautifully handled.</em>",

        "hero.text":
            "Visiting Mauritius? From the moment you land, travel comfortably with trusted local drivers, private transfers and unforgettable island experiences.",

        "hero.touristNote":
            "✈️ First time in Mauritius? We can help with your airport pickup, hotel transfer, private tours and island itinerary.",

        "hero.bookTransfer":
            "Book Your Transfer",

        "hero.explore":
            "Explore Mauritius",

        "hero.trust1":
            "✓ 24/7 Airport Pickup",

        "hero.trust2":
            "✓ Local Mauritius Drivers",

        "hero.trust3":
            "✓ Private Tours & Transfers",

        "booking.quick":
            "QUICK BOOKING",

        "booking.available":
            "24/7 AVAILABLE",

        "booking.title":
            "Plan your journey",

        "booking.intro":
            "Choose your pickup and destination anywhere across Mauritius.",

        "booking.submit":
            "Submit Booking",

        "booking.note":
            "Your booking details will be emailed to BTSM and WhatsApp will open with your message ready to send.",

        "form.service":
            "Service",

        "form.name":
            "Full Name",

        "form.email":
            "Email Address",

        "form.phone":
            "WhatsApp / Phone",

        "form.date":
            "Travel Date",

        "form.time":
            "Pickup Time",

        "form.passengers":
            "Passengers",

        "form.vehicle":
            "Vehicle",

        "form.notes":
            "Special Request",

        "pickup.title":
            "Pickup Location",

        "pickup.subtitle":
            "Where should we collect you?",

        "pickup.district":
            "Pickup District / Area",

        "pickup.place":
            "Pickup Town / Place",

        "pickup.address":
            "Exact Pickup Address",

        "destination.title":
            "Destination",

        "destination.subtitle":
            "Where are you going?",

        "destination.district":
            "Destination District / Area",

        "destination.place":
            "Destination Town / Place",

        "destination.address":
            "Exact Drop-off Address",

        "baby.title":
            "Baby Seat",

        "baby.subtitle":
            "1 baby seat is included free per booking. Additional baby seats are €5 each.",

        "baby.number":
            "Number of Baby Seats",

        "services.badge":
            "WHAT WE OFFER",

        "services.title":
            "More than a transfer.<br><em>Your Mauritius experience.</em>",

        "services.text":
            "From airport arrival to your last day on the island, BTSM helps tourists travel comfortably, safely and stress-free across Mauritius.",

        "toast.required":
            "Please complete all required booking fields.",

        "toast.email":
            "Please enter a valid email address.",

        "toast.phone":
            "Please enter a valid phone number.",

        "toast.emailSend":
            "The booking email could not be sent. Please check your internet connection and try again.",

        "toast.language":
            "Language changed."

    },


    fr: {

        "brand.tagline":
            "MEILLEUR SERVICE DE TAXI À MAURICE",

        "nav.home":
            "Accueil",

        "nav.services":
            "Services",

        "nav.transfers":
            "Transferts",

        "nav.excursions":
            "Excursions",

        "nav.experiences":
            "Expériences",

        "nav.fleet":
            "Véhicules",

        "nav.why":
            "Pourquoi nous",

        "nav.faq":
            "FAQ",

        "nav.bookTransfer":
            "Réserver un transfert",

        "common.bookNow":
            "Réserver",

        "hero.eyebrow":
            "TRANSFERTS AÉROPORT • EXCURSIONS PRIVÉES",

        "hero.title":
            "Votre voyage à Maurice.<br><em>Parfaitement organisé.</em>",

        "hero.text":
            "Vous visitez Maurice ? Voyagez confortablement avec des chauffeurs locaux, des transferts privés et des expériences inoubliables.",

        "hero.touristNote":
            "✈️ Première visite à Maurice ? Nous pouvons organiser votre transfert aéroport, hôtel, excursions privées et itinéraire.",

        "hero.bookTransfer":
            "Réserver votre transfert",

        "hero.explore":
            "Explorer Maurice",

        "hero.trust1":
            "✓ Transfert aéroport 24h/24",

        "hero.trust2":
            "✓ Chauffeurs locaux",

        "hero.trust3":
            "✓ Excursions & transferts privés",

        "booking.quick":
            "RÉSERVATION RAPIDE",

        "booking.available":
            "DISPONIBLE 24H/24",

        "booking.title":
            "Planifiez votre trajet",

        "booking.intro":
            "Choisissez votre lieu de prise en charge et votre destination à Maurice.",

        "booking.submit":
            "Envoyer la réservation",

        "booking.note":
            "Les détails seront envoyés à BTSM et WhatsApp s'ouvrira avec votre message.",

        "form.service":
            "Service",

        "form.name":
            "Nom complet",

        "form.email":
            "Adresse e-mail",

        "form.phone":
            "WhatsApp / Téléphone",

        "form.date":
            "Date du voyage",

        "form.time":
            "Heure de départ",

        "form.passengers":
            "Passagers",

        "form.vehicle":
            "Véhicule",

        "form.notes":
            "Demande spéciale",

        "pickup.title":
            "Lieu de prise en charge",

        "pickup.subtitle":
            "Où devons-nous venir vous chercher ?",

        "pickup.district":
            "District / Zone de départ",

        "pickup.place":
            "Ville / Lieu de départ",

        "pickup.address":
            "Adresse exacte de départ",

        "destination.title":
            "Destination",

        "destination.subtitle":
            "Où allez-vous ?",

        "destination.district":
            "District / Zone de destination",

        "destination.place":
            "Ville / Lieu de destination",

        "destination.address":
            "Adresse exacte de destination",

        "baby.title":
            "Siège bébé",

        "baby.subtitle":
            "1 siège bébé est gratuit. Les sièges supplémentaires coûtent 5 €.",

        "baby.number":
            "Nombre de sièges bébé",

        "services.badge":
            "NOS SERVICES",

        "services.title":
            "Plus qu'un transfert.<br><em>Votre expérience à Maurice.</em>",

        "services.text":
            "De votre arrivée à l'aéroport jusqu'à votre dernier jour, BTSM vous aide à voyager confortablement à Maurice.",

        "toast.required":
            "Veuillez remplir tous les champs obligatoires.",

        "toast.email":
            "Veuillez saisir une adresse e-mail valide.",

        "toast.phone":
            "Veuillez saisir un numéro de téléphone valide.",

        "toast.emailSend":
            "Impossible d'envoyer l'e-mail de réservation. Vérifiez votre connexion.",

        "toast.language":
            "Langue modifiée."

    },


    es: {

        "brand.tagline":
            "MEJOR SERVICIO DE TAXI EN MAURICIO",

        "nav.home":
            "Inicio",

        "nav.services":
            "Servicios",

        "nav.transfers":
            "Traslados",

        "nav.excursions":
            "Excursiones",

        "nav.experiences":
            "Experiencias",

        "nav.fleet":
            "Vehículos",

        "nav.why":
            "Por qué nosotros",

        "nav.faq":
            "FAQ",

        "nav.bookTransfer":
            "Reservar traslado",

        "common.bookNow":
            "Reservar",

        "hero.eyebrow":
            "TRASLADOS AEROPUERTO • TOURS PRIVADOS",

        "hero.title":
            "Tu viaje por Mauricio.<br><em>Perfectamente organizado.</em>",

        "hero.text":
            "¿Visitas Mauricio? Viaja cómodamente con conductores locales, traslados privados y experiencias inolvidables.",

        "hero.touristNote":
            "✈️ ¿Primera vez en Mauricio? Podemos ayudarte con aeropuerto, hotel, excursiones privadas e itinerarios.",

        "hero.bookTransfer":
            "Reservar traslado",

        "hero.explore":
            "Explorar Mauricio",

        "hero.trust1":
            "✓ Aeropuerto 24/7",

        "hero.trust2":
            "✓ Conductores locales",

        "hero.trust3":
            "✓ Tours y traslados privados",

        "booking.quick":
            "RESERVA RÁPIDA",

        "booking.available":
            "DISPONIBLE 24/7",

        "booking.title":
            "Planifica tu viaje",

        "booking.intro":
            "Elige tu lugar de recogida y destino en Mauricio.",

        "booking.submit":
            "Enviar reserva",

        "booking.note":
            "Los datos se enviarán a BTSM y WhatsApp abrirá tu mensaje.",

        "form.service":
            "Servicio",

        "form.name":
            "Nombre completo",

        "form.email":
            "Correo electrónico",

        "form.phone":
            "WhatsApp / Teléfono",

        "form.date":
            "Fecha",

        "form.time":
            "Hora",

        "form.passengers":
            "Pasajeros",

        "form.vehicle":
            "Vehículo",

        "form.notes":
            "Solicitud especial",

        "pickup.title":
            "Lugar de recogida",

        "pickup.subtitle":
            "¿Dónde debemos recogerte?",

        "pickup.district":
            "Distrito de recogida",

        "pickup.place":
            "Ciudad / Lugar",

        "pickup.address":
            "Dirección de recogida",

        "destination.title":
            "Destino",

        "destination.subtitle":
            "¿Adónde vas?",

        "destination.district":
            "Distrito de destino",

        "destination.place":
            "Ciudad / Lugar",

        "destination.address":
            "Dirección de destino",

        "baby.title":
            "Silla para bebé",

        "baby.subtitle":
            "1 silla es gratis. Las adicionales cuestan 5 €.",

        "baby.number":
            "Número de sillas",

        "services.badge":
            "NUESTROS SERVICIOS",

        "services.title":
            "Más que un traslado.<br><em>Tu experiencia en Mauricio.</em>",

        "services.text":
            "Desde tu llegada al aeropuerto hasta tu último día, BTSM te ayuda a viajar cómodamente por Mauricio.",

        "toast.required":
            "Completa todos los campos obligatorios.",

        "toast.email":
            "Introduce un correo válido.",

        "toast.phone":
            "Introduce un teléfono válido.",

        "toast.emailSend":
            "No se pudo enviar el correo de la reserva.",

        "toast.language":
            "Idioma cambiado."

    },


    de: {

        "brand.tagline":
            "BESTER TAXISERVICE AUF MAURITIUS",

        "nav.home":
            "Startseite",

        "nav.services":
            "Leistungen",

        "nav.transfers":
            "Transfers",

        "nav.excursions":
            "Ausflüge",

        "nav.experiences":
            "Erlebnisse",

        "nav.fleet":
            "Fahrzeuge",

        "nav.why":
            "Warum wir",

        "nav.faq":
            "FAQ",

        "nav.bookTransfer":
            "Transfer buchen",

        "common.bookNow":
            "Jetzt buchen",

        "hero.eyebrow":
            "FLUGHAFENTRANSFERS • PRIVATE TOUREN",

        "hero.title":
            "Ihre Mauritius-Reise.<br><em>Perfekt organisiert.</em>",

        "hero.text":
            "Besuchen Sie Mauritius? Reisen Sie komfortabel mit lokalen Fahrern, privaten Transfers und unvergesslichen Erlebnissen.",

        "hero.touristNote":
            "✈️ Zum ersten Mal auf Mauritius? Wir helfen mit Flughafentransfer, Hotel, privaten Touren und Reiseplanung.",

        "hero.bookTransfer":
            "Transfer buchen",

        "hero.explore":
            "Mauritius entdecken",

        "hero.trust1":
            "✓ Flughafen 24/7",

        "hero.trust2":
            "✓ Lokale Fahrer",

        "hero.trust3":
            "✓ Private Touren & Transfers",

        "booking.quick":
            "SCHNELLBUCHUNG",

        "booking.available":
            "24/7 VERFÜGBAR",

        "booking.title":
            "Planen Sie Ihre Fahrt",

        "booking.intro":
            "Wählen Sie Abholort und Ziel auf Mauritius.",

        "booking.submit":
            "Buchung absenden",

        "booking.note":
            "Die Buchung wird an BTSM gesendet und WhatsApp öffnet Ihre Nachricht.",

        "form.service":
            "Service",

        "form.name":
            "Vollständiger Name",

        "form.email":
            "E-Mail-Adresse",

        "form.phone":
            "WhatsApp / Telefon",

        "form.date":
            "Reisedatum",

        "form.time":
            "Abholzeit",

        "form.passengers":
            "Fahrgäste",

        "form.vehicle":
            "Fahrzeug",

        "form.notes":
            "Besondere Wünsche",

        "pickup.title":
            "Abholort",

        "pickup.subtitle":
            "Wo sollen wir Sie abholen?",

        "pickup.district":
            "Abholbezirk",

        "pickup.place":
            "Abholort",

        "pickup.address":
            "Genaue Abholadresse",

        "destination.title":
            "Ziel",

        "destination.subtitle":
            "Wohin möchten Sie fahren?",

        "destination.district":
            "Zielbezirk",

        "destination.place":
            "Zielort",

        "destination.address":
            "Genaue Zieladresse",

        "baby.title":
            "Kindersitz",

        "baby.subtitle":
            "1 Kindersitz ist kostenlos. Weitere kosten 5 €.",

        "baby.number":
            "Anzahl der Kindersitze",

        "services.badge":
            "UNSERE LEISTUNGEN",

        "services.title":
            "Mehr als ein Transfer.<br><em>Ihr Mauritius-Erlebnis.</em>",

        "services.text":
            "Von Ihrer Ankunft bis zum letzten Urlaubstag hilft BTSM Ihnen, Mauritius komfortabel zu erleben.",

        "toast.required":
            "Bitte füllen Sie alle Pflichtfelder aus.",

        "toast.email":
            "Bitte geben Sie eine gültige E-Mail-Adresse ein.",

        "toast.phone":
            "Bitte geben Sie eine gültige Telefonnummer ein.",

        "toast.emailSend":
            "Die Buchungs-E-Mail konnte nicht gesendet werden.",

        "toast.language":
            "Sprache geändert."

    },


    it: {

        "brand.tagline":
            "MIGLIOR SERVIZIO TAXI A MAURITIUS",

        "nav.home":
            "Home",

        "nav.services":
            "Servizi",

        "nav.transfers":
            "Transfer",

        "nav.excursions":
            "Escursioni",

        "nav.experiences":
            "Esperienze",

        "nav.fleet":
            "Veicoli",

        "nav.why":
            "Perché noi",

        "nav.faq":
            "FAQ",

        "nav.bookTransfer":
            "Prenota transfer",

        "common.bookNow":
            "Prenota",

        "hero.eyebrow":
            "TRANSFER AEROPORTO • TOUR PRIVATI",

        "hero.title":
            "Il tuo viaggio a Mauritius.<br><em>Perfettamente organizzato.</em>",

        "hero.text":
            "Visiti Mauritius? Viaggia comodamente con autisti locali, transfer privati ed esperienze indimenticabili.",

        "hero.touristNote":
            "✈️ Prima volta a Mauritius? Possiamo aiutarti con aeroporto, hotel, tour privati e itinerario.",

        "hero.bookTransfer":
            "Prenota transfer",

        "hero.explore":
            "Scopri Mauritius",

        "hero.trust1":
            "✓ Aeroporto 24/7",

        "hero.trust2":
            "✓ Autisti locali",

        "hero.trust3":
            "✓ Tour e transfer privati",

        "booking.quick":
            "PRENOTAZIONE RAPIDA",

        "booking.available":
            "DISPONIBILE 24/7",

        "booking.title":
            "Pianifica il tuo viaggio",

        "booking.intro":
            "Scegli punto di partenza e destinazione a Mauritius.",

        "booking.submit":
            "Invia prenotazione",

        "booking.note":
            "La prenotazione verrà inviata a BTSM e WhatsApp aprirà il messaggio.",

        "form.service":
            "Servizio",

        "form.name":
            "Nome completo",

        "form.email":
            "Indirizzo e-mail",

        "form.phone":
            "WhatsApp / Telefono",

        "form.date":
            "Data",

        "form.time":
            "Orario",

        "form.passengers":
            "Passeggeri",

        "form.vehicle":
            "Veicolo",

        "form.notes":
            "Richiesta speciale",

        "pickup.title":
            "Luogo di ritiro",

        "pickup.subtitle":
            "Dove dobbiamo venirti a prendere?",

        "pickup.district":
            "Distretto di ritiro",

        "pickup.place":
            "Città / Luogo",

        "pickup.address":
            "Indirizzo di ritiro",

        "destination.title":
            "Destinazione",

        "destination.subtitle":
            "Dove stai andando?",

        "destination.district":
            "Distretto destinazione",

        "destination.place":
            "Città / Luogo",

        "destination.address":
            "Indirizzo di destinazione",

        "baby.title":
            "Seggiolino",

        "baby.subtitle":
            "1 seggiolino è gratuito. Gli altri costano 5 €.",

        "baby.number":
            "Numero di seggiolini",

        "services.badge":
            "I NOSTRI SERVIZI",

        "services.title":
            "Più di un transfer.<br><em>La tua esperienza a Mauritius.</em>",

        "services.text":
            "Dal tuo arrivo in aeroporto fino all'ultimo giorno, BTSM ti aiuta a viaggiare comodamente.",

        "toast.required":
            "Completa tutti i campi obbligatori.",

        "toast.email":
            "Inserisci un indirizzo e-mail valido.",

        "toast.phone":
            "Inserisci un numero di telefono valido.",

        "toast.emailSend":
            "Impossibile inviare l'e-mail della prenotazione.",

        "toast.language":
            "Lingua cambiata."

    }

};
/* =========================================================
   TRANSLATION HELPER
========================================================= */

function t(key) {

    return (
        TRANSLATIONS[CURRENT_LANGUAGE]?.[key] ||
        TRANSLATIONS.en[key] ||
        key
    );

}


/* =========================================================
   MAURITIUS LOCATIONS
========================================================= */

const MAURITIUS_PLACES = {

    "Black River": [
        "Flic en Flac",
        "Tamarin",
        "Black River",
        "La Preneuse",
        "Le Morne",
        "Chamarel",
        "La Gaulette",
        "Case Noyale",
        "Albion"
    ],

    "Flacq": [
        "Belle Mare",
        "Palmar",
        "Trou d'Eau Douce",
        "Centre de Flacq",
        "Poste de Flacq",
        "Quatre Cocos",
        "Grand River South East"
    ],

    "Grand Port": [
        "SSR International Airport",
        "Mahébourg",
        "Blue Bay",
        "Pointe d'Esny",
        "Plaine Magnien",
        "Rose Belle",
        "Vieux Grand Port",
        "Bambous Virieux"
    ],

    "Moka": [
        "Moka",
        "Réduit",
        "Saint Pierre",
        "Bagatelle",
        "Quartier Militaire",
        "Montagne Blanche"
    ],

    "Pamplemousses": [
        "Trou aux Biches",
        "Mont Choisy",
        "Pointe aux Piments",
        "Balaclava",
        "Pamplemousses",
        "Triolet",
        "Arsenal",
        "Terre Rouge"
    ],

    "Plaines Wilhems": [
        "Curepipe",
        "Quatre Bornes",
        "Vacoas",
        "Phoenix",
        "Beau Bassin",
        "Rose Hill",
        "Floréal",
        "Sodnac"
    ],

    "Port Louis": [
        "Port Louis City Centre",
        "Caudan Waterfront",
        "Port Louis Harbour",
        "Chinatown",
        "Champ de Mars",
        "Plaine Verte",
        "Pailles"
    ],

    "Rivière du Rempart": [
        "Grand Baie",
        "Pereybere",
        "Cap Malheureux",
        "Grand Gaube",
        "Goodlands",
        "Roches Noires",
        "Poudre d'Or",
        "Calodyne",
        "Rivière du Rempart"
    ],

    "Savanne": [
        "Souillac",
        "Gris Gris",
        "Bel Ombre",
        "Riambel",
        "Chemin Grenier",
        "Rivière des Anguilles",
        "Saint Aubin",
        "Grand Bassin / Ganga Talao",
        "Baie du Cap"
    ]

};


const PLACE_TO_DISTRICT =
    {};


Object.entries(
    MAURITIUS_PLACES
).forEach(
    ([district, places]) => {

        places.forEach(
            (place) => {

                PLACE_TO_DISTRICT[place] =
                    district;

            }
        );

    }
);


const OTHER_PLACE =
    "__OTHER__";


/* =========================================================
   START SITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupYear();

        setupMinimumDate();

        initializeDistrictSelect(
            $("#pickupDistrict")
        );

        initializeDistrictSelect(
            $("#destinationDistrict")
        );

        setupLocationSelector(
            "pickup"
        );

        setupLocationSelector(
            "destination"
        );

        setupMobileMenu();

        setupVehicleButtons();

        setupTourButton();

        setupExperienceButton();

        setupCountryPhone();

        setupWhySlider();

        setupLightbox();

        setupSuccessModal();

        setupLanguage();


        const form =
            $("#bookingForm");


        form?.addEventListener(
            "submit",
            handleBookingSubmit
        );

    }
);


/* =========================================================
   YEAR
========================================================= */

function setupYear() {

    const year =
        $("#year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}


/* =========================================================
   LANGUAGE
========================================================= */

function setupLanguage() {

    const languageSelect =
        $("#languageSelect");

    const picker =
        $(".language-picker");

    const languageButton =
        $("#languageButton");

    const languageMenu =
        $("#languageMenu");

    const languageLabel =
        $("#languageLabel");

    const languageFlag =
        $("#languageFlag");


    if (!languageSelect) {

        return;

    }


    const languageMeta = {

        en: {
            label: "English",
            flag: "flag-gb"
        },

        fr: {
            label: "Français",
            flag: "flag-fr"
        },

        es: {
            label: "Español",
            flag: "flag-es"
        },

        de: {
            label: "Deutsch",
            flag: "flag-de"
        },

        it: {
            label: "Italiano",
            flag: "flag-it"
        }

    };


    const updateLanguagePicker =
        (language) => {

            const meta =
                languageMeta[language] ||
                languageMeta.en;


            languageSelect.value =
                language;


            if (languageLabel) {

                languageLabel.textContent =
                    meta.label;

            }


            if (languageFlag) {

                languageFlag.className =
                    `language-flag ${meta.flag}`;

            }


            $$(
                ".language-option"
            ).forEach(
                (option) => {

                    option.setAttribute(
                        "aria-selected",
                        String(
                            option.dataset.language ===
                            language
                        )
                    );

                }
            );

        };


    const closeLanguageMenu =
        () => {

            picker?.classList.remove(
                "open"
            );

            languageButton?.setAttribute(
                "aria-expanded",
                "false"
            );

        };


    const savedLanguage =
        localStorage.getItem(
            "btsm-language"
        );


    if (
        savedLanguage &&
        TRANSLATIONS[savedLanguage]
    ) {

        CURRENT_LANGUAGE =
            savedLanguage;

    }


    updateLanguagePicker(
        CURRENT_LANGUAGE
    );

    translatePage(
        CURRENT_LANGUAGE
    );


    languageButton?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            const open =
                picker?.classList.toggle(
                    "open"
                );


            languageButton.setAttribute(
                "aria-expanded",
                String(
                    Boolean(open)
                )
            );

        }
    );


    $$(
        ".language-option"
    ).forEach(
        (option) => {

            option.addEventListener(
                "click",
                () => {

                    const language =
                        option.dataset.language;


                    if (
                        !language ||
                        !TRANSLATIONS[language]
                    ) {

                        return;

                    }


                    updateLanguagePicker(
                        language
                    );

                    translatePage(
                        language
                    );

                    closeLanguageMenu();

                    showToast(
                        t("toast.language")
                    );

                }
            );

        }
    );


    languageSelect.addEventListener(
        "change",
        () => {

            updateLanguagePicker(
                languageSelect.value
            );

            translatePage(
                languageSelect.value
            );

            showToast(
                t("toast.language")
            );

        }
    );


    document.addEventListener(
        "click",
        (event) => {

            if (
                picker &&
                !picker.contains(
                    event.target
                )
            ) {

                closeLanguageMenu();

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                "Escape"
            ) {

                closeLanguageMenu();

            }

        }
    );

}


function translatePage(
    language
) {

    if (
        !TRANSLATIONS[language]
    ) {

        language =
            "en";

    }


    CURRENT_LANGUAGE =
        language;


    document.documentElement.lang =
        language;


    localStorage.setItem(
        "btsm-language",
        language
    );


    $$(
        "[data-i18n]"
    ).forEach(
        (element) => {

            const key =
                element.dataset.i18n;


            if (
                element.dataset.i18nHtml ===
                "true"
            ) {

                element.innerHTML =
                    t(key);

            }

            else {

                element.textContent =
                    t(key);

            }

        }
    );

}


/* =========================================================
   INTERNATIONAL PHONE
========================================================= */

function setupCountryPhone() {

    const phone =
        $("#phone");


    if (!phone) {

        return;

    }


    if (
        typeof window.intlTelInput !==
        "function"
    ) {

        return;

    }


    PHONE_INPUT =
        window.intlTelInput(
            phone,
            {

                initialCountry:
                    "mu",

                separateDialCode:
                    true,

                nationalMode:
                    true,

                allowDropdown:
                    true,

                autoPlaceholder:
                    "aggressive"

            }
        );

}


/* =========================================================
   FULL CUSTOMER PHONE
========================================================= */

function getFullCustomerPhone() {

    const phone =
        $("#phone");


    if (!phone) {

        return "";

    }


    const digits =
        phone.value.replace(
            /\D/g,
            ""
        );


    if (
        PHONE_INPUT
    ) {

        try {

            const country =
                PHONE_INPUT
                    .getSelectedCountryData();


            if (
                country &&
                country.dialCode
            ) {

                return (
                    `+${country.dialCode}${digits}`
                );

            }

        }

        catch (error) {

            console.warn(
                error
            );

        }

    }


    return digits;

}


/* =========================================================
   DATE
========================================================= */

function setupMinimumDate() {

    const input =
        $("#date");


    if (!input) {

        return;

    }


    const now =
        new Date();


    const today =
        new Date(
            now.getTime() -
            now.getTimezoneOffset() *
            60000
        )
            .toISOString()
            .split("T")[0];


    input.min =
        today;

}


/* =========================================================
   LOCATION SELECT
========================================================= */

function initializeDistrictSelect(
    select
) {

    if (!select) {

        return;

    }


    select.innerHTML =
        "";


    const first =
        document.createElement(
            "option"
        );


    first.value =
        "";


    first.textContent =
        "Select district / area";


    select.appendChild(
        first
    );


    Object.keys(
        MAURITIUS_PLACES
    ).forEach(
        (district) => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                district;


            option.textContent =
                district;


            select.appendChild(
                option
            );

        }
    );

}


function setupLocationSelector(
    prefix
) {

    const district =
        $(`#${prefix}District`);

    const place =
        $(`#${prefix}Place`);

    const customWrap =
        $(`#${prefix}CustomPlaceWrap`);

    const customInput =
        $(`#${prefix}CustomPlace`);


    if (
        !district ||
        !place
    ) {

        return;

    }


    populatePlaceSelect(
        place,
        ""
    );


    district.addEventListener(
        "change",
        () => {

            populatePlaceSelect(
                place,
                district.value
            );


            hideCustomPlace(
                customWrap,
                customInput,
                true
            );

        }
    );


    place.addEventListener(
        "change",
        () => {

            if (
                place.value ===
                OTHER_PLACE
            ) {

                showCustomPlace(
                    customWrap,
                    customInput
                );


                return;

            }


            hideCustomPlace(
                customWrap,
                customInput,
                true
            );

        }
    );

}


function populatePlaceSelect(
    select,
    district = "",
    selected = ""
) {

    if (!select) {

        return;

    }


    select.innerHTML =
        "";


    const first =
        document.createElement(
            "option"
        );


    first.value =
        "";


    first.textContent =
        "Select town / place";


    select.appendChild(
        first
    );


    const places =
        district
            ? MAURITIUS_PLACES[district] || []
            : Object.values(
                MAURITIUS_PLACES
            ).flat();


    places.forEach(
        (place) => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                place;


            option.textContent =
                place;


            if (
                place === selected
            ) {

                option.selected =
                    true;

            }


            select.appendChild(
                option
            );

        }
    );


    const other =
        document.createElement(
            "option"
        );


    other.value =
        OTHER_PLACE;


    other.textContent =
        "Other / Not listed";


    select.appendChild(
        other
    );

}


function showCustomPlace(
    wrapper,
    input
) {

    wrapper?.classList.add(
        "show"
    );


    if (input) {

        input.required =
            true;

    }

}


function hideCustomPlace(
    wrapper,
    input,
    clear = false
) {

    wrapper?.classList.remove(
        "show"
    );


    if (input) {

        input.required =
            false;


        if (clear) {

            input.value =
                "";

        }

    }

}
/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const button =
        $("#menuToggle");

    const mobile =
        $("#mobileNav");


    if (
        !button ||
        !mobile
    ) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            const open =
                mobile.classList.toggle(
                    "open"
                );


            button.textContent =
                open
                    ? "×"
                    : "☰";


            button.setAttribute(
                "aria-expanded",
                String(open)
            );

        }
    );


    $$(
        "#mobileNav a"
    ).forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    mobile.classList.remove(
                        "open"
                    );


                    button.textContent =
                        "☰";


                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );

}


/* =========================================================
   VEHICLE BUTTONS
========================================================= */

function setupVehicleButtons() {

    $$(
        ".choose-vehicle"
    ).forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const vehicle =
                        $("#vehicle");


                    if (vehicle) {

                        vehicle.value =
                            button.dataset.vehicle;

                    }


                    scrollToBooking();

                }
            );

        }
    );

}


/* =========================================================
   TOUR BUTTON
========================================================= */

function setupTourButton() {

    const button =
        $("#tourBook");


    button?.addEventListener(
        "click",
        () => {

            const bookingType =
                $("#bookingType");


            if (bookingType) {

                bookingType.value =
                    "Excursion";

            }


            const notes =
                $("#notes");


            if (notes) {

                notes.value =
                    "Interested in Grand Bassin, Shiva & Durga Statues, 7 Coloured Earth, Alexandra Falls, Chamarel viewpoints and optional Le Morne sunset.";

            }


            scrollToBooking();

        }
    );

}


/* =========================================================
   EXPERIENCE BUTTON
========================================================= */

function setupExperienceButton() {

    const button =
        $("#experienceBook");


    button?.addEventListener(
        "click",
        () => {

            const bookingType =
                $("#bookingType");


            if (bookingType) {

                bookingType.value =
                    "Activity Booking";

            }


            scrollToBooking();

        }
    );

}


/* =========================================================
   SCROLL
========================================================= */

function scrollToBooking() {

    $("#booking")?.scrollIntoView(
        {

            behavior:
                "smooth",

            block:
                "start"

        }
    );

}


/* =========================================================
   WHY US SLIDER
========================================================= */

function setupWhySlider() {

    const slider =
        $(".why-slider");


    if (!slider) {

        return;

    }


    const slides =
        slider.querySelectorAll(
            ".why-slide"
        );


    const dots =
        slider.querySelectorAll(
            ".why-slider-dot"
        );


    if (
        slides.length < 2
    ) {

        return;

    }


    let current =
        0;

    let timer =
        null;


    function showSlide(
        index
    ) {

        current =
            (
                index +
                slides.length
            ) %
            slides.length;


        slides.forEach(
            (slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === current
                );

            }
        );


        dots.forEach(
            (dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === current
                );

            }
        );

    }


    function stop() {

        if (timer) {

            clearInterval(
                timer
            );


            timer =
                null;

        }

    }


    function start() {

        stop();


        timer =
            setInterval(
                () => {

                    showSlide(
                        current + 1
                    );

                },
                4500
            );

    }


    dots.forEach(
        (dot, index) => {

            dot.addEventListener(
                "click",
                () => {

                    showSlide(
                        index
                    );


                    start();

                }
            );

        }
    );


    slider.addEventListener(
        "mouseenter",
        stop
    );


    slider.addEventListener(
        "mouseleave",
        start
    );


    showSlide(
        0
    );


    start();

}


/* =========================================================
   LIGHTBOX
========================================================= */

function setupLightbox() {

    const lightbox =
        $("#imageLightbox");

    const image =
        $("#lightboxImage");

    const caption =
        $("#lightboxCaption");

    const close =
        $("#lightboxClose");


    if (
        !lightbox ||
        !image
    ) {

        return;

    }


    function closeLightbox() {

        lightbox.classList.remove(
            "open"
        );


        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "no-scroll"
        );

    }


    $$(
        ".gallery-item"
    ).forEach(
        (item) => {

            item.addEventListener(
                "click",
                () => {

                    image.src =
                        item.dataset.image;


                    if (caption) {

                        caption.textContent =
                            item.dataset.caption ||
                            "";

                    }


                    lightbox.classList.add(
                        "open"
                    );


                    lightbox.setAttribute(
                        "aria-hidden",
                        "false"
                    );


                    document.body.classList.add(
                        "no-scroll"
                    );

                }
            );

        }
    );


    close?.addEventListener(
        "click",
        closeLightbox
    );


    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   VALIDATION
========================================================= */

function validateBookingForm() {

    const fields =
        $$(
            "#bookingForm [required]"
        );


    for (
        const field
        of fields
    ) {

        if (
            !String(
                field.value
            ).trim()
        ) {

            field.focus();


            showToast(
                t("toast.required")
            );


            return false;

        }

    }


    const email =
        $("#customerEmail");


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !email ||
        !emailPattern.test(
            email.value.trim()
        )
    ) {

        email?.focus();


        showToast(
            t("toast.email")
        );


        return false;

    }


    const phone =
        $("#phone");


    if (!phone) {

        showToast(
            t("toast.phone")
        );

        return false;

    }


    const digits =
        phone.value.replace(
            /\D/g,
            ""
        );


    if (
        digits.length < 5 ||
        digits.length > 15
    ) {

        phone.focus();


        showToast(
            t("toast.phone")
        );


        return false;

    }


    return true;

}


/* =========================================================
   SUBMIT
========================================================= */

async function handleBookingSubmit(
    event
) {

    event.preventDefault();


    if (
        !validateBookingForm()
    ) {

        return;

    }


    const booking =
        buildBooking();


    if (!booking) {

        return;

    }


    const submit =
        $("#submitBooking");


    if (submit) {

        submit.disabled =
            true;


        submit.setAttribute(
            "aria-busy",
            "true"
        );

    }


    try {

        /*
            1. Send email to BTSM.
        */

        await sendBookingEmail(
            booking
        );


        /*
            Save message for modal button.
        */

        LAST_BOOKING_MESSAGE =
            booking.message;


        LAST_BOOKING_ID =
            booking.bookingId;


        /*
            Show confirmation.
        */

        showSuccessModal(
            booking.bookingId
        );


        /*
            2. Redirect to WhatsApp.
        */

        setTimeout(
            () => {

                openWhatsApp(
                    booking.message
                );

            },
            700
        );

    }

    catch (error) {

        console.error(
            "Booking submission failed:",
            error
        );


        showToast(
            t("toast.emailSend")
        );


        if (submit) {

            submit.disabled =
                false;


            submit.removeAttribute(
                "aria-busy"
            );

        }

    }

}


/* =========================================================
   EMAIL
========================================================= */

async function sendBookingEmail(
    booking
) {

    const endpoint =
        `https://formsubmit.co/ajax/${encodeURIComponent(BUSINESS_EMAIL)}`;


    const payload = {

        _subject:
            `New BTSM Booking - ${booking.bookingId}`,

        _template:
            "table",

        _captcha:
            "false",

        Booking_ID:
            booking.bookingId,

        Customer_Name:
            booking.data.fullName,

        Customer_Email:
            booking.data.customerEmail,

        Customer_Phone:
            booking.customerPhone,

        Service:
            booking.data.bookingType,

        Travel_Date:
            formatEnglishDate(
                booking.data.date
            ),

        Pickup_Time:
            formatTime(
                booking.data.time
            ),

        Passengers:
            booking.data.passengers,

        Vehicle:
            booking.data.vehicle,

        Pickup_District:
            booking.pickupDistrict,

        Pickup_Place:
            booking.pickupPlace,

        Pickup_Address:
            booking.data.pickupAddress,

        Destination_District:
            booking.destinationDistrict,

        Destination_Place:
            booking.destinationPlace,

        Destination_Address:
            booking.data.destinationAddress,

        Baby_Seats:
            booking.babySeats,

        Special_Request:
            booking.data.notes ||
            "None",

        Full_Booking_Message:
            booking.message

    };


    const response =
        await fetch(
            endpoint,
            {

                method:
                    "POST",

                headers: {

                    "Content-Type":
                        "application/json",

                    "Accept":
                        "application/json"

                },

                body:
                    JSON.stringify(
                        payload
                    )

            }
        );


    if (
        !response.ok
    ) {

        throw new Error(
            "Email request failed."
        );

    }


    return response;

}


/* =========================================================
   WHATSAPP
========================================================= */

function openWhatsApp(
    message
) {

    if (!message) {

        return;

    }


    const encoded =
        encodeURIComponent(
            message
        );


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;


    window.location.href =
        url;

}
/* =========================================================
   BUILD BOOKING
========================================================= */

function buildBooking() {

    const form =
        $("#bookingForm");


    if (!form) {

        return null;

    }


    const data =
        Object.fromEntries(
            new FormData(
                form
            ).entries()
        );


    const pickupPlace =
        data.pickupPlace ===
        OTHER_PLACE

            ? data.pickupCustomPlace

            : data.pickupPlace;


    const destinationPlace =
        data.destinationPlace ===
        OTHER_PLACE

            ? data.destinationCustomPlace

            : data.destinationPlace;


    const pickupDistrict =
        data.pickupDistrict ||

        PLACE_TO_DISTRICT[
            pickupPlace
        ] ||

        "Not specified";


    const destinationDistrict =
        data.destinationDistrict ||

        PLACE_TO_DISTRICT[
            destinationPlace
        ] ||

        "Not specified";


    const bookingId =
        generateBookingId();


    const customerPhone =
        getFullCustomerPhone();


    const babySeats =
        getBabySeatEnglish(
            Number(
                data.babySeats || 0
            )
        );


    const message = [

        "Hello BTSM - Best Taxi Service in Mauritius!",

        "",

        "I would like to make a booking.",

        "",

        "━━━━━━━━━━━━━━━━━━━━",

        "BTSM BOOKING REQUEST",

        "Best Taxi Service in Mauritius",

        "━━━━━━━━━━━━━━━━━━━━",

        "",

        `Booking ID: ${bookingId}`,

        "",

        "CUSTOMER DETAILS",

        `Full Name: ${data.fullName}`,

        `Email: ${data.customerEmail}`,

        `WhatsApp / Phone: ${customerPhone}`,

        "",

        "JOURNEY DETAILS",

        `Service: ${data.bookingType}`,

        `Travel Date: ${formatEnglishDate(data.date)}`,

        `Pickup Time: ${formatTime(data.time)}`,

        `Passengers: ${data.passengers}`,

        `Preferred Vehicle: ${data.vehicle}`,

        "",

        "PICKUP LOCATION",

        `District / Area: ${pickupDistrict}`,

        `Town / Place: ${pickupPlace}`,

        `Exact Address: ${data.pickupAddress}`,

        "",

        "DESTINATION",

        `District / Area: ${destinationDistrict}`,

        `Town / Place: ${destinationPlace}`,

        `Exact Address: ${data.destinationAddress}`,

        "",

        "ADDITIONAL DETAILS",

        `Baby Seats: ${babySeats}`,

        `Special Request: ${data.notes || "None"}`,

        "",

        "Please confirm availability and the final price.",

        "",

        `BTSM Contact: ${BUSINESS_PHONE}`,

        `Email: ${BUSINESS_EMAIL}`,

        "",

        "Thank you!"

    ].join(
        "\n"
    );


    return {

        bookingId,

        customerPhone,

        pickupDistrict,

        pickupPlace,

        destinationDistrict,

        destinationPlace,

        babySeats,

        message,

        data

    };

}


/* =========================================================
   BABY SEATS
========================================================= */

function getBabySeatEnglish(
    count
) {

    if (
        count <= 0
    ) {

        return "No baby seat";

    }


    if (
        count === 1
    ) {

        return "1 baby seat - FREE";

    }


    const additional =
        count - 1;


    const cost =
        additional * 5;


    return (
        `${count} baby seats - ` +
        `1 free + ${additional} additional ` +
        `(EUR ${cost} extra)`
    );

}


/* =========================================================
   BOOKING ID
========================================================= */

function generateBookingId() {

    const now =
        new Date();


    const year =
        now.getFullYear();


    const month =
        String(
            now.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    const random =
        Math.random()
            .toString(36)
            .slice(2, 7)
            .toUpperCase();


    return (
        `BTSM-${year}${month}${day}-${random}`
    );

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatEnglishDate(
    value
) {

    if (!value) {

        return "Not specified";

    }


    const parts =
        value.split("-");


    if (
        parts.length !== 3
    ) {

        return value;

    }


    const date =
        new Date(

            Number(
                parts[0]
            ),

            Number(
                parts[1]
            ) - 1,

            Number(
                parts[2]
            )

        );


    return new Intl.DateTimeFormat(
        "en-GB",
        {

            day:
                "2-digit",

            month:
                "long",

            year:
                "numeric"

        }
    ).format(
        date
    );

}


/* =========================================================
   FORMAT TIME
========================================================= */

function formatTime(
    value
) {

    if (!value) {

        return "Not specified";

    }


    const [
        rawHour,
        minute
    ] =
        value.split(":");


    let hour =
        Number(
            rawHour
        );


    const period =
        hour >= 12

            ? "PM"

            : "AM";


    hour =
        hour % 12 ||
        12;


    return (
        `${hour}:${minute} ${period}`
    );

}


/* =========================================================
   SUCCESS MODAL
========================================================= */

function setupSuccessModal() {

    const modal =
        $("#successModal");


    const closeTop =
        $("#successModalClose");


    const closeButton =
        $("#closeSuccessButton");


    const openButton =
        $("#openWhatsAppButton");


    if (!modal) {

        return;

    }


    closeTop?.addEventListener(
        "click",
        closeSuccessModal
    );


    closeButton?.addEventListener(
        "click",
        closeSuccessModal
    );


    openButton?.addEventListener(
        "click",
        () => {

            if (
                LAST_BOOKING_MESSAGE
            ) {

                openWhatsApp(
                    LAST_BOOKING_MESSAGE
                );

            }

        }
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {

                closeSuccessModal();

            }

        }
    );

}


/* =========================================================
   SHOW SUCCESS
========================================================= */

function showSuccessModal(
    bookingId
) {

    const modal =
        $("#successModal");


    const id =
        $("#successBookingId");


    if (!modal) {

        return;

    }


    if (id) {

        id.textContent =
            bookingId;

    }


    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


/* =========================================================
   CLOSE SUCCESS
========================================================= */

function closeSuccessModal() {

    const modal =
        $("#successModal");


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(
    message
) {

    const toast =
        $("#toast");


    if (!toast) {

        return;

    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            4000
        );

}
/* =========================================================
   BTSM - COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   BUSINESS
========================================================= */

const BUSINESS_EMAIL =
    "info.mauritiustaxi@proton.me";

const BUSINESS_PHONE =
    "+230 5253 2214";

const WHATSAPP_NUMBER =
    "23052532214";


/* =========================================================
   HELPERS
========================================================= */

const $ =
    (selector) =>
        document.querySelector(selector);

const $$ =
    (selector) =>
        document.querySelectorAll(selector);


let PHONE_INPUT =
    null;

let LAST_BOOKING_MESSAGE =
    "";

let toastTimer =
    null;


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
        "Albion"
    ],

    "Flacq": [
        "Belle Mare",
        "Palmar",
        "Trou d'Eau Douce",
        "Centre de Flacq",
        "Poste de Flacq",
        "Quatre Cocos"
    ],

    "Grand Port": [
        "SSR International Airport",
        "Mahébourg",
        "Blue Bay",
        "Pointe d'Esny",
        "Plaine Magnien",
        "Rose Belle"
    ],

    "Moka": [
        "Moka",
        "Réduit",
        "Saint Pierre",
        "Bagatelle",
        "Quartier Militaire"
    ],

    "Pamplemousses": [
        "Trou aux Biches",
        "Mont Choisy",
        "Pointe aux Piments",
        "Balaclava",
        "Pamplemousses",
        "Triolet"
    ],

    "Plaines Wilhems": [
        "Curepipe",
        "Quatre Bornes",
        "Vacoas",
        "Phoenix",
        "Beau Bassin",
        "Rose Hill",
        "Floréal"
    ],

    "Port Louis": [
        "Port Louis City Centre",
        "Caudan Waterfront",
        "Port Louis Harbour",
        "Chinatown",
        "Champ de Mars"
    ],

    "Rivière du Rempart": [
        "Grand Baie",
        "Pereybere",
        "Cap Malheureux",
        "Grand Gaube",
        "Goodlands",
        "Calodyne"
    ],

    "Savanne": [
        "Souillac",
        "Gris Gris",
        "Bel Ombre",
        "Riambel",
        "Chemin Grenier",
        "Grand Bassin / Ganga Talao",
        "Baie du Cap"
    ]

};


const OTHER_PLACE =
    "__OTHER__";


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupYear();

        setupMinimumDate();

        setupImageFallbacks();

        setupLanguage();

        setupMobileMenu();

        setupLocations();

        setupCountryPhone();

        setupVehicleButtons();

        setupExperienceButton();

        setupExcursionSlider();

        setupWhySlider();

        setupLightbox();

        setupSuccessModal();

        setupBookingForm();

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
   MINIMUM DATE
========================================================= */

function setupMinimumDate() {

    const input =
        $("#date");

    if (!input) {
        return;
    }


    const now =
        new Date();


    const localToday =
        new Date(
            now.getTime() -
            now.getTimezoneOffset() * 60000
        )
            .toISOString()
            .split("T")[0];


    input.min =
        localToday;

}


/* =========================================================
   IMAGE FALLBACK SYSTEM

   This is important.

   Example:

   src="./images/mauritius-beach-lagoon.jpeg"

   Broken images are handled through the
   fallback list stored on each image element.

========================================================= */

function setupImageFallbacks() {

    $$("img[data-fallbacks]")
        .forEach(
            (image) => {

                const fallbackList =
                    String(
                        image.dataset.fallbacks ||
                        ""
                    )
                        .split("|")
                        .map(
                            (item) =>
                                item.trim()
                        )
                        .filter(Boolean);


                let fallbackIndex =
                    0;


                image.addEventListener(
                    "error",
                    () => {

                        if (
                            fallbackIndex <
                            fallbackList.length
                        ) {

                            image.src =
                                fallbackList[
                                    fallbackIndex
                                ];

                            fallbackIndex +=
                                1;

                            return;

                        }


                        /*
                           If every local image is missing,
                           hide broken-image text.
                        */

                        image.style.display =
                            "none";

                    }
                );

            }
        );

}


/* =========================================================
   LANGUAGE / I18N
========================================================= */

let CURRENT_LANGUAGE = "en";

const LANGUAGES = {
    en: { label: "English", flag: "flag-gb" },
    fr: { label: "Français", flag: "flag-fr" },
    es: { label: "Español", flag: "flag-es" },
    de: { label: "Deutsch", flag: "flag-de" },
    it: { label: "Italiano", flag: "flag-it" }
};

/* The English text is the source key. Keeping this table in the site means
   language switching works without an external translation API. */
const I18N = {
    "nav.home": ["Home", "Accueil", "Inicio", "Startseite", "Home"],
    "nav.services": ["Services", "Services", "Servicios", "Leistungen", "Servizi"],
    "nav.transfers": ["Transfers", "Transferts", "Traslados", "Transfers", "Trasferimenti"],
    "nav.excursions": ["Excursions", "Excursions", "Excursiones", "Ausflüge", "Escursioni"],
    "nav.experiences": ["Experiences", "Expériences", "Experiencias", "Erlebnisse", "Esperienze"],
    "nav.why": ["Why Us", "Pourquoi nous", "Por qué nosotros", "Warum wir", "Perché noi"],
    "nav.faq": ["FAQ", "FAQ", "Preguntas frecuentes", "FAQ", "FAQ"],
    "common.bookNow": ["Book Now", "Réserver", "Reservar ahora", "Jetzt buchen", "Prenota ora"],
    "hero.eyebrow": ["MAURITIUS AIRPORT TRANSFERS • PRIVATE TOURS", "TRANSFERTS AÉROPORT DE MAURICE • TOURS PRIVÉS", "TRASLADOS AEROPUERTO DE MAURICIO • TOURS PRIVADOS", "FLUGHAFENTRANSFERS MAURITIUS • PRIVATE TOUREN", "TRASFERIMENTI AEROPORTUALI MAURITIUS • TOUR PRIVATI"],
    "hero.title": ["Your Mauritius journey.<br><em>Beautifully handled.</em>", "Votre voyage à Maurice.<br><em>Parfaitement pris en charge.</em>", "Tu viaje por Mauricio.<br><em>Bien cuidado.</em>", "Ihre Mauritius-Reise.<br><em>Perfekt organisiert.</em>", "Il tuo viaggio a Mauritius.<br><em>Gestito con cura.</em>"],
    "hero.text": ["Visiting Mauritius? From the moment you land, travel comfortably with trusted local drivers, private transfers and unforgettable island experiences.", "Vous visitez Maurice ? Dès votre arrivée, voyagez confortablement avec des chauffeurs locaux de confiance, des transferts privés et des expériences inoubliables.", "¿Visitas Mauricio? Desde que aterrizas, viaja cómodamente con conductores locales de confianza, traslados privados y experiencias inolvidables en la isla.", "Sie besuchen Mauritius? Reisen Sie ab Ihrer Ankunft komfortabel mit zuverlässigen lokalen Fahrern, privaten Transfers und unvergesslichen Inselerlebnissen.", "Visiti Mauritius? Dal tuo arrivo, viaggia comodamente con autisti locali affidabili, trasferimenti privati ed esperienze indimenticabili sull'isola."],
};

/* Additional page copy. */
const TEXT_TRANSLATIONS = {
"Please complete all required booking fields.":["Veuillez remplir tous les champs obligatoires.","Completa todos los campos obligatorios.","Bitte füllen Sie alle Pflichtfelder aus.","Compila tutti i campi obbligatori."],
"Please enter a valid email address.":["Veuillez saisir une adresse e-mail valide.","Introduce un correo electrónico válido.","Bitte geben Sie eine gültige E-Mail-Adresse ein.","Inserisci un indirizzo e-mail valido."],
"Please enter a valid phone number.":["Veuillez saisir un numéro de téléphone valide.","Introduce un número de teléfono válido.","Bitte geben Sie eine gültige Telefonnummer ein.","Inserisci un numero di telefono valido."],
"Submitting...":["Envoi...","Enviando...","Wird gesendet...","Invio..."],
"Opening WhatsApp with your booking request.":["Ouverture de WhatsApp avec votre demande de réservation.","Abriendo WhatsApp con tu solicitud de reserva.","WhatsApp wird mit Ihrer Buchungsanfrage geöffnet.","Apertura di WhatsApp con la tua richiesta di prenotazione."],

"Select town / place":["Sélectionner une ville / un lieu","Seleccionar ciudad / lugar","Ort auswählen","Seleziona città / luogo"],
"Other / Not listed":["Autre / Non répertorié","Otro / No listado","Andere / Nicht aufgeführt","Altro / Non elencato"],
"Book a Transfer":["Réserver un transfert","Reservar un traslado","Transfer buchen","Prenota un trasferimento"],
"Book Your Transfer":["Réserver votre transfert","Reserva tu traslado","Ihren Transfer buchen","Prenota il tuo trasferimento"],
"Explore Mauritius":["Explorer Maurice","Explorar Mauricio","Mauritius entdecken","Esplora Mauritius"],
"✓ 24/7 Airport Pickup":["✓ Prise en charge aéroport 24/7","✓ Recogida en aeropuerto 24/7","✓ Flughafenabholung 24/7","✓ Pick-up aeroporto 24/7"],
"✓ Local Mauritius Drivers":["✓ Chauffeurs locaux mauriciens","✓ Conductores locales de Mauricio","✓ Lokale Fahrer aus Mauritius","✓ Autisti locali mauriziani"],
"✓ Private Tours & Transfers":["✓ Tours et transferts privés","✓ Tours y traslados privados","✓ Private Touren & Transfers","✓ Tour e trasferimenti privati"],
"YOUR ISLAND, YOUR PACE":["VOTRE ÎLE, VOTRE RYTHME","TU ISLA, TU RITMO","IHRE INSEL, IHR TEMPO","LA TUA ISOLA, IL TUO RITMO"],
"From airport arrivals to sunset drives.":["Des arrivées à l'aéroport aux balades au coucher du soleil.","Desde las llegadas al aeropuerto hasta los paseos al atardecer.","Von der Flughafenankunft bis zur Fahrt bei Sonnenuntergang.","Dagli arrivi in aeroporto ai percorsi al tramonto."],
"One trusted local team for comfortable transfers, private tours and easy island days.":["Une équipe locale de confiance pour des transferts confortables, des tours privés et des journées sans souci.","Un equipo local de confianza para traslados cómodos, tours privados y días fáciles por la isla.","Ein zuverlässiges lokales Team für komfortable Transfers, private Touren und entspannte Inseltage.","Un team locale affidabile per trasferimenti confortevoli, tour privati e giornate senza pensieri sull'isola."],
"QUICK BOOKING":["RÉSERVATION RAPIDE","RESERVA RÁPIDA","SCHNELLBUCHUNG","PRENOTAZIONE RAPIDA"],
"24/7 AVAILABLE":["DISPONIBLE 24/7","DISPONIBLE 24/7","24/7 VERFÜGBAR","DISPONIBILE 24/7"],
"Plan your journey":["Planifiez votre voyage","Planifica tu viaje","Planen Sie Ihre Reise","Pianifica il tuo viaggio"],
"Choose your pickup and destination anywhere across Mauritius.":["Choisissez votre prise en charge et votre destination partout à Maurice.","Elige tu recogida y destino en cualquier lugar de Mauricio.","Wählen Sie Abholort und Ziel überall auf Mauritius.","Scegli il punto di ritiro e la destinazione ovunque a Mauritius."],
"Service":["Service","Servicio","Service","Servizio"],
"Select service":["Sélectionner un service","Seleccionar servicio","Service auswählen","Seleziona servizio"],
"Airport Transfer":["Transfert aéroport","Traslado aeropuerto","Flughafentransfer","Trasferimento aeroportuale"],
"Private Transportation":["Transport privé","Transporte privado","Privater Transport","Trasporto privato"],
"Group Transportation":["Transport de groupe","Transporte de grupo","Gruppentransport","Trasporto di gruppo"],
"Excursion":["Excursion","Excursión","Ausflug","Escursione"],
"Activity Booking":["Réservation d'activité","Reserva de actividad","Aktivitätsbuchung","Prenotazione attività"],
"Customized Local Tour":["Tour local personnalisé","Tour local personalizado","Individuelle lokale Tour","Tour locale personalizzato"],
"Tailor-made Trip":["Voyage sur mesure","Viaje a medida","Individuelle Reise","Viaggio su misura"],
"Birthday Surprise":["Surprise d'anniversaire","Sorpresa de cumpleaños","Geburtstagsüberraschung","Sorpresa di compleanno"],
"Wedding / Event":["Mariage / Événement","Boda / Evento","Hochzeit / Event","Matrimonio / Evento"],
"Cruise Ship Transfer":["Transfert bateau de croisière","Traslado de crucero","Kreuzfahrttransfer","Trasferimento nave da crociera"],
"Full Name":["Nom complet","Nombre completo","Vollständiger Name","Nome completo"],
"Email Address":["Adresse e-mail","Correo electrónico","E-Mail-Adresse","Indirizzo e-mail"],
"WhatsApp / Phone":["WhatsApp / Téléphone","WhatsApp / Teléfono","WhatsApp / Telefon","WhatsApp / Telefono"],
"Travel Date":["Date du voyage","Fecha del viaje","Reisedatum","Data del viaggio"],
"Pickup Time":["Heure de prise en charge","Hora de recogida","Abholzeit","Orario di ritiro"],
"Passengers":["Passagers","Pasajeros","Passagiere","Passeggeri"],
"Select passengers":["Sélectionner les passagers","Seleccionar pasajeros","Passagiere auswählen","Seleziona passeggeri"],
"Vehicle":["Véhicule","Vehículo","Fahrzeug","Veicolo"],
"Select vehicle":["Sélectionner un véhicule","Seleccionar vehículo","Fahrzeug auswählen","Seleziona veicolo"],
"Standard Car":["Voiture standard","Coche estándar","Standardwagen","Auto standard"],
"SUV":["SUV","SUV","SUV","SUV"],
"Minivan":["Minibus","Miniván","Minivan","Minivan"],
"Large Van":["Grand van","Furgoneta grande","Großer Van","Van grande"],
"Pickup Location":["Lieu de prise en charge","Lugar de recogida","Abholort","Luogo di ritiro"],
"Where should we collect you?":["Où devons-nous venir vous chercher ?","¿Dónde debemos recogerte?","Wo sollen wir Sie abholen?","Dove dobbiamo venirti a prendere?"],
"Pickup Town / Place":["Ville / lieu de prise en charge","Ciudad / lugar de recogida","Abholort / Ort","Città / luogo di ritiro"],
"Other Pickup Area":["Autre zone de prise en charge","Otra zona de recogida","Anderer Abholbereich","Altra zona di ritiro"],
"Exact Pickup Address":["Adresse exacte de prise en charge","Dirección exacta de recogida","Genaue Abholadresse","Indirizzo esatto di ritiro"],
"Destination":["Destination","Destino","Ziel","Destinazione"],
"Where are you going?":["Où allez-vous ?","¿A dónde vas?","Wohin fahren Sie?","Dove stai andando?"],
"Destination Town / Place":["Ville / lieu de destination","Ciudad / lugar de destino","Zielort / Ort","Città / luogo di destinazione"],
"Other Destination Area":["Autre zone de destination","Otra zona de destino","Anderer Zielbereich","Altra zona di destinazione"],
"Exact Drop-off Address":["Adresse exacte de destination","Dirección exacta de destino","Genaue Zieladresse","Indirizzo esatto di destinazione"],
"Special Request":["Demande spéciale","Solicitud especial","Besonderer Wunsch","Richiesta speciale"],
"Baby Seat":["Siège bébé","Silla de bebé","Babysitz","Seggiolino"],
"Baby seats are available on request.":["Les sièges bébé sont disponibles sur demande.","Hay sillas de bebé disponibles bajo petición.","Babysitze sind auf Anfrage verfügbar.","I seggiolini sono disponibili su richiesta."],
"Number of Baby Seats":["Nombre de sièges bébé","Número de sillas de bebé","Anzahl Babysitze","Numero di seggiolini"],
"No baby seat":["Pas de siège bébé","Sin silla de bebé","Kein Babysitz","Nessun seggiolino"],
"Submit Booking":["Envoyer la réservation","Enviar reserva","Buchung absenden","Invia prenotazione"],
"Your booking details will be sent to BTSM and WhatsApp will open with your message ready to send.":["Vos détails de réservation seront envoyés à BTSM et WhatsApp s'ouvrira avec votre message prêt à être envoyé.","Tus datos de reserva se enviarán a BTSM y WhatsApp se abrirá con tu mensaje listo para enviar.","Ihre Buchungsdaten werden an BTSM gesendet und WhatsApp öffnet sich mit Ihrer vorbereiteten Nachricht.","I dettagli della prenotazione saranno inviati a BTSM e WhatsApp si aprirà con il messaggio pronto per l'invio."],
"CHOOSE YOUR RIDE":["CHOISISSEZ VOTRE VÉHICULE","ELIGE TU VEHÍCULO","WÄHLEN SIE IHREN WAGEN","SCEGLI IL TUO VEICOLO"],
"A vehicle for every journey.":["Un véhicule pour chaque voyage.","Un vehículo para cada viaje.","Ein Fahrzeug für jede Reise.","Un veicolo per ogni viaggio."],
"Four comfortable vehicle options depending on your passenger and luggage requirements.":["Quatre options de véhicules confortables selon vos passagers et vos bagages.","Cuatro opciones de vehículos cómodos según tus pasajeros y equipaje.","Vier komfortable Fahrzeugoptionen je nach Passagieren und Gepäck.","Quattro opzioni di veicoli confortevoli in base a passeggeri e bagagli."],
"Comfortable option for individuals, couples and small families.":["Option confortable pour les personnes seules, les couples et les petites familles.","Opción cómoda para personas, parejas y familias pequeñas.","Komfortable Option für Einzelpersonen, Paare und kleine Familien.","Opzione confortevole per singoli, coppie e piccole famiglie."],
"Extra comfort with generous space for airport luggage.":["Plus de confort avec beaucoup d'espace pour les bagages d'aéroport.","Más comodidad y espacio para el equipaje del aeropuerto.","Mehr Komfort mit viel Platz für Flughafengepäck.","Più comfort e spazio per i bagagli aeroportuali."],
"Spacious transportation for families and medium groups.":["Transport spacieux pour les familles et les groupes moyens.","Transporte espacioso para familias y grupos medianos.","Geräumiger Transport für Familien und mittelgroße Gruppen.","Trasporto spazioso per famiglie e gruppi medi."],
"Ideal for larger families and private groups.":["Idéal pour les grandes familles et les groupes privés.","Ideal para familias grandes y grupos privados.","Ideal für größere Familien und private Gruppen.","Ideale per famiglie numerose e gruppi privati."],
"Passengers":["Passagers","Pasajeros","Passagiere","Passeggeri"],
"Choose Standard Car":["Choisir la voiture standard","Elegir coche estándar","Standardwagen wählen","Scegli auto standard"],
"Choose SUV":["Choisir le SUV","Elegir SUV","SUV wählen","Scegli SUV"],
"Choose Minivan":["Choisir le minibus","Elegir miniván","Minivan wählen","Scegli minivan"],
"Choose Large Van":["Choisir le grand van","Elegir furgoneta grande","Großen Van wählen","Scegli van grande"],
"POPULAR":["POPULAIRE","POPULAR","BELIEBT","POPOLARE"],
"Airport Transfers":["Transferts aéroport","Traslados aeropuerto","Flughafentransfers","Trasferimenti aeroportuali"],
"Vehicle Options":["Options de véhicules","Opciones de vehículos","Fahrzeugoptionen","Opzioni veicoli"],
"Local Service":["Service local","Servicio local","Lokaler Service","Servizio locale"],
"Easy Booking":["Réservation facile","Reserva fácil","Einfache Buchung","Prenotazione facile"],
"MAURITIUS EXPERIENCES":["EXPÉRIENCES À MAURICE","EXPERIENCIAS EN MAURICIO","MAURITIUS-ERLEBNISSE","ESPERIENZE A MAURITIUS"],
"More ways to enjoy the island.":["Encore plus de façons de profiter de l'île.","Más formas de disfrutar de la isla.","Mehr Möglichkeiten, die Insel zu genießen.","Altri modi per vivere l'isola."],
"Beaches, lagoons, marine experiences and unforgettable Mauritius memories.":["Plages, lagons, expériences marines et souvenirs inoubliables de Maurice.","Playas, lagunas, experiencias marinas y recuerdos inolvidables de Mauricio.","Strände, Lagunen, Meereserlebnisse und unvergessliche Mauritius-Momente.","Spiagge, lagune, esperienze marine e ricordi indimenticabili di Mauritius."],
"ISLAND ESCAPES":["ÉVASIONS SUR L'ÎLE","ESCAPADAS POR LA ISLA","INSELAUSFLÜGE","FUGHE SULL'ISOLA"],
"Beaches & Lagoons":["Plages & lagons","Playas y lagunas","Strände & Lagunen","Spiagge e lagune"],
"Discover turquoise lagoons, tropical beaches and island scenery.":["Découvrez les lagons turquoise, les plages tropicales et les paysages de l'île.","Descubre lagunas turquesas, playas tropicales y paisajes de la isla.","Entdecken Sie türkisfarbene Lagunen, tropische Strände und Insellandschaften.","Scopri lagune turchesi, spiagge tropicali e paesaggi dell'isola."],
"OCEAN EXPERIENCE":["EXPÉRIENCE OCÉANIQUE","EXPERIENCIA OCEÁNICA","MEERESERLEBNIS","ESPERIENZA OCEANICA"],
"Snorkeling & Marine Life":["Plongée avec tuba & vie marine","Snorkel y vida marina","Schnorcheln & Meeresleben","Snorkeling e vita marina"],
"Enjoy Mauritius' clear water and colorful tropical marine life.":["Profitez des eaux claires de Maurice et de sa vie marine tropicale colorée.","Disfruta de las aguas cristalinas de Mauricio y su colorida vida marina tropical.","Genießen Sie das klare Wasser von Mauritius und die farbenfrohe tropische Meereswelt.","Goditi le acque limpide di Mauritius e la colorata vita marina tropicale."],
"FROM THE MOMENT YOU LAND":["DÈS VOTRE ARRIVÉE","DESDE QUE ATERRIZAS","AB DEM MOMENT IHRER ANKUNFT","DAL MOMENTO IN CUI ATTERRI"],
"Airport Transportation":["Transport aéroport","Transporte aeropuerto","Flughafentransport","Trasporto aeroportuale"],
"Comfortable private transportation from the moment you arrive.":["Transport privé confortable dès votre arrivée.","Transporte privado cómodo desde tu llegada.","Komfortabler privater Transport ab Ihrer Ankunft.","Trasporto privato confortevole dal tuo arrivo."],
"Plan Your Mauritius Experience":["Planifiez votre expérience à Maurice","Planifica tu experiencia en Mauricio","Planen Sie Ihr Mauritius-Erlebnis","Pianifica la tua esperienza a Mauritius"],
"EXPLORE MAURITIUS":["EXPLOREZ MAURICE","EXPLORA MAURICIO","MAURITIUS ENTDECKEN","ESPLORA MAURITIUS"],
"Discover every side of Mauritius.":["Découvrez chaque facette de Maurice.","Descubre cada rincón de Mauricio.","Entdecken Sie alle Seiten von Mauritius.","Scopri ogni lato di Mauritius."],
"Explore the north, south, east and west with private transportation and flexible itineraries.":["Explorez le nord, le sud, l'est et l'ouest avec un transport privé et des itinéraires flexibles.","Explora el norte, sur, este y oeste con transporte privado e itinerarios flexibles.","Erkunden Sie Norden, Süden, Osten und Westen mit privatem Transport und flexiblen Routen.","Esplora nord, sud, est e ovest con trasporto privato e itinerari flessibili."],
"SOUTH MAURITIUS":["SUD DE MAURICE","SUR DE MAURICIO","SÜD-MAURITIUS","SUD DI MAURITIUS"],
"Nature & Culture":["Nature & culture","Naturaleza y cultura","Natur & Kultur","Natura e cultura"],
"SOUTH TOUR":["TOUR DU SUD","TOUR DEL SUR","SÜDTOUR","TOUR DEL SUD"],
"Discover the South of Mauritius.":["Découvrez le sud de Maurice.","Descubre el sur de Mauricio.","Entdecken Sie den Süden von Mauritius.","Scopri il sud di Mauritius."],
"Discover sacred sites, waterfalls, mountain scenery and beautiful landscapes.":["Découvrez les sites sacrés, cascades, paysages de montagne et magnifiques panoramas.","Descubre lugares sagrados, cascadas, paisajes de montaña y hermosos paisajes.","Entdecken Sie heilige Orte, Wasserfälle, Berglandschaften und schöne Landschaften.","Scopri luoghi sacri, cascate, paesaggi montani e splendidi panorami."],
"NORTH MAURITIUS":["NORD DE MAURICE","NORTE DE MAURICIO","NORD-MAURITIUS","NORD DI MAURITIUS"],
"Beaches & Discovery":["Plages & découvertes","Playas y descubrimientos","Strände & Entdeckungen","Spiagge e scoperte"],
"NORTH TOUR":["TOUR DU NORD","TOUR DEL NORTE","NORDTOUR","TOUR DEL NORD"],
"Explore the North of Mauritius.":["Explorez le nord de Maurice.","Explora el norte de Mauricio.","Erkunden Sie den Norden von Mauritius.","Esplora il nord di Mauritius."],
"Discover northern villages, tropical gardens and beautiful beaches.":["Découvrez les villages du nord, les jardins tropicaux et de belles plages.","Descubre pueblos del norte, jardines tropicales y hermosas playas.","Entdecken Sie nördliche Dörfer, tropische Gärten und schöne Strände.","Scopri villaggi del nord, giardini tropicali e splendide spiagge."],
"EAST MAURITIUS":["EST DE MAURICE","ESTE DE MAURICIO","OST-MAURITIUS","EST DI MAURITIUS"],
"Lagoons & Island Life":["Lagons & vie insulaire","Lagunas y vida isleña","Lagunen & Inselleben","Lagune e vita sull'isola"],
"EAST TOUR":["TOUR DE L'EST","TOUR DEL ESTE","OSTTOUR","TOUR DELL'EST"],
"Experience the East of Mauritius.":["Découvrez l'est de Maurice.","Vive el este de Mauricio.","Erleben Sie den Osten von Mauritius.","Vivi l'est di Mauritius."],
"Enjoy turquoise lagoons, tropical beaches and memorable island experiences.":["Profitez des lagons turquoise, des plages tropicales et d'expériences insulaires mémorables.","Disfruta de lagunas turquesas, playas tropicales y experiencias inolvidables.","Genießen Sie türkisfarbene Lagunen, tropische Strände und besondere Inselerlebnisse.","Goditi lagune turchesi, spiagge tropicali ed esperienze memorabili sull'isola."],
"WEST MAURITIUS":["OUEST DE MAURICE","OESTE DE MAURICIO","WEST-MAURITIUS","OVEST DI MAURITIUS"],
"Coast & Sunset":["Côte & coucher de soleil","Costa y atardecer","Küste & Sonnenuntergang","Costa e tramonto"],
"WEST TOUR":["TOUR DE L'OUEST","TOUR DEL OESTE","WESTTOUR","TOUR DELL'OVEST"],
"Enjoy the West of Mauritius.":["Profitez de l'ouest de Maurice.","Disfruta del oeste de Mauricio.","Genießen Sie den Westen von Mauritius.","Goditi l'ovest di Mauritius."],
"Discover beaches, coastal villages and unforgettable sunset scenery.":["Découvrez les plages, villages côtiers et paysages de coucher de soleil inoubliables.","Descubre playas, pueblos costeros y paisajes inolvidables al atardecer.","Entdecken Sie Strände, Küstendörfer und unvergessliche Sonnenuntergänge.","Scopri spiagge, villaggi costieri e tramonti indimenticabili."],
"Plan South Tour":["Planifier le tour du sud","Planificar tour del sur","Süd-Tour planen","Pianifica tour del sud"],
"Plan North Tour":["Planifier le tour du nord","Planificar tour del norte","Nord-Tour planen","Pianifica tour del nord"],
"Plan East Tour":["Planifier le tour de l'est","Planificar tour del este","Ost-Tour planen","Pianifica tour dell'est"],
"Plan West Tour":["Planifier le tour de l'ouest","Planificar tour del oeste","West-Tour planen","Pianifica tour dell'ovest"],
"All excursions can be customized around your interests, schedule and pickup location.":["Toutes les excursions peuvent être adaptées à vos intérêts, votre emploi du temps et votre lieu de prise en charge.","Todas las excursiones pueden adaptarse a tus intereses, horario y lugar de recogida.","Alle Ausflüge können an Ihre Interessen, Ihren Zeitplan und Abholort angepasst werden.","Tutte le escursioni possono essere personalizzate in base ai tuoi interessi, orari e luogo di ritiro."],
"WHAT WE OFFER":["CE QUE NOUS PROPOSONS","LO QUE OFRECEMOS","UNSER ANGEBOT","COSA OFFRIAMO"],
"More than a transfer. Your Mauritius experience.":["Plus qu'un transfert. Votre expérience à Maurice.","Más que un traslado. Tu experiencia en Mauricio.","Mehr als ein Transfer. Ihr Mauritius-Erlebnis.","Più di un trasferimento. La tua esperienza a Mauritius."],
"From airport arrival to your last day on the island, BTSM helps you travel comfortably and conveniently across Mauritius.":["De votre arrivée à l'aéroport à votre dernier jour sur l'île, BTSM vous aide à voyager confortablement et facilement à travers Maurice.","Desde tu llegada al aeropuerto hasta tu último día en la isla, BTSM te ayuda a viajar con comodidad por Mauricio.","Von der Flughafenankunft bis zum letzten Inseltag hilft BTSM Ihnen, komfortabel und bequem durch Mauritius zu reisen.","Dall'arrivo in aeroporto all'ultimo giorno sull'isola, BTSM ti aiuta a viaggiare comodamente in tutta Mauritius."],
"Airport pickup and drop-off with local drivers.":["Prise en charge et retour à l'aéroport avec des chauffeurs locaux.","Recogida y regreso al aeropuerto con conductores locales.","Flughafenabholung und -transfer mit lokalen Fahrern.","Pick-up e rientro in aeroporto con autisti locali."],
"Comfortable transportation for couples, families and groups.":["Transport confortable pour couples, familles et groupes.","Transporte cómodo para parejas, familias y grupos.","Komfortabler Transport für Paare, Familien und Gruppen.","Trasporto confortevole per coppie, famiglie e gruppi."],
"Flexible transportation for families, groups and events.":["Transport flexible pour familles, groupes et événements.","Transporte flexible para familias, grupos y eventos.","Flexibler Transport für Familien, Gruppen und Veranstaltungen.","Trasporto flessibile per famiglie, gruppi ed eventi."],
"Discover the north, south, east and west of Mauritius.":["Découvrez le nord, le sud, l'est et l'ouest de Maurice.","Descubre el norte, sur, este y oeste de Mauricio.","Entdecken Sie Norden, Süden, Osten und Westen von Mauritius.","Scopri nord, sud, est e ovest di Mauritius."],
"Let us help arrange memorable island activities.":["Laissez-nous organiser des activités inoubliables sur l'île.","Déjanos organizar actividades inolvidables en la isla.","Wir helfen Ihnen, unvergessliche Inselaktivitäten zu organisieren.","Lascia che ti aiutiamo a organizzare attività indimenticabili sull'isola."],
"Create a customized journey around your interests and schedule.":["Créez un voyage personnalisé selon vos intérêts et votre emploi du temps.","Crea un viaje personalizado según tus intereses y horario.","Gestalten Sie eine individuelle Reise nach Ihren Interessen und Ihrem Zeitplan.","Crea un viaggio personalizzato in base ai tuoi interessi e orari."],
"Make a Mauritius holiday even more memorable.":["Rendez vos vacances à Maurice encore plus mémorables.","Haz tus vacaciones en Mauricio aún más memorables.","Machen Sie Ihren Mauritius-Urlaub noch unvergesslicher.","Rendi la tua vacanza a Mauritius ancora più memorabile."],
"Transportation for weddings, celebrations and private events.":["Transport pour mariages, célébrations et événements privés.","Transporte para bodas, celebraciones y eventos privados.","Transport für Hochzeiten, Feiern und private Veranstaltungen.","Trasporto per matrimoni, celebrazioni ed eventi privati."],
"Port transportation and excursions around your cruise schedule.":["Transport depuis le port et excursions selon votre programme de croisière.","Transporte desde el puerto y excursiones según tu horario de crucero.","Hafentransport und Ausflüge passend zu Ihrem Kreuzfahrtplan.","Trasporto dal porto ed escursioni secondo il programma della crociera."],
"Book transfer →":["Réserver le transfert →","Reservar traslado →","Transfer buchen →","Prenota trasferimento →"],
"Request transport →":["Demander un transport →","Solicitar transporte →","Transport anfragen →","Richiedi trasporto →"],
"Plan your group →":["Planifier votre groupe →","Planificar tu grupo →","Gruppe planen →","Pianifica il gruppo →"],
"Explore excursions →":["Explorer les excursions →","Explorar excursiones →","Ausflüge entdecken →","Esplora escursioni →"],
"Explore activities →":["Explorer les activités →","Explorar actividades →","Aktivitäten entdecken →","Esplora attività →"],
"Create your trip →":["Créer votre voyage →","Crear tu viaje →","Reise erstellen →","Crea il tuo viaggio →"],
"Plan a surprise →":["Planifier une surprise →","Planificar una sorpresa →","Überraschung planen →","Pianifica una sorpresa →"],
"Plan your event →":["Planifier votre événement →","Planificar tu evento →","Event planen →","Pianifica il tuo evento →"],
"Enquire now →":["Demander maintenant →","Consultar ahora →","Jetzt anfragen →","Richiedi ora →"],
"WHY BTSM":["POURQUOI BTSM","POR QUÉ BTSM","WARUM BTSM","PERCHÉ BTSM"],
"Your island journey, made easier.":["Votre voyage sur l'île, simplifié.","Tu viaje por la isla, más fácil.","Ihre Inselreise, ganz einfach.","Il tuo viaggio sull'isola, più semplice."],
"Comfortable transportation, local knowledge and personalized service for your Mauritius journey.":["Transport confortable, connaissance locale et service personnalisé pour votre voyage à Maurice.","Transporte cómodo, conocimiento local y servicio personalizado para tu viaje por Mauricio.","Komfortabler Transport, Ortskenntnis und persönlicher Service für Ihre Mauritius-Reise.","Trasporto confortevole, conoscenza locale e servizio personalizzato per il tuo viaggio a Mauritius."],
"Reliable 24/7 service":["Service fiable 24/7","Servicio fiable 24/7","Zuverlässiger 24/7-Service","Servizio affidabile 24/7"],
"Airport transportation whenever you need it.":["Transport aéroport quand vous en avez besoin.","Transporte al aeropuerto cuando lo necesites.","Flughafentransport, wann immer Sie ihn brauchen.","Trasporto aeroportuale quando ne hai bisogno."],
"Professional local drivers":["Chauffeurs locaux professionnels","Conductores locales profesionales","Professionelle lokale Fahrer","Autisti locali professionali"],
"Travel with drivers who know Mauritius.":["Voyagez avec des chauffeurs qui connaissent Maurice.","Viaja con conductores que conocen Mauricio.","Reisen Sie mit Fahrern, die Mauritius kennen.","Viaggia con autisti che conoscono Mauritius."],
"Four vehicle options":["Quatre options de véhicules","Cuatro opciones de vehículos","Vier Fahrzeugoptionen","Quattro opzioni di veicoli"],
"Choose according to passengers and luggage.":["Choisissez selon le nombre de passagers et de bagages.","Elige según pasajeros y equipaje.","Wählen Sie nach Passagieren und Gepäck.","Scegli in base a passeggeri e bagagli."],
"Customized experiences":["Expériences personnalisées","Experiencias personalizadas","Individuelle Erlebnisse","Esperienze personalizzate"],
"Explore Mauritius your way.":["Explorez Maurice à votre façon.","Explora Mauricio a tu manera.","Erkunden Sie Mauritius auf Ihre Art.","Esplora Mauritius a modo tuo."],
"Comfortable journeys. Beautiful memories.":["Des voyages confortables. De beaux souvenirs.","Viajes cómodos. Bonitos recuerdos.","Komfortable Reisen. Schöne Erinnerungen.","Viaggi confortevoli. Bellissimi ricordi."],
"Questions?":["Des questions ?","¿Preguntas?","Fragen?","Domande?"],
"Everything you need to know before booking.":["Tout ce que vous devez savoir avant de réserver.","Todo lo que necesitas saber antes de reservar.","Alles, was Sie vor der Buchung wissen müssen.","Tutto ciò che devi sapere prima di prenotare."],
"Are airport transfers available 24/7?":["Les transferts aéroport sont-ils disponibles 24/7 ?","¿Hay traslados al aeropuerto 24/7?","Sind Flughafentransfers rund um die Uhr verfügbar?","I trasferimenti aeroportuali sono disponibili 24/7?"],
"Yes. BTSM provides airport pickup and drop-off around the clock.":["Oui. BTSM assure les prises en charge et déposes à l'aéroport 24h/24.","Sí. BTSM ofrece recogida y regreso al aeropuerto las 24 horas.","Ja. BTSM bietet rund um die Uhr Abholung und Transfer zum Flughafen.","Sì. BTSM offre pick-up e rientro in aeroporto 24 ore su 24."],
"What vehicles are available?":["Quels véhicules sont disponibles ?","¿Qué vehículos están disponibles?","Welche Fahrzeuge sind verfügbar?","Quali veicoli sono disponibili?"],
"We provide Standard Car, SUV, Minivan and Large Van options.":["Nous proposons une voiture standard, un SUV, un minibus et un grand van.","Ofrecemos coche estándar, SUV, miniván y furgoneta grande.","Wir bieten Standardwagen, SUV, Minivan und großen Van an.","Offriamo auto standard, SUV, minivan e van grande."],
"Can I customize an excursion?":["Puis-je personnaliser une excursion ?","¿Puedo personalizar una excursión?","Kann ich einen Ausflug individuell gestalten?","Posso personalizzare un'escursione?"],
"Yes. Excursions can be customized around your interests, pickup location and schedule.":["Oui. Les excursions peuvent être adaptées à vos intérêts, votre lieu de prise en charge et votre emploi du temps.","Sí. Las excursiones pueden adaptarse a tus intereses, lugar de recogida y horario.","Ja. Ausflüge können an Ihre Interessen, Ihren Abholort und Zeitplan angepasst werden.","Sì. Le escursioni possono essere personalizzate in base ai tuoi interessi, luogo di ritiro e orari."],
"Are baby seats available?":["Les sièges bébé sont-ils disponibles ?","¿Hay sillas de bebé disponibles?","Sind Babysitze verfügbar?","Sono disponibili seggiolini?"],
"Yes. Baby seats can be requested when you make your booking.":["Oui. Les sièges bébé peuvent être demandés lors de votre réservation.","Sí. Puedes solicitar sillas de bebé al hacer la reserva.","Ja. Babysitze können bei der Buchung angefragt werden.","Sì. I seggiolini possono essere richiesti al momento della prenotazione."],
"READY TO EXPLORE?":["PRÊT À EXPLORER ?","¿LISTO PARA EXPLORAR?","BEREIT ZU ENTDECKEN?","PRONTO A ESPLORARE?"],
"Let's plan your Mauritius journey.":["Planifions votre voyage à Maurice.","Planifiquemos tu viaje por Mauricio.","Planen wir Ihre Mauritius-Reise.","Pianifichiamo il tuo viaggio a Mauritius."],
"Transfers, excursions and customized experiences.":["Transferts, excursions et expériences personnalisées.","Traslados, excursiones y experiencias personalizadas.","Transfers, Ausflüge und individuelle Erlebnisse.","Trasferimenti, escursioni ed esperienze personalizzate."],
"WhatsApp Us":["Nous contacter sur WhatsApp","Escríbenos por WhatsApp","WhatsApp kontaktieren","Contattaci su WhatsApp"],
"BEST TAXI SERVICE IN MAURITIUS":["MEILLEUR SERVICE DE TAXI À MAURICE","MEJOR SERVICIO DE TAXI EN MAURICIO","BESSTER TAXISERVICE AUF MAURITIUS","MIGLIOR SERVIZIO TAXI A MAURITIUS"],
"Airport transfers, private transportation, excursions and customized journeys throughout Mauritius.":["Transferts aéroport, transport privé, excursions et voyages personnalisés partout à Maurice.","Traslados aeropuerto, transporte privado, excursiones y viajes personalizados por todo Mauricio.","Flughafentransfers, privater Transport, Ausflüge und individuelle Reisen auf ganz Mauritius.","Trasferimenti aeroportuali, trasporto privato, escursioni e viaggi personalizzati in tutta Mauritius."],
"SERVICES":["SERVICES","SERVICIOS","LEISTUNGEN","SERVIZI"],
"EXPERIENCES":["EXPÉRIENCES","EXPERIENCIAS","ERLEBNISSE","ESPERIENZE"],
"CONTACT":["CONTACT","CONTACTO","KONTAKT","CONTATTI"],
"WhatsApp":["WhatsApp","WhatsApp","WhatsApp","WhatsApp"],
"BOOKING READY":["RÉSERVATION PRÊTE","RESERVA LISTA","BUCHUNG BEREIT","PRENOTAZIONE PRONTA"],
"Booking submitted successfully!":["Réservation envoyée avec succès !","¡Reserva enviada correctamente!","Buchung erfolgreich gesendet!","Prenotazione inviata con successo!"],
"Your booking details have been prepared. WhatsApp is opening with your booking request.":["Vos détails de réservation sont prêts. WhatsApp va s'ouvrir avec votre demande.","Tus datos de reserva están preparados. WhatsApp se abrirá con tu solicitud.","Ihre Buchungsdaten wurden vorbereitet. WhatsApp wird mit Ihrer Anfrage geöffnet.","I dettagli della prenotazione sono pronti. WhatsApp si aprirà con la tua richiesta."],
"Booking ID":["ID de réservation","ID de reserva","Buchungs-ID","ID prenotazione"],
"Open WhatsApp":["Ouvrir WhatsApp","Abrir WhatsApp","WhatsApp öffnen","Apri WhatsApp"],
"Stay on Website":["Rester sur le site","Quedarse en el sitio web","Auf der Website bleiben","Resta sul sito"],
"Your booking details will be sent to BTSM and WhatsApp will open with your message ready to send.":["Vos détails de réservation seront envoyés à BTSM et WhatsApp s'ouvrira avec votre message prêt à être envoyé.","Tus datos de reserva se enviarán a BTSM y WhatsApp se abrirá con tu mensaje listo para enviar.","Ihre Buchungsdaten werden an BTSM gesendet und WhatsApp öffnet sich mit Ihrer vorbereiteten Nachricht.","I dettagli della prenotazione saranno inviati a BTSM e WhatsApp si aprirà con il messaggio pronto per l'invio."]
};

function t(keyOrEnglish) {
    if (I18N[keyOrEnglish]) return I18N[keyOrEnglish][{en:0,fr:1,es:2,de:3,it:4}[CURRENT_LANGUAGE]];
    const row = TEXT_TRANSLATIONS[keyOrEnglish];
    if (row) return row[{fr:0,es:1,de:2,it:3}[CURRENT_LANGUAGE] ?? -1] || keyOrEnglish;
    return keyOrEnglish;
}

function translateElement(element) {
    const key = element.dataset.i18n;
    if (key && I18N[key]) {
        if (element.dataset.i18nHtml === "true") element.innerHTML = t(key);
        else element.textContent = t(key);
        return;
    }
    const original = element.dataset.i18nOriginal || element.textContent.trim().replace(/\s+/g, " ");
    if (!original || !TEXT_TRANSLATIONS[original]) return;
    element.dataset.i18nOriginal = original;
    element.textContent = CURRENT_LANGUAGE === "en" ? original : t(original);
}

function applyTranslations() {
    /* Existing keyed elements. */
    $$('[data-i18n]').forEach(translateElement);

    /* Leaf copy and form labels/options across the complete page. */
    $$('h2,h3,h4,p,i,strong,small,button,a,option,label > span').forEach((el) => {
        if (el.closest('.language-picker') || el.closest('.brand-logo') || el.id === 'menuToggle') return;
        if (el.children.length) return;
        translateElement(el);
    });

    /* Placeholders and accessible labels. */
    const placeholders = {
        "Your full name":["Votre nom complet","Tu nombre completo","Ihr vollständiger Name","Il tuo nome completo"],
        "yourname@example.com":["votrenom@exemple.com","tunombre@ejemplo.com","ihrname@beispiel.de","tuonome@esempio.com"],
        "Enter location":["Entrez le lieu","Introduce la ubicación","Ort eingeben","Inserisci località"],
        "Hotel, villa, apartment, street or landmark":["Hôtel, villa, appartement, rue ou point de repère","Hotel, villa, apartamento, calle o punto de referencia","Hotel, Villa, Wohnung, Straße oder Orientierungspunkt","Hotel, villa, appartamento, strada o punto di riferimento"],
        "Hotel, resort, villa, street or landmark":["Hôtel, complexe, villa, rue ou point de repère","Hotel, resort, villa, calle o punto de referencia","Hotel, Resort, Villa, Straße oder Orientierungspunkt","Hotel, resort, villa, strada o punto di riferimento"],
        "Flight number, luggage or additional information...":["Numéro de vol, bagages ou informations supplémentaires...","Número de vuelo, equipaje o información adicional...","Flugnummer, Gepäck oder zusätzliche Informationen...","Numero del volo, bagagli o informazioni aggiuntive..."]
    };
    $$('[placeholder]').forEach((el) => {
        const original = el.dataset.i18nPlaceholder || el.getAttribute('placeholder');
        el.dataset.i18nPlaceholder = original;
        if (CURRENT_LANGUAGE === 'en') el.setAttribute('placeholder', original);
        else if (placeholders[original]) el.setAttribute('placeholder', placeholders[original][{fr:0,es:1,de:2,it:3}[CURRENT_LANGUAGE]]);
    });

    document.documentElement.lang = CURRENT_LANGUAGE;
}

function translateDynamicOptions() {
    const dynamic = {
        "Select town / place":["Sélectionner une ville / un lieu","Seleccionar ciudad / lugar","Ort auswählen","Seleziona città / luogo"],
        "Other / Not listed":["Autre / Non répertorié","Otro / No listado","Andere / Nicht aufgeführt","Altro / Non elencato"],
        "Select passengers":["Sélectionner les passagers","Seleccionar pasajeros","Passagiere auswählen","Seleziona passeggeri"],
        "1 Passenger":["1 passager","1 pasajero","1 Passagier","1 passeggero"],
        "2 Passengers":["2 passagers","2 pasajeros","2 Passagiere","2 passeggeri"],
        "3 Passengers":["3 passagers","3 pasajeros","3 Passagiere","3 passeggeri"],
        "4 Passengers":["4 passagers","4 pasajeros","4 Passagiere","4 passeggeri"],
        "5 Passengers":["5 passagers","5 pasajeros","5 Passagiere","5 passeggeri"],
        "6 Passengers":["6 passagers","6 pasajeros","6 Passagiere","6 passeggeri"],
        "7 Passengers":["7 passagers","7 pasajeros","7 Passagiere","7 passeggeri"],
        "8 Passengers":["8 passagers","8 pasajeros","8 Passagiere","8 passeggeri"]
    };
    $$('select option').forEach((option) => {
        const original = option.dataset.i18nOriginal || option.textContent.trim();
        option.dataset.i18nOriginal = original;
        if (CURRENT_LANGUAGE === 'en') option.textContent = original;
        else if (dynamic[original]) option.textContent = dynamic[original][{fr:0,es:1,de:2,it:3}[CURRENT_LANGUAGE]];
    });
}

function setupLanguage() {
    const picker = $(".language-picker");
    const button = $("#languageButton");
    const menu = $("#languageMenu");
    const label = $("#languageLabel");
    const flag = $("#languageFlag");
    const hiddenSelect = $("#languageSelect");
    if (!picker || !button || !menu) return;

    function close() {
        picker.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
    }

    function selectLanguage(language) {
        CURRENT_LANGUAGE = LANGUAGES[language] ? language : "en";
        const data = LANGUAGES[CURRENT_LANGUAGE];
        if (label) label.textContent = data.label;
        if (flag) flag.className = `language-flag ${data.flag}`;
        if (hiddenSelect) hiddenSelect.value = CURRENT_LANGUAGE;
        try { localStorage.setItem("btsm-language", CURRENT_LANGUAGE); } catch (_) {}
        applyTranslations();
        translateDynamicOptions();
    }

    let saved = "en";
    try { saved = localStorage.getItem("btsm-language") || "en"; } catch (_) {}
    selectLanguage(saved);

    button.addEventListener("click", (event) => {
        event.stopPropagation();
        const open = picker.classList.toggle("open");
        button.setAttribute("aria-expanded", String(open));
    });

    $$(".language-option").forEach((option) => {
        option.addEventListener("click", () => {
            selectLanguage(option.dataset.language);
            close();
        });
    });

    document.addEventListener("click", (event) => {
        if (!picker.contains(event.target)) close();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
    });
}

/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const button =
        $("#menuToggle");

    const menu =
        $("#mobileNav");


    if (
        !button ||
        !menu
    ) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            const open =
                menu.classList.toggle(
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


    $$("#mobileNav a")
        .forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    () => {

                        menu.classList.remove(
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
   LOCATIONS
========================================================= */

function setupLocations() {

    setupLocationSelector(
        "pickup"
    );

    setupLocationSelector(
        "destination"
    );

}


function setupLocationSelector(
    prefix
) {

    /*
       District selection is intentionally disabled for now.
       Places are shown directly in the town/place dropdown.
    */

    const place =
        $(`#${prefix}Place`);

    const customWrap =
        $(`#${prefix}CustomPlaceWrap`);

    const customInput =
        $(`#${prefix}CustomPlace`);


    if (!place) {

        return;

    }


    populatePlaces(
        place,
        ""
    );


    place.addEventListener(
        "change",
        () => {

            if (
                place.value ===
                OTHER_PLACE
            ) {

                customWrap
                    ?.classList
                    .add("show");


                if (customInput) {

                    customInput.required =
                        true;

                }

            }

            else {

                hideCustomPlace(
                    customWrap,
                    customInput
                );

            }

        }
    );

}


function populateDistricts(
    select
) {

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
    )
        .forEach(
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


function populatePlaces(
    select,
    district
) {

    select.innerHTML =
        "";


    const first =
        document.createElement(
            "option"
        );

    first.value =
        "";

    first.textContent = t("Select town / place");

    select.appendChild(
        first
    );


    const places =
        district
            ? MAURITIUS_PLACES[
                district
            ] || []
            : Object
                .values(
                    MAURITIUS_PLACES
                )
                .flat();


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

    other.textContent = t("Other / Not listed");

    select.appendChild(
        other
    );

}


function hideCustomPlace(
    wrapper,
    input
) {

    wrapper
        ?.classList
        .remove("show");


    if (input) {

        input.required =
            false;

        input.value =
            "";

    }

}


/* =========================================================
   PHONE
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


    try {

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
                        true

                }
            );

    }

    catch (error) {

        console.warn(
            error
        );

    }

}


function getCustomerPhone() {

    const phone =
        $("#phone");


    if (!phone) {

        return "";

    }


    if (PHONE_INPUT) {

        try {

            const full =
                PHONE_INPUT
                    .getNumber();


            if (full) {

                return full;

            }

        }

        catch (error) {

            console.warn(
                error
            );

        }

    }


    return phone.value.trim();

}


/* =========================================================
   VEHICLE BUTTONS
========================================================= */

function setupVehicleButtons() {

    $$(".choose-vehicle")
        .forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const vehicle =
                            $("#vehicle");


                        if (vehicle) {

                            vehicle.value =
                                button.dataset.vehicle ||
                                "";

                        }


                        scrollToBooking();

                    }
                );

            }
        );

}


/* =========================================================
   EXPERIENCE BUTTON
========================================================= */

function setupExperienceButton() {

    $("#experienceBook")
        ?.addEventListener(
            "click",
            () => {

                const type =
                    $("#bookingType");

                const notes =
                    $("#notes");


                if (type) {

                    type.value =
                        "Activity Booking";

                }


                if (notes) {

                    notes.value =
                        "I am interested in a Mauritius activity or experience.";

                }


                scrollToBooking();

            }
        );

}


function scrollToBooking() {

    $("#booking")
        ?.scrollIntoView(
            {

                behavior:
                    "smooth",

                block:
                    "start"

            }
        );

}


/* =========================================================
   EXCURSION SLIDER
   INFINITE AUTO SLIDER

   Normal:
   5 seconds

   Manual click:
   user's action happens immediately
   then waits 8 seconds
   then auto-slide resumes forever.
========================================================= */

function setupExcursionSlider() {

    const slider =
        $("#excursionSlider");


    if (!slider) {

        return;

    }


    const slides =
        Array.from(
            slider.querySelectorAll(
                ".excursion-slide"
            )
        );


    const dots =
        Array.from(
            $$("#excursionDots .excursion-dot")
        );


    const previous =
        $("#excursionPrev");

    const next =
        $("#excursionNext");


    if (
        slides.length <
        2
    ) {

        return;

    }


    /*
       REGION NAVIGATION

       The four regions are now controlled ONLY by
       the left/right buttons, dots, or a swipe.

       There is deliberately NO automatic region
       changing anymore.

       Each region has its own image gallery.
       Once a region is selected, only its images
       rotate automatically.
    */

    const IMAGE_DELAY =
        4000;


    let current =
        0;

    let imageTimer =
        null;

    let touchStartX =
        null;


    function getGalleryImages(slide) {

        return Array.from(
            slide.querySelectorAll(
                ".excursion-gallery-image"
            )
        );

    }


    function stopImageAuto() {

        if (
            imageTimer !==
            null
        ) {

            clearTimeout(
                imageTimer
            );

            imageTimer =
                null;

        }

    }


    function showGalleryImage(
        slide,
        imageIndex
    ) {

        const images =
            getGalleryImages(slide);


        if (
            images.length <
            2
        ) {

            return;

        }


        const currentImage =
            images.findIndex(
                (image) =>
                    image.classList.contains(
                        "active"
                    )
            );


        const nextImage =
            (
                imageIndex +
                images.length
            ) %
            images.length;


        if (
            currentImage ===
            nextImage
        ) {

            return;

        }


        images.forEach(
            (image, index) => {

                image.classList.toggle(
                    "active",
                    index ===
                    nextImage
                );

            }
        );

    }


    function scheduleImageAuto() {

        stopImageAuto();


        const activeSlide =
            slides[current];


        if (!activeSlide) {

            return;

        }


        const images =
            getGalleryImages(
                activeSlide
            );


        if (
            images.length <
            2
        ) {

            return;

        }


        imageTimer =
            setTimeout(
                () => {

                    const activeIndex =
                        images.findIndex(
                            (image) =>
                                image.classList.contains(
                                    "active"
                                )
                        );


                    showGalleryImage(
                        activeSlide,
                        activeIndex + 1
                    );


                    scheduleImageAuto();

                },
                IMAGE_DELAY
            );

    }


    function resetGallery(
        slide
    ) {

        const images =
            getGalleryImages(
                slide
            );


        images.forEach(
            (image, index) => {

                image.classList.toggle(
                    "active",
                    index === 0
                );

            }
        );

    }


    function show(
        index
    ) {

        current =
            (
                index +
                slides.length
            ) %
            slides.length;


        stopImageAuto();


        slides.forEach(
            (slide, slideIndex) => {

                const active =
                    slideIndex ===
                    current;


                slide.classList.toggle(
                    "active",
                    active
                );


                slide.setAttribute(
                    "aria-hidden",
                    String(
                        !active
                    )
                );

            }
        );


        dots.forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index ===
                    current
                );

            }
        );


        /*
           Every time the user moves to a new region,
           its gallery starts from the first image.
        */

        resetGallery(
            slides[current]
        );


        scheduleImageAuto();

    }


    function nextSlide() {

        show(
            current + 1
        );

    }


    function previousSlide() {

        show(
            current - 1
        );

    }


    next?.addEventListener(
        "click",
        nextSlide
    );


    previous?.addEventListener(
        "click",
        previousSlide
    );


    dots.forEach(
        (dot, index) => {

            dot.addEventListener(
                "click",
                () => {

                    show(
                        index
                    );

                }
            );

        }
    );


    slider.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event
                    .changedTouches[0]
                    ?.clientX ??
                null;

        },
        {
            passive:
                true
        }
    );


    slider.addEventListener(
        "touchend",
        (event) => {

            if (
                touchStartX ===
                null
            ) {

                return;

            }


            const endX =
                event
                    .changedTouches[0]
                    ?.clientX ??
                touchStartX;


            const distance =
                endX -
                touchStartX;


            touchStartX =
                null;


            if (
                Math.abs(
                    distance
                ) <
                45
            ) {

                return;

            }


            distance < 0
                ? nextSlide()
                : previousSlide();

        },
        {
            passive:
                true
        }
    );


    $$(".excursion-book-button")
        .forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const type =
                            $("#bookingType");

                        const notes =
                            $("#notes");


                        if (type) {

                            type.value =
                                "Excursion";

                        }


                        if (notes) {

                            notes.value =
                                `I am interested in the ${button.dataset.excursion} excursion.`;

                        }


                        scrollToBooking();

                    }
                );

            }
        );


    /*
       Pause the image gallery while the tab is hidden.
       The region itself never auto-advances.
    */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                stopImageAuto();

            }

            else {

                scheduleImageAuto();

            }

        }
    );


    show(
        0
    );

}


/* =========================================================
   WHY SLIDER
========================================================= */

function setupWhySlider() {

    const slider =
        $(".why-slider");


    if (!slider) {

        return;

    }


    const slides =
        Array.from(
            slider.querySelectorAll(
                ".why-slide"
            )
        );


    const dots =
        Array.from(
            slider.querySelectorAll(
                ".why-slider-dot"
            )
        );


    if (
        slides.length <
        2
    ) {

        return;

    }


    let current =
        0;


    function show(
        index
    ) {

        current =
            (
                index +
                slides.length
            ) %
            slides.length;


        slides.forEach(
            (slide,index) => {

                slide.classList.toggle(
                    "active",
                    index ===
                    current
                );

            }
        );


        dots.forEach(
            (dot,index) => {

                dot.classList.toggle(
                    "active",
                    index ===
                    current
                );

            }
        );

    }


    let timer =
        null;


    function schedule() {

        if (timer) {

            clearTimeout(
                timer
            );

        }


        timer =
            setTimeout(
                () => {

                    show(
                        current + 1
                    );

                    schedule();

                },
                4500
            );

    }


    dots.forEach(
        (dot,index) => {

            dot.addEventListener(
                "click",
                () => {

                    show(
                        index
                    );

                    schedule();

                }
            );

        }
    );


    show(
        0
    );

    schedule();

}


/* =========================================================
   LIGHTBOX
========================================================= */

function setupLightbox() {

    const modal =
        $("#imageLightbox");

    const image =
        $("#lightboxImage");

    const caption =
        $("#lightboxCaption");

    const close =
        $("#lightboxClose");


    if (
        !modal ||
        !image
    ) {

        return;

    }


    function closeModal() {

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


    $$(".gallery-item")
        .forEach(
            (item) => {

                item.addEventListener(
                    "click",
                    () => {

                        const clickedImage =
                            item.querySelector(
                                "img"
                            );


                        /*
                           Use the actual loaded image source,
                           including fallback if necessary.
                        */

                        image.src =
                            clickedImage?.currentSrc ||
                            clickedImage?.src ||
                            item.dataset.image ||
                            "";


                        if (caption) {

                            caption.textContent =
                                item.dataset.caption ||
                                "";

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
                );

            }
        );


    close?.addEventListener(
        "click",
        closeModal
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                modal
            ) {

                closeModal();

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

                closeModal();

            }

        }
    );

}


/* =========================================================
   BOOKING FORM
========================================================= */

function setupBookingForm() {

    $("#bookingForm")
        ?.addEventListener(
            "submit",
            handleBookingSubmit
        );

}


/* =========================================================
   VALIDATE
========================================================= */

function validateBookingForm() {

    const fields =
        $$("#bookingForm [required]");


    for (
        const field
        of fields
    ) {

        if (
            !String(
                field.value ||
                ""
            ).trim()
        ) {

            field.focus();

            showToast(t("Please complete all required booking fields."));

            return false;

        }

    }


    const email =
        $("#customerEmail");


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailPattern.test(
            email?.value.trim() ||
            ""
        )
    ) {

        email?.focus();

        showToast(t("Please enter a valid email address."));

        return false;

    }


    const phoneDigits =
        $("#phone")
            ?.value
            .replace(
                /\D/g,
                ""
            ) ||
        "";


    if (
        phoneDigits.length <
        5
    ) {

        $("#phone")
            ?.focus();

        showToast(t("Please enter a valid phone number."));

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


    const button =
        $("#submitBooking");


    if (button) {

        button.disabled =
            true;

        button.textContent = t("Submitting...");

    }


    try {

        await sendBookingEmail(
            booking
        );


        LAST_BOOKING_MESSAGE =
            booking.message;


        showSuccessModal(
            booking.bookingId
        );


        setTimeout(
            () => {

                openWhatsApp(
                    booking.message
                );

            },
            900
        );

    }

    catch (error) {

        console.error(
            error
        );


        /*
           Even if FormSubmit has not yet been activated,
           preserve the user's booking by opening WhatsApp.
        */

        LAST_BOOKING_MESSAGE =
            booking.message;


        showToast(t("Opening WhatsApp with your booking request."));


        openWhatsApp(
            booking.message
        );

    }

    finally {

        if (button) {

            button.disabled =
                false;

            button.textContent = t("Submit Booking");

        }

    }

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


    const bookingId =
        generateBookingId();


    const phone =
        getCustomerPhone();


    const babySeats =
        getBabySeatText(
            Number(
                data.babySeats ||
                0
            )
        );


    const vehicleDetails =
        getVehicleDetails(
            data.vehicle
        );


    const message = [

        "Hello BTSM - Best Taxi Service in Mauritius!",

        "",

        "I would like to make a booking.",

        "",

        "━━━━━━━━━━━━━━━━━━━━",

        "BTSM BOOKING REQUEST",

        "━━━━━━━━━━━━━━━━━━━━",

        "",

        `Booking ID: ${bookingId}`,

        "",

        "CUSTOMER DETAILS",

        `Full Name: ${data.fullName}`,

        `Email: ${data.customerEmail}`,

        `WhatsApp / Phone: ${phone}`,

        "",

        "JOURNEY DETAILS",

        `Service: ${data.bookingType}`,

        `Travel Date: ${formatDate(data.date)}`,

        `Pickup Time: ${formatTime(data.time)}`,

        `Passengers: ${data.passengers}`,

        `Vehicle: ${data.vehicle}`,

        `Vehicle Details: ${vehicleDetails}`,

        "",

        "PICKUP",

        `Place: ${pickupPlace}`,

        `Address: ${data.pickupAddress}`,

        "",

        "DESTINATION",

        `Place: ${destinationPlace}`,

        `Address: ${data.destinationAddress}`,

        "",

        "ADDITIONAL DETAILS",

        `Baby Seats: ${babySeats}`,

        `Special Request: ${data.notes || "None"}`,

        "",

        "Please confirm availability and booking details.",

        "",

        `BTSM Contact: ${BUSINESS_PHONE}`,

        `Email: ${BUSINESS_EMAIL}`,

        "",

        "Thank you!"

    ].join(
        "\n"
    );


    return {

        data,

        bookingId,

        phone,

        pickupPlace,

        destinationPlace,

        babySeats,

        vehicleDetails,

        message

    };

}


/* =========================================================
   VEHICLE DETAILS
========================================================= */

function getVehicleDetails(
    vehicle
) {

    const vehicles = {

        "Standard Car":
            "1–3 passengers, 3 luggage",

        "SUV":
            "1–3 passengers, 3 large + 1 small luggage",

        "Minivan":
            "4–6 passengers, maximum 8 luggage",

        "Large Van":
            "7–8 passengers, maximum 10 luggage"

    };


    return (
        vehicles[vehicle] ||
        "Not specified"
    );

}


/* =========================================================
   BABY SEAT
========================================================= */

function getBabySeatText(
    count
) {

    if (
        count <= 0
    ) {

        return "No baby seat";

    }


    if (
        count ===
        1
    ) {

        return "1 baby seat";

    }


    return (
        `${count} baby seats`
    );

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
            booking.phone,

        Service:
            booking.data.bookingType,

        Date:
            formatDate(
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

        Vehicle_Details:
            booking.vehicleDetails,

        Pickup_Place:
            booking.pickupPlace,

        Pickup_Address:
            booking.data.pickupAddress,

        Destination_Place:
            booking.destinationPlace,

        Destination_Address:
            booking.data.destinationAddress,

        Baby_Seats:
            booking.babySeats,

        Special_Request:
            booking.data.notes ||
            "None",

        Full_Message:
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
            "Booking email could not be sent."
        );

    }

}


/* =========================================================
   WHATSAPP
========================================================= */

function openWhatsApp(
    message
) {

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    window.location.href =
        url;

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
        )
            .padStart(
                2,
                "0"
            );


    const day =
        String(
            now.getDate()
        )
            .padStart(
                2,
                "0"
            );


    const random =
        Math.random()
            .toString(36)
            .slice(2,7)
            .toUpperCase();


    return (
        `BTSM-${year}${month}${day}-${random}`
    );

}


/* =========================================================
   DATE
========================================================= */

function formatDate(
    value
) {

    if (!value) {

        return "Not specified";

    }


    const [
        year,
        month,
        day
    ] =
        value.split("-");


    const date =
        new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
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
    )
        .format(
            date
        );

}


/* =========================================================
   TIME
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

    $("#successModalClose")
        ?.addEventListener(
            "click",
            closeSuccessModal
        );


    $("#closeSuccessButton")
        ?.addEventListener(
            "click",
            closeSuccessModal
        );


    $("#openWhatsAppButton")
        ?.addEventListener(
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


    $("#successModal")
        ?.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    $("#successModal")
                ) {

                    closeSuccessModal();

                }

            }
        );

}


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


    if (toastTimer) {

        clearTimeout(
            toastTimer
        );

    }


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3500
        );

}
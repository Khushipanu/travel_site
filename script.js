/* =========================================================
   BTSM
   BEST TAXI SERVICE IN MAURITIUS
========================================================= */


/* =========================================================
   BUSINESS INFORMATION
========================================================= */

const BUSINESS_NAME =
    "BTSM - Best Taxi Service in Mauritius";


const WHATSAPP_NUMBER =
    "23052532214";


const BUSINESS_PHONE =
    "+230 5253 2214";


const BUSINESS_EMAIL =
    "KhushiPanu007@gmail.com";



/* =========================================================
   HELPERS
========================================================= */

const $ = (selector) =>
    document.querySelector(selector);


const $$ = (selector) =>
    document.querySelectorAll(selector);



/* =========================================================
   LANGUAGE
========================================================= */

let CURRENT_LANGUAGE =
    "en";


let LAST_BOOKING_MESSAGE =
    "";


let LAST_BOOKING_ID =
    "";



/* =========================================================
   TRANSLATIONS
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

        "common.whatsapp":
            "WhatsApp Us",

        "hero.eyebrow":
            "BEST TAXI SERVICE IN MAURITIUS",

        "hero.title":
            "Explore Mauritius.<br><em>Travel comfortably.</em>",

        "hero.text":
            "Reliable airport transfers, private excursions and group transportation with professional local drivers.",

        "hero.bookTransfer":
            "Book Your Transfer",

        "hero.explore":
            "Explore Excursions",

        "hero.trust1":
            "✓ Airport pickup & drop-off",

        "hero.trust2":
            "✓ Private & group transport",

        "hero.trust3":
            "✓ Local professional drivers",

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
            "After submitting, the WhatsApp application will open with your complete booking request ready to send.",

        "form.service":
            "Service",

        "form.selectService":
            "Select service",

        "form.name":
            "Full Name",

        "form.namePlaceholder":
            "Your full name",

        "form.email":
            "Email Address",

        "form.emailPlaceholder":
            "yourname@example.com",

        "form.phone":
            "WhatsApp / Phone",

        "form.phonePlaceholder":
            "5253 2214",

        "form.date":
            "Travel Date",

        "form.time":
            "Pickup Time",

        "form.passengers":
            "Passengers",

        "form.select":
            "Select",

        "form.vehicle":
            "Vehicle",

        "form.selectVehicle":
            "Select vehicle",

        "form.notes":
            "Special Request",

        "form.optional":
            "(optional)",

        "form.notesPlaceholder":
            "Flight number, luggage, additional information...",

        "service.airport":
            "Airport Transfer",

        "service.private":
            "Private Transportation",

        "service.group":
            "Group Transportation",

        "service.excursion":
            "Excursion",

        "service.activity":
            "Activity Booking",

        "service.custom":
            "Customized Local Tour",

        "service.tailor":
            "Tailor-made Trip",

        "service.birthday":
            "Birthday Surprise",

        "service.wedding":
            "Wedding / Event",

        "service.cruise":
            "Cruise Ship Transfer",

        "vehicle.sedan":
            "Sedan",

        "vehicle.suv":
            "SUV",

        "vehicle.minivan":
            "Minivan",

        "vehicle.family":
            "Family Van",

        "vehicle.minibus":
            "Minibus",

        "vehicle.coach":
            "Coach / Large Group",

        "passenger.one":
            "Passenger",

        "passenger.more":
            "Passengers",

        "pickup.title":
            "Pickup Location",

        "pickup.subtitle":
            "Where should we collect you?",

        "pickup.district":
            "Pickup District / Area",

        "pickup.place":
            "Pickup Town / Place",

        "pickup.other":
            "Other Pickup Town / Area",

        "pickup.address":
            "Exact Pickup Address",

        "pickup.addressPlaceholder":
            "Hotel, villa, apartment, street, landmark...",

        "destination.title":
            "Destination",

        "destination.subtitle":
            "Where are you going?",

        "destination.district":
            "Destination District / Area",

        "destination.place":
            "Destination Town / Place",

        "destination.other":
            "Other Destination Town / Area",

        "destination.address":
            "Exact Drop-off Address",

        "destination.addressPlaceholder":
            "Hotel, resort, villa, street, landmark...",

        "location.selectDistrict":
            "All Mauritius / Select district",

        "location.selectPlace":
            "Select town / place",

        "location.other":
            "Other / Not listed",

        "location.otherPlaceholder":
            "Enter town, beach or area",

        "baby.title":
            "Baby Seat",

        "baby.subtitle":
            "1 baby seat is included free per booking. Additional baby seats are €5 each.",

        "baby.number":
            "Number of Baby Seats",

        "baby.zero":
            "No baby seat",

        "baby.one":
            "1 baby seat — FREE",

        "baby.two":
            "2 baby seats — €5 extra",

        "baby.three":
            "3 baby seats — €10 extra",

        "baby.four":
            "4 baby seats — €15 extra",

        "stats.airport":
            "Airport Transfers",

        "stats.vehicles":
            "Vehicle Options",

        "stats.local":
            "Local Service",

        "stats.booking":
            "Easy Booking",

        "services.badge":
            "WHAT WE OFFER",

        "services.title":
            "More than a transfer.<br><em>Your Mauritius experience.</em>",

        "services.text":
            "From airport arrival to your last day on the island, Best Taxi Service in Mauritius helps you travel comfortably, safely and stress-free.",

        "services.airport.title":
            "Airport Transfers",

        "services.airport.text":
            "Reliable airport pickup and drop-off with professional local drivers.",

        "services.airport.link":
            "Book transfer →",

        "services.private.title":
            "Private Transportation",

        "services.private.text":
            "Comfortable private transport for individuals, couples, families and groups.",

        "services.private.link":
            "Request transport →",

        "services.group.title":
            "Group Transportation",

        "services.group.text":
            "Transportation solutions for larger groups, families and events.",

        "services.group.link":
            "Plan your group →",

        "services.excursion.title":
            "Private Excursions",

        "services.excursion.text":
            "Discover Mauritius with flexible private sightseeing experiences.",

        "services.excursion.link":
            "View excursion →",

        "services.activity.title":
            "Activity Booking",

        "services.activity.text":
            "Let us help arrange activities during your Mauritius holiday.",

        "services.activity.link":
            "Explore activities →",

        "services.tailor.title":
            "Tailor-made Trips",

        "services.tailor.text":
            "Build a personalized Mauritius itinerary around your interests and schedule.",

        "services.tailor.link":
            "Create your trip →",

        "services.birthday.title":
            "Birthday Surprises",

        "services.birthday.text":
            "Make someone's Mauritius holiday memorable with a birthday surprise.",

        "services.birthday.link":
            "Plan a surprise →",

        "services.wedding.title":
            "Weddings & Events",

        "services.wedding.text":
            "Transportation support for weddings, celebrations and events.",

        "services.wedding.link":
            "Plan your event →",

        "services.cruise.title":
            "Cruise Ship Trips",

        "services.cruise.text":
            "Port transfers and excursions designed around your time on the island.",

        "services.cruise.link":
            "Enquire now →",

        "pricing.badge":
            "CHOOSE YOUR RIDE",

        "pricing.title":
            "A vehicle for<br><em>every journey.</em>",

        "pricing.text":
            "Choose the vehicle that suits your group. Final pricing depends on your journey requirements.",

        "pricing.sedanText":
            "Comfortable for couples and small groups.",

        "pricing.suvText":
            "Extra space and comfort for families.",

        "pricing.minivanText":
            "Ideal for families and medium groups.",

        "pricing.minibusText":
            "Convenient for larger groups.",

        "pricing.passengers":
            "passengers",

        "pricing.choose":
            "Choose vehicle →",

        "pricing.popular":
            "POPULAR",

        "features.one":
            "✓ Professional local drivers",

        "features.two":
            "✓ Airport meet & greet",

        "features.three":
            "✓ 24/7 airport transfers",

        "features.four":
            "✓ Private & group options",

        "features.five":
            "✓ Baby seat available",

        "features.six":
            "✓ Flexible travel arrangements",

        "tour.featured":
            "FEATURED STOP",

        "tour.caption":
            "Culture • Spirituality • Mauritius",

        "tour.badge":
            "FEATURED EXCURSION",

        "tour.title":
            "Discover the<br><em>South of Mauritius.</em>",

        "tour.text":
            "Experience some of the island's most beautiful natural and cultural highlights in one memorable day.",

        "tour.stop1":
            "Visit the sacred crater lake and surrounding temples.",

        "tour.stop2":
            "Discover iconic cultural landmarks.",

        "tour.stop3":
            "Explore one of Mauritius' famous attractions.",

        "tour.stop4":
            "Enjoy beautiful mountain and waterfall views.",

        "tour.stop5":
            "Take in spectacular views across the island.",

        "tour.sunset":
            "Optional Le Morne Sunset",

        "tour.stop6":
            "Finish your day with an unforgettable sunset.",

        "tour.lunchTitle":
            "Want lunch included?",

        "tour.lunch":
            "We can advise on a local restaurant during your excursion.",

        "tour.plan":
            "Plan This Excursion",

        "experiences.badge":
            "MAURITIUS EXPERIENCES",

        "experiences.title":
            "More ways to<br><em>enjoy the island.</em>",

        "experiences.text":
            "Discover local flavours, fun attractions and exciting activities.",

        "experiences.category1":
            "LOCAL DISCOVERY",

        "experiences.card1":
            "Taste & discover Mauritius",

        "experiences.caption1":
            "Discover local flavours and authentic Mauritius experiences.",

        "experiences.category2":
            "FUN & FAMILY",

        "experiences.card2":
            "Unique island attractions",

        "experiences.caption2":
            "Enjoy fun and unusual attractions during your Mauritius holiday.",

        "experiences.category3":
            "ADVENTURE",

        "experiences.card3":
            "Make unforgettable memories",

        "experiences.caption3":
            "Add outdoor adventure to your Mauritius experience.",

        "experiences.view":
            "View photo →",

        "experiences.plan":
            "Plan Your Mauritius Experience",

        "fleet.badge":
            "OUR FLEET",

        "fleet.title":
            "Travel your way.",

        "fleet.text":
            "Choose from comfortable vehicles depending on your passenger count.",

        "fleet.family":
            "Families & groups",

        "fleet.large":
            "Larger groups",

        "fleet.events":
            "Events & groups",

        "why.badge":
            "WHY BTSM",

        "why.title":
            "Your island journey,<br><em>made easier.</em>",

        "why.text":
            "Best Taxi Service in Mauritius combines comfortable transportation with local knowledge to make getting around the island simple and enjoyable.",

        "why.oneTitle":
            "Reliable 24/7 service",

        "why.oneText":
            "Airport transfers available around the clock.",

        "why.twoTitle":
            "Local professional drivers",

        "why.twoText":
            "Travel with people who know Mauritius.",

        "why.threeTitle":
            "Private & group transportation",

        "why.threeText":
            "Options for couples, families and groups.",

        "why.fourTitle":
            "Customized experiences",

        "why.fourText":
            "Build your trip around what you want to see.",

        "why.photoBadge":
            "EXPLORE MAURITIUS",

        "why.photoText":
            "Beautiful places.<br>Comfortable journeys.",

        "faq.title":
            "Questions?",

        "faq.text":
            "Everything you need to know before booking.",

        "faq.q1":
            "Are airport transfers available 24/7?",

        "faq.a1":
            "Yes. BTSM provides airport pickup and drop-off services around the clock.",

        "faq.q2":
            "Do you provide private excursions?",

        "faq.a2":
            "Yes. Private excursions can be arranged around your preferred destinations.",

        "faq.q3":
            "Can I customize my Mauritius tour?",

        "faq.a3":
            "Yes. You can request a tailor-made trip based on the places you want to visit.",

        "faq.q4":
            "Do you provide transportation for weddings and events?",

        "faq.a4":
            "Yes. BTSM can arrange transportation for weddings and events.",

        "faq.q5":
            "How do baby seats work?",

        "faq.a5":
            "One baby seat is included free with each booking. Additional baby seats cost €5 each.",

        "faq.q6":
            "What happens after I submit?",

        "faq.a6":
            "The installed WhatsApp application opens with your complete booking request ready to send.",

        "cta.badge":
            "READY TO EXPLORE?",

        "cta.title":
            "Let's plan your Mauritius journey.",

        "cta.text":
            "Airport transfer, excursion, event or customized experience.",

        "footer.text":
            "Best Taxi Service in Mauritius for airport transfers, private transport, excursions and customized journeys.",

        "footer.services":
            "Services",

        "footer.experiences":
            "Experiences",

        "footer.contact":
            "Contact",

        "footer.rights":
            "All rights reserved.",

        "toast.language":
            "Language changed.",

        "toast.required":
            "Please complete all required booking fields.",

        "toast.email":
            "Please enter a valid email address.",

        "toast.phone":
            "Please enter a valid phone number.",

        "success.kicker":
            "BOOKING READY",

        "success.title":
            "Form submitted successfully!",

        "success.text":
            "Your complete booking request is ready. WhatsApp is opening now.",

        "success.bookingId":
            "Booking ID",

        "success.whatsappTitle":
            "Opening WhatsApp",

        "success.whatsappText":
            "Your complete booking message is ready to send to Best Taxi Service in Mauritius.",

        "success.hint":
            "If Chrome asks for permission, choose “Open WhatsApp”.",

        "success.openWhatsApp":
            "Open WhatsApp App",

        "success.stay":
            "Stay on Website"
    },



    /* =====================================================
       FRENCH
    ===================================================== */

    fr: {

        "brand.tagline":
            "MEILLEUR SERVICE DE TAXI À MAURICE",

        "nav.home": "Accueil",
        "nav.services": "Services",
        "nav.transfers": "Transferts",
        "nav.excursions": "Excursions",
        "nav.experiences": "Expériences",
        "nav.fleet": "Véhicules",
        "nav.why": "Pourquoi nous",
        "nav.faq": "FAQ",
        "nav.bookTransfer": "Réserver un transfert",

        "common.bookNow": "Réserver",
        "common.whatsapp": "WhatsApp",

        "hero.eyebrow":
            "MEILLEUR SERVICE DE TAXI À MAURICE",

        "hero.title":
            "Découvrez Maurice.<br><em>Voyagez confortablement.</em>",

        "hero.text":
            "Transferts aéroport fiables, excursions privées et transport de groupes avec des chauffeurs locaux professionnels.",

        "hero.bookTransfer":
            "Réserver votre transfert",

        "hero.explore":
            "Découvrir les excursions",

        "hero.trust1":
            "✓ Prise en charge et dépose à l'aéroport",

        "hero.trust2":
            "✓ Transport privé et de groupe",

        "hero.trust3":
            "✓ Chauffeurs locaux professionnels",

        "booking.quick":
            "RÉSERVATION RAPIDE",

        "booking.available":
            "DISPONIBLE 24H/24",

        "booking.title":
            "Planifiez votre trajet",

        "booking.intro":
            "Choisissez votre lieu de prise en charge et votre destination partout à Maurice.",

        "booking.submit":
            "Envoyer la réservation",

        "booking.note":
            "Après l'envoi, WhatsApp s'ouvrira avec votre demande complète prête à envoyer.",

        "form.service":
            "Service",

        "form.selectService":
            "Sélectionner un service",

        "form.name":
            "Nom complet",

        "form.namePlaceholder":
            "Votre nom complet",

        "form.email":
            "Adresse e-mail",

        "form.emailPlaceholder":
            "votrenom@exemple.com",

        "form.phone":
            "WhatsApp / Téléphone",

        "form.phonePlaceholder":
            "5253 2214",

        "form.date":
            "Date du voyage",

        "form.time":
            "Heure de prise en charge",

        "form.passengers":
            "Passagers",

        "form.select":
            "Sélectionner",

        "form.vehicle":
            "Véhicule",

        "form.selectVehicle":
            "Sélectionner un véhicule",

        "form.notes":
            "Demande spéciale",

        "form.optional":
            "(facultatif)",

        "form.notesPlaceholder":
            "Numéro de vol, bagages, informations supplémentaires...",

        "service.airport":
            "Transfert aéroport",

        "service.private":
            "Transport privé",

        "service.group":
            "Transport de groupe",

        "service.excursion":
            "Excursion",

        "service.activity":
            "Réservation d'activité",

        "service.custom":
            "Circuit local personnalisé",

        "service.tailor":
            "Voyage sur mesure",

        "service.birthday":
            "Surprise d'anniversaire",

        "service.wedding":
            "Mariage / Événement",

        "service.cruise":
            "Transfert bateau de croisière",

        "vehicle.sedan":
            "Berline",

        "vehicle.suv":
            "SUV",

        "vehicle.minivan":
            "Minivan",

        "vehicle.family":
            "Van familial",

        "vehicle.minibus":
            "Minibus",

        "vehicle.coach":
            "Autocar / Grand groupe",

        "passenger.one":
            "Passager",

        "passenger.more":
            "Passagers",

        "pickup.title":
            "Lieu de prise en charge",

        "pickup.subtitle":
            "Où devons-nous venir vous chercher ?",

        "pickup.district":
            "District / Zone de départ",

        "pickup.place":
            "Ville / Lieu de départ",

        "pickup.other":
            "Autre ville / zone",

        "pickup.address":
            "Adresse exacte de départ",

        "pickup.addressPlaceholder":
            "Hôtel, villa, appartement, rue, point de repère...",

        "destination.title":
            "Destination",

        "destination.subtitle":
            "Où allez-vous ?",

        "destination.district":
            "District / Zone de destination",

        "destination.place":
            "Ville / Lieu de destination",

        "destination.other":
            "Autre ville / zone",

        "destination.address":
            "Adresse exacte de destination",

        "destination.addressPlaceholder":
            "Hôtel, complexe, villa, rue, point de repère...",

        "location.selectDistrict":
            "Toute l'île Maurice / Sélectionner un district",

        "location.selectPlace":
            "Sélectionner une ville / un lieu",

        "location.other":
            "Autre / Non répertorié",

        "location.otherPlaceholder":
            "Saisissez une ville, une plage ou une zone",

        "baby.title":
            "Siège bébé",

        "baby.subtitle":
            "1 siège bébé est gratuit par réservation. Chaque siège supplémentaire coûte 5 €.",

        "baby.number":
            "Nombre de sièges bébé",

        "baby.zero":
            "Aucun siège bébé",

        "baby.one":
            "1 siège bébé — GRATUIT",

        "baby.two":
            "2 sièges bébé — 5 € supplémentaires",

        "baby.three":
            "3 sièges bébé — 10 € supplémentaires",

        "baby.four":
            "4 sièges bébé — 15 € supplémentaires",

        "stats.airport":
            "Transferts aéroport",

        "stats.vehicles":
            "Options de véhicules",

        "stats.local":
            "Service local",

        "stats.booking":
            "Réservation facile",

        "services.badge":
            "NOS SERVICES",

        "services.title":
            "Plus qu'un transfert.<br><em>Votre expérience à Maurice.</em>",

        "services.text":
            "BTSM vous aide à voyager à Maurice confortablement et sans stress.",

        "services.airport.title":
            "Transferts aéroport",

        "services.airport.text":
            "Transferts aéroport fiables avec chauffeurs locaux.",

        "services.airport.link":
            "Réserver un transfert →",

        "services.private.title":
            "Transport privé",

        "services.private.text":
            "Transport privé confortable pour couples, familles et groupes.",

        "services.private.link":
            "Demander un transport →",

        "services.group.title":
            "Transport de groupe",

        "services.group.text":
            "Transport pour familles, groupes et événements.",

        "services.group.link":
            "Organiser votre groupe →",

        "services.excursion.title":
            "Excursions privées",

        "services.excursion.text":
            "Découvrez Maurice avec des excursions privées.",

        "services.excursion.link":
            "Voir l'excursion →",

        "services.activity.title":
            "Réservation d'activités",

        "services.activity.text":
            "Nous pouvons organiser vos activités à Maurice.",

        "services.activity.link":
            "Découvrir les activités →",

        "services.tailor.title":
            "Voyages sur mesure",

        "services.tailor.text":
            "Créez un itinéraire personnalisé.",

        "services.tailor.link":
            "Créer votre voyage →",

        "services.birthday.title":
            "Surprises d'anniversaire",

        "services.birthday.text":
            "Organisez une surprise spéciale à Maurice.",

        "services.birthday.link":
            "Préparer une surprise →",

        "services.wedding.title":
            "Mariages & événements",

        "services.wedding.text":
            "Transport pour mariages et événements.",

        "services.wedding.link":
            "Planifier votre événement →",

        "services.cruise.title":
            "Excursions pour croisiéristes",

        "services.cruise.text":
            "Transferts portuaires et excursions.",

        "services.cruise.link":
            "Demander des informations →",

        "pricing.badge":
            "CHOISISSEZ VOTRE VÉHICULE",

        "pricing.title":
            "Un véhicule pour<br><em>chaque trajet.</em>",

        "pricing.text":
            "Choisissez le véhicule adapté à votre groupe.",

        "pricing.sedanText":
            "Confortable pour couples et petits groupes.",

        "pricing.suvText":
            "Plus d'espace pour les familles.",

        "pricing.minivanText":
            "Idéal pour les familles et groupes moyens.",

        "pricing.minibusText":
            "Pratique pour les grands groupes.",

        "pricing.passengers":
            "passagers",

        "pricing.choose":
            "Choisir le véhicule →",

        "pricing.popular":
            "POPULAIRE",

        "features.one":
            "✓ Chauffeurs locaux professionnels",

        "features.two":
            "✓ Accueil à l'aéroport",

        "features.three":
            "✓ Transferts aéroport 24h/24",

        "features.four":
            "✓ Options privées et de groupe",

        "features.five":
            "✓ Siège bébé disponible",

        "features.six":
            "✓ Organisation flexible",

        "tour.featured":
            "ÉTAPE À DÉCOUVRIR",

        "tour.caption":
            "Culture • Spiritualité • Maurice",

        "tour.badge":
            "EXCURSION À LA UNE",

        "tour.title":
            "Découvrez le<br><em>sud de Maurice.</em>",

        "tour.text":
            "Découvrez certains des plus beaux sites naturels et culturels de l'île.",

        "tour.stop1":
            "Visitez le lac sacré et les temples.",

        "tour.stop2":
            "Découvrez des monuments culturels emblématiques.",

        "tour.stop3":
            "Explorez une attraction célèbre de Maurice.",

        "tour.stop4":
            "Admirez les montagnes et cascades.",

        "tour.stop5":
            "Profitez de vues spectaculaires.",

        "tour.sunset":
            "Coucher de soleil au Morne en option",

        "tour.stop6":
            "Terminez la journée par un coucher de soleil inoubliable.",

        "tour.lunchTitle":
            "Vous souhaitez inclure le déjeuner ?",

        "tour.lunch":
            "Nous pouvons vous conseiller un restaurant local.",

        "tour.plan":
            "Planifier cette excursion",

        "experiences.badge":
            "EXPÉRIENCES À MAURICE",

        "experiences.title":
            "Encore plus de façons de<br><em>profiter de l'île.</em>",

        "experiences.text":
            "Découvrez les saveurs locales, les attractions et les activités.",

        "experiences.category1":
            "DÉCOUVERTE LOCALE",

        "experiences.card1":
            "Goûtez et découvrez Maurice",

        "experiences.caption1":
            "Découvrez les saveurs locales de Maurice.",

        "experiences.category2":
            "LOISIRS & FAMILLE",

        "experiences.card2":
            "Des attractions uniques",

        "experiences.caption2":
            "Profitez d'attractions amusantes à Maurice.",

        "experiences.category3":
            "AVENTURE",

        "experiences.card3":
            "Créez des souvenirs inoubliables",

        "experiences.caption3":
            "Ajoutez une touche d'aventure à votre séjour.",

        "experiences.view":
            "Voir la photo →",

        "experiences.plan":
            "Planifier votre expérience",

        "fleet.badge":
            "NOS VÉHICULES",

        "fleet.title":
            "Voyagez à votre façon.",

        "fleet.text":
            "Choisissez un véhicule selon votre groupe.",

        "fleet.family":
            "Familles & groupes",

        "fleet.large":
            "Grands groupes",

        "fleet.events":
            "Événements & groupes",

        "why.badge":
            "POURQUOI BTSM",

        "why.title":
            "Votre voyage sur l'île,<br><em>en toute simplicité.</em>",

        "why.text":
            "BTSM combine transport confortable et connaissance locale.",

        "why.oneTitle":
            "Service fiable 24h/24",

        "why.oneText":
            "Transferts aéroport disponibles à toute heure.",

        "why.twoTitle":
            "Chauffeurs locaux professionnels",

        "why.twoText":
            "Voyagez avec des personnes qui connaissent Maurice.",

        "why.threeTitle":
            "Transport privé & de groupe",

        "why.threeText":
            "Options pour couples, familles et groupes.",

        "why.fourTitle":
            "Expériences personnalisées",

        "why.fourText":
            "Organisez votre voyage selon vos envies.",

        "why.photoBadge":
            "DÉCOUVREZ MAURICE",

        "why.photoText":
            "Des lieux magnifiques.<br>Des trajets confortables.",

        "faq.title":
            "Des questions ?",

        "faq.text":
            "Tout ce que vous devez savoir avant de réserver.",

        "faq.q1":
            "Les transferts aéroport sont-ils disponibles 24h/24 ?",

        "faq.a1":
            "Oui. BTSM assure les transferts aéroport 24h/24.",

        "faq.q2":
            "Proposez-vous des excursions privées ?",

        "faq.a2":
            "Oui. Les excursions peuvent être personnalisées.",

        "faq.q3":
            "Puis-je personnaliser mon circuit ?",

        "faq.a3":
            "Oui. Vous pouvez demander un voyage sur mesure.",

        "faq.q4":
            "Proposez-vous du transport pour les événements ?",

        "faq.a4":
            "Oui. BTSM organise le transport pour les événements.",

        "faq.q5":
            "Comment fonctionnent les sièges bébé ?",

        "faq.a5":
            "Un siège bébé est gratuit. Les sièges supplémentaires coûtent 5 €.",

        "faq.q6":
            "Que se passe-t-il après l'envoi ?",

        "faq.a6":
            "WhatsApp s'ouvre avec votre demande complète prête à envoyer.",

        "cta.badge":
            "PRÊT À EXPLORER ?",

        "cta.title":
            "Planifions votre voyage à Maurice.",

        "cta.text":
            "Transfert, excursion, événement ou expérience personnalisée.",

        "footer.text":
            "BTSM propose transferts, transport privé et excursions à Maurice.",

        "footer.services":
            "Services",

        "footer.experiences":
            "Expériences",

        "footer.contact":
            "Contact",

        "footer.rights":
            "Tous droits réservés.",

        "toast.language":
            "Langue modifiée.",

        "toast.required":
            "Veuillez remplir tous les champs obligatoires.",

        "toast.email":
            "Veuillez saisir une adresse e-mail valide.",

        "toast.phone":
            "Veuillez saisir un numéro de téléphone valide.",

        "success.kicker":
            "RÉSERVATION PRÊTE",

        "success.title":
            "Formulaire envoyé avec succès !",

        "success.text":
            "Votre demande complète est prête. WhatsApp va maintenant s'ouvrir.",

        "success.bookingId":
            "Numéro de réservation",

        "success.whatsappTitle":
            "Ouverture de WhatsApp",

        "success.whatsappText":
            "Votre réservation est prête à être envoyée à BTSM.",

        "success.hint":
            "Si Chrome demande une autorisation, choisissez « Ouvrir WhatsApp ».",

        "success.openWhatsApp":
            "Ouvrir WhatsApp",

        "success.stay":
            "Rester sur le site"
    },



    /* =====================================================
       SPANISH
    ===================================================== */

    es: {

        "brand.tagline":
            "MEJOR SERVICIO DE TAXI EN MAURICIO",

        "nav.home": "Inicio",
        "nav.services": "Servicios",
        "nav.transfers": "Traslados",
        "nav.excursions": "Excursiones",
        "nav.experiences": "Experiencias",
        "nav.fleet": "Vehículos",
        "nav.why": "Por qué nosotros",
        "nav.faq": "Preguntas",
        "nav.bookTransfer": "Reservar traslado",

        "common.bookNow": "Reservar ahora",
        "common.whatsapp": "WhatsApp",

        "hero.eyebrow":
            "MEJOR SERVICIO DE TAXI EN MAURICIO",

        "hero.title":
            "Descubre Mauricio.<br><em>Viaja cómodamente.</em>",

        "hero.text":
            "Traslados fiables al aeropuerto, excursiones privadas y transporte para grupos.",

        "hero.bookTransfer":
            "Reserva tu traslado",

        "hero.explore":
            "Explorar excursiones",

        "hero.trust1":
            "✓ Recogida y traslado al aeropuerto",

        "hero.trust2":
            "✓ Transporte privado y para grupos",

        "hero.trust3":
            "✓ Conductores locales profesionales",

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
            "Después de enviar, WhatsApp abrirá tu solicitud completa.",

        "form.service":
            "Servicio",

        "form.selectService":
            "Seleccionar servicio",

        "form.name":
            "Nombre completo",

        "form.namePlaceholder":
            "Tu nombre completo",

        "form.email":
            "Correo electrónico",

        "form.emailPlaceholder":
            "tunombre@ejemplo.com",

        "form.phone":
            "WhatsApp / Teléfono",

        "form.phonePlaceholder":
            "5253 2214",

        "form.date":
            "Fecha del viaje",

        "form.time":
            "Hora de recogida",

        "form.passengers":
            "Pasajeros",

        "form.select":
            "Seleccionar",

        "form.vehicle":
            "Vehículo",

        "form.selectVehicle":
            "Seleccionar vehículo",

        "form.notes":
            "Solicitud especial",

        "form.optional":
            "(opcional)",

        "form.notesPlaceholder":
            "Número de vuelo, equipaje, información adicional...",

        "service.airport":
            "Traslado al aeropuerto",

        "service.private":
            "Transporte privado",

        "service.group":
            "Transporte para grupos",

        "service.excursion":
            "Excursión",

        "service.activity":
            "Reserva de actividad",

        "service.custom":
            "Tour local personalizado",

        "service.tailor":
            "Viaje a medida",

        "service.birthday":
            "Sorpresa de cumpleaños",

        "service.wedding":
            "Boda / Evento",

        "service.cruise":
            "Traslado de crucero",

        "vehicle.sedan":
            "Sedán",

        "vehicle.suv":
            "SUV",

        "vehicle.minivan":
            "Minivan",

        "vehicle.family":
            "Furgoneta familiar",

        "vehicle.minibus":
            "Minibús",

        "vehicle.coach":
            "Autocar / Grupo grande",

        "passenger.one":
            "Pasajero",

        "passenger.more":
            "Pasajeros",

        "pickup.title":
            "Lugar de recogida",

        "pickup.subtitle":
            "¿Dónde debemos recogerte?",

        "pickup.district":
            "Distrito / Zona de recogida",

        "pickup.place":
            "Ciudad / Lugar de recogida",

        "pickup.other":
            "Otra ciudad / zona",

        "pickup.address":
            "Dirección exacta de recogida",

        "pickup.addressPlaceholder":
            "Hotel, villa, apartamento, calle, referencia...",

        "destination.title":
            "Destino",

        "destination.subtitle":
            "¿Adónde vas?",

        "destination.district":
            "Distrito / Zona de destino",

        "destination.place":
            "Ciudad / Lugar de destino",

        "destination.other":
            "Otra ciudad / zona",

        "destination.address":
            "Dirección exacta de destino",

        "destination.addressPlaceholder":
            "Hotel, resort, villa, calle, referencia...",

        "location.selectDistrict":
            "Todo Mauricio / Seleccionar distrito",

        "location.selectPlace":
            "Seleccionar ciudad / lugar",

        "location.other":
            "Otro / No listado",

        "location.otherPlaceholder":
            "Introduce ciudad, playa o zona",

        "baby.title":
            "Silla para bebé",

        "baby.subtitle":
            "1 silla es gratis. Cada silla adicional cuesta 5 €.",

        "baby.number":
            "Número de sillas para bebé",

        "baby.zero":
            "Sin silla para bebé",

        "baby.one":
            "1 silla para bebé — GRATIS",

        "baby.two":
            "2 sillas para bebé — 5 € extra",

        "baby.three":
            "3 sillas para bebé — 10 € extra",

        "baby.four":
            "4 sillas para bebé — 15 € extra",

        "stats.airport":
            "Traslados al aeropuerto",

        "stats.vehicles":
            "Opciones de vehículos",

        "stats.local":
            "Servicio local",

        "stats.booking":
            "Reserva sencilla",

        "services.badge":
            "LO QUE OFRECEMOS",

        "services.title":
            "Más que un traslado.<br><em>Tu experiencia en Mauricio.</em>",

        "services.text":
            "BTSM te ayuda a viajar cómodamente por Mauricio.",

        "services.airport.title":
            "Traslados al aeropuerto",

        "services.airport.text":
            "Traslados al aeropuerto con conductores profesionales.",

        "services.airport.link":
            "Reservar traslado →",

        "services.private.title":
            "Transporte privado",

        "services.private.text":
            "Transporte cómodo para parejas, familias y grupos.",

        "services.private.link":
            "Solicitar transporte →",

        "services.group.title":
            "Transporte para grupos",

        "services.group.text":
            "Transporte para familias, grupos y eventos.",

        "services.group.link":
            "Planificar grupo →",

        "services.excursion.title":
            "Excursiones privadas",

        "services.excursion.text":
            "Descubre Mauricio con excursiones privadas.",

        "services.excursion.link":
            "Ver excursión →",

        "services.activity.title":
            "Reserva de actividades",

        "services.activity.text":
            "Organizamos actividades en Mauricio.",

        "services.activity.link":
            "Explorar actividades →",

        "services.tailor.title":
            "Viajes a medida",

        "services.tailor.text":
            "Crea un itinerario personalizado.",

        "services.tailor.link":
            "Crear tu viaje →",

        "services.birthday.title":
            "Sorpresas de cumpleaños",

        "services.birthday.text":
            "Organiza una sorpresa especial.",

        "services.birthday.link":
            "Planear una sorpresa →",

        "services.wedding.title":
            "Bodas y eventos",

        "services.wedding.text":
            "Transporte para bodas y eventos.",

        "services.wedding.link":
            "Planificar evento →",

        "services.cruise.title":
            "Excursiones para cruceros",

        "services.cruise.text":
            "Traslados desde el puerto y excursiones.",

        "services.cruise.link":
            "Consultar ahora →",

        "pricing.badge":
            "ELIGE TU VEHÍCULO",

        "pricing.title":
            "Un vehículo para<br><em>cada viaje.</em>",

        "pricing.text":
            "Elige el vehículo adecuado para tu grupo.",

        "pricing.sedanText":
            "Cómodo para parejas y grupos pequeños.",

        "pricing.suvText":
            "Más espacio para familias.",

        "pricing.minivanText":
            "Ideal para familias y grupos medianos.",

        "pricing.minibusText":
            "Ideal para grupos grandes.",

        "pricing.passengers":
            "pasajeros",

        "pricing.choose":
            "Elegir vehículo →",

        "pricing.popular":
            "POPULAR",

        "features.one":
            "✓ Conductores locales profesionales",

        "features.two":
            "✓ Recepción en el aeropuerto",

        "features.three":
            "✓ Traslados al aeropuerto 24/7",

        "features.four":
            "✓ Opciones privadas y de grupo",

        "features.five":
            "✓ Silla para bebé disponible",

        "features.six":
            "✓ Viajes flexibles",

        "tour.featured":
            "PARADA DESTACADA",

        "tour.caption":
            "Cultura • Espiritualidad • Mauricio",

        "tour.badge":
            "EXCURSIÓN DESTACADA",

        "tour.title":
            "Descubre el<br><em>sur de Mauricio.</em>",

        "tour.text":
            "Descubre algunos de los lugares más bellos de la isla.",

        "tour.stop1":
            "Visita el lago sagrado y los templos.",

        "tour.stop2":
            "Descubre lugares culturales emblemáticos.",

        "tour.stop3":
            "Explora una famosa atracción de Mauricio.",

        "tour.stop4":
            "Disfruta de montañas y cascadas.",

        "tour.stop5":
            "Contempla vistas espectaculares.",

        "tour.sunset":
            "Atardecer opcional en Le Morne",

        "tour.stop6":
            "Termina el día con una puesta de sol inolvidable.",

        "tour.lunchTitle":
            "¿Quieres incluir almuerzo?",

        "tour.lunch":
            "Podemos recomendarte un restaurante local.",

        "tour.plan":
            "Planificar esta excursión",

        "experiences.badge":
            "EXPERIENCIAS EN MAURICIO",

        "experiences.title":
            "Más formas de<br><em>disfrutar de la isla.</em>",

        "experiences.text":
            "Descubre sabores, atracciones y actividades.",

        "experiences.category1":
            "DESCUBRIMIENTO LOCAL",

        "experiences.card1":
            "Saborea y descubre Mauricio",

        "experiences.caption1":
            "Descubre sabores locales de Mauricio.",

        "experiences.category2":
            "DIVERSIÓN Y FAMILIA",

        "experiences.card2":
            "Atracciones únicas",

        "experiences.caption2":
            "Disfruta de atracciones divertidas.",

        "experiences.category3":
            "AVENTURA",

        "experiences.card3":
            "Crea recuerdos inolvidables",

        "experiences.caption3":
            "Añade aventura a tu experiencia.",

        "experiences.view":
            "Ver foto →",

        "experiences.plan":
            "Planificar experiencia",

        "fleet.badge":
            "NUESTROS VEHÍCULOS",

        "fleet.title":
            "Viaja a tu manera.",

        "fleet.text":
            "Elige un vehículo según tu grupo.",

        "fleet.family":
            "Familias y grupos",

        "fleet.large":
            "Grupos grandes",

        "fleet.events":
            "Eventos y grupos",

        "why.badge":
            "POR QUÉ BTSM",

        "why.title":
            "Tu viaje por la isla,<br><em>más sencillo.</em>",

        "why.text":
            "BTSM combina transporte cómodo y conocimiento local.",

        "why.oneTitle":
            "Servicio fiable 24/7",

        "why.oneText":
            "Traslados disponibles a cualquier hora.",

        "why.twoTitle":
            "Conductores locales profesionales",

        "why.twoText":
            "Viaja con personas que conocen Mauricio.",

        "why.threeTitle":
            "Transporte privado y para grupos",

        "why.threeText":
            "Opciones para parejas, familias y grupos.",

        "why.fourTitle":
            "Experiencias personalizadas",

        "why.fourText":
            "Crea tu viaje según tus intereses.",

        "why.photoBadge":
            "DESCUBRE MAURICIO",

        "why.photoText":
            "Lugares increíbles.<br>Viajes cómodos.",

        "faq.title":
            "¿Tienes preguntas?",

        "faq.text":
            "Información importante antes de reservar.",

        "faq.q1":
            "¿Hay traslados al aeropuerto 24/7?",

        "faq.a1":
            "Sí. BTSM ofrece traslados durante todo el día.",

        "faq.q2":
            "¿Ofrecen excursiones privadas?",

        "faq.a2":
            "Sí. Las excursiones pueden personalizarse.",

        "faq.q3":
            "¿Puedo personalizar mi tour?",

        "faq.a3":
            "Sí. Puedes solicitar un viaje a medida.",

        "faq.q4":
            "¿Ofrecen transporte para eventos?",

        "faq.a4":
            "Sí. BTSM ofrece transporte para bodas y eventos.",

        "faq.q5":
            "¿Cómo funcionan las sillas para bebé?",

        "faq.a5":
            "Una silla es gratis. Las adicionales cuestan 5 €.",

        "faq.q6":
            "¿Qué ocurre después de enviar?",

        "faq.a6":
            "WhatsApp abre tu solicitud completa lista para enviar.",

        "cta.badge":
            "¿LISTO PARA EXPLORAR?",

        "cta.title":
            "Planifiquemos tu viaje a Mauricio.",

        "cta.text":
            "Traslado, excursión, evento o experiencia personalizada.",

        "footer.text":
            "BTSM ofrece traslados, transporte privado y excursiones en Mauricio.",

        "footer.services":
            "Servicios",

        "footer.experiences":
            "Experiencias",

        "footer.contact":
            "Contacto",

        "footer.rights":
            "Todos los derechos reservados.",

        "toast.language":
            "Idioma cambiado.",

        "toast.required":
            "Completa todos los campos obligatorios.",

        "toast.email":
            "Introduce un correo electrónico válido.",

        "toast.phone":
            "Introduce un número de teléfono válido.",

        "success.kicker":
            "RESERVA LISTA",

        "success.title":
            "¡Formulario enviado correctamente!",

        "success.text":
            "Tu solicitud está lista. WhatsApp se abrirá ahora.",

        "success.bookingId":
            "ID de reserva",

        "success.whatsappTitle":
            "Abriendo WhatsApp",

        "success.whatsappText":
            "Tu reserva está lista para enviarse a BTSM.",

        "success.hint":
            "Si Chrome solicita permiso, selecciona «Abrir WhatsApp».",

        "success.openWhatsApp":
            "Abrir WhatsApp",

        "success.stay":
            "Permanecer en el sitio"
    },



    /* =====================================================
       GERMAN
    ===================================================== */

    de: {

        "brand.tagline":
            "BESTER TAXISERVICE AUF MAURITIUS",

        "nav.home": "Startseite",
        "nav.services": "Leistungen",
        "nav.transfers": "Transfers",
        "nav.excursions": "Ausflüge",
        "nav.experiences": "Erlebnisse",
        "nav.fleet": "Fahrzeuge",
        "nav.why": "Warum wir",
        "nav.faq": "FAQ",
        "nav.bookTransfer": "Transfer buchen",

        "common.bookNow": "Jetzt buchen",
        "common.whatsapp": "WhatsApp",

        "hero.eyebrow":
            "BESTER TAXISERVICE AUF MAURITIUS",

        "hero.title":
            "Entdecken Sie Mauritius.<br><em>Reisen Sie komfortabel.</em>",

        "hero.text":
            "Zuverlässige Flughafentransfers, private Ausflüge und Gruppentransporte.",

        "hero.bookTransfer":
            "Transfer buchen",

        "hero.explore":
            "Ausflüge entdecken",

        "hero.trust1":
            "✓ Flughafenabholung & Rückfahrt",

        "hero.trust2":
            "✓ Privat- & Gruppentransport",

        "hero.trust3":
            "✓ Professionelle lokale Fahrer",

        "booking.quick":
            "SCHNELLBUCHUNG",

        "booking.available":
            "24/7 VERFÜGBAR",

        "booking.title":
            "Planen Sie Ihre Fahrt",

        "booking.intro":
            "Wählen Sie Abholort und Ziel überall auf Mauritius.",

        "booking.submit":
            "Buchung absenden",

        "booking.note":
            "Nach dem Absenden öffnet sich WhatsApp mit Ihrer vollständigen Anfrage.",

        "form.service":
            "Service",

        "form.selectService":
            "Service auswählen",

        "form.name":
            "Vollständiger Name",

        "form.namePlaceholder":
            "Ihr vollständiger Name",

        "form.email":
            "E-Mail-Adresse",

        "form.emailPlaceholder":
            "ihrname@beispiel.de",

        "form.phone":
            "WhatsApp / Telefon",

        "form.phonePlaceholder":
            "5253 2214",

        "form.date":
            "Reisedatum",

        "form.time":
            "Abholzeit",

        "form.passengers":
            "Fahrgäste",

        "form.select":
            "Auswählen",

        "form.vehicle":
            "Fahrzeug",

        "form.selectVehicle":
            "Fahrzeug auswählen",

        "form.notes":
            "Besondere Wünsche",

        "form.optional":
            "(optional)",

        "form.notesPlaceholder":
            "Flugnummer, Gepäck, weitere Informationen...",

        "service.airport":
            "Flughafentransfer",

        "service.private":
            "Privattransport",

        "service.group":
            "Gruppentransport",

        "service.excursion":
            "Ausflug",

        "service.activity":
            "Aktivitätsbuchung",

        "service.custom":
            "Individuelle Tour",

        "service.tailor":
            "Maßgeschneiderte Reise",

        "service.birthday":
            "Geburtstagsüberraschung",

        "service.wedding":
            "Hochzeit / Veranstaltung",

        "service.cruise":
            "Kreuzfahrttransfer",

        "vehicle.sedan":
            "Limousine",

        "vehicle.suv":
            "SUV",

        "vehicle.minivan":
            "Minivan",

        "vehicle.family":
            "Familienvan",

        "vehicle.minibus":
            "Minibus",

        "vehicle.coach":
            "Reisebus / Große Gruppe",

        "passenger.one":
            "Fahrgast",

        "passenger.more":
            "Fahrgäste",

        "pickup.title":
            "Abholort",

        "pickup.subtitle":
            "Wo sollen wir Sie abholen?",

        "pickup.district":
            "Abholbezirk / Gebiet",

        "pickup.place":
            "Abholort / Stadt",

        "pickup.other":
            "Anderer Abholort",

        "pickup.address":
            "Genaue Abholadresse",

        "pickup.addressPlaceholder":
            "Hotel, Villa, Apartment, Straße...",

        "destination.title":
            "Ziel",

        "destination.subtitle":
            "Wohin möchten Sie fahren?",

        "destination.district":
            "Zielbezirk / Gebiet",

        "destination.place":
            "Zielort / Stadt",

        "destination.other":
            "Anderer Zielort",

        "destination.address":
            "Genaue Zieladresse",

        "destination.addressPlaceholder":
            "Hotel, Resort, Villa, Straße...",

        "location.selectDistrict":
            "Ganz Mauritius / Bezirk auswählen",

        "location.selectPlace":
            "Stadt / Ort auswählen",

        "location.other":
            "Andere / Nicht aufgeführt",

        "location.otherPlaceholder":
            "Stadt, Strand oder Gebiet eingeben",

        "baby.title":
            "Kindersitz",

        "baby.subtitle":
            "1 Kindersitz ist kostenlos. Jeder weitere kostet 5 €.",

        "baby.number":
            "Anzahl der Kindersitze",

        "baby.zero":
            "Kein Kindersitz",

        "baby.one":
            "1 Kindersitz — KOSTENLOS",

        "baby.two":
            "2 Kindersitze — 5 € extra",

        "baby.three":
            "3 Kindersitze — 10 € extra",

        "baby.four":
            "4 Kindersitze — 15 € extra",

        "stats.airport":
            "Flughafentransfers",

        "stats.vehicles":
            "Fahrzeugoptionen",

        "stats.local":
            "Lokaler Service",

        "stats.booking":
            "Einfache Buchung",

        "services.badge":
            "UNSERE LEISTUNGEN",

        "services.title":
            "Mehr als ein Transfer.<br><em>Ihr Mauritius-Erlebnis.</em>",

        "services.text":
            "BTSM hilft Ihnen, Mauritius komfortabel zu entdecken.",

        "services.airport.title":
            "Flughafentransfers",

        "services.airport.text":
            "Zuverlässige Flughafentransfers.",

        "services.airport.link":
            "Transfer buchen →",

        "services.private.title":
            "Privattransport",

        "services.private.text":
            "Komfortabler Transport für Paare, Familien und Gruppen.",

        "services.private.link":
            "Transport anfragen →",

        "services.group.title":
            "Gruppentransport",

        "services.group.text":
            "Transport für Familien, Gruppen und Veranstaltungen.",

        "services.group.link":
            "Gruppe planen →",

        "services.excursion.title":
            "Private Ausflüge",

        "services.excursion.text":
            "Entdecken Sie Mauritius mit privaten Ausflügen.",

        "services.excursion.link":
            "Ausflug ansehen →",

        "services.activity.title":
            "Aktivitätsbuchung",

        "services.activity.text":
            "Wir organisieren Aktivitäten auf Mauritius.",

        "services.activity.link":
            "Aktivitäten entdecken →",

        "services.tailor.title":
            "Maßgeschneiderte Reisen",

        "services.tailor.text":
            "Erstellen Sie Ihre persönliche Reise.",

        "services.tailor.link":
            "Reise erstellen →",

        "services.birthday.title":
            "Geburtstagsüberraschungen",

        "services.birthday.text":
            "Planen Sie eine besondere Überraschung.",

        "services.birthday.link":
            "Überraschung planen →",

        "services.wedding.title":
            "Hochzeiten & Events",

        "services.wedding.text":
            "Transport für Hochzeiten und Veranstaltungen.",

        "services.wedding.link":
            "Event planen →",

        "services.cruise.title":
            "Kreuzfahrtausflüge",

        "services.cruise.text":
            "Hafentransfers und Ausflüge.",

        "services.cruise.link":
            "Jetzt anfragen →",

        "pricing.badge":
            "FAHRZEUG AUSWÄHLEN",

        "pricing.title":
            "Ein Fahrzeug für<br><em>jede Fahrt.</em>",

        "pricing.text":
            "Wählen Sie das passende Fahrzeug.",

        "pricing.sedanText":
            "Für Paare und kleine Gruppen.",

        "pricing.suvText":
            "Mehr Platz für Familien.",

        "pricing.minivanText":
            "Für Familien und mittelgroße Gruppen.",

        "pricing.minibusText":
            "Für größere Gruppen.",

        "pricing.passengers":
            "Fahrgäste",

        "pricing.choose":
            "Fahrzeug auswählen →",

        "pricing.popular":
            "BELIEBT",

        "features.one":
            "✓ Professionelle lokale Fahrer",

        "features.two":
            "✓ Empfang am Flughafen",

        "features.three":
            "✓ Flughafentransfers 24/7",

        "features.four":
            "✓ Privat- und Gruppenoptionen",

        "features.five":
            "✓ Kindersitz verfügbar",

        "features.six":
            "✓ Flexible Reiseplanung",

        "tour.featured":
            "BESONDERER STOPP",

        "tour.caption":
            "Kultur • Spiritualität • Mauritius",

        "tour.badge":
            "EMPFOHLENER AUSFLUG",

        "tour.title":
            "Entdecken Sie den<br><em>Süden von Mauritius.</em>",

        "tour.text":
            "Erleben Sie Natur- und Kulturhöhepunkte der Insel.",

        "tour.stop1":
            "Besuchen Sie den heiligen See und die Tempel.",

        "tour.stop2":
            "Entdecken Sie kulturelle Wahrzeichen.",

        "tour.stop3":
            "Besuchen Sie eine berühmte Attraktion.",

        "tour.stop4":
            "Genießen Sie Berg- und Wasserfallblicke.",

        "tour.stop5":
            "Genießen Sie spektakuläre Aussichten.",

        "tour.sunset":
            "Optionaler Sonnenuntergang am Le Morne",

        "tour.stop6":
            "Beenden Sie den Tag mit einem schönen Sonnenuntergang.",

        "tour.lunchTitle":
            "Mittagessen einplanen?",

        "tour.lunch":
            "Wir empfehlen gerne ein lokales Restaurant.",

        "tour.plan":
            "Ausflug planen",

        "experiences.badge":
            "MAURITIUS-ERLEBNISSE",

        "experiences.title":
            "Mehr Möglichkeiten,<br><em>die Insel zu genießen.</em>",

        "experiences.text":
            "Entdecken Sie lokale Erlebnisse und Abenteuer.",

        "experiences.category1":
            "LOKALE ENTDECKUNG",

        "experiences.card1":
            "Mauritius probieren & entdecken",

        "experiences.caption1":
            "Entdecken Sie lokale Mauritius-Erlebnisse.",

        "experiences.category2":
            "SPAß & FAMILIE",

        "experiences.card2":
            "Einzigartige Attraktionen",

        "experiences.caption2":
            "Unterhaltsame Attraktionen auf Mauritius.",

        "experiences.category3":
            "ABENTEUER",

        "experiences.card3":
            "Unvergessliche Erinnerungen",

        "experiences.caption3":
            "Erleben Sie Abenteuer auf Mauritius.",

        "experiences.view":
            "Foto ansehen →",

        "experiences.plan":
            "Erlebnis planen",

        "fleet.badge":
            "UNSERE FAHRZEUGE",

        "fleet.title":
            "Reisen Sie auf Ihre Art.",

        "fleet.text":
            "Wählen Sie ein komfortables Fahrzeug.",

        "fleet.family":
            "Familien & Gruppen",

        "fleet.large":
            "Größere Gruppen",

        "fleet.events":
            "Events & Gruppen",

        "why.badge":
            "WARUM BTSM",

        "why.title":
            "Ihre Inselreise,<br><em>einfacher gemacht.</em>",

        "why.text":
            "BTSM kombiniert komfortablen Transport mit lokaler Erfahrung.",

        "why.oneTitle":
            "Zuverlässiger 24/7-Service",

        "why.oneText":
            "Flughafentransfers rund um die Uhr.",

        "why.twoTitle":
            "Professionelle lokale Fahrer",

        "why.twoText":
            "Reisen Sie mit Menschen, die Mauritius kennen.",

        "why.threeTitle":
            "Privat- & Gruppentransport",

        "why.threeText":
            "Optionen für Paare, Familien und Gruppen.",

        "why.fourTitle":
            "Individuelle Erlebnisse",

        "why.fourText":
            "Gestalten Sie Ihre Reise individuell.",

        "why.photoBadge":
            "MAURITIUS ENTDECKEN",

        "why.photoText":
            "Wunderschöne Orte.<br>Komfortable Fahrten.",

        "faq.title":
            "Fragen?",

        "faq.text":
            "Wichtige Informationen vor der Buchung.",

        "faq.q1":
            "Sind Flughafentransfers 24/7 verfügbar?",

        "faq.a1":
            "Ja. BTSM bietet Transfers rund um die Uhr.",

        "faq.q2":
            "Bieten Sie private Ausflüge an?",

        "faq.a2":
            "Ja. Private Ausflüge können individuell geplant werden.",

        "faq.q3":
            "Kann ich meine Tour individuell gestalten?",

        "faq.a3":
            "Ja. Maßgeschneiderte Reisen sind möglich.",

        "faq.q4":
            "Bieten Sie Transport für Veranstaltungen an?",

        "faq.a4":
            "Ja. BTSM organisiert Transport für Veranstaltungen.",

        "faq.q5":
            "Wie funktionieren Kindersitze?",

        "faq.a5":
            "Ein Kindersitz ist kostenlos. Weitere kosten 5 €.",

        "faq.q6":
            "Was passiert nach dem Absenden?",

        "faq.a6":
            "WhatsApp öffnet Ihre vollständige Anfrage.",

        "cta.badge":
            "BEREIT ZUM ENTDECKEN?",

        "cta.title":
            "Planen wir Ihre Mauritius-Reise.",

        "cta.text":
            "Transfer, Ausflug, Event oder individuelles Erlebnis.",

        "footer.text":
            "BTSM bietet Transfers, Privattransport und Ausflüge auf Mauritius.",

        "footer.services":
            "Leistungen",

        "footer.experiences":
            "Erlebnisse",

        "footer.contact":
            "Kontakt",

        "footer.rights":
            "Alle Rechte vorbehalten.",

        "toast.language":
            "Sprache geändert.",

        "toast.required":
            "Bitte füllen Sie alle Pflichtfelder aus.",

        "toast.email":
            "Bitte geben Sie eine gültige E-Mail-Adresse ein.",

        "toast.phone":
            "Bitte geben Sie eine gültige Telefonnummer ein.",

        "success.kicker":
            "BUCHUNG BEREIT",

        "success.title":
            "Formular erfolgreich gesendet!",

        "success.text":
            "Ihre Anfrage ist bereit. WhatsApp wird jetzt geöffnet.",

        "success.bookingId":
            "Buchungsnummer",

        "success.whatsappTitle":
            "WhatsApp wird geöffnet",

        "success.whatsappText":
            "Ihre Buchung ist bereit zum Senden an BTSM.",

        "success.hint":
            "Wenn Chrome fragt, wählen Sie „WhatsApp öffnen“.",

        "success.openWhatsApp":
            "WhatsApp öffnen",

        "success.stay":
            "Auf Website bleiben"
    },



    /* =====================================================
       ITALIAN
    ===================================================== */

    it: {

        "brand.tagline":
            "MIGLIOR SERVIZIO TAXI A MAURITIUS",

        "nav.home": "Home",
        "nav.services": "Servizi",
        "nav.transfers": "Transfer",
        "nav.excursions": "Escursioni",
        "nav.experiences": "Esperienze",
        "nav.fleet": "Veicoli",
        "nav.why": "Perché noi",
        "nav.faq": "FAQ",
        "nav.bookTransfer": "Prenota transfer",

        "common.bookNow": "Prenota ora",
        "common.whatsapp": "WhatsApp",

        "hero.eyebrow":
            "MIGLIOR SERVIZIO TAXI A MAURITIUS",

        "hero.title":
            "Scopri Mauritius.<br><em>Viaggia comodamente.</em>",

        "hero.text":
            "Transfer aeroportuali, escursioni private e trasporto di gruppi con autisti locali.",

        "hero.bookTransfer":
            "Prenota il tuo transfer",

        "hero.explore":
            "Scopri le escursioni",

        "hero.trust1":
            "✓ Ritiro e accompagnamento in aeroporto",

        "hero.trust2":
            "✓ Trasporto privato e di gruppo",

        "hero.trust3":
            "✓ Autisti locali professionali",

        "booking.quick":
            "PRENOTAZIONE RAPIDA",

        "booking.available":
            "DISPONIBILE 24/7",

        "booking.title":
            "Pianifica il tuo viaggio",

        "booking.intro":
            "Scegli il punto di partenza e la destinazione a Mauritius.",

        "booking.submit":
            "Invia prenotazione",

        "booking.note":
            "Dopo l'invio, WhatsApp aprirà la tua richiesta completa.",

        "form.service":
            "Servizio",

        "form.selectService":
            "Seleziona servizio",

        "form.name":
            "Nome completo",

        "form.namePlaceholder":
            "Il tuo nome completo",

        "form.email":
            "Indirizzo e-mail",

        "form.emailPlaceholder":
            "nome@esempio.com",

        "form.phone":
            "WhatsApp / Telefono",

        "form.phonePlaceholder":
            "5253 2214",

        "form.date":
            "Data del viaggio",

        "form.time":
            "Ora del ritiro",

        "form.passengers":
            "Passeggeri",

        "form.select":
            "Seleziona",

        "form.vehicle":
            "Veicolo",

        "form.selectVehicle":
            "Seleziona veicolo",

        "form.notes":
            "Richiesta speciale",

        "form.optional":
            "(opzionale)",

        "form.notesPlaceholder":
            "Numero volo, bagagli, informazioni aggiuntive...",

        "service.airport":
            "Transfer aeroportuale",

        "service.private":
            "Trasporto privato",

        "service.group":
            "Trasporto di gruppo",

        "service.excursion":
            "Escursione",

        "service.activity":
            "Prenotazione attività",

        "service.custom":
            "Tour locale personalizzato",

        "service.tailor":
            "Viaggio su misura",

        "service.birthday":
            "Sorpresa di compleanno",

        "service.wedding":
            "Matrimonio / Evento",

        "service.cruise":
            "Transfer nave da crociera",

        "vehicle.sedan":
            "Berlina",

        "vehicle.suv":
            "SUV",

        "vehicle.minivan":
            "Minivan",

        "vehicle.family":
            "Van familiare",

        "vehicle.minibus":
            "Minibus",

        "vehicle.coach":
            "Pullman / Gruppo grande",

        "passenger.one":
            "Passeggero",

        "passenger.more":
            "Passeggeri",

        "pickup.title":
            "Luogo di ritiro",

        "pickup.subtitle":
            "Dove dobbiamo venirti a prendere?",

        "pickup.district":
            "Distretto / Zona di ritiro",

        "pickup.place":
            "Città / Luogo di ritiro",

        "pickup.other":
            "Altra città / zona",

        "pickup.address":
            "Indirizzo esatto di ritiro",

        "pickup.addressPlaceholder":
            "Hotel, villa, appartamento, strada...",

        "destination.title":
            "Destinazione",

        "destination.subtitle":
            "Dove stai andando?",

        "destination.district":
            "Distretto / Zona di destinazione",

        "destination.place":
            "Città / Luogo di destinazione",

        "destination.other":
            "Altra città / zona",

        "destination.address":
            "Indirizzo esatto di arrivo",

        "destination.addressPlaceholder":
            "Hotel, resort, villa, strada...",

        "location.selectDistrict":
            "Tutta Mauritius / Seleziona distretto",

        "location.selectPlace":
            "Seleziona città / luogo",

        "location.other":
            "Altro / Non presente",

        "location.otherPlaceholder":
            "Inserisci città, spiaggia o zona",

        "baby.title":
            "Seggiolino per bambini",

        "baby.subtitle":
            "1 seggiolino è gratuito. Ogni seggiolino aggiuntivo costa 5 €.",

        "baby.number":
            "Numero di seggiolini",

        "baby.zero":
            "Nessun seggiolino",

        "baby.one":
            "1 seggiolino — GRATIS",

        "baby.two":
            "2 seggiolini — 5 € extra",

        "baby.three":
            "3 seggiolini — 10 € extra",

        "baby.four":
            "4 seggiolini — 15 € extra",

        "stats.airport":
            "Transfer aeroportuali",

        "stats.vehicles":
            "Opzioni veicolo",

        "stats.local":
            "Servizio locale",

        "stats.booking":
            "Prenotazione semplice",

        "services.badge":
            "COSA OFFRIAMO",

        "services.title":
            "Più di un transfer.<br><em>La tua esperienza a Mauritius.</em>",

        "services.text":
            "BTSM ti aiuta a muoverti a Mauritius comodamente.",

        "services.airport.title":
            "Transfer aeroportuali",

        "services.airport.text":
            "Transfer aeroportuali con autisti professionali.",

        "services.airport.link":
            "Prenota transfer →",

        "services.private.title":
            "Trasporto privato",

        "services.private.text":
            "Trasporto per coppie, famiglie e gruppi.",

        "services.private.link":
            "Richiedi trasporto →",

        "services.group.title":
            "Trasporto di gruppo",

        "services.group.text":
            "Trasporto per famiglie, gruppi ed eventi.",

        "services.group.link":
            "Organizza il gruppo →",

        "services.excursion.title":
            "Escursioni private",

        "services.excursion.text":
            "Scopri Mauritius con escursioni private.",

        "services.excursion.link":
            "Vedi escursione →",

        "services.activity.title":
            "Prenotazione attività",

        "services.activity.text":
            "Organizziamo attività a Mauritius.",

        "services.activity.link":
            "Scopri attività →",

        "services.tailor.title":
            "Viaggi su misura",

        "services.tailor.text":
            "Crea un itinerario personalizzato.",

        "services.tailor.link":
            "Crea il viaggio →",

        "services.birthday.title":
            "Sorprese di compleanno",

        "services.birthday.text":
            "Organizza una sorpresa speciale.",

        "services.birthday.link":
            "Organizza sorpresa →",

        "services.wedding.title":
            "Matrimoni ed eventi",

        "services.wedding.text":
            "Trasporto per matrimoni ed eventi.",

        "services.wedding.link":
            "Organizza evento →",

        "services.cruise.title":
            "Escursioni per crociere",

        "services.cruise.text":
            "Transfer dal porto ed escursioni.",

        "services.cruise.link":
            "Richiedi informazioni →",

        "pricing.badge":
            "SCEGLI IL TUO VEICOLO",

        "pricing.title":
            "Un veicolo per<br><em>ogni viaggio.</em>",

        "pricing.text":
            "Scegli il veicolo più adatto al tuo gruppo.",

        "pricing.sedanText":
            "Ideale per coppie e piccoli gruppi.",

        "pricing.suvText":
            "Più spazio per le famiglie.",

        "pricing.minivanText":
            "Ideale per famiglie e gruppi medi.",

        "pricing.minibusText":
            "Perfetto per gruppi numerosi.",

        "pricing.passengers":
            "passeggeri",

        "pricing.choose":
            "Scegli veicolo →",

        "pricing.popular":
            "POPOLARE",

        "features.one":
            "✓ Autisti locali professionali",

        "features.two":
            "✓ Accoglienza in aeroporto",

        "features.three":
            "✓ Transfer aeroportuali 24/7",

        "features.four":
            "✓ Opzioni private e di gruppo",

        "features.five":
            "✓ Seggiolino disponibile",

        "features.six":
            "✓ Viaggi flessibili",

        "tour.featured":
            "TAPPA IN EVIDENZA",

        "tour.caption":
            "Cultura • Spiritualità • Mauritius",

        "tour.badge":
            "ESCURSIONE IN EVIDENZA",

        "tour.title":
            "Scopri il<br><em>sud di Mauritius.</em>",

        "tour.text":
            "Scopri alcuni dei luoghi più belli dell'isola.",

        "tour.stop1":
            "Visita il lago sacro e i templi.",

        "tour.stop2":
            "Scopri luoghi culturali iconici.",

        "tour.stop3":
            "Esplora una famosa attrazione.",

        "tour.stop4":
            "Goditi montagne e cascate.",

        "tour.stop5":
            "Ammira panorami spettacolari.",

        "tour.sunset":
            "Tramonto opzionale a Le Morne",

        "tour.stop6":
            "Concludi la giornata con un tramonto indimenticabile.",

        "tour.lunchTitle":
            "Vuoi includere il pranzo?",

        "tour.lunch":
            "Possiamo consigliarti un ristorante locale.",

        "tour.plan":
            "Pianifica questa escursione",

        "experiences.badge":
            "ESPERIENZE A MAURITIUS",

        "experiences.title":
            "Altri modi per<br><em>vivere l'isola.</em>",

        "experiences.text":
            "Scopri sapori, attrazioni e attività.",

        "experiences.category1":
            "SCOPERTA LOCALE",

        "experiences.card1":
            "Assapora e scopri Mauritius",

        "experiences.caption1":
            "Scopri sapori ed esperienze locali.",

        "experiences.category2":
            "DIVERTIMENTO & FAMIGLIA",

        "experiences.card2":
            "Attrazioni uniche",

        "experiences.caption2":
            "Divertiti con attrazioni originali.",

        "experiences.category3":
            "AVVENTURA",

        "experiences.card3":
            "Crea ricordi indimenticabili",

        "experiences.caption3":
            "Aggiungi un po' di avventura.",

        "experiences.view":
            "Visualizza foto →",

        "experiences.plan":
            "Pianifica esperienza",

        "fleet.badge":
            "I NOSTRI VEICOLI",

        "fleet.title":
            "Viaggia come preferisci.",

        "fleet.text":
            "Scegli un veicolo adatto alle tue esigenze.",

        "fleet.family":
            "Famiglie e gruppi",

        "fleet.large":
            "Gruppi numerosi",

        "fleet.events":
            "Eventi e gruppi",

        "why.badge":
            "PERCHÉ BTSM",

        "why.title":
            "Il tuo viaggio sull'isola,<br><em>più semplice.</em>",

        "why.text":
            "BTSM combina trasporto confortevole e conoscenza locale.",

        "why.oneTitle":
            "Servizio affidabile 24/7",

        "why.oneText":
            "Transfer aeroportuali disponibili sempre.",

        "why.twoTitle":
            "Autisti locali professionali",

        "why.twoText":
            "Viaggia con persone che conoscono Mauritius.",

        "why.threeTitle":
            "Trasporto privato e di gruppo",

        "why.threeText":
            "Opzioni per coppie, famiglie e gruppi.",

        "why.fourTitle":
            "Esperienze personalizzate",

        "why.fourText":
            "Crea un viaggio adatto ai tuoi interessi.",

        "why.photoBadge":
            "SCOPRI MAURITIUS",

        "why.photoText":
            "Luoghi bellissimi.<br>Viaggi confortevoli.",

        "faq.title":
            "Domande?",

        "faq.text":
            "Informazioni importanti prima della prenotazione.",

        "faq.q1":
            "I transfer aeroportuali sono disponibili 24/7?",

        "faq.a1":
            "Sì. BTSM offre transfer a qualsiasi ora.",

        "faq.q2":
            "Offrite escursioni private?",

        "faq.a2":
            "Sì. Le escursioni possono essere personalizzate.",

        "faq.q3":
            "Posso personalizzare il mio tour?",

        "faq.a3":
            "Sì. Puoi richiedere un viaggio su misura.",

        "faq.q4":
            "Offrite trasporto per eventi?",

        "faq.a4":
            "Sì. BTSM organizza trasporto per eventi.",

        "faq.q5":
            "Come funzionano i seggiolini?",

        "faq.a5":
            "Un seggiolino è gratuito. Gli altri costano 5 €.",

        "faq.q6":
            "Cosa succede dopo l'invio?",

        "faq.a6":
            "WhatsApp apre la richiesta completa pronta da inviare.",

        "cta.badge":
            "PRONTO A ESPLORARE?",

        "cta.title":
            "Pianifichiamo il tuo viaggio a Mauritius.",

        "cta.text":
            "Transfer, escursione, evento o esperienza personalizzata.",

        "footer.text":
            "BTSM offre transfer, trasporto privato ed escursioni a Mauritius.",

        "footer.services":
            "Servizi",

        "footer.experiences":
            "Esperienze",

        "footer.contact":
            "Contatti",

        "footer.rights":
            "Tutti i diritti riservati.",

        "toast.language":
            "Lingua cambiata.",

        "toast.required":
            "Completa tutti i campi obbligatori.",

        "toast.email":
            "Inserisci un indirizzo e-mail valido.",

        "toast.phone":
            "Inserisci un numero di telefono valido.",

        "success.kicker":
            "PRENOTAZIONE PRONTA",

        "success.title":
            "Modulo inviato correttamente!",

        "success.text":
            "La tua richiesta è pronta. WhatsApp si aprirà ora.",

        "success.bookingId":
            "ID prenotazione",

        "success.whatsappTitle":
            "Apertura di WhatsApp",

        "success.whatsappText":
            "La prenotazione è pronta per essere inviata a BTSM.",

        "success.hint":
            "Se Chrome chiede l'autorizzazione, scegli «Apri WhatsApp».",

        "success.openWhatsApp":
            "Apri WhatsApp",

        "success.stay":
            "Resta sul sito"
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
   MAURITIUS PLACES
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



const PLACE_TO_DISTRICT = {};


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
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        const year =
            $("#year");


        if (year) {

            year.textContent =
                new Date().getFullYear();

        }



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


        setupLightbox();


        setupSuccessModal();


        setupCountryCodeField();



        const form =
            $("#bookingForm");


        if (form) {

            form.addEventListener(
                "submit",
                handleBookingSubmit
            );

        }



        const languageSelect =
            $("#languageSelect");


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



        if (languageSelect) {

            languageSelect.value =
                CURRENT_LANGUAGE;


            languageSelect.addEventListener(
                "change",
                (event) => {

                    translatePage(
                        event.target.value,
                        true
                    );

                }
            );

        }



        translatePage(
            CURRENT_LANGUAGE,
            false
        );

    }
);



/* =========================================================
   COUNTRY CODE FIELD
========================================================= */

function setupCountryCodeField() {

    const countryCode =
        $("#countryCode");


    const phone =
        $("#phone");


    if (
        !countryCode ||
        !phone
    ) {

        return;

    }



    const placeholders = {

        "+230":
            "5253 2214",

        "+262":
            "692 12 34 56",

        "+261":
            "34 12 345 67",

        "+248":
            "2 510 123",

        "+27":
            "82 123 4567",

        "+269":
            "321 45 67",

        "+91":
            "98765 43210"

    };



    function updatePlaceholder() {

        phone.placeholder =
            placeholders[
                countryCode.value
            ] ||
            "Phone number";

    }



    countryCode.addEventListener(
        "change",
        updatePlaceholder
    );


    updatePlaceholder();

}



/* =========================================================
   TRANSLATE PAGE
========================================================= */

function translatePage(
    language,
    notify = false
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



    $$(
        "[data-i18n-placeholder]"
    ).forEach(
        (element) => {

            /*
                Do not overwrite the phone placeholder
                because it changes according to country code.
            */

            if (
                element.id ===
                "phone"
            ) {

                return;

            }


            element.placeholder =
                t(
                    element.dataset
                        .i18nPlaceholder
                );

        }
    );



    updatePassengerOptions();


    refreshLocationSelects();



    if (notify) {

        showToast(
            t(
                "toast.language"
            )
        );

    }

}



/* =========================================================
   PASSENGER OPTIONS
========================================================= */

function updatePassengerOptions() {

    $$(
        "[data-passenger-count]"
    ).forEach(
        (option) => {

            const count =
                option.dataset.passengerCount;


            const word =
                count === "1"
                    ? t("passenger.one")
                    : t("passenger.more");


            option.textContent =
                `${count} ${word}`;

        }
    );

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


    const localDate =
        new Date(
            now.getTime() -
            now.getTimezoneOffset() *
            60000
        )
        .toISOString()
        .split("T")[0];


    input.min =
        localDate;

}



/* =========================================================
   DISTRICT
========================================================= */

function initializeDistrictSelect(
    select
) {

    if (!select) {

        return;

    }


    select.innerHTML =
        "";


    const placeholder =
        document.createElement(
            "option"
        );


    placeholder.value =
        "";


    select.appendChild(
        placeholder
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



/* =========================================================
   LOCATION SELECTORS
========================================================= */

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



            const detectedDistrict =
                PLACE_TO_DISTRICT[
                    place.value
                ];



            if (
                detectedDistrict &&
                district.value !==
                detectedDistrict
            ) {

                district.value =
                    detectedDistrict;


                populatePlaceSelect(
                    place,
                    detectedDistrict,
                    place.value
                );

            }

        }
    );

}



/* =========================================================
   REFRESH LOCATIONS
========================================================= */

function refreshLocationSelects() {

    [
        "pickup",
        "destination"
    ].forEach(
        (prefix) => {

            const district =
                $(`#${prefix}District`);


            const place =
                $(`#${prefix}Place`);


            if (
                !district ||
                !place
            ) {

                return;

            }


            const districtValue =
                district.value;


            const placeValue =
                place.value;



            if (
                district.options.length
            ) {

                district.options[0]
                    .textContent =
                    t(
                        "location.selectDistrict"
                    );

            }



            populatePlaceSelect(
                place,
                districtValue,
                placeValue
            );

        }
    );

}



/* =========================================================
   POPULATE PLACES
========================================================= */

function populatePlaceSelect(
    select,
    district = "",
    selectedValue = ""
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
        t(
            "location.selectPlace"
        );


    select.appendChild(
        first
    );



    if (
        district &&
        MAURITIUS_PLACES[district]
    ) {

        MAURITIUS_PLACES[
            district
        ].forEach(
            (place) => {

                addPlaceOption(
                    select,
                    place,
                    selectedValue
                );

            }
        );

    }

    else {

        Object.entries(
            MAURITIUS_PLACES
        ).forEach(
            ([districtName, places]) => {

                const group =
                    document.createElement(
                        "optgroup"
                    );


                group.label =
                    districtName;


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
                            place ===
                            selectedValue
                        ) {

                            option.selected =
                                true;

                        }


                        group.appendChild(
                            option
                        );

                    }
                );


                select.appendChild(
                    group
                );

            }
        );

    }



    const other =
        document.createElement(
            "option"
        );


    other.value =
        OTHER_PLACE;


    other.textContent =
        t(
            "location.other"
        );


    if (
        selectedValue ===
        OTHER_PLACE
    ) {

        other.selected =
            true;

    }


    select.appendChild(
        other
    );

}



/* =========================================================
   ADD PLACE OPTION
========================================================= */

function addPlaceOption(
    select,
    place,
    selectedValue
) {

    const option =
        document.createElement(
            "option"
        );


    option.value =
        place;


    option.textContent =
        place;


    if (
        place ===
        selectedValue
    ) {

        option.selected =
            true;

    }


    select.appendChild(
        option
    );

}



/* =========================================================
   CUSTOM PLACE
========================================================= */

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


        setTimeout(
            () => input.focus(),
            50
        );

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
   SET LOCATION
========================================================= */

function setLocation(
    prefix,
    district,
    place,
    address
) {

    const districtInput =
        $(`#${prefix}District`);


    const placeInput =
        $(`#${prefix}Place`);


    const addressInput =
        $(`#${prefix}Address`);



    if (districtInput) {

        districtInput.value =
            district;

    }



    if (placeInput) {

        populatePlaceSelect(
            placeInput,
            district,
            place
        );

    }



    if (addressInput) {

        addressInput.value =
            address;

    }

}



/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const button =
        $("#menuToggle");


    const nav =
        $("#mobileNav");


    if (
        !button ||
        !nav
    ) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            const open =
                nav.classList.toggle(
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

                    nav.classList.remove(
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


                    const service =
                        $("#bookingType");


                    if (vehicle) {

                        vehicle.value =
                            button.dataset.vehicle;

                    }


                    if (service) {

                        service.value =
                            "Airport Transfer";

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


    if (!button) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            $("#bookingType").value =
                "Excursion";


            setLocation(
                "destination",
                "Black River",
                "Chamarel",
                "Chamarel / South Mauritius excursion"
            );


            $("#notes").value =
                "Interested in Grand Bassin, Shiva & Durga Statues, " +
                "7 Coloured Earth / Adventure Park, Alexandra Falls, " +
                "Chamarel viewpoints and optional Le Morne sunset.";


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


    if (!button) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            $("#bookingType").value =
                "Activity Booking";


            scrollToBooking();

        }
    );

}



/* =========================================================
   SCROLL
========================================================= */

function scrollToBooking() {

    $("#booking")?.scrollIntoView({

        behavior:
            "smooth",

        block:
            "start"

    });

}



/* =========================================================
   VALIDATION
========================================================= */

function validateBookingForm() {

    const required =
        $$("#bookingForm [required]");


    for (
        const field
        of required
    ) {

        if (
            !String(
                field.value
            ).trim()
        ) {

            field.focus();


            showToast(
                t(
                    "toast.required"
                )
            );


            return false;

        }

    }



    /* EMAIL */

    const email =
        $("#customerEmail");


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailPattern.test(
            email.value.trim()
        )
    ) {

        email.focus();


        showToast(
            t(
                "toast.email"
            )
        );


        return false;

    }



    /* PHONE */

    const phone =
        $("#phone");


    const digits =
        phone.value.replace(
            /\D/g,
            ""
        );


    /*
        Allow common local-number lengths
        after country code selection.
    */

    if (
        digits.length < 6 ||
        digits.length > 12
    ) {

        phone.focus();


        showToast(
            t(
                "toast.phone"
            )
        );


        return false;

    }



    return true;

}



/* =========================================================
   FULL CUSTOMER NUMBER
========================================================= */

function getFullCustomerPhone() {

    const countryCode =
        $("#countryCode")?.value || "";


    const rawPhone =
        $("#phone")?.value || "";


    const phoneDigits =
        rawPhone.replace(
            /\D/g,
            ""
        );


    return (
        `${countryCode}${phoneDigits}`
    );

}



/* =========================================================
   SUBMIT
========================================================= */

function handleBookingSubmit(
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



    LAST_BOOKING_MESSAGE =
        booking.message;


    LAST_BOOKING_ID =
        booking.bookingId;



    showSuccessModal(
        booking.bookingId
    );



    /*
        Attempt to open installed WhatsApp app.
    */

    setTimeout(
        () => {

            openWhatsAppApplication(
                booking.message
            );

        },
        850
    );

}



/* =========================================================
   OPEN WHATSAPP APPLICATION
========================================================= */

function openWhatsAppApplication(
    message
) {

    if (!message) {

        return;

    }


    const encodedMessage =
        encodeURIComponent(
            message
        );


    const nativeWhatsAppUrl =
        `whatsapp://send` +
        `?phone=${WHATSAPP_NUMBER}` +
        `&text=${encodedMessage}`;


    window.location.href =
        nativeWhatsAppUrl;

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



    /*
        Booking message is always in English
        for the business owner.
    */

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

        "",

        "Thank you!"

    ].join(
        "\n"
    );



    return {

        bookingId,

        customerPhone,

        message,

        data

    };

}



/* =========================================================
   BABY SEAT
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


    const extraCost =
        additional * 5;


    return (
        `${count} baby seats - ` +
        `1 free + ${additional} additional ` +
        `(EUR ${extraCost} extra)`
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
   DATE
========================================================= */

function formatEnglishDate(
    value
) {

    if (!value) {

        return "Not specified";

    }


    const date =
        new Date(
            `${value}T00:00:00`
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

                openWhatsAppApplication(
                    LAST_BOOKING_MESSAGE
                );

            }

        }
    );



    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                modal
            ) {

                closeSuccessModal();

            }

        }
    );



    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key ===
                "Escape" &&
                modal.classList.contains(
                    "open"
                )
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


    const bookingIdElement =
        $("#successBookingId");


    if (!modal) {

        return;

    }


    if (bookingIdElement) {

        bookingIdElement.textContent =
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
                            t(
                                item.dataset
                                    .captionKey
                            );

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
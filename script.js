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

   src="./images/jp3.jpeg"

   If jp3.jpeg cannot be found,
   JS automatically tries image4.jpeg,
   then image2.jpeg,
   then image1.jpeg.

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
   LANGUAGE
========================================================= */

function setupLanguage() {

    const picker =
        $(".language-picker");

    const button =
        $("#languageButton");

    const menu =
        $("#languageMenu");

    const label =
        $("#languageLabel");

    const flag =
        $("#languageFlag");

    const hiddenSelect =
        $("#languageSelect");


    if (
        !picker ||
        !button ||
        !menu
    ) {

        return;

    }


    const languages = {

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


    function close() {

        picker.classList.remove(
            "open"
        );

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    function selectLanguage(
        language
    ) {

        const data =
            languages[language] ||
            languages.en;


        if (label) {

            label.textContent =
                data.label;

        }


        if (flag) {

            flag.className =
                `language-flag ${data.flag}`;

        }


        if (hiddenSelect) {

            hiddenSelect.value =
                language;

        }


        try {

            localStorage.setItem(
                "btsm-language",
                language
            );

        }

        catch (error) {

            console.warn(
                error
            );

        }

    }


    let saved =
        "en";


    try {

        saved =
            localStorage.getItem(
                "btsm-language"
            ) ||
            "en";

    }

    catch (error) {

        saved =
            "en";

    }


    selectLanguage(
        saved
    );


    button.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            const open =
                picker.classList.toggle(
                    "open"
                );


            button.setAttribute(
                "aria-expanded",
                String(open)
            );

        }
    );


    $$(".language-option")
        .forEach(
            (option) => {

                option.addEventListener(
                    "click",
                    () => {

                        selectLanguage(
                            option.dataset.language
                        );

                        close();

                        showToast(
                            "Language changed."
                        );

                    }
                );

            }
        );


    document.addEventListener(
        "click",
        (event) => {

            if (
                !picker.contains(
                    event.target
                )
            ) {

                close();

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

                close();

            }

        }
    );

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


    populateDistricts(
        district
    );


    populatePlaces(
        place,
        ""
    );


    district.addEventListener(
        "change",
        () => {

            populatePlaces(
                place,
                district.value
            );

            hideCustomPlace(
                customWrap,
                customInput
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

    first.textContent =
        "Select town / place";

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

    other.textContent =
        "Other / Not listed";

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


    const AUTO_DELAY =
        5000;

    const MANUAL_DELAY =
        8000;


    let current =
        0;

    let autoTimer =
        null;

    let manualTimer =
        null;

    let touchStartX =
        null;


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

                const active =
                    index ===
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
            (dot,index) => {

                dot.classList.toggle(
                    "active",
                    index ===
                    current
                );

            }
        );

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


    function clearAuto() {

        if (
            autoTimer !==
            null
        ) {

            clearTimeout(
                autoTimer
            );

            autoTimer =
                null;

        }

    }


    function clearManual() {

        if (
            manualTimer !==
            null
        ) {

            clearTimeout(
                manualTimer
            );

            manualTimer =
                null;

        }

    }


    function scheduleAuto() {

        clearAuto();


        autoTimer =
            setTimeout(
                () => {

                    nextSlide();

                    scheduleAuto();

                },
                AUTO_DELAY
            );

    }


    function manualAction(
        action
    ) {

        clearAuto();

        clearManual();


        action();


        manualTimer =
            setTimeout(
                () => {

                    manualTimer =
                        null;

                    scheduleAuto();

                },
                MANUAL_DELAY
            );

    }


    next?.addEventListener(
        "click",
        () => {

            manualAction(
                nextSlide
            );

        }
    );


    previous?.addEventListener(
        "click",
        () => {

            manualAction(
                previousSlide
            );

        }
    );


    dots.forEach(
        (dot,index) => {

            dot.addEventListener(
                "click",
                () => {

                    manualAction(
                        () => {

                            show(
                                index
                            );

                        }
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


            manualAction(
                distance < 0
                    ? nextSlide
                    : previousSlide
            );

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
       Pause while browser tab is hidden.
    */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                clearAuto();

            }

            else if (
                manualTimer ===
                null
            ) {

                scheduleAuto();

            }

        }
    );


    show(
        0
    );


    scheduleAuto();

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

            showToast(
                "Please complete all required booking fields."
            );

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

        showToast(
            "Please enter a valid email address."
        );

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

        showToast(
            "Please enter a valid phone number."
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


    const button =
        $("#submitBooking");


    if (button) {

        button.disabled =
            true;

        button.textContent =
            "Submitting...";

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


        showToast(
            "Opening WhatsApp with your booking request."
        );


        openWhatsApp(
            booking.message
        );

    }

    finally {

        if (button) {

            button.disabled =
                false;

            button.textContent =
                "Submit Booking";

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

        `District: ${data.pickupDistrict}`,

        `Place: ${pickupPlace}`,

        `Address: ${data.pickupAddress}`,

        "",

        "DESTINATION",

        `District: ${data.destinationDistrict}`,

        `Place: ${destinationPlace}`,

        `Address: ${data.destinationAddress}`,

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
            "1–3 passengers, 3 luggage, from EUR 40",

        "SUV":
            "1–3 passengers, 3 large + 1 small luggage, from EUR 55",

        "Minivan":
            "4–6 passengers, maximum 8 luggage, from EUR 70",

        "Large Van":
            "7–8 passengers, maximum 10 luggage, from EUR 90"

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

        return "1 baby seat - FREE";

    }


    const additional =
        count - 1;


    return (
        `${count} baby seats - ` +
        `1 free + ${additional} additional ` +
        `(EUR ${additional * 5} extra)`
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

        Pickup_District:
            booking.data.pickupDistrict,

        Pickup_Place:
            booking.pickupPlace,

        Pickup_Address:
            booking.data.pickupAddress,

        Destination_District:
            booking.data.destinationDistrict,

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
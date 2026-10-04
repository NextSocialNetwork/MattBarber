export type Language = 'en' | 'lt' | 'pl' | 'ru' | 'es';

export interface TranslationDictionary {
  nav: {
    services: string;
    houseCalls: string;
    map: string;
    gallery: string;
    faq: string;
    myBookings: string;
    bookNow: string;
  };
  hero: {
    specialty: string;
    headline: string;
    subheadline: string;
    haircut: string;
    beardTrim: string;
    houseCall: string;
    shears: string;
    razor: string;
    chicagoOnly: string;
    bookCta: string;
    callCta: string;
    sanitized: string;
    cityLimits: string;
    cashAppNotice: string;
    barberTitle: string;
    barberSpecialty: string;
    availableDays: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    selectBook: string;
    minutes: string;
    haircutName: string;
    haircutDesc: string;
    beardName: string;
    beardDesc: string;
    comboName: string;
    comboDesc: string;
    photoScissorTitle: string;
    photoScissorDesc: string;
    photoBeardTitle: string;
    photoBeardDesc: string;
  };
  houseCalls: {
    kicker: string;
    title: string;
    desc: string;
    travelFeeTitle: string;
    travelFeeDesc: string;
    chicagoOnlyBadge: string;
    depositRequiredTitle: string;
    depositRequiredDesc: string;
    copyTag: string;
    copied: string;
    openCashApp: string;
    gearBadge: string;
    chairReq: string;
    bookHouseCallBtn: string;
  };
  map: {
    kicker: string;
    title: string;
    desc: string;
    coverageTitle: string;
    coverageDesc: string;
    selectNeighborhood: string;
    travelResponse: string;
    viewInGoogleMaps: string;
    serviceRadius: string;
  };
  gallery: {
    kicker: string;
    title: string;
    desc: string;
    all: string;
    scissor: string;
    fades: string;
    beards: string;
    bookStyle: string;
  };
  reviews: {
    kicker: string;
    title: string;
    desc: string;
  };
  faq: {
    kicker: string;
    title: string;
    desc: string;
  };
  footer: {
    readyTitle: string;
    bookOnline: string;
    callMatt: string;
    directContact: string;
    pricingCashApp: string;
    coverageTitle: string;
    privacyPolicy: string;
    termsOfService: string;
    sanitation: string;
    allRightsReserved: string;
  };
  booking: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    selectServiceTitle: string;
    serviceDesc: string;
    locationTitle: string;
    locationDesc: string;
    inStudio: string;
    houseCall: string;
    inStudioDesc: string;
    houseCallDesc: string;
    streetAddressLabel: string;
    neighborhoodLabel: string;
    depositNotice: string;
    dateTimeTitle: string;
    dateTimeDesc: string;
    detailsTitle: string;
    detailsDesc: string;
    fullName: string;
    phone: string;
    email: string;
    notes: string;
    cashAppHandle: string;
    depositAgreement: string;
    back: string;
    continue: string;
    confirmBooking: string;
    confirmedTitle: string;
    confirmedDesc: string;
    reference: string;
    saveCalendar: string;
    callText: string;
    doneClose: string;
  };
  aiChat: {
    floatingButton: string;
    windowTitle: string;
    status: string;
    welcomeMsg: string;
    inputPlaceholder: string;
    send: string;
    quickPromptsTitle: string;
    promptPricing: string;
    promptHouseCall: string;
    promptDeposit: string;
    promptSpecialty: string;
    clearChat: string;
    bookNowAction: string;
  };
  heritage: {
    kicker: string;
    title: string;
    desc: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      services: 'Services & Rates',
      houseCalls: 'Chicago House Calls',
      map: 'Chicago Map',
      gallery: 'Styles & Gallery',
      faq: 'FAQ',
      myBookings: 'My Bookings',
      bookNow: 'Book Appointment',
    },
    hero: {
      specialty: 'European & Straight Hair Specialist',
      headline: "Precision Men's Grooming in Chicago.",
      subheadline:
        'Dedicated mastery in straight, wavy, and European hair textures. Clean scissor-over-comb tapers, crisp fades, and sharp beard sculpting. Visit the chair or schedule a convenient VIP house call anywhere in Chicago city.',
      haircut: 'Haircut',
      beardTrim: 'Beard & Razor Shave',
      houseCall: 'House Call',
      shears: 'Precision shears',
      razor: 'Trim & razor shave',
      chicagoOnly: 'Chicago city only',
      bookCta: 'Book Your Appointment',
      callCta: 'Call or Text',
      sanitized: 'Sanitized tools & premium equipment',
      cityLimits: 'Chicago City limits only for mobile visits',
      cashAppNotice: 'Cash App deposit: $Muahz26',
      barberTitle: 'Master Barber Matt',
      barberSpecialty: 'Specialist in Straight & European Hair Textures',
      availableDays: 'Available Mon–Sun',
    },
    services: {
      kicker: 'Craftsmanship & Fair Rates',
      title: 'Tailored Men’s Grooming Services',
      subtitle:
        'Transparent pricing with zero hidden fees. Dedicated precision shear work, custom fades, and razor lineups designed for straight, wavy, and European hair textures.',
      selectBook: 'Select & Book',
      minutes: 'minutes',
      haircutName: 'Precision Men’s Haircut',
      haircutDesc:
        'Specializing in European, straight, and wavy hair textures. Precision scissor-over-comb, custom taper or skin fade, and styling.',
      beardName: 'Beard Trimming & Razor Shave',
      beardDesc:
        'Detailed beard trimming, straight razor shave line-up, mustache detailing, clean cheek & neck lines with hot towel and conditioning.',
      comboName: 'The Full Service (Haircut + Beard Trimming)',
      comboDesc:
        'Complete grooming package ($40). Precision scissor haircut ($25), personalized fade, hot towel straight razor shave, and full beard trimming ($15).',
      photoScissorTitle: 'Straight & European Hair Architecture',
      photoScissorDesc:
        "Custom cut calibrated to your hair's natural growth pattern, swirl, and density.",
      photoBeardTitle: 'Beard Trimming & Razor Detailing',
      photoBeardDesc:
        'Sharp straight razor lineup, mustache detailing, and soothing tonic for a sharp look.',
    },
    houseCalls: {
      kicker: 'VIP Mobile Barber Experience',
      title: 'Barber Comes to Your Location in Chicago City',
      desc:
        "Don't have time to travel across the city or fight traffic? Get a luxury haircut in the comfort of your downtown apartment, high-rise, or home. Matt arrives fully equipped with a professional portable barber station and leaves your place immaculate.",
      travelFeeTitle: 'Chicago City Travel Fee',
      travelFeeDesc: 'travel addition',
      chicagoOnlyBadge: 'Strictly inside Chicago city limits',
      depositRequiredTitle: 'Instant Security Deposit Required',
      depositRequiredDesc:
        'Because dedicated travel time is allocated on the schedule, house calls require an instant $25 deposit via Cash App ($Muahz26) to lock in your appointment.',
      copyTag: 'Copy $Muahz26',
      copied: 'Copied Tag!',
      openCashApp: 'Open Cash App',
      gearBadge: 'Hospital-Grade Sanitation Kit',
      chairReq: 'You just provide a chair & standard power outlet',
      bookHouseCallBtn: 'Book Chicago House Call (+$25)',
    },
    map: {
      kicker: 'Territory & Coverage',
      title: 'Chicago Service Area & Location Map',
      desc:
        'Interactive map of Chicago neighborhoods served for in-studio chair appointments and mobile house calls ($25 travel fee).',
      coverageTitle: 'Chicago City Boundaries',
      coverageDesc:
        'Covering the entire Chicago metropolitan boundary: Loop, West Loop, River North, Lincoln Park, Lakeview, Gold Coast, Wicker Park, Logan Square, and South Loop.',
      selectNeighborhood: 'Select a Neighborhood to Inspect:',
      travelResponse: 'Travel ETA',
      viewInGoogleMaps: 'Open in Google Maps',
      serviceRadius: 'Chicago City Limits Mobile Range',
    },
    gallery: {
      kicker: 'Portfolio & Specialties',
      title: 'Signature Cuts & Hair Architecture',
      desc:
        'Specialized mastery in straight, wavy, and European hair textures. Every angle cut with intention to complement natural growth and skull shape.',
      all: 'All Work',
      scissor: 'Scissor Cuts',
      fades: 'Tapers & Fades',
      beards: 'Beard Lineups',
      bookStyle: 'Book This Style',
    },
    reviews: {
      kicker: 'Client Experiences',
      title: 'What Chicago Men Say',
      desc:
        'Real feedback from clients across Lincoln Park, West Loop, and River North who value craftsmanship, reliability, and precision scissor technique.',
    },
    faq: {
      kicker: 'Got Questions?',
      title: 'Frequently Asked Questions',
      desc: 'Everything you need to know about cuts, Chicago house calls, and booking deposits.',
    },
    footer: {
      readyTitle: 'Book Your Chicago Barber Session Today',
      bookOnline: 'Book Appointment Online',
      callMatt: 'Call Matt',
      directContact: 'Direct Contact',
      pricingCashApp: 'Pricing & Cash App',
      coverageTitle: 'Chicago Barber Coverage',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      sanitation: 'Sanitation Standards',
      allRightsReserved: 'All rights reserved.',
    },
    booking: {
      title: 'Book Barber Appointment',
      step1: '1. Service',
      step2: '2. Location',
      step3: '3. Time',
      step4: '4. Details',
      selectServiceTitle: 'Select Your Service',
      serviceDesc: 'Specialized in straight, wavy, and European hair textures.',
      locationTitle: 'Select Service Location',
      locationDesc: "Come to Matt's chair or request a mobile house call in Chicago city.",
      inStudio: 'In-Chair / Studio',
      houseCall: 'Chicago City House Call',
      inStudioDesc: 'Chicago location ($0 travel fee)',
      houseCallDesc: 'Matt comes to your Chicago address (+$20 travel fee)',
      streetAddressLabel: 'Street Address (Apartment / Floor) *',
      neighborhoodLabel: 'Chicago Neighborhood / Area',
      depositNotice: 'Security Deposit Notice: $20 deposit required via Cash App $Muahz26.',
      dateTimeTitle: 'Pick a Date & Time',
      dateTimeDesc: 'Current schedule availability.',
      detailsTitle: 'Client Details & Confirmation',
      detailsDesc: 'Matt will contact you directly to confirm.',
      fullName: 'Your Full Name *',
      phone: 'Phone Number *',
      email: 'Email Address *',
      notes: 'Hair Texture & Style Requests (Optional)',
      cashAppHandle: 'Your Cash App $Cashtag (Optional)',
      depositAgreement: 'I understand that a $25 deposit via Cash App to $Muahz26 confirms this house call.',
      back: 'Back',
      continue: 'Continue',
      confirmBooking: 'Confirm Booking',
      confirmedTitle: "You're Scheduled with Matt!",
      confirmedDesc: 'Your appointment is locked in the schedule.',
      reference: 'Reference ID',
      saveCalendar: 'Save to Calendar (.ics)',
      callText: 'Call/Text Matt',
      doneClose: 'Done and Close',
    },
    aiChat: {
      floatingButton: 'Ask The Goat! 🐐',
      windowTitle: 'Ask The Goat! 🐐',
      status: 'Online · Multilingual',
      welcomeMsg: 'Hello! I can answer any questions about our $25 haircuts, $15 beard trimming & razor shave, $25 Chicago house calls, and Cash App ($Muahz26) deposit policy.',
      inputPlaceholder: 'Ask about haircuts, house calls, Chicago locations...',
      send: 'Send',
      quickPromptsTitle: 'Frequently Asked:',
      promptPricing: 'How much for a haircut and beard?',
      promptHouseCall: 'How do Chicago house calls work?',
      promptDeposit: 'What is the Cash App deposit policy?',
      promptSpecialty: 'What hair types do you specialize in?',
      clearChat: 'Clear',
      bookNowAction: 'Book Appointment Online',
    },
    heritage: {
      kicker: 'European Barbering Tradition',
      title: 'Precision Craftsmanship Tailored to European Men',
      desc: 'European straight and wavy hair requires delicate scissor geometry rather than harsh clipper cuts. Matt utilizes scissor-over-comb techniques developed through European barbering traditions.',
      point1Title: 'Shear-Over-Comb Mastery',
      point1Desc: 'Seamless transitions that adapt naturally to growth whorls and crown patterns.',
      point2Title: 'Straight Razor Lineup & Hot Towel',
      point2Desc: 'Surgical cheek and neckline clarity with soothing botanical oils.',
      point3Title: 'Custom Styling Consultation',
      point3Desc: 'Bespoke grooming recommendations suited to Chicago weather and your personal daily routine.',
    },
  },

  lt: {
    nav: {
      services: 'Paslaugos ir Kainos',
      houseCalls: 'Vizitai į Namus Čikagoje',
      map: 'Čikagos Žemėlapis',
      gallery: 'Stiliai ir Galerija',
      faq: 'DUK',
      myBookings: 'Mano Rezervacijos',
      bookNow: 'Rezervuoti Vizitą',
    },
    hero: {
      specialty: 'Europietiškų ir Tiesių Plaukų Meistras',
      headline: 'Aukščiausios Klasės Vyrų Kirpimai Čikagoje.',
      subheadline:
        'Išskirtinė patirtis kerpant tiesius, banguotus ir europietiškus plaukus žirklėmis. Tikslūs perėjimai (fade), klasikinis stilius ir preciziškas barzdos formavimas. Atvykite į vietą arba užsisakykite patogų vizitą į namus ar biurą Čikagos mieste.',
      haircut: 'Kirpimas',
      beardTrim: 'Barzda',
      houseCall: 'Į Namus',
      shears: 'Tikslus žirklių darbas',
      razor: 'Skustuvo linijos',
      chicagoOnly: 'Tik Čikagos mieste',
      bookCta: 'Rezervuoti Vizitą',
      callCta: 'Skambinti arba SMS',
      sanitized: 'Dezinfekuoti įrankiai ir profesionali įranga',
      cityLimits: 'Vizitai į namus tik Čikagos miesto ribose',
      cashAppNotice: 'Cash App užstatas: $Muahz26',
      barberTitle: 'Kirpėjas Matt (Mantas)',
      barberSpecialty: 'Europietiškų plaukų tekstūrų specialistas',
      availableDays: 'Dirba I–VII',
    },
    services: {
      kicker: 'Meistriškumas ir Sąžiningos Kainos',
      title: 'Vyriško Kirpimo ir Priežiūros Paslaugos',
      subtitle:
        'Aiški kainodara be paslėptų mokesčių. Preciziškas žirklių valdymas, individualūs perėjimai ir barzdos linijos tiesiems bei banguotiems plaukams.',
      selectBook: 'Pasirinkti ir Užsakyti',
      minutes: 'min.',
      haircutName: 'Klasikinis Vyrų Kirpimas',
      haircutDesc:
        'Specializacija europietiškiems ir tiesiems plaukams. Žirklės virš šukų, individualus fade perėjimas ir modeliavimas.',
      beardName: 'Barzdos Formavimas ir Skustuvas',
      beardDesc:
        'Kruopštus barzdos trumpinimas, ūsų modeliavimas, aštrios skruostų ir kaklo linijos skustuvu bei aliejus.',
      comboName: 'Pilnas Komplektas (Plaukai + Barzda)',
      comboDesc:
        'Visapusiškas įvaizdžio atnaujinimas: kirpimas žirklėmis, fade perėjimas, karštas rankšluostis ir pilnas barzdos sutvarkymas.',
      photoScissorTitle: 'Europietiškų Plaukų Geometrija',
      photoScissorDesc:
        'Kirpimas pritaikytas natūraliam plaukų augimo krypčiai, verpetams ir tankumui.',
      photoBeardTitle: 'Barzdos Kontūravimas Skustuvu',
      photoBeardDesc:
        'Griežtos linijos, kruopštus ūsų apipavidalinimas ir raminantis tonikas.',
    },
    houseCalls: {
      kicker: 'VIP Mobilus Kirpėjas Į Namus',
      title: 'Meistras Atvyksta į Jūsų Vietą Čikagos Mieste',
      desc:
        'Neturite laiko stovėti spūstyse? Gaukite aukščiausios kokybės kirpimą savo bute, name ar biure. Mantas atvyksta su pilna profesionalia mobiliąja kirpyklos stotele ir palieka erdvę švarią.',
      travelFeeTitle: 'Atvykimo Mokestis Čikagoje',
      travelFeeDesc: 'papildomai už atvykimą',
      chicagoOnlyBadge: 'Tik Čikagos miesto ribose',
      depositRequiredTitle: 'Būtinas Greitas Užstatas',
      depositRequiredDesc:
        'Kadangi grafike rezervuojamas specialus laikas kelionei Čikagos eisme, vizitams į namus reikalingas $25 užstatas per Cash App ($Muahz26).',
      copyTag: 'Kopijuoti $Muahz26',
      copied: 'Nukopijuota!',
      openCashApp: 'Atidaryti Cash App',
      gearBadge: 'Medicininio Lygio Sanitarija',
      chairReq: 'Jums tereikia kėdės ir elektros lizdo',
      bookHouseCallBtn: 'Užsakyti Vizitą į Namus (+$25)',
    },
    map: {
      kicker: 'Aptarnavimo Teritorija',
      title: 'Čikagos Paslaugų Žemėlapis',
      desc:
        'Interaktyvus Čikagos rajonų žemėlapis: kėdės priėmimas ir mobilūs vizitai į namus ($25 atvykimo mokestis).',
      coverageTitle: 'Čikagos Miesto Ribos',
      coverageDesc:
        'Aptarnaujami visi pagrindiniai Čikagos rajonai: Loop, West Loop, River North, Lincoln Park, Lakeview, Gold Coast, Wicker Park, Logan Square, South Loop.',
      selectNeighborhood: 'Pasirinkite rajoną peržiūrai:',
      travelResponse: 'Atvykimo trukmė',
      viewInGoogleMaps: 'Atidaryti Google Žemėlapiuose',
      serviceRadius: 'Čikagos Miesto Mobili Zona',
    },
    gallery: {
      kicker: 'Darbų Galerija',
      title: 'Mūsų Darbai ir Kirpimo Technikos',
      desc:
        'Specializacija europietiškiems ir tiesiems plaukams. Kiekvienas kampas kerpamas apgalvotai pagal kaukolės formą.',
      all: 'Visi Darbai',
      scissor: 'Žirklės',
      fades: 'Fade Perėjimai',
      beards: 'Barzdos',
      bookStyle: 'Užsakyti Šį Stilių',
    },
    reviews: {
      kicker: 'Klientų Atsiliepimai',
      title: 'Ką Sako Čikagos Vyrai',
      desc:
        'Tikri atsiliepimai iš Lincoln Park, West Loop ir River North klientų, kurie vertina meistriškumą ir patikimumą.',
    },
    faq: {
      kicker: 'Klausimai ir Atsakymai',
      title: 'Dažniausiai Užduodami Klausimai',
      desc: 'Viskas apie kirpimus, vizitus į namus Čikagoje ir užstatą per Cash App.',
    },
    footer: {
      readyTitle: 'Užsisakykite Kirpėjo Vizitą Čikagoje Šiandien',
      bookOnline: 'Rezervuoti Internetu',
      callMatt: 'Skambinti Mantui',
      directContact: 'Tiesioginis Kontaktas',
      pricingCashApp: 'Kainos ir Cash App',
      coverageTitle: 'Čikagos Aptarnavimo Zona',
      privacyPolicy: 'Privatumo Politika',
      termsOfService: 'Paslaugų Sąlygos',
      sanitation: 'Higienos Standartai',
      allRightsReserved: 'Visos teisės saugomos.',
    },
    booking: {
      title: 'Rezervuoti Kirpėjo Vizitą',
      step1: '1. Paslauga',
      step2: '2. Vieta',
      step3: '3. Laikas',
      step4: '4. Duomenys',
      selectServiceTitle: 'Pasirinkite Paslaugą',
      serviceDesc: 'Specializacija tiesiems, banguotiems ir europietiškiems plaukams.',
      locationTitle: 'Pasirinkite Paslaugos Vietą',
      locationDesc: 'Atvykite pas meistrą arba užsisakykite vizitą į namus Čikagoje.',
      inStudio: 'Kirpykloje / Kėdėje',
      houseCall: 'Vizitas į Namus Čikagoje',
      inStudioDesc: 'Čikagos vieta ($0 atvykimo mokestis)',
      houseCallDesc: 'Mantas atvyksta jūsų adresu Čikagoje (+$20 mokestis)',
      streetAddressLabel: 'Gatvės adresas (butas / aukštas) *',
      neighborhoodLabel: 'Čikagos rajonas',
      depositNotice: 'Užstato informacija: reikalingas $20 užstatas per Cash App $Muahz26.',
      dateTimeTitle: 'Pasirinkite Datą ir Laiką',
      dateTimeDesc: 'Artimiausias laisvas grafikas.',
      detailsTitle: 'Kliento Duomenys ir Patvirtinimas',
      detailsDesc: 'Mantas susisieks su jumis tiesiogiai patvirtinimui.',
      fullName: 'Vardas ir Pavardė *',
      phone: 'Telefono numeris *',
      email: 'El. pašto adresas *',
      notes: 'Plaukų tipas / pageidavimai (neprivaloma)',
      cashAppHandle: 'Jūsų Cash App vardas (neprivaloma)',
      depositAgreement: 'Suprantu, kad $25 užstatas per Cash App $Muahz26 patvirtina šį atvykimą į namus.',
      back: 'Atgal',
      continue: 'Tęsti',
      confirmBooking: 'Patvirtinti Rezervaciją',
      confirmedTitle: 'Vizitas Sėkmingai Užregistruotas!',
      confirmedDesc: 'Jūsų laikas įrašytas į meistro grafiką.',
      reference: 'Rezervacijos Nr.',
      saveCalendar: 'Išsaugoti į Kalendorių (.ics)',
      callText: 'Skambinti / SMS Mantui',
      doneClose: 'Uždaryti',
    },
    aiChat: {
      floatingButton: 'Ask The Goat! 🐐',
      windowTitle: 'Ask The Goat! 🐐',
      status: 'Prisijungęs · Kalba 5 kalbomis',
      welcomeMsg: 'Sveiki! Galiu atsakyti į visus klausimus apie $25 kirpimus, $15 barzdos formavimą ir skutimą skustuvu, $25 atvykimą į namus Čikagoje ir Cash App ($Muahz26) užstatą.',
      inputPlaceholder: 'Klauskite apie kainas, atvykimą į namus, laikus...',
      send: 'Siųsti',
      quickPromptsTitle: 'Populiarūs klausimai:',
      promptPricing: 'Kiek kainuoja kirpimas ir barzda?',
      promptHouseCall: 'Kaip vyksta vizitas į namus Čikagoje?',
      promptDeposit: 'Kokia yra Cash App užstato tvarka?',
      promptSpecialty: 'Kokius plaukų tipus kerpate?',
      clearChat: 'Išvalyti',
      bookNowAction: 'Rezervuoti Vizitą',
    },
    heritage: {
      kicker: 'Europos Kirpimo Tradicijos',
      title: 'Preciziškas Meistriškumas Europietiško Stiliaus Vyrams',
      desc: 'Tiesūs ir banguoti europietiški plaukai reikalauja subtilios žirklių geometrijos, o ne skuboto mašinėlės nuskutimo. Mantas taiko laiko patikrintą europietišką žirklių virš šukų metodiką.',
      point1Title: 'Žirklių Virš Šukų Meistriškumas',
      point1Desc: 'Natūralūs plaukų perėjimai, prisitaikantys prie viršugalvio verpetų ir plauko krypties.',
      point2Title: 'Skustuvo Linijos ir Karštas Rankšluostis',
      point2Desc: 'Chirurgiškai tikslios skruostų bei kaklo linijos su raminančiais eteriniais aliejais.',
      point3Title: 'Individuali Įvaizdžio Konsultacija',
      point3Desc: 'Rekomendacijos, idealiai tinkančios Čikagos orams ir kasdienei vyro priežiūrai.',
    },
  },

  pl: {
    nav: {
      services: 'Usługi i Ceny',
      houseCalls: 'Wizyty Domowe w Chicago',
      map: 'Mapa Chicago',
      gallery: 'Style i Galeria',
      faq: 'FAQ',
      myBookings: 'Moje Rezerwacje',
      bookNow: 'Zarezerwuj Wizytę',
    },
    hero: {
      specialty: 'Specjalista od Włosów Europejskich i Prostych',
      headline: 'Precyzyjny Fryzjer Męski w Chicago.',
      subheadline:
        'Mistrzowskie cięcia nożyczkami dla włosów prostych, falowanych i europejskich. Perfekcyjne cieniowanie (fade), klasyczny styl i precyzyjne modelowanie brody. Odwiedź studio lub zamów wizytę domową w dowolnym miejscu w Chicago.',
      haircut: 'Strzyżenie',
      beardTrim: 'Broda',
      houseCall: 'Wizyta Domowa',
      shears: 'Cięcie nożyczkami',
      razor: 'Brzytwa i linie',
      chicagoOnly: 'Tylko miasto Chicago',
      bookCta: 'Zarezerwuj Wizytę',
      callCta: 'Zadzwoń lub SMS',
      sanitized: 'Zdezynfekowane narzędzia i sprzęt premium',
      cityLimits: 'Wizyty domowe tylko w granicach Chicago',
      cashAppNotice: 'Zaliczka Cash App: $Muahz26',
      barberTitle: 'Mistrz Fryzjerstwa Matt',
      barberSpecialty: 'Specjalista struktur europejskich i prostych',
      availableDays: 'Otwarte Pn–Nd',
    },
    services: {
      kicker: 'Rzemiosło i Uczciwe Ceny',
      title: 'Męskie Usługi Fryzjerskie',
      subtitle:
        'Przejrzysty cennik bez ukrytych opłat. Praca nożyczkami na grzebieniu, indywidualny fade i golenie brzytwą dopasowane do włosów europejskich.',
      selectBook: 'Wybierz i Zarezerwuj',
      minutes: 'minut',
      haircutName: 'Precyzyjne Strzyżenie Męskie',
      haircutDesc:
        'Specjalizacja we włosach europejskich i prostych. Nożyczki na grzebieniu, indywidualny taper lub skin fade oraz stylizacja.',
      beardName: 'Trymowanie i Kształtowanie Brody',
      beardDesc:
        'Dokładne konturowanie brody, wąsy, ostre linie na policzkach i szyi brzytwą z olejkiem.',
      comboName: 'Pełny Pakiet (Strzyżenie + Broda)',
      comboDesc:
        'Kompletna metamorfoza: cięcie nożyczkami, fade, gorący ręcznik, golenie szyi brzytwą i pełne ułożenie brody.',
      photoScissorTitle: 'Architektura Włosów Europejskich',
      photoScissorDesc:
        'Cięcie dopasowane do naturalnego kierunku wzrostu, wicherków i gęstości włosów.',
      photoBeardTitle: 'Modelowanie Brody i Linia Szyi',
      photoBeardDesc:
        'Ostre linie brzytwą, dopracowane wąsy i kojący tonik po goleniu.',
    },
    houseCalls: {
      kicker: 'Mobilny Fryzjer VIP z Dojazdem',
      title: 'Fryzjer Przyjeżdża Pod Twój Adres w Chicago',
      desc:
        'Nie trać czasu w korkach. Zafunduj sobie luksusowe strzyżenie w zaciszu swojego apartamentu lub domu w Chicago. Matt przywozi kompletne mobilne stanowisko fryzjerskie i pozostawia miejsce idealnie czyste.',
      travelFeeTitle: 'Dopłata za Dojazd w Chicago',
      travelFeeDesc: 'dodatkowo za dojazd',
      chicagoOnlyBadge: 'Ściśle w granicach miasta Chicago',
      depositRequiredTitle: 'Wymagana Natychmiastowa Zaliczka',
      depositRequiredDesc:
        'Ze względu na rezerwację czasu na dojazd w Chicago, wizyty domowe wymagają natychmiastowej zaliczki $25 przez Cash App ($Muahz26).',
      copyTag: 'Kopiuj $Muahz26',
      copied: 'Skopiowano!',
      openCashApp: 'Otwórz Cash App',
      gearBadge: 'Sanityzacja Klasy Szpitalnej',
      chairReq: 'Potrzebne tylko krzesło i gniazdko elektryczne',
      bookHouseCallBtn: 'Zamów Wizytę Domową (+$25)',
    },
    map: {
      kicker: 'Teren Obsługi',
      title: 'Mapa Dzielnic i Usług w Chicago',
      desc:
        'Interaktywna mapa dzielnic Chicago: wizyty stacjonarne oraz mobilne z dojazdem pod adres ($25 opłata za dojazd).',
      coverageTitle: 'Granice Miasta Chicago',
      coverageDesc:
        'Obsługujemy: Loop, West Loop, River North, Lincoln Park, Lakeview, Gold Coast, Wicker Park, Logan Square, South Loop.',
      selectNeighborhood: 'Wybierz dzielnicę, aby sprawdzić:',
      travelResponse: 'Czas dojazdu',
      viewInGoogleMaps: 'Otwórz w Mapach Google',
      serviceRadius: 'Zasięg Mobilny w Chicago',
    },
    gallery: {
      kicker: 'Portfolio i Specjalizacje',
      title: 'Autorskie Cięcia i Precyzja',
      desc:
        'Specjalizacja we włosach prostych i europejskich. Każdy kąt cięty z myślą o kształcie głowy i łatwym układaniu.',
      all: 'Wszystkie',
      scissor: 'Nożyczki',
      fades: 'Cieniowanie Fade',
      beards: 'Brody',
      bookStyle: 'Zarezerwuj Ten Styl',
    },
    reviews: {
      kicker: 'Opinie Klientów',
      title: 'Co Mówią Klienci z Chicago',
      desc:
        'Autentyczne opinie mężczyzn z Lincoln Park, West Loop i River North ceniących jakość, punktualność i cięcie nożyczkami.',
    },
    faq: {
      kicker: 'Masz Pytania?',
      title: 'Często Zadawane Pytania',
      desc: 'Wszystko o strzyżeniach, dojazdach w Chicago i zaliczce przez Cash App.',
    },
    footer: {
      readyTitle: 'Zarezerwuj Sesję Fryzjerską w Chicago Już Dziś',
      bookOnline: 'Zarezerwuj Online',
      callMatt: 'Zadzwoń do Matta',
      directContact: 'Kontakt Bezpośredni',
      pricingCashApp: 'Ceny i Cash App',
      coverageTitle: 'Zasięg Fryzjera w Chicago',
      privacyPolicy: 'Polityka Prywatności',
      termsOfService: 'Regulamin Usług',
      sanitation: 'Standardy Higieniczne',
      allRightsReserved: 'Wszelkie prawa zastrzeżone.',
    },
    booking: {
      title: 'Rezerwacja Wizyty u Fryzjera',
      step1: '1. Usługa',
      step2: '2. Miejsce',
      step3: '3. Data',
      step4: '4. Dane',
      selectServiceTitle: 'Wybierz Usługę',
      serviceDesc: 'Specjalizacja we włosach prostych, falowanych i europejskich.',
      locationTitle: 'Wybierz Miejsce Usługi',
      locationDesc: 'Przyjdź na fotel lub zamów wizytę z dojazdem w Chicago.',
      inStudio: 'W Studiu / Fotel',
      houseCall: 'Wizyta Domowa w Chicago',
      inStudioDesc: 'Lokalizacja w Chicago ($0 za dojazd)',
      houseCallDesc: 'Matt przyjeżdża pod Twój adres w Chicago (+$20 za dojazd)',
      streetAddressLabel: 'Dokładny adres w Chicago (mieszkanie / piętro) *',
      neighborhoodLabel: 'Dzielnica Chicago',
      depositNotice: 'Zaliczka: wymagany depozyt $20 przez Cash App $Muahz26.',
      dateTimeTitle: 'Wybierz Datę i Godzinę',
      dateTimeDesc: 'Aktualnie dostępne terminy.',
      detailsTitle: 'Dane Klienta i Potwierdzenie',
      detailsDesc: 'Matt skontaktuje się z Tobą bezpośrednio.',
      fullName: 'Imię i Nazwisko *',
      phone: 'Numer Telefonu *',
      email: 'Adres E-mail *',
      notes: 'Typ włosów / uwagi do cięcia (opcjonalnie)',
      cashAppHandle: 'Twój tag Cash App (opcjonalnie)',
      depositAgreement: 'Rozumiem, że zaliczka $25 przez Cash App na $Muahz26 potwierdza tę wizytę domową.',
      back: 'Wstecz',
      continue: 'Dalej',
      confirmBooking: 'Potwierdź Rezerwację',
      confirmedTitle: 'Jesteś Zapisany u Matta!',
      confirmedDesc: 'Twoja wizyta została dodana do grafiku.',
      reference: 'Numer Rezerwacji',
      saveCalendar: 'Zapisz w Kalendarzu (.ics)',
      callText: 'Zadzwoń/SMS do Matta',
      doneClose: 'Gotowe i Zamknij',
    },
    aiChat: {
      floatingButton: 'Ask The Goat! 🐐',
      windowTitle: 'Ask The Goat! 🐐',
      status: 'Online · Wielojęzyczny',
      welcomeMsg: 'Cześć! Odpowiem na wszystkie pytania dotyczące strzyżeń ($25), trymowania brody ($15), dojazdów w Chicago ($25) oraz zaliczki Cash App ($Muahz26).',
      inputPlaceholder: 'Zapytaj o ceny, dojazd, wolne terminy...',
      send: 'Wyślij',
      quickPromptsTitle: 'Częste pytania:',
      promptPricing: 'Ile kosztuje strzyżenie i broda?',
      promptHouseCall: 'Jak działa wizyta domowa w Chicago?',
      promptDeposit: 'Jaka jest zasada zaliczki Cash App?',
      promptSpecialty: 'W jakich włosach się specjalizujesz?',
      clearChat: 'Wyczyść',
      bookNowAction: 'Zarezerwuj Wizytę Online',
    },
    heritage: {
      kicker: 'Tradycja Europejskiego Fryzjerstwa',
      title: 'Precyzyjne Rzemiosło dla Europejskich Mężczyzn',
      desc: 'Europejskie proste i falowane włosy wymagają dokładnej geometrii nożyczek, a nie tylko szybkiego strzyżenia maszynką. Matt stosuje technikę nożyczek na grzebieniu dopracowaną w tradycji europejskiej.',
      point1Title: 'Mistrzostwo Nożyczek na Grzebieniu',
      point1Desc: 'Płynne przejścia idealnie dopasowane do kształtu czaszki i naturalnego kierunku wzrostu włosa.',
      point2Title: 'Brzytwa i Gorący Ręcznik',
      point2Desc: 'Chirurgiczna dokładność linii zarostu z kojącymi olejkami i pielęgnacją.',
      point3Title: 'Indywidualna Konsultacja',
      point3Desc: 'Dopasowanie fryzury do stylu życia, klimatu Chicago i codziennej wygody.',
    },
  },

  ru: {
    nav: {
      services: 'Услуги и Цены',
      houseCalls: 'Выезд на Дом в Чикаго',
      map: 'Карта Чикаго',
      gallery: 'Стили и Фото',
      faq: 'Частые Вопросы',
      myBookings: 'Мои Записи',
      bookNow: 'Записаться Онлайн',
    },
    hero: {
      specialty: 'Специалист по Европейским и Прямым Волосам',
      headline: 'Прецизионный Мужской Барбер в Чикаго.',
      subheadline:
        'Мастерская стрижка ножницами для прямых, волнистых и европейских волос. Чистые фейды (fade), классические формы и оформление бороды опасной бритвой. В кресле или с выездом на дом/в офис по всему Чикаго.',
      haircut: 'Стрижка',
      beardTrim: 'Борода',
      houseCall: 'Выезд',
      shears: 'Работа ножницами',
      razor: 'Опасная бритва',
      chicagoOnly: 'Только город Чикаго',
      bookCta: 'Записаться на Стрижку',
      callCta: 'Позвонить или SMS',
      sanitized: 'Стерилизованный инструмент и премиум косметика',
      cityLimits: 'Выезд строго в черте города Чикаго',
      cashAppNotice: 'Депозит Cash App: $Muahz26',
      barberTitle: 'Мастер-барбер Мэтт',
      barberSpecialty: 'Специалист по славянским и европейским волосам',
      availableDays: 'Работаем Пн–Вс',
    },
    services: {
      kicker: 'Мастерство и Честные Цены',
      title: 'Услуги Мужского Груминга',
      subtitle:
        'Прозрачные цены без скрытых платежей. Работа ножницами над расческой, индивидуальный переход и четкие линии бороды.',
      selectBook: 'Выбрать и Записаться',
      minutes: 'минут',
      haircutName: 'Мужская Стрижка Ножницами и Машинкой',
      haircutDesc:
        'Специализация на европейских и прямых волосах. Текстурирование ножницами, индивидуальный фейд и укладка.',
      beardName: 'Моделирование и Стрижка Бороды',
      beardDesc:
        'Четкие контуры щек и шеи опасной бритвой, стрижка усов и смягчающий уход с маслом.',
      comboName: 'Комплекс (Стрижка + Борода)',
      comboDesc:
        'Полное преображение: стрижка волос, фейд, распаривание, бритье шеи бритвой и идеальная форма бороды.',
      photoScissorTitle: 'Архитектура Европейских Волос',
      photoScissorDesc:
        'Стрижка с учетом естественного направления роста, вихров и плотности прямых волос.',
      photoBeardTitle: 'Контурирование Бороды Бритвой',
      photoBeardDesc:
        'Идеально ровные линии, проработка усов и освежающий успокаивающий лосьон.',
    },
    houseCalls: {
      kicker: 'VIP Мобильный Барбер',
      title: 'Барбер Приедет к Вам Домой в Чикаго',
      desc:
        'Не хотите тратить время в пробках? Получите сервис высшего уровня у себя в апартаментах или дома. Мэтт привезет портативную станцию барбера, одноразовые воротнички и защитное покрытие для пола, оставив идеальную чистоту.',
      travelFeeTitle: 'Выезд по Чикаго',
      travelFeeDesc: 'дополнительно за выезд',
      chicagoOnlyBadge: 'Строго в границах города Чикаго',
      depositRequiredTitle: 'Обязательный Моментальный Депозит',
      depositRequiredDesc:
        'Так как в расписании бронируется время на дорогу в Чикаго, для выезда на дом требуется депозит $25 через Cash App ($Muahz26).',
      copyTag: 'Копировать $Muahz26',
      copied: 'Скопировано!',
      openCashApp: 'Открыть Cash App',
      gearBadge: 'Медицинская Стерилизация',
      chairReq: 'От вас требуется только стул и розетка',
      bookHouseCallBtn: 'Заказать Выезд на Дом (+$25)',
    },
    map: {
      kicker: 'Зона Обслуживания',
      title: 'Карта Районов Чикаго',
      desc:
        'Интерактивная карта районов Чикаго: запись в кресло барбера и мобильные выезды на дом ($25 за выезд).',
      coverageTitle: 'Границы Города Чикаго',
      coverageDesc:
        'Обслуживаем районы: Loop, West Loop, River North, Lincoln Park, Lakeview, Gold Coast, Wicker Park, Logan Square, South Loop.',
      selectNeighborhood: 'Выберите район для проверки:',
      travelResponse: 'Время в пути',
      viewInGoogleMaps: 'Открыть в Google Maps',
      serviceRadius: 'Зона Мобильного Выезда по Чикаго',
    },
    gallery: {
      kicker: 'Портфолио Работ',
      title: 'Фирменные Стрижки и Техника',
      desc:
        'Специализация на европейских и прямых волосах. Каждый срез выполняется с учетом геометрии черепа.',
      all: 'Все Работы',
      scissor: 'Ножницы',
      fades: 'Фейды и Тейперы',
      beards: 'Оформление Бороды',
      bookStyle: 'Выбрать Этот Стиль',
    },
    reviews: {
      kicker: 'Отзывы Клиентов',
      title: 'Что Говорят Мужчины в Чикаго',
      desc:
        'Реальные отзывы клиентов из Lincoln Park, West Loop и River North, ценящих мастерство ножниц и пунктуальность.',
    },
    faq: {
      kicker: 'Вопросы и Ответы',
      title: 'Часто Задаваемые Вопросы',
      desc: 'Все детали о стрижках, выезде на дом в Чикаго и депозите через Cash App.',
    },
    footer: {
      readyTitle: 'Запишитесь на Стрижку в Чикаго Сегодня',
      bookOnline: 'Записаться Онлайн',
      callMatt: 'Позвонить Мэтту',
      directContact: 'Прямые Контакты',
      pricingCashApp: 'Цены и Cash App',
      coverageTitle: 'Зона Обслуживания в Чикаго',
      privacyPolicy: 'Политика Конфиденциальности',
      termsOfService: 'Условия Обслуживания',
      sanitation: 'Стандарты Гигиены',
      allRightsReserved: 'Все права защищены.',
    },
    booking: {
      title: 'Запись к Барберу Онлайн',
      step1: '1. Услуга',
      step2: '2. Место',
      step3: '3. Время',
      step4: '4. Контакты',
      selectServiceTitle: 'Выберите Услугу',
      serviceDesc: 'Специализация на прямых, волнистых и европейских волосах.',
      locationTitle: 'Выберите Место Стрижки',
      locationDesc: 'Приехать в кресло барбера или заказать выезд на дом в Чикаго.',
      inStudio: 'В Салоне / В Кресле',
      houseCall: 'Выезд на Дом в Чикаго',
      inStudioDesc: 'Локация в Чикаго ($0 за выезд)',
      houseCallDesc: 'Мэтт приедет к вам по адресу в Чикаго (+$20 за выезд)',
      streetAddressLabel: 'Точный адрес в Чикаго (квартира / этаж) *',
      neighborhoodLabel: 'Район Чикаго',
      depositNotice: 'Внимание: для выезда требуется залог $20 через Cash App $Muahz26.',
      dateTimeTitle: 'Выберите Дату и Время',
      dateTimeDesc: 'Актуальный график свободных слотов.',
      detailsTitle: 'Контактные Данные',
      detailsDesc: 'Мэтт свяжется с вами напрямую для подтверждения.',
      fullName: 'Ваше Имя и Фамилия *',
      phone: 'Номер Телефона *',
      email: 'Email Адрес *',
      notes: 'Пожелания к стрижке / тип волос (опционально)',
      cashAppHandle: 'Ваш Cash App тег (опционально)',
      depositAgreement: 'Я понимаю, что перевод $25 через Cash App на $Muahz26 подтверждает выезд на дом.',
      back: 'Назад',
      continue: 'Далее',
      confirmBooking: 'Подтвердить Запись',
      confirmedTitle: 'Вы Успешно Записаны!',
      confirmedDesc: 'Время забронировано в расписании.',
      reference: 'Номер Брони',
      saveCalendar: 'Добавить в Календарь (.ics)',
      callText: 'Позвонить / SMS Мэтту',
      doneClose: 'Готово и Закрыть',
    },
    aiChat: {
      floatingButton: 'Ask The Goat! 🐐',
      windowTitle: 'Ask The Goat! 🐐',
      status: 'В сети · Поддержка 5 языков',
      welcomeMsg: 'Здравствуйте! Я отвечу на любые вопросы о стрижках ($25), оформлении бороды ($15), выезде на дом в Чикаго ($25) и депозите Cash App ($Muahz26).',
      inputPlaceholder: 'Спросите о ценах, выезде, свободных слотах...',
      send: 'Отправить',
      quickPromptsTitle: 'Частые вопросы:',
      promptPricing: 'Сколько стоит стрижка и борода?',
      promptHouseCall: 'Как работает выезд на дом в Чикаго?',
      promptDeposit: 'Как внести депозит через Cash App?',
      promptSpecialty: 'На каких типах волос вы специализируетесь?',
      clearChat: 'Очистить',
      bookNowAction: 'Записаться Онлайн',
    },
    heritage: {
      kicker: 'Традиции Европейского Барберинга',
      title: 'Прецизионное Мастерство для Европейских Мужчин',
      desc: 'Прямые и волнистые европейские волосы требуют безупречной геометрии ножниц, а не только машинки. Мэтт применяет технику «ножницы над расческой», обеспечивающую идеальную форму.',
      point1Title: 'Мастерство Ножниц над Расческой',
      point1Desc: 'Плавные градиенты и естественная укладка с учетом вихров и направления роста.',
      point2Title: 'Опасная Бритва и Горячее Полотенце',
      point2Desc: 'Идеальные контуры бороды и шеи с использованием натуральных масел.',
      point3Title: 'Персональная Консультация',
      point3Desc: 'Подбор стрижки, подходящей под ваш стиль, форму лица и климат Чикаго.',
    },
  },

  es: {
    nav: {
      services: 'Servicios y Precios',
      houseCalls: 'A Domicilio en Chicago',
      map: 'Mapa de Chicago',
      gallery: 'Estilos y Galería',
      faq: 'Preguntas',
      myBookings: 'Mis Citas',
      bookNow: 'Reservar Cita',
    },
    hero: {
      specialty: 'Especialista en Cabello Lacio y Europeo',
      headline: 'Barbería Masculina de Precisión en Chicago.',
      subheadline:
        'Maestría dedicada en cabello lacio, ondulado y texturas europeas. Cortes a tijera con peine, degradados impecables y perfilado de barba con navaja. En silla o a domicilio en la ciudad de Chicago.',
      haircut: 'Corte',
      beardTrim: 'Barba',
      houseCall: 'A Domicilio',
      shears: 'Tijeras de precisión',
      razor: 'Navaja y líneas',
      chicagoOnly: 'Solo ciudad de Chicago',
      bookCta: 'Reservar Cita Ahora',
      callCta: 'Llamar o Enviar SMS',
      sanitized: 'Herramientas esterilizadas y equipo profesional',
      cityLimits: 'Visitas a domicilio solo dentro de la ciudad de Chicago',
      cashAppNotice: 'Depósito Cash App: $Muahz26',
      barberTitle: 'Barbero Maestro Matt',
      barberSpecialty: 'Especialista en Texturas Europeas y Cabello Lacio',
      availableDays: 'Disponible Lun–Dom',
    },
    services: {
      kicker: 'Artesanía y Precios Transparentes',
      title: 'Servicios de Barbería Masculina',
      subtitle:
        'Precios justos sin cargos sorpresa. Corte a tijera, degradados personalizados y perfilado de barba para texturas lacias y onduladas.',
      selectBook: 'Seleccionar y Reservar',
      minutes: 'minutos',
      haircutName: 'Corte de Precisión para Caballero',
      haircutDesc:
        'Especializado en cabello europeo, lacio y ondulado. Tijera sobre peine, taper o degradado a la piel y peinado.',
      beardName: 'Arreglo y Esculpido de Barba con Navaja',
      beardDesc:
        'Diseño detallado de barba, bigote, líneas nítidas en mejillas y cuello con navaja y tónico relajante.',
      comboName: 'Servicio Completo (Corte + Barba)',
      comboDesc:
        'Paquete completo: corte a tijera, degradado, toalla caliente en cuello con navaja y perfilado total de barba.',
      photoScissorTitle: 'Arquitectura del Cabello Lacio y Europeo',
      photoScissorDesc:
        'Corte calibrado según el remolino, patrón de crecimiento y densidad natural de tu cabello.',
      photoBeardTitle: 'Esculpido de Barba y Cuello con Navaja',
      photoBeardDesc:
        'Líneas rectas a navaja, detalle en bigote y tónico calmante para un look impecable.',
    },
    houseCalls: {
      kicker: 'Servicio de Barbero VIP a Domicilio',
      title: 'El Barbero Va a Tu Ubicación en Chicago',
      desc:
        '¿No tienes tiempo de lidiar con el tráfico? Recibe un corte de lujo en la comodidad de tu apartamento o casa en Chicago. Matt lleva una estación móvil completa y deja el espacio impecable.',
      travelFeeTitle: 'Tarifa de Traslado en Chicago',
      travelFeeDesc: 'adicional por traslado',
      chicagoOnlyBadge: 'Estrictamente dentro de los límites de Chicago',
      depositRequiredTitle: 'Depósito de Seguridad Inmediato Requerido',
      depositRequiredDesc:
        'Debido al tiempo reservado de traslado en el tráfico de Chicago, las visitas a domicilio requieren un depósito inmediato de $25 vía Cash App ($Muahz26).',
      copyTag: 'Copiar $Muahz26',
      copied: '¡Copiado!',
      openCashApp: 'Abrir Cash App',
      gearBadge: 'Sanitización de Grado Médico',
      chairReq: 'Solo necesitas proporcionar una silla y una toma de corriente',
      bookHouseCallBtn: 'Reservar a Domicilio en Chicago (+$25)',
    },
    map: {
      kicker: 'Área de Cobertura',
      title: 'Mapa de Cobertura y Ubicaciones en Chicago',
      desc:
        'Mapa interactivo de vecindarios de Chicago: citas en silla y servicio móvil a domicilio ($25 de traslado).',
      coverageTitle: 'Límites de la Ciudad de Chicago',
      coverageDesc:
        'Cubriendo todo Chicago: Loop, West Loop, River North, Lincoln Park, Lakeview, Gold Coast, Wicker Park, Logan Square, South Loop.',
      selectNeighborhood: 'Selecciona un vecindario para ver:',
      travelResponse: 'Tiempo estimado',
      viewInGoogleMaps: 'Abrir en Google Maps',
      serviceRadius: 'Rango Móvil dentro de Chicago',
    },
    gallery: {
      kicker: 'Portafolio y Estilos',
      title: 'Cortes Distintivos y Estilo',
      desc:
        'Maestría especializada en cabello lacio, ondulado y texturas europeas. Cada ángulo cortado con precisión.',
      all: 'Todos los Estilos',
      scissor: 'Cortes a Tijera',
      fades: 'Degradados / Fades',
      beards: 'Barbas',
      bookStyle: 'Reservar Este Estilo',
    },
    reviews: {
      kicker: 'Testimonios de Clientes',
      title: 'Lo Que Dicen los Clientes en Chicago',
      desc:
        'Opiniones reales de clientes en Lincoln Park, West Loop y River North que aprecian la precisión con tijeras y la puntualidad.',
    },
    faq: {
      kicker: '¿Tienes Dudas?',
      title: 'Preguntas Frecuentes',
      desc: 'Todo lo que necesitas saber sobre los cortes, visitas a domicilio en Chicago y depósitos por Cash App.',
    },
    footer: {
      readyTitle: 'Reserva Tu Cita de Barbería en Chicago Hoy',
      bookOnline: 'Reservar en Línea',
      callMatt: 'Llamar a Matt',
      directContact: 'Contacto Directo',
      pricingCashApp: 'Precios y Cash App',
      coverageTitle: 'Cobertura en Chicago',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      sanitation: 'Normas Sanitarias',
      allRightsReserved: 'Todos los derechos reservados.',
    },
    booking: {
      title: 'Reservar Cita de Barbería',
      step1: '1. Servicio',
      step2: '2. Ubicación',
      step3: '3. Horario',
      step4: '4. Datos',
      selectServiceTitle: 'Selecciona Tu Servicio',
      serviceDesc: 'Especializado en cabello lacio, ondulado y europeo.',
      locationTitle: 'Selecciona la Ubicación',
      locationDesc: 'Ven a la silla o solicita servicio móvil en la ciudad de Chicago.',
      inStudio: 'En Estudio / Silla',
      houseCall: 'A Domicilio en Chicago',
      inStudioDesc: 'Ubicación en Chicago ($0 cargo de traslado)',
      houseCallDesc: 'Matt llega a tu dirección en Chicago (+$20 cargo de traslado)',
      streetAddressLabel: 'Dirección exacta en Chicago (Apto / Piso) *',
      neighborhoodLabel: 'Vecindario de Chicago',
      depositNotice: 'Aviso: se requiere depósito de $20 vía Cash App $Muahz26 para visitas a domicilio.',
      dateTimeTitle: 'Selecciona Fecha y Hora',
      dateTimeDesc: 'Disponibilidad actual de horarios.',
      detailsTitle: 'Datos del Cliente y Confirmación',
      detailsDesc: 'Matt te contactará directamente para confirmar.',
      fullName: 'Nombre Completo *',
      phone: 'Número de Teléfono *',
      email: 'Correo Electrónico *',
      notes: 'Tipo de cabello / preferencias de corte (Opcional)',
      cashAppHandle: 'Tu $Cashtag en Cash App (Opcional)',
      depositAgreement: 'Entiendo que el depósito de $25 vía Cash App a $Muahz26 confirma esta visita a domicilio.',
      back: 'Atrás',
      continue: 'Continuar',
      confirmBooking: 'Confirmar Reservación',
      confirmedTitle: '¡Estás Programado con Matt!',
      confirmedDesc: 'Tu horario está reservado en el calendario.',
      reference: 'Código de Referencia',
      saveCalendar: 'Guardar en Calendario (.ics)',
      callText: 'Llamar / SMS a Matt',
      doneClose: 'Listo y Cerrar',
    },
    aiChat: {
      floatingButton: 'Ask The Goat! 🐐',
      windowTitle: 'Ask The Goat! 🐐',
      status: 'En línea · Multilingüe',
      welcomeMsg: '¡Hola! Puedo resolver todas tus dudas sobre nuestros cortes de $25, arreglo de barba de $15, visitas a domicilio en Chicago por $25 y el depósito por Cash App ($Muahz26).',
      inputPlaceholder: 'Pregunta sobre cortes, citas a domicilio, zonas de Chicago...',
      send: 'Enviar',
      quickPromptsTitle: 'Preguntas habituales:',
      promptPricing: '¿Cuánto cuesta el corte y barba?',
      promptHouseCall: '¿Cómo funciona la cita a domicilio en Chicago?',
      promptDeposit: '¿Cuál es la política de depósito por Cash App?',
      promptSpecialty: '¿En qué tipos de cabello te especializas?',
      clearChat: 'Limpiar',
      bookNowAction: 'Reservar Cita en Línea',
    },
    heritage: {
      kicker: 'Tradición de Barbería Europea',
      title: 'Maestría de Precisión para Caballeros de Estilo Europeo',
      desc: 'El cabello lacio y ondulado europeo requiere geometría fina con tijeras en lugar de cortes rápidos a máquina. Matt utiliza técnicas tradicionales europeas de tijera sobre peine.',
      point1Title: 'Dominio de Tijera sobre Peine',
      point1Desc: 'Transiciones naturales que se adaptan al remolino y la caída natural de tu cabello.',
      point2Title: 'Navaja Recta y Toalla Caliente',
      point2Desc: 'Definición quirúrgica en mejillas y cuello con aceites botánicos calmantes.',
      point3Title: 'Asesoría de Imagen Personalizada',
      point3Desc: 'Recomendaciones profesionales ideales para el clima de Chicago y tu estilo de vida.',
    },
  },
};


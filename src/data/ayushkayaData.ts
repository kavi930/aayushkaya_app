export interface Therapy {
  id: string;
  name: string;
  sanskritName?: string;
  category: 'basti' | 'head' | 'swedana' | 'massage' | 'specialized';
  categoryLabel: string;
  shortDesc: string;
  description: string;
  suitableFor: string[];
  sessionDuration: string;
  isFeatured?: boolean;
  image?: string;
  tag?: string;
}

export interface BrandConfig {
  name: string;
  subtitle: string;
  practitioner: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  location: string;
  city: string;
  homeTherapyAvailable: boolean;
  homeTherapyNote: string;
  practitionerTitle: string;
  practitionerBio: string;
  qualificationsNote: string;
  images: {
    hero: string;
    shirodhara: string;
    potli: string;
    katiBasti: string;
    practitioner: string | null;
  };
}

export const BRAND: BrandConfig = {
  name: "AyushKaya",
  subtitle: "Panchkarma Therapies",
  practitioner: "A.K. Goswami",
  phone: "9058989193",
  phoneFormatted: "+91 90589 89193",
  whatsappNumber: "919058989193",
  location: "Sainipuram, Roorkee",
  city: "Roorkee, Uttarakhand",
  homeTherapyAvailable: true,
  homeTherapyNote: "Home therapy available across Roorkee and surrounding areas with all required traditional equipment & medicated oils.",
  practitionerTitle: "Ayurvedic Panchkarma Practitioner",
  practitionerBio: "Dedicated to the classical tradition of Ayurvedic wellness, A.K. Goswami brings attentive, one-on-one personalized care to every therapy session. Emphasizing patient comfort, natural harmony, and authentic procedural precision, sessions are delivered both at the Sainipuram wellness space and in the comfort of your home.",
  qualificationsNote: "Qualifications and verified certification credentials as provided by the practitioner. Please contact directly for credential documentation and consultation inquiries.",
  images: {
    hero: "/src/assets/images/hero_ayurveda_panchkarma_1791120408611.jpg",
    shirodhara: "/src/assets/images/shirodhara_therapy_1791120431726.jpg",
    potli: "/src/assets/images/potli_swedana_therapy_1791120444673.jpg",
    katiBasti: "/src/assets/images/kati_basti_therapy_1791120457652.jpg",
    practitioner: null, // Will be updated when business owner uploads original portrait
  },
};

export const THERAPY_CATEGORIES = [
  { id: 'all', label: 'All Therapies', count: 24 },
  { id: 'basti', label: 'Basti Therapies', count: 8 },
  { id: 'head', label: 'Head & Wellness', count: 7 },
  { id: 'swedana', label: 'Swedana / Compress', count: 3 },
  { id: 'massage', label: 'Massage', count: 3 },
  { id: 'specialized', label: 'Specialized', count: 3 },
] as const;

export const THERAPIES: Therapy[] = [
  // BASTI THERAPIES
  {
    id: 'kati-basti',
    name: 'Kati Basti',
    sanskritName: 'कटि बस्ति',
    category: 'basti',
    categoryLabel: 'Basti Therapies',
    shortDesc: 'A traditional warm herbal oil reservoir retained over the lumbar region.',
    description: 'A classical localized warm oil retention therapy. A dam made from organic black gram flour dough is placed on the lower back, and warm medicated herbal oil is continuously poured and kept warm, supporting spinal nourishment and deep tissue ease.',
    suitableFor: ['Lower back comfort', 'Stiffness release', 'Lumbar area relaxation', 'Postural fatigue'],
    sessionDuration: '45–60 mins',
    isFeatured: true,
    image: BRAND.images.katiBasti,
    tag: 'Popular',
  },
  {
    id: 'janu-basti',
    name: 'Janu Basti',
    sanskritName: 'जानु बस्ति',
    category: 'basti',
    categoryLabel: 'Basti Therapies',
    shortDesc: 'Warm medicated herbal oil reservoir applied directly over the knee joints.',
    description: 'A traditional therapy where a herbal dough dam is sealed around the knee joints and filled with warm medicated herbal oil. It provides deep soothing warmth and natural lubrication for joint flexibility.',
    suitableFor: ['Knee joint flexibility', 'Walking ease', 'Localized joint stiffness', 'Active mobility care'],
    sessionDuration: '45 mins',
    isFeatured: true,
    tag: 'Joint Care',
  },
  {
    id: 'griva-basti',
    name: 'Griva Basti',
    sanskritName: 'ग्रीवा बस्ति',
    category: 'basti',
    categoryLabel: 'Basti Therapies',
    shortDesc: 'Warm herbal oil pooling focused on the cervical neck and shoulder region.',
    description: 'Formed using a dough reservoir along the posterior neck and upper back. Warm medicated herbal oils are retained to ease muscular tension from desk work, screen posture, and neck tightness.',
    suitableFor: ['Neck tension', 'Desk posture strain', 'Shoulder stiffness', 'Upper back relaxation'],
    sessionDuration: '40–50 mins',
  },
  {
    id: 'nabhi-basti',
    name: 'Nabhi Basti',
    sanskritName: 'नाभि बस्ति',
    category: 'basti',
    categoryLabel: 'Basti Therapies',
    shortDesc: 'Warm herbal oil retained over the umbilical area for core equilibrium.',
    description: 'Centering on the solar plexus and navel center (Nabhi), this gentle treatment uses specific classical medicated oils to support digestive comfort, natural abdominal relaxation, and systemic calming.',
    suitableFor: ['Digestive ease', 'Abdominal relaxation', 'Core centering', 'Stress in gut area'],
    sessionDuration: '40 mins',
  },
  {
    id: 'prasth-basti',
    name: 'Prasth Basti',
    sanskritName: 'पृष्ठ बस्ति',
    category: 'basti',
    categoryLabel: 'Basti Therapies',
    shortDesc: 'Warm oil pooling along the mid-spine and dorsal vertebrae.',
    description: 'A comforting pool of warm herbal oil sustained over the thoracic and dorsal spine to relax surrounding musculature and encourage structural comfort.',
    suitableFor: ['Mid-back tension', 'Spinal fatigue', 'Muscular tightness'],
    sessionDuration: '45 mins',
  },
  {
    id: 'liver-basti',
    name: 'Liver Basti',
    sanskritName: 'यकृत बस्ति',
    category: 'basti',
    categoryLabel: 'Basti Therapies',
    shortDesc: 'Gentle warm herbal oil retention applied over the right abdominal region.',
    description: 'A specialized external application using warm herbal decoctions and oils positioned over the hepatic zone to promote abdominal harmony and gentle detoxifying warmth.',
    suitableFor: ['Abdominal comfort', 'Gentle warmth', 'Metabolic equilibrium'],
    sessionDuration: '40 mins',
  },
  {
    id: 'lung-basti',
    name: 'Lung Basti',
    sanskritName: 'उरो बस्ति (फुफ्फुस)',
    category: 'basti',
    categoryLabel: 'Basti Therapies',
    shortDesc: 'Warm medicated oil reservoir held over the chest/thoracic area.',
    description: 'Warm medicated oil is gently retained within a dough wall over the chest area, fostering open breathing sensations, emotional release, and rib cage muscular relaxation.',
    suitableFor: ['Chest tightness', 'Seasonal wellness', 'Breathing comfort', 'Heart-center calm'],
    sessionDuration: '45 mins',
  },
  {
    id: 'shiro-basti',
    name: 'Shiro Basti',
    sanskritName: 'शिरो बस्ति',
    category: 'basti',
    categoryLabel: 'Basti Therapies',
    shortDesc: 'Specialized cranial oil retention using an authentic leather head cap.',
    description: 'A distinguished classical Panchkarma procedure where an elongated cap is fitted over the head and filled with warm medicated herbal oil for a set duration under practitioner supervision.',
    suitableFor: ['Intense mental calm', 'Head relaxation', 'Deep neurological rest'],
    sessionDuration: '50–60 mins',
  },

  // HEAD & WELLNESS
  {
    id: 'shiro-abhyang',
    name: 'Shiro Abhyang',
    sanskritName: 'शिरो अभ्यंग',
    category: 'head',
    categoryLabel: 'Head & Wellness',
    shortDesc: 'Classical Ayurvedic head, scalp, neck, and shoulder herbal massage.',
    description: 'A therapeutic massage focused on the scalp, neck, and marma points of the head using warm Ayurvedic herbal oils. Enhances mental clarity, relieves tension, and conditions hair roots.',
    suitableFor: ['Stress relief', 'Scalp nourishment', 'Headache relaxation', 'Mental clarity'],
    sessionDuration: '30–40 mins',
  },
  {
    id: 'shiro-pichu',
    name: 'Shiro Pichu',
    sanskritName: 'शिरो पिचु',
    category: 'head',
    categoryLabel: 'Head & Wellness',
    shortDesc: 'Medicated herbal oil pad placed gently on the crown of the head.',
    description: 'A sterile cotton pad soaked in warm medicated herbal oil is kept resting on the Brahmarandhra (crown point), refreshed periodically to provide soothing cranial calm.',
    suitableFor: ['Restful sleep support', 'Restless mind', 'Scalp cooling and calm'],
    sessionDuration: '40 mins',
  },
  {
    id: 'shirodhara',
    name: 'Shirodhara',
    sanskritName: 'शिरोधारा',
    category: 'head',
    categoryLabel: 'Head & Wellness',
    shortDesc: 'Continuous gentle stream of warm medicated herbal oil onto the forehead.',
    description: 'Perhaps the most iconic Ayurvedic rejuvenation therapy. Warm, herbal-infused oil flows in a steady rhythmic cascade from a hanging brass vessel over the forehead and third-eye center, inducing deep meditative stillness.',
    suitableFor: ['Deep stress release', 'Natural sleep harmony', 'Mental rejuvenation', 'Overworked nervous system'],
    sessionDuration: '50–60 mins',
    isFeatured: true,
    image: BRAND.images.shirodhara,
    tag: 'Signature Therapy',
  },
  {
    id: 'nasya',
    name: 'Nasya',
    sanskritName: 'नस्य कर्म',
    category: 'head',
    categoryLabel: 'Head & Wellness',
    shortDesc: 'Administration of refined herbal drops through the nasal passageways.',
    description: 'One of the five classical Panchkarma actions. Following a gentle facial oil massage and warm herbal steam towel, medicated herbal drops are introduced into the nostrils to cleanse head passages.',
    suitableFor: ['Nasal passage clarity', 'Head lightness', 'Seasonal respiratory comfort', 'Facial relaxation'],
    sessionDuration: '30–40 mins',
    isFeatured: true,
    tag: 'Panchkarma Core',
  },
  {
    id: 'karna-dhupan',
    name: 'Karna Dhupan',
    sanskritName: 'कर्ण धूपन',
    category: 'head',
    categoryLabel: 'Head & Wellness',
    shortDesc: 'Gentle fumigation of the ears using therapeutic medicinal herb smoke.',
    description: 'A traditional ear care procedure using soothing smoke from selected antiseptic and drying medicinal herbs, promoting ear canal freshness and comfort.',
    suitableFor: ['Ear canal hygiene', 'Seasonal ear fullness', 'Gentle warmth'],
    sessionDuration: '20–30 mins',
  },
  {
    id: 'karna-puran',
    name: 'Karna Puran',
    sanskritName: 'कर्ण पूरण',
    category: 'head',
    categoryLabel: 'Head & Wellness',
    shortDesc: 'Gentle filling of the ears with lukewarm medicated herbal oils.',
    description: 'A comforting therapy where calibrated warm medicated ear drops are administered to lubricate ear canals, calm cranial dryness, and relieve jaw tension.',
    suitableFor: ['Ear relaxation', 'Jaw tension relief', 'Dryness reduction'],
    sessionDuration: '25–35 mins',
  },
  {
    id: 'akshi-tarpan',
    name: 'Akshi Tarpan',
    sanskritName: 'अक्षि तर्पण',
    category: 'head',
    categoryLabel: 'Head & Wellness',
    shortDesc: 'Nourishing herbal ghee eye bath within custom dough enclosures.',
    description: 'A delicate rejuvenation practice for the eyes. Gram dough enclosures are sculpted around the eye sockets and filled with lukewarm medicated Triphala or herbal ghee, providing profound cooling comfort.',
    suitableFor: ['Screen fatigue', 'Eye dryness', 'Visual tiredness', 'Tension behind eyes'],
    sessionDuration: '40 mins',
  },

  // SWEDANA / COMPRESS
  {
    id: 'hot-cold-compress',
    name: 'Hot & Cold Compress',
    sanskritName: 'उष्ण व शीत स्वेद',
    category: 'swedana',
    categoryLabel: 'Swedana / Compress',
    shortDesc: 'Alternating thermal compress therapy for localized muscle comfort.',
    description: 'Carefully timed alternation between warm herbal compresses and cool therapeutic packs, stimulating circulation and relieving localized muscular fatigue.',
    suitableFor: ['Localized soreness', 'Sports fatigue', 'Muscular stiffness'],
    sessionDuration: '30–40 mins',
  },
  {
    id: 'patra-potli-swedana',
    name: 'Patra/Patar Potli Pinda Swedana',
    sanskritName: 'पत्र पोटली पिण्ड स्वेद',
    category: 'swedana',
    categoryLabel: 'Swedana / Compress',
    shortDesc: 'Warm linen poultices filled with medicated medicinal leaves & oils.',
    description: 'Fresh medicinal leaves (such as Nirgundi, Eranda, and Arka) are fried in herbal oils and bound into linen boluses. Heated rhythmically and applied along energy channels and joints for deep warm fomentation.',
    suitableFor: ['Joint stiffness', 'Body aches', 'Back & neck tension', 'Deep muscular comfort'],
    sessionDuration: '45–60 mins',
    isFeatured: true,
    image: BRAND.images.potli,
    tag: 'Traditional',
  },
  {
    id: 'shashtika-shali-swedana',
    name: 'Shashtika Shali Pinda Swedana',
    sanskritName: 'षष्टिक शालि पिण्ड स्वेद',
    category: 'swedana',
    categoryLabel: 'Swedana / Compress',
    shortDesc: 'Nourishing massage with special medicated rice cooked in herbal decoctions & milk.',
    description: 'Special 60-day red rice (Shashtika Shali) cooked in a decoction of Balaroot and fresh milk, gathered in soft cloth boluses and applied across the body. Known for supreme tissue rejuvenation and skin softness.',
    suitableFor: ['Muscle nourishment', 'Body rejuvenation', 'Skin glow', 'Tissue vitality'],
    sessionDuration: '50–60 mins',
  },

  // MASSAGE
  {
    id: 'full-body-massage',
    name: 'Full Body Massage',
    sanskritName: 'सर्वांग मालिश',
    category: 'massage',
    categoryLabel: 'Massage',
    shortDesc: 'Comprehensive full-body relaxation massage using warm herbal oils.',
    description: 'A comforting full-body therapy from head to toe using warm, tailored herbal sesame or mustard oils, easing daily physical exhaustion and restoring body warmth.',
    suitableFor: ['Whole-body relaxation', 'Circulation boost', 'General physical fatigue'],
    sessionDuration: '60 mins',
  },
  {
    id: 'partial-massage',
    name: 'Partial Massage',
    sanskritName: 'एकांग मालिश',
    category: 'massage',
    categoryLabel: 'Massage',
    shortDesc: 'Focused herbal massage targeting specific areas like back, legs, or shoulders.',
    description: 'A concentrated 30-minute therapy customized for the exact area causing discomfort—whether shoulders, calves, lower back, or feet.',
    suitableFor: ['Specific muscle knots', 'Targeted relief', 'Quick recovery session'],
    sessionDuration: '30 mins',
  },
  {
    id: 'abhyanga',
    name: 'Abhyanga',
    sanskritName: 'पारंपरिक अभ्यंग',
    category: 'massage',
    categoryLabel: 'Massage',
    shortDesc: 'Traditional classical Ayurvedic rhythmic oil massage tailored to your dosha.',
    description: 'The cornerstone of Ayurvedic daily wellness. Long, rhythmic, coordinated strokes with abundant warm medicated oils calibrated to harmonize bodily humors (Vata, Pitta, Kapha) and tone muscle tissue.',
    suitableFor: ['Dosha balance', 'Lymphatic flow', 'Deep relaxation', 'Daily vitality'],
    sessionDuration: '60–75 mins',
    isFeatured: true,
    tag: 'Essential Classic',
  },

  // SPECIALIZED
  {
    id: 'fire-cupping',
    name: 'Fire Cupping',
    sanskritName: 'अग्नि कपिंग चिकित्सा',
    category: 'specialized',
    categoryLabel: 'Specialized Therapies',
    shortDesc: 'Traditional therapeutic suction cupping for blood flow and tension release.',
    description: 'A classical suction therapy using heated glass cups placed along meridian paths of the back. Creates negative pressure to draw stagnation, stimulate localized blood flow, and loosen rigid connective tissues.',
    suitableFor: ['Deep tissue tightness', 'Myofascial tension', 'Back congestion', 'Circulatory warmth'],
    sessionDuration: '35–45 mins',
    isFeatured: true,
    tag: 'Specialized',
  },
  {
    id: 'leech-therapy',
    name: 'Leech Therapy (Jalaukavacharana)',
    sanskritName: 'जलौकावचरण',
    category: 'specialized',
    categoryLabel: 'Specialized Therapies',
    shortDesc: 'Classical micro-circulation bio-therapy administered by trained practitioner.',
    description: 'A recognized classical Ayurvedic para-surgical procedure using medicinal leeches (Jalauka) applied to specific target areas for localized blood purification and micro-vascular circulation under hygienic conditions.',
    suitableFor: ['Localized skin congestion', 'Micro-circulation', 'Stagnant blood flow'],
    sessionDuration: '45–60 mins',
  },
  {
    id: 'shringi-therapy',
    name: 'Shringi Therapy',
    sanskritName: 'शृंगी चिकित्सा',
    category: 'specialized',
    categoryLabel: 'Specialized Therapies',
    shortDesc: 'Classical horn-based suction bio-purification method for localized stagnation.',
    description: 'One of the ancient Ayurvedic Raktamokshana modalities utilizing a specialized hollow horn (Shringi) to create precise vacuum suction over dense areas of tissue stagnation.',
    suitableFor: ['Localized tissue stagnation', 'Ancient purifying suction', 'Deep congestion'],
    sessionDuration: '35–45 mins',
  },
];

export const TRUST_POINTS = [
  {
    title: 'Traditional Ayurvedic Care',
    description: 'Rooted in classical texts and authentic procedural methods.',
  },
  {
    title: 'Personalized Sessions',
    description: 'Tailored carefully to your individual constitution and comfort.',
  },
  {
    title: 'Home Therapy Available',
    description: 'Relax in your own space across Roorkee with portable setup.',
  },
  {
    title: 'Easy WhatsApp Booking',
    description: 'Direct communication with practitioner without middle agents.',
  },
];

export const WHY_AYUSHKAYA = [
  {
    title: 'Traditional Approach',
    description: 'We follow time-tested Ayurvedic principles, pure medicated herbal oils, and authentic dough dam methods rather than modern commercial shortcuts.',
  },
  {
    title: 'Personalized Care',
    description: 'Every individual receives a dedicated assessment before therapy begins. We adjust oil temperatures, herb blends, and pressure to your comfort.',
  },
  {
    title: 'Home Therapy Available',
    description: 'For elders, busy professionals, or individuals preferring privacy, A.K. Goswami delivers full therapy sessions directly to your Roorkee home.',
  },
  {
    title: 'Direct Practitioner Communication',
    description: 'No front-desk call center. You speak and chat directly with practitioner A.K. Goswami to discuss your needs and schedule appointments.',
  },
  {
    title: 'Easy Booking',
    description: 'Convenient scheduling via WhatsApp or online request form with rapid responses and flexible appointment hours from 8 AM to 8 PM.',
  },
  {
    title: 'Convenient Local Service',
    description: 'Centrally situated in Sainipuram, Roorkee with accessible parking and peaceful neighborhood ambiance away from highway noise.',
  },
];

export const HOW_BOOKING_WORKS = [
  {
    step: '01',
    title: 'Choose a Therapy',
    description: 'Browse our 24 therapies or ask our AI assistant / practitioner for a tailored recommendation.',
  },
  {
    step: '02',
    title: 'Chat on WhatsApp',
    description: 'Send a quick message to 9058989193 or submit the booking form with your preferred details.',
  },
  {
    step: '03',
    title: 'Choose Available Time',
    description: 'Practitioner A.K. Goswami directly coordinates with you to agree on a convenient clinic or home slot.',
  },
  {
    step: '04',
    title: 'Confirm Your Session',
    description: 'Receive session preparation instructions and welcome your personalized Ayurvedic therapy.',
  },
];

export interface ClientExperience {
  id: string;
  clientName: string;
  location: string;
  therapyName: string;
  sessionType: 'Clinic Session' | 'Home Therapy';
  durationTreated: string;
  quote: string;
  outcomeHighlight: string;
  date: string;
}

export const CLIENT_EXPERIENCES: ClientExperience[] = [
  {
    id: 'exp-1',
    clientName: 'Dr. Neeraj Verma',
    location: 'Civil Lines, Roorkee',
    therapyName: 'Kati Basti & Patra Potli',
    sessionType: 'Clinic Session',
    durationTreated: '3 Sessions Course',
    quote: 'Due to long clinical hours, persistent lumbar stiffness had been bothering me for months. A.K. Goswami administered Kati Basti with warm medicated herbal oil reservoirs followed by leaf poultice fomentation. The warmth and structural ease were remarkable. The dedication to authentic procedure is exemplary.',
    outcomeHighlight: 'Relieved lower back fatigue & restored postural comfort',
    date: 'August 2026',
  },
  {
    id: 'exp-2',
    clientName: 'Smt. Shakuntala Devi',
    location: 'Malviya Chowk, Roorkee',
    therapyName: 'Janu Basti & Hot Compress',
    sessionType: 'Home Therapy',
    durationTreated: '5 Home Visits',
    quote: 'Being 68 years old, traveling to clinics for knee stiffness was difficult for me. Having A.K. Goswami visit our residence with the full Ayurvedic equipment was a true blessing. The gentle warm dough pool on my knees and personalized care gave me tremendous comfort when climbing our staircase.',
    outcomeHighlight: 'Noticeable knee joint ease and mobility at home',
    date: 'September 2026',
  },
  {
    id: 'exp-3',
    clientName: 'Pooja Aggarwal',
    location: 'IIT Roorkee Campus',
    therapyName: 'Shirodhara & Shiro Abhyang',
    sessionType: 'Clinic Session',
    durationTreated: '2 Rejuvenation Sessions',
    quote: 'Intense academic deadlines had left my sleep irregular and mind exhausted. The continuous warm oil stream of Shirodhara induced a state of deep, restorative stillness I had not experienced in years. The clinic atmosphere in Sainipuram is exceptionally peaceful.',
    outcomeHighlight: 'Deep mental tranquility and natural restorative sleep',
    date: 'September 2026',
  },
  {
    id: 'exp-4',
    clientName: 'Vikram Singh Rawat',
    location: 'Awas Vikas, Roorkee',
    therapyName: 'Abhyanga & Patra Potli Pinda Swedana',
    sessionType: 'Home Therapy',
    durationTreated: 'Weekly Routine',
    quote: 'I booked a home Abhyanga and herbal leaf potli session after weeks of bodily fatigue from factory site work. The herbal oils were pure and kept at the perfect soothing temperature. A.K. Goswami is courteous, disciplined, and remarkably skilled.',
    outcomeHighlight: 'Total muscular relaxation and refreshed vitality',
    date: 'July 2026',
  },
  {
    id: 'exp-5',
    clientName: 'Meenakshi Sharma',
    location: 'Sainipuram, Roorkee',
    therapyName: 'Nasya & Griva Basti',
    sessionType: 'Clinic Session',
    durationTreated: '3 Sessions',
    quote: 'Living right here in Sainipuram, I sought care for chronic screen-induced neck tightness and seasonal sinus fullness. The combination of Griva Basti for cervical tightness and gentle Nasya drops cleared my head completely without any rush.',
    outcomeHighlight: 'Lightness in head and free cervical neck movement',
    date: 'August 2026',
  },
  {
    id: 'exp-6',
    clientName: 'Rajendra Prasad Gupta',
    location: 'Ramnagar, Roorkee',
    therapyName: 'Fire Cupping & Partial Massage',
    sessionType: 'Clinic Session',
    durationTreated: '2 Targeted Sessions',
    quote: 'I was skeptical about traditional suction therapy until I experienced Fire Cupping under A.K. Goswami’s steady hands. The tight muscular knots along my upper shoulders loosened up remarkably in just two sessions. Highly recommended local practitioner.',
    outcomeHighlight: 'Released persistent shoulder knot tightness',
    date: 'September 2026',
  },
];

export const FAQS = [
  {
    question: 'What therapies are available at AyushKaya?',
    answer: 'We offer 24 authentic Ayurvedic therapies grouped into Basti therapies (such as Kati Basti, Janu Basti, Griva Basti), Head & Wellness (Shirodhara, Nasya, Akshi Tarpan), Swedana herbal compresses (Patra Potli, Shashtika Shali), Classical Massages (Abhyanga, Full Body), and Specialized therapies (Fire Cupping, Leech therapy).',
  },
  {
    question: 'How can I book a session?',
    answer: 'You can book directly by tapping the WhatsApp button to chat with practitioner A.K. Goswami at 9058989193, or by submitting the Booking Request form on this website. We promptly check the schedule and confirm your preferred slot.',
  },
  {
    question: 'Is home therapy available in Roorkee?',
    answer: 'Yes! Home therapy is one of our most valued services. Practitioner A.K. Goswami brings all necessary medicated oils, massage accessories, and poultices to your home anywhere in Roorkee and nearby localities.',
  },
  {
    question: 'How do I choose the right therapy for my needs?',
    answer: 'If you have lower back stiffness, Kati Basti and Patra Potli are popular choices. For stress and deep relaxation, Shirodhara or Abhyanga are recommended. For knee mobility, Janu Basti is ideal. You can also chat with our WhatsApp AI assistant or speak directly with A.K. Goswami for guidance.',
  },
  {
    question: 'How can I contact practitioner A.K. Goswami?',
    answer: 'You can call or WhatsApp directly on +91 9058989193. We are responsive and happy to answer questions about any therapy before you commit.',
  },
  {
    question: 'Where is AyushKaya located?',
    answer: 'AyushKaya is located in Sainipuram, Roorkee (Uttarakhand). An interactive map and directions link are provided in the Location section of this website.',
  },
];



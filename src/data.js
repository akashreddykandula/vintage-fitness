export const GYM = {
  name: 'Vintage Fitness Gym',
  phone: '+91 90000 23008',
  whatsapp: '919000023008',
  address: 'Kondapur, Gachibowli, Hyderabad, Telangana 500084',
  rating: 4.8,
  reviews: 368,
  floors: 3,
  members: 1000,
  mapsUrl: 'https://maps.google.com/?q=Vintage+Fitness+Gym+Kondapur+Hyderabad',
}

export const WA_BASE = `https://wa.me/${GYM.whatsapp}`
export const WA_DEFAULT = `${WA_BASE}?text=Hi+Vintage+Fitness+Gym,+I+would+like+to+know+more+about+your+membership+plans.`

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export const FEATURES = [
  {
    icon: '🏢',
    title: 'Multi-Floor Facility',
    desc: 'Three spacious, air-conditioned floors purpose-built for cardio, strength, and functional training zones.',
  },
  {
    icon: '⚙️',
    title: 'Modern Equipment',
    desc: 'Commercial-grade machines, free weights, cables, and cardio equipment — always maintained, never crowded.',
  },
  {
    icon: '🏅',
    title: 'Certified Trainers',
    desc: 'Our coaches hold nationally recognized certifications and bring real competition and transformation experience.',
  },
  {
    icon: '🥗',
    title: 'Personalized Diet Plans',
    desc: 'Custom nutrition guidance tailored to your body type, goals, and lifestyle — not generic handouts.',
  },
  {
    icon: '🤝',
    title: 'Motivating Community',
    desc: 'A welcoming, positive gym culture where members push each other forward. No judgment, only progress.',
  },
  {
    icon: '✨',
    title: 'Pristine Environment',
    desc: 'Daily deep cleaning, sanitized equipment, and a refreshing atmosphere that makes you want to return every day.',
  },
]

export const PROGRAMS = [
  {
    icon: '🔥',
    title: 'Weight Loss',
    desc: 'Science-backed fat loss protocols combining cardio, strength, and nutrition — real results in 90 days.',
    waMsg: "Hi, I'm interested in the Weight Loss program at Vintage Fitness.",
  },
  {
    icon: '💪',
    title: 'Muscle Building',
    desc: 'Progressive overload training with expert form coaching to maximize hypertrophy safely and efficiently.',
    waMsg: "Hi, I'm interested in the Muscle Building program at Vintage Fitness.",
  },
  {
    icon: '🏋️',
    title: 'Strength Training',
    desc: 'Build raw strength through compound movements — deadlifts, squats, bench press. Performance meets power.',
    waMsg: "Hi, I'm interested in Strength Training at Vintage Fitness.",
  },
  {
    icon: '⚡',
    title: 'Functional Training',
    desc: 'Movement-focused training that builds real-world athleticism, mobility, and injury resistance.',
    waMsg: "Hi, I'm interested in Functional Training at Vintage Fitness.",
  },
  {
    icon: '🎯',
    title: 'Personal Training',
    desc: 'One-on-one coaching tailored entirely to your goals, schedule, and fitness level. Maximum accountability.',
    waMsg: "Hi, I'm interested in Personal Training at Vintage Fitness.",
  },
  {
    icon: '💃',
    title: 'Zumba',
    desc: 'High-energy dance cardio sessions that feel like a party — burn calories while having the time of your life.',
    waMsg: "Hi, I'm interested in Zumba classes at Vintage Fitness.",
  },
]

export const TRAINERS = [
  {
    name: 'Mohamed',
    role: 'Head Trainer',
    exp: '8+ Years',
    bio: 'Specializes in total body transformation. Has coached 200+ successful weight loss journeys.',
    icon: '🏋️',
    specialization: 'Body Transformation',
  },
  {
    name: 'Raju Yadav',
    role: 'Strength Coach',
    exp: '6+ Years',
    bio: 'Powerlifting background with deep expertise in progressive overload and injury prevention.',
    icon: '💪',
    specialization: 'Powerlifting & Strength',
  },
  {
    name: 'Sameer',
    role: 'Fat Loss Expert',
    exp: '5+ Years',
    bio: 'Certified nutrition coach and fat-loss specialist. Known for sustainable, science-based programs.',
    icon: '🔥',
    specialization: 'Weight Loss & Nutrition',
  },
  {
    name: 'Tarun',
    role: 'Functional Coach',
    exp: '5+ Years',
    bio: 'Sports performance and mobility specialist. Trains athletes and beginners with equal dedication.',
    icon: '⚡',
    specialization: 'Functional & Athletic',
  },
  {
    name: 'Rahman',
    role: 'Personal Trainer',
    exp: '4+ Years',
    bio: 'Patient, detail-oriented coach known for building long-term habits and consistent member results.',
    icon: '🎯',
    specialization: 'Personal Training',
  },
]

export const TRANSFORMATIONS = [
  {
    name: 'Priya S.',
    type: 'Weight Loss',
    result: '−18 kg · 4 Months',
    story: 'Lost 18kg in 4 months with personalized training and a custom diet plan from the Vintage Fitness team.',
    beforeIcon: '😐',
    afterIcon: '💪',
  },
  {
    name: 'Arjun M.',
    type: 'Muscle Gain',
    result: '+8 kg Muscle · 6 Months',
    story: 'Gained 8kg of lean muscle mass in 6 months under Mohamed\'s progressive strength program.',
    beforeIcon: '🙂',
    afterIcon: '🏆',
  },
  {
    name: 'Kavitha R.',
    type: 'Complete Transformation',
    result: '−22 kg · 5 Months',
    story: 'From sedentary to fit — 22kg down and completely transformed body composition in just 5 months.',
    beforeIcon: '😔',
    afterIcon: '🔥',
  },
  {
    name: 'Vikram T.',
    type: 'Strength Gain',
    result: '2x Stronger · 3 Months',
    story: 'Doubled his deadlift PR and built serious functional strength under Raju sir\'s coaching.',
    beforeIcon: '😴',
    afterIcon: '⚡',
  },
]

export const REVIEWS = [
  {
    name: 'Rahul S.',
    initials: 'RS',
    time: '3 months ago',
    text: 'Best gym in Kondapur, hands down. The trainers are professional, the equipment is always in great condition, and the atmosphere is super motivating. Lost 15kg here!',
  },
  {
    name: 'Priya K.',
    initials: 'PK',
    time: '1 month ago',
    text: 'Vintage Fitness changed my life completely. Mohamed sir is an amazing trainer — very knowledgeable, patient, and genuinely cares about your progress. Highly recommended!',
  },
  {
    name: 'Aditya M.',
    initials: 'AM',
    time: '2 months ago',
    text: 'Multi-floor gym with excellent facilities. Clean, well-organized, and the trainers actually customize your program. The diet plan they gave me made a huge difference!',
  },
  {
    name: 'Nisha R.',
    initials: 'NR',
    time: '5 months ago',
    text: 'Joined for weight loss and stayed because the community is incredible. Sameer sir\'s training approach is unlike anything else. Feel like a different person now.',
  },
  {
    name: 'Vikram T.',
    initials: 'VT',
    time: '2 months ago',
    text: 'Free parking, free WiFi, and the gym is spotlessly clean. Raju sir helped me break through a plateau I\'d been stuck at for months. Absolutely brilliant coach.',
  },
  {
    name: 'Shalini L.',
    initials: 'SL',
    time: '1 month ago',
    text: 'Absolutely love this gym. No toxic culture, everyone is supportive. Tarun sir\'s functional training sessions are fantastic. Best investment I made for my health!',
  },
]

export const HOURS = [
  { day: 'Monday – Friday', time: '5:30 AM – 10:30 PM' },
  { day: 'Saturday', time: '6:00 AM – 10:00 PM' },
  { day: 'Sunday', time: '7:00 AM – 9:00 PM' },
]

export const FITNESS_GOALS = [
  'Weight Loss',
  'Muscle Building',
  'Strength Training',
  'Functional Fitness',
  'Personal Training',
  'Zumba / Dance Fitness',
  'General Fitness',
]

export const GALLERY_ITEMS = [
  { icon: '🏋️', label: 'Weight Floor', type: 'interior' },
  { icon: '🚴', label: 'Cardio Zone', type: 'interior' },
  { icon: '⚡', label: 'Functional Area', type: 'interior' },
  { icon: '💪', label: 'Training Session', type: 'session' },
  { icon: '🔥', label: 'Group Workout', type: 'session' },
  { icon: '🥊', label: 'Boxing Zone', type: 'equipment' },
  { icon: '🏆', label: 'Success Stories', type: 'results' },
  { icon: '🌟', label: 'Premium Lounge', type: 'interior' },
  { icon: '🎯', label: 'Personal Training', type: 'session' },
]

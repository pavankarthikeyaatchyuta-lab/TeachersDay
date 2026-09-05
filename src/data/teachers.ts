import type { TeacherInfo, MiniSurprise } from '../types';

export const TEACHERS_DATA: Record<'sarada' | 'kranti', TeacherInfo> = {
  sarada: {
    id: 'sarada',
    name: 'Sarada Madam',
    honorificTitle: 'Respected Head of Department',
    roleBadge: 'Our HoD',
    departmentTitle: 'Head of Department & Mentor',
    quoteSnippet: 'Guiding with wisdom, leading with grace, and inspiring excellence in every student.',
    cardTheme: {
      accentColor: '#B45309', // Warm amber-gold
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
      badgeText: 'text-amber-900',
      buttonBg: 'bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white shadow-amber-900/20',
      gradientBorder: 'from-amber-300 via-rose-300 to-amber-400',
      icon: 'sparkles',
    },
    modalContent: {
      title: 'To Our Respected Sarada Madam 🌷',
      salutation: 'Respected Madam,',
      paragraphs: [
        'Being our HoD is more than managing a department.',
        'You guide us, encourage us, correct us, and constantly push us towards becoming better versions of ourselves.',
        'Your leadership gives us direction, and your support gives us confidence.',
        'Thank you for guiding not just a department, but the students within it.',
        'We are truly grateful for everything you do for us.',
      ],
      closing: 'Happy Teachers\' Day, Sarada Madam! ❤️',
      signature: 'With utmost respect and gratitude, Your Students',
      secondarySurpriseBtn: 'One More Little Surprise ✨',
      secondarySurpriseQuote: 'Behind every successful student is a teacher who believed they could become more.',
      secondarySurpriseGratitude: 'Thank you for believing in us.',
    },
  },
  kranti: {
    id: 'kranti',
    name: 'Kranti Madam',
    honorificTitle: 'Respected Teacher & Guide',
    roleBadge: 'Our Respected Teacher',
    departmentTitle: 'Dedicated Educator & Mentor',
    quoteSnippet: 'Nurturing curiosity, encouraging every step, and bringing warmth to every classroom lesson.',
    cardTheme: {
      accentColor: '#D97706', // Sunflower warm gold/rose
      badgeBg: 'bg-orange-100 text-orange-900 border-orange-300',
      badgeText: 'text-orange-900',
      buttonBg: 'bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white shadow-orange-900/20',
      gradientBorder: 'from-orange-300 via-yellow-200 to-orange-400',
      icon: 'sunflower',
    },
    modalContent: {
      title: 'To Our Dear Kranti Madam 🌻',
      salutation: 'Dear Madam,',
      paragraphs: [
        'Thank you for every lesson, every explanation, every correction, and every little moment of encouragement.',
        'Sometimes the things teachers do for us may seem small, but those little moments stay with us much longer than we realize.',
        'Thank you for teaching us, supporting us, and always being there to guide us.',
        'We are truly grateful to have you as our teacher.',
      ],
      closing: 'Happy Teachers\' Day, Kranti Madam! 💛',
      signature: 'With warm affection and respect, Your Students',
      secondarySurpriseBtn: 'A Little Thought For You 💫',
      secondarySurpriseQuote: 'The best teachers don\'t just teach us what to learn — they teach us to believe in what we can become.',
      secondarySurpriseGratitude: 'Thank you for being part of our journey.',
    },
  },
};

export const MINI_SURPRISES: MiniSurprise[] = [
  {
    id: 'apple',
    icon: '🍎',
    label: 'Patience & Dedication',
    message: 'A teacher\'s patience deserves an award. 🏆',
    subtext: 'For the countless times you explained again with a smile.',
  },
  {
    id: 'book',
    icon: '📖',
    label: 'Wisdom & Knowledge',
    message: 'Every page we turn carries a little bit of your guidance.',
    subtext: 'The foundations you gave us illuminate our future.',
  },
  {
    id: 'lightbulb',
    icon: '💡',
    label: 'Perspective & Clarity',
    message: 'Thank you for helping us see things differently.',
    subtext: 'You taught us not just what to see, but how to think.',
  },
  {
    id: 'heart',
    icon: '💖',
    label: 'Inspiration & Belief',
    message: 'Some teachers teach subjects. The best ones teach us to believe in ourselves.',
    subtext: 'Your confidence in us helped us discover our potential.',
  },
];

export const APPRECIATION_CARDS = [
  {
    icon: '📚',
    title: 'You Teach Us',
    text: 'You turn difficult lessons into something we can understand.',
    detail: 'Breaking down complex concepts with effortless patience and unwavering clarity.',
    accent: 'border-amber-200 bg-amber-50/50 hover:border-amber-400',
  },
  {
    icon: '💙',
    title: 'You Care For Us',
    text: 'You notice when we\'re struggling, even when we don\'t always say it.',
    detail: 'Always having that keen, empathetic eye that brings comfort during stressful deadlines.',
    accent: 'border-sky-200 bg-sky-50/50 hover:border-sky-400',
  },
  {
    icon: '🌱',
    title: 'You Help Us Grow',
    text: 'You help us become better than we were yesterday.',
    detail: 'Challenging us to step out of comfort zones and reach heights we hadn\'t imagined.',
    accent: 'border-emerald-200 bg-emerald-50/50 hover:border-emerald-400',
  },
  {
    icon: '✨',
    title: 'You Inspire Us',
    text: 'You make us believe that we are capable of more.',
    detail: 'Planting seeds of ambition, integrity, and passion that stay with us forever.',
    accent: 'border-rose-200 bg-rose-50/50 hover:border-rose-400',
  },
];

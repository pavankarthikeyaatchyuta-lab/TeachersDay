export type TeacherId = 'sarada' | 'bhagawan' | 'kranti' | 'kishore' | 'radhakrishna';

export interface TeacherInfo {
  id: TeacherId;
  name: string;
  honorificTitle: string;
  roleBadge: string;
  departmentTitle: string;
  headline: string;
  quoteSnippet: string;
  cardTheme: {
    accentColor: string;
    badgeBg: string;
    badgeText: string;
    buttonBg: string;
    gradientBorder: string;
    icon: string;
  };
  modalContent: {
    title: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    secondarySurpriseBtn: string;
    secondarySurpriseQuote: string;
    secondarySurpriseGratitude: string;
  };
}

export interface MiniSurprise {
  id: 'apple' | 'book' | 'lightbulb' | 'heart';
  icon: string;
  label: string;
  message: string;
  subtext: string;
}

export interface JourneyStage {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  mentorName: string;
  mentorId: TeacherId;
  mentorRole: string;
  color: string;
}

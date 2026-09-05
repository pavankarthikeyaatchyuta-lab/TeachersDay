export interface TeacherInfo {
  id: 'sarada' | 'kranti';
  name: string;
  honorificTitle: string;
  roleBadge: string;
  departmentTitle: string;
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

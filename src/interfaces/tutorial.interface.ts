export interface TutorialSlideItem {
  title: string;
  subTitle?: string;
  paragraphs?: string[];
  description?: string;
  list?: string[];
  imagesSrc?: string[];
  finalLine?: string;
  interactive?: {
    label: string;
    description: string;
    keychainAction: () => void;
  }[];
}

export {};

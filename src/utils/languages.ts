import { ArrayElement } from './types';

export const LANGUAGES = ['teyvat', 'khaenriah'] as const;

export type Language = ArrayElement<typeof LANGUAGES>;

export const isDefinedLanguage = (language: string): language is Language => {
  return LANGUAGES.includes(language as any);
};

export const getLanguageFont = (language: Language): string => {
  switch (language) {
    case 'teyvat':
      return 'font-teyvat';
    case 'khaenriah':
      return 'font-khaenriah';
    default:
      return 'font-teyvat';
  }
};

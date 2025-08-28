export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export interface VocabularyWord {
  id: string;
  english: string;
  turkish: string;
  definition: string;
  examples: string[];
  level: Level;
}
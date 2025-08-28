import { VocabularyWord, Level } from '../types/vocabulary';

const vocabularyData: VocabularyWord[] = [
  // A1 Level Words
  {
    id: 'a1-1',
    english: 'apple',
    turkish: 'elma',
    definition: 'A round fruit with red or green skin and a white inside',
    examples: [
      'I eat an apple every day for breakfast.',
      'The apple tree in our garden is full of fruit.'
    ],
    level: 'A1'
  },
  {
    id: 'a1-2', 
    english: 'house',
    turkish: 'ev',
    definition: 'A building where people live',
    examples: [
      'We bought a new house last year.',
      'Her house has a beautiful garden.'
    ],
    level: 'A1'
  },
  {
    id: 'a1-3',
    english: 'water',
    turkish: 'su',
    definition: 'A clear liquid that has no color, smell, or taste',
    examples: [
      'Please drink more water to stay healthy.',
      'The water in this lake is very clean.'
    ],
    level: 'A1'
  },
  {
    id: 'a1-4',
    english: 'book',
    turkish: 'kitap', 
    definition: 'A set of printed pages that are held together in a cover',
    examples: [
      'I am reading a very interesting book.',
      'She writes books for children.'
    ],
    level: 'A1'
  },
  {
    id: 'a1-5',
    english: 'car',
    turkish: 'araba',
    definition: 'A vehicle with four wheels that is powered by an engine',
    examples: [
      'My car is parked outside.',
      'They are buying a new car next month.'
    ],
    level: 'A1'
  },
  {
    id: 'a1-6',
    english: 'happy',
    turkish: 'mutlu',
    definition: 'Feeling pleased and content',
    examples: [
      'She looks very happy today.',
      'I am happy to see you again.'
    ],
    level: 'A1'
  },
  {
    id: 'a1-7',
    english: 'dog',
    turkish: 'köpek',
    definition: 'A common animal that is often kept as a pet',
    examples: [
      'Our dog loves to play in the park.',
      'That dog is very friendly with children.'
    ],
    level: 'A1'
  },
  {
    id: 'a1-8',
    english: 'food',
    turkish: 'yemek',
    definition: 'Things that people and animals eat',
    examples: [
      'The food in this restaurant is delicious.',
      'We need to buy some food for dinner.'
    ],
    level: 'A1'
  },

  // A2 Level Words
  {
    id: 'a2-1',
    english: 'adventure',
    turkish: 'macera',
    definition: 'An exciting experience or activity that involves some risk',
    examples: [
      'Our trip to the mountains was a real adventure.',
      'She loves reading books about adventure and mystery.'
    ],
    level: 'A2'
  },
  {
    id: 'a2-2',
    english: 'comfortable',
    turkish: 'rahat',
    definition: 'Giving a feeling of physical relaxation; not causing pain',
    examples: [
      'This chair is very comfortable to sit in.',
      'I feel comfortable talking to my best friend about anything.'
    ],
    level: 'A2'
  },
  {
    id: 'a2-3',
    english: 'environment',
    turkish: 'çevre',
    definition: 'The air, water, and land around us where people, animals, and plants live',
    examples: [
      'We should protect our environment for future generations.',
      'Plastic pollution is harmful to the marine environment.'
    ],
    level: 'A2'
  },
  {
    id: 'a2-4',
    english: 'knowledge',
    turkish: 'bilgi',
    definition: 'Information and skills that you gain through learning or experience',
    examples: [
      'Reading books increases your knowledge about the world.',
      'She has extensive knowledge about computer programming.'
    ],
    level: 'A2'
  },
  {
    id: 'a2-5',
    english: 'opportunity',
    turkish: 'fırsat',
    definition: 'A chance for something good to happen',
    examples: [
      'This job offers a great opportunity for career growth.',
      'Don\'t miss the opportunity to visit Paris while you\'re in Europe.'
    ],
    level: 'A2'
  },
  {
    id: 'a2-6',
    english: 'responsibility',
    turkish: 'sorumluluk',
    definition: 'Something that it is your job or duty to deal with',
    examples: [
      'Taking care of pets is a big responsibility.',
      'It\'s everyone\'s responsibility to keep the classroom clean.'
    ],
    level: 'A2'
  },

  // B1 Level Words
  {
    id: 'b1-1',
    english: 'accomplish',
    turkish: 'başarmak',
    definition: 'To succeed in doing something, especially after trying hard',
    examples: [
      'She accomplished all her goals for this year.',
      'The team worked together to accomplish the challenging project.'
    ],
    level: 'B1'
  },
  {
    id: 'b1-2',
    english: 'consequence',
    turkish: 'sonuç',
    definition: 'Something that happens as a result of a particular action or situation',
    examples: [
      'Not studying has serious consequences for your grades.',
      'The consequence of eating too much junk food is poor health.'
    ],
    level: 'B1'
  },
  {
    id: 'b1-3',
    english: 'demonstrate',
    turkish: 'göstermek',
    definition: 'To show clearly that something exists or is true',
    examples: [
      'The teacher will demonstrate how to solve the math problem.',
      'This experiment demonstrates the effects of gravity.'
    ],
    level: 'B1'
  },
  {
    id: 'b1-4',
    english: 'enthusiasm',
    turkish: 'coşku',
    definition: 'Great excitement about or interest in something',
    examples: [
      'She showed great enthusiasm for the new project.',
      'His enthusiasm for learning languages is inspiring.'
    ],
    level: 'B1'
  },
  {
    id: 'b1-5',
    english: 'perspective',
    turkish: 'bakış açısı',
    definition: 'A way of thinking about something',
    examples: [
      'From my perspective, this plan needs more consideration.',
      'Traveling gives you a different perspective on life.'
    ],
    level: 'B1'
  },

  // B2 Level Words
  {
    id: 'b2-1',
    english: 'comprehensive',
    turkish: 'kapsamlı',
    definition: 'Including everything that is necessary; complete',
    examples: [
      'The report provides a comprehensive analysis of the market.',
      'Students need comprehensive preparation for the final exam.'
    ],
    level: 'B2'
  },
  {
    id: 'b2-2',
    english: 'inevitable',
    turkish: 'kaçınılmaz',
    definition: 'Certain to happen and impossible to avoid or prevent',
    examples: [
      'Change is inevitable in any growing organization.',
      'It was inevitable that they would eventually meet.'
    ],
    level: 'B2'
  },
  {
    id: 'b2-3',
    english: 'substantial',
    turkish: 'önemli',
    definition: 'Large in amount, value, or importance',
    examples: [
      'The company made substantial improvements to their products.',
      'There has been substantial progress in medical research.'
    ],
    level: 'B2'
  },
  {
    id: 'b2-4',
    english: 'sophisticated',
    turkish: 'gelişmiş',
    definition: 'Advanced and complex in design or function',
    examples: [
      'The new smartphone has sophisticated security features.',
      'She has a sophisticated understanding of international politics.'
    ],
    level: 'B2'
  },
  {
    id: 'b2-5',
    english: 'deliberate',
    turkish: 'kasıtlı',
    definition: 'Done intentionally, not by accident',
    examples: [
      'His decision to leave early was deliberate.',
      'The artist made deliberate choices in color and composition.'
    ],
    level: 'B2'
  },

  // C1 Level Words
  {
    id: 'c1-1',
    english: 'intricate',
    turkish: 'karmaşık',
    definition: 'Very detailed and complicated in design or structure',
    examples: [
      'The watch mechanism is incredibly intricate.',
      'She explained the intricate relationship between economics and politics.'
    ],
    level: 'C1'
  },
  {
    id: 'c1-2',
    english: 'paramount',
    turkish: 'en önemli',
    definition: 'Most important; supreme',
    examples: [
      'Student safety is of paramount importance in our school.',
      'The CEO considers customer satisfaction paramount to success.'
    ],
    level: 'C1'
  },
  {
    id: 'c1-3',
    english: 'paradigm',
    turkish: 'paradigma',
    definition: 'A typical example or pattern of something; a model',
    examples: [
      'The internet created a new paradigm for communication.',
      'This research challenges the existing scientific paradigm.'
    ],
    level: 'C1'
  },
  {
    id: 'c1-4',
    english: 'ubiquitous',
    turkish: 'her yerde olan',
    definition: 'Present, appearing, or found everywhere',
    examples: [
      'Smartphones have become ubiquitous in modern society.',
      'The company\'s advertisements are ubiquitous in the city.'
    ],
    level: 'C1'
  },
  {
    id: 'c1-5',
    english: 'ambiguous',
    turkish: 'belirsiz',
    definition: 'Open to more than one interpretation; not clearly defined',
    examples: [
      'The contract terms were deliberately ambiguous.',
      'His response was ambiguous, leaving us unsure of his intentions.'
    ],
    level: 'C1'
  }
];

export function getRandomWords(level: Level, count: number): VocabularyWord[] {
  const wordsForLevel = vocabularyData.filter(word => word.level === level);
  
  // If we don't have enough words for this level, mix with adjacent levels
  if (wordsForLevel.length < count) {
    const allLevels = ['A1', 'A2', 'B1', 'B2', 'C1'];
    const currentIndex = allLevels.indexOf(level);
    const additionalWords = [];
    
    // Add words from adjacent levels
    if (currentIndex > 0) {
      additionalWords.push(...vocabularyData.filter(w => w.level === allLevels[currentIndex - 1]));
    }
    if (currentIndex < allLevels.length - 1) {
      additionalWords.push(...vocabularyData.filter(w => w.level === allLevels[currentIndex + 1]));
    }
    
    const combinedWords = [...wordsForLevel, ...additionalWords];
    return shuffleArray(combinedWords).slice(0, count);
  }
  
  return shuffleArray(wordsForLevel).slice(0, count);
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
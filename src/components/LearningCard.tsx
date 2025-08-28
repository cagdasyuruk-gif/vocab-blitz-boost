import { useState } from 'react';
import { VocabularyWord } from '../types/vocabulary';

interface LearningCardProps {
  word: VocabularyWord;
  onComplete: (understood: boolean) => void;
  soundEnabled: boolean;
}

type Step = 'word' | 'definition' | 'turkish' | 'examples' | 'choice';

export default function LearningCard({ word, onComplete, soundEnabled }: LearningCardProps) {
  const [step, setStep] = useState<Step>('word');

  const nextStep = () => {
    switch (step) {
      case 'word':
        setStep('definition');
        break;
      case 'definition':
        setStep('turkish');
        break;
      case 'turkish':
        setStep('examples');
        break;
      case 'examples':
        setStep('choice');
        break;
    }
  };

  const handleChoice = (understood: boolean) => {
    setStep('word'); // Reset for next word
    onComplete(understood);
  };

  const speakWord = () => {
    if (soundEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.english);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="vocabulary-card w-full max-w-lg p-8 space-y-6">
        
        {/* Word */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-vocabulary-blue mb-4" onClick={speakWord}>
            {word.english}
          </h2>
          {soundEnabled && (
            <button 
              onClick={speakWord}
              className="text-sm text-muted-foreground hover:text-vocabulary-blue transition-colors"
            >
              Tıklayarak telaffuz edin
            </button>
          )}
        </div>

        {/* Definition */}
        {step !== 'word' && (
          <div className="animate-fade-in">
            <p className="text-lg text-vocabulary-gray font-medium mb-2">Definition:</p>
            <p className="text-foreground">{word.definition}</p>
          </div>
        )}

        {/* Turkish */}
        {(step === 'turkish' || step === 'examples' || step === 'choice') && (
          <div className="animate-fade-in">
            <p className="text-lg text-vocabulary-gray font-medium mb-2">Türkçe:</p>
            <p className="text-xl text-vocabulary-blue font-semibold">{word.turkish}</p>
          </div>
        )}

        {/* Examples */}
        {(step === 'examples' || step === 'choice') && (
          <div className="animate-fade-in">
            <p className="text-lg text-vocabulary-gray font-medium mb-3">Examples:</p>
            <div className="space-y-2">
              {word.examples.map((example, index) => (
                <p key={index} className="text-foreground italic">
                  "{example}"
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Action Button or Choices */}
        <div className="flex justify-center pt-4">
          {step !== 'choice' ? (
            <button 
              onClick={nextStep}
              className="vocabulary-button px-8 py-3 text-lg"
            >
              {step === 'word' && 'Açıklamayı Gör'}
              {step === 'definition' && 'Türkçesini Gör'} 
              {step === 'turkish' && 'Örnekleri Gör'}
              {step === 'examples' && 'Devam Et'}
            </button>
          ) : (
            <div className="flex space-x-4 w-full">
              <button 
                onClick={() => handleChoice(true)}
                className="vocabulary-button flex-1 py-3 text-lg bg-vocabulary-success hover:bg-vocabulary-success/90"
              >
                Anladım
              </button>
              <button 
                onClick={() => handleChoice(false)}
                className="vocabulary-button-secondary flex-1 py-3 text-lg border-2 border-vocabulary-warning text-vocabulary-warning hover:bg-vocabulary-warning hover:text-white"
              >
                Daha Sonra
              </button>
            </div>
          )}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center space-x-2 pt-2">
          {['word', 'definition', 'turkish', 'examples', 'choice'].map((s, index) => (
            <div 
              key={s}
              className={`w-2 h-2 rounded-full ${
                ['word', 'definition', 'turkish', 'examples', 'choice'].indexOf(step) >= index
                  ? 'bg-vocabulary-blue' 
                  : 'bg-vocabulary-gray-light'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
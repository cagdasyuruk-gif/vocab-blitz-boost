import { useState } from 'react';
import { Settings, Volume2, VolumeX } from 'lucide-react';
import SettingsScreen from './components/SettingsScreen';
import LearningCard from './components/LearningCard';
import SessionComplete from './components/SessionComplete';
import AppHeader from './components/AppHeader';
import { VocabularyWord, Level } from './types/vocabulary';
import { getRandomWords } from './data/vocabulary';

type Screen = 'setup' | 'learning' | 'complete' | 'settings';

export interface AppSettings {
  soundEnabled: boolean;
  userName: string;
}

function App() {
  const [screen, setScreen] = useState<Screen>('setup');
  const [wordCount, setWordCount] = useState<number>(10);
  const [level, setLevel] = useState<Level>('A1');
  const [settings, setSettings] = useState<AppSettings>({
    soundEnabled: true,
    userName: ''
  });
  
  const [sessionWords, setSessionWords] = useState<VocabularyWord[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [reviewWords, setReviewWords] = useState<VocabularyWord[]>([]);

  const startSession = () => {
    const words = getRandomWords(level, wordCount);
    setSessionWords(words);
    setCurrentWordIndex(0);
    setReviewWords([]);
    setScreen('learning');
  };

  const handleWordComplete = (understood: boolean) => {
    const currentWord = sessionWords[currentWordIndex];
    
    if (!understood) {
      // Add to review list if not understood
      setReviewWords(prev => [...prev, currentWord]);
    }

    // Move to next word
    if (currentWordIndex < sessionWords.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      // Check if there are review words to add
      if (reviewWords.length > 0) {
        // Add review words to session
        setSessionWords(prev => [...prev, ...reviewWords]);
        setReviewWords([]);
        setCurrentWordIndex(prev => prev + 1);
      } else {
        // Session complete
        setScreen('complete');
      }
    }
  };

  const resetApp = () => {
    setScreen('setup');
    setCurrentWordIndex(0);
    setSessionWords([]);
    setReviewWords([]);
  };

  if (screen === 'settings') {
    return (
      <SettingsScreen 
        settings={settings}
        onSettingsChange={setSettings}
        onBack={() => setScreen(screen === 'learning' ? 'learning' : 'setup')}
        onExit={resetApp}
      />
    );
  }

  if (screen === 'complete') {
    return (
      <SessionComplete 
        onNewSession={resetApp}
        onSettings={() => setScreen('settings')}
      />
    );
  }

  if (screen === 'learning') {
    return (
      <div className="min-h-screen bg-background">
        <AppHeader 
          title={`Kelime ${currentWordIndex + 1}/${sessionWords.length}`}
          onSettings={() => setScreen('settings')}
          onBack={resetApp}
        />
        <LearningCard 
          word={sessionWords[currentWordIndex]}
          onComplete={handleWordComplete}
          soundEnabled={settings.soundEnabled}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader 
        title="Vocab Blitz"
        onSettings={() => setScreen('settings')}
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="vocabulary-card w-full max-w-md p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Vocab Blitz
            </h1>
            <p className="text-muted-foreground">
              Günlük İngilizce kelime öğrenin
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Günlük kelime sayısı
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setWordCount(10)}
                  className={`vocabulary-button ${
                    wordCount === 10 ? 'vocabulary-button' : 'vocabulary-button-secondary'
                  }`}
                >
                  10 Kelime
                </button>
                <button
                  onClick={() => setWordCount(20)}
                  className={`vocabulary-button ${
                    wordCount === 20 ? 'vocabulary-button' : 'vocabulary-button-secondary'
                  }`}
                >
                  20 Kelime
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Seviye seçin
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['A1', 'A2', 'B1', 'B2', 'C1'] as Level[]).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevel(lvl)}
                    className={`vocabulary-button ${
                      level === lvl ? 'vocabulary-button' : 'vocabulary-button-secondary'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={startSession}
              className="vocabulary-button w-full py-4 text-lg font-semibold"
            >
              Öğrenmeye Başla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
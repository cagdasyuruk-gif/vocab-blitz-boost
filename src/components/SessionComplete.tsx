import { CheckCircle } from 'lucide-react';
import AppHeader from './AppHeader';

interface SessionCompleteProps {
  onNewSession: () => void;
  onSettings: () => void;
}

export default function SessionComplete({ onNewSession, onSettings }: SessionCompleteProps) {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader 
        title="Tebrikler!"
        onSettings={onSettings}
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="vocabulary-card w-full max-w-md p-8 text-center space-y-6">
          
          <div className="text-vocabulary-success">
            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Tebrikler!
            </h2>
            <p className="text-muted-foreground">
              Günlük kelime öğrenme seansınızı başarıyla tamamladınız.
            </p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={onNewSession}
              className="vocabulary-button w-full py-4 text-lg font-semibold"
            >
              Yeni Seans Başlat
            </button>
            
            <button 
              onClick={onSettings}
              className="vocabulary-button-secondary w-full py-3"
            >
              Ayarlara Git
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
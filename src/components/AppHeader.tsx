import { ArrowLeft, Settings } from 'lucide-react';

interface AppHeaderProps {
  title: string;
  onSettings: () => void;
  onBack?: () => void;
}

export default function AppHeader({ title, onSettings, onBack }: AppHeaderProps) {
  return (
    <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {onBack && (
          <button 
            onClick={onBack}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
        )}
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>
      
      <button 
        onClick={onSettings}
        className="p-2 hover:bg-muted rounded-lg transition-colors"
      >
        <Settings className="w-5 h-5 text-foreground" />
      </button>
    </header>
  );
}
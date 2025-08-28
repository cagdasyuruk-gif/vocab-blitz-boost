import { useState } from 'react';
import { Volume2, VolumeX, User, LogOut } from 'lucide-react';
import AppHeader from './AppHeader';
import { AppSettings } from '../App';

interface SettingsScreenProps {
  settings: AppSettings;
  onSettingsChange: (settings: AppSettings) => void;
  onBack: () => void;
  onExit: () => void;
}

export default function SettingsScreen({ 
  settings, 
  onSettingsChange, 
  onBack, 
  onExit 
}: SettingsScreenProps) {
  const [tempUserName, setTempUserName] = useState(settings.userName);
  const [isEditingName, setIsEditingName] = useState(false);

  const toggleSound = () => {
    onSettingsChange({
      ...settings,
      soundEnabled: !settings.soundEnabled
    });
  };

  const saveName = () => {
    onSettingsChange({
      ...settings,
      userName: tempUserName
    });
    setIsEditingName(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader 
        title="Ayarlar"
        onSettings={() => {}}
        onBack={onBack}
      />
      
      <div className="p-4 space-y-4">
        
        {/* Sound Settings */}
        <div className="vocabulary-card p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {settings.soundEnabled ? (
                <Volume2 className="w-6 h-6 text-vocabulary-blue" />
              ) : (
                <VolumeX className="w-6 h-6 text-vocabulary-gray" />
              )}
              <div>
                <h3 className="font-semibold text-foreground">Ses Efektleri</h3>
                <p className="text-sm text-muted-foreground">
                  Kelime telaffuzları ve ses efektleri
                </p>
              </div>
            </div>
            <button
              onClick={toggleSound}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.soundEnabled ? 'bg-vocabulary-blue' : 'bg-vocabulary-gray-light'
              }`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="vocabulary-card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-vocabulary-blue" />
            <h3 className="font-semibold text-foreground">Kullanıcı Bilgileri</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                İsim
              </label>
              {isEditingName ? (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={tempUserName}
                    onChange={(e) => setTempUserName(e.target.value)}
                    className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground"
                    placeholder="İsminizi girin"
                  />
                  <button
                    onClick={saveName}
                    className="vocabulary-button px-4 py-2"
                  >
                    Kaydet
                  </button>
                  <button
                    onClick={() => setIsEditingName(false)}
                    className="vocabulary-button-secondary px-4 py-2"
                  >
                    İptal
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-foreground">
                    {settings.userName || 'İsim girilmemiş'}
                  </span>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="vocabulary-button-secondary px-4 py-2"
                  >
                    Düzenle
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Exit */}
        <div className="vocabulary-card p-6">
          <button
            onClick={onExit}
            className="flex items-center space-x-3 w-full text-left hover:bg-muted p-3 rounded-lg transition-colors"
          >
            <LogOut className="w-6 h-6 text-destructive" />
            <div>
              <h3 className="font-semibold text-destructive">Çıkış Yap</h3>
              <p className="text-sm text-muted-foreground">
                Ana ekrana dön
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
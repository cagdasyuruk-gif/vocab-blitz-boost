import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2ea5a7fb5e10436cbc689fc79e23e2e1',
  appName: 'vocab-blitz',
  webDir: 'dist',
  server: {
    url: 'https://2ea5a7fb-5e10-436c-bc68-9fc79e23e2e1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
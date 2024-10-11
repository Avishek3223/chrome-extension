declare module 'vite' {
    interface UserConfig {
      logLevel?: 'info' | 'warn' | 'error' | 'silent';
    }
  }
  
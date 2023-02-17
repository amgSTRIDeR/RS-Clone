export default class LanguageManager {
  private static instance: LanguageManager;

  private language: string;

  private constructor() {
    this.language = 'en';
  }

  public static getInstance(): LanguageManager {
    if (!LanguageManager.instance) {
      LanguageManager.instance = new LanguageManager();
    }
    return LanguageManager.instance;
  }

  public setLanguage(language: string): void {
    this.language = language;
    localStorage.setItem('language', language);
  }

  public getLanguage(): string {
    const language = localStorage.getItem('language');
    if (language) {
      this.language = language;
    }
    return this.language;
  }
}

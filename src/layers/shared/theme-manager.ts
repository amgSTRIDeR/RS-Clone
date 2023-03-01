export default class ThemeManager {
  private static instance: ThemeManager;

  private theme: string;

  private constructor() {
    this.theme = 'corporate';
  }

  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  public setTheme(theme: string): void {
    this.theme = theme;
    localStorage.setItem('theme', theme);
  }

  public getTheme(): string {
    const Theme = localStorage.getItem('theme');
    if (Theme) {
      this.theme = Theme;
    }
    return this.theme;
  }
}

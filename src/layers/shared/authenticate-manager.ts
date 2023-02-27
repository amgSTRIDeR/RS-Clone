export default class AuthenticateManager {
  private static instance: AuthenticateManager;

  public static getInstance(): AuthenticateManager {
    if (!AuthenticateManager.instance) {
      AuthenticateManager.instance = new AuthenticateManager();
    }
    return AuthenticateManager.instance;
  }

  public setId(id: string): void {
    localStorage.setItem('id', id);
    window.dispatchEvent(new Event('idChange'));
  }

  public deleteId() {
    localStorage.removeItem('id');
    window.dispatchEvent(new Event('idChange'));
  }

  public checkId() {
    return !!localStorage.getItem('id');
  }

  public getId() {
    if (localStorage.getItem('id')) {
      return localStorage.getItem('id');
    }
    return '';
  }
}

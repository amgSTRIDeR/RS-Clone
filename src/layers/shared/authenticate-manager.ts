/* eslint-disable class-methods-use-this */
export default class AuthenticateManager {
  private static instance: AuthenticateManager;

  public static getInstance(): AuthenticateManager {
    if (!AuthenticateManager.instance) {
      AuthenticateManager.instance = new AuthenticateManager();
    }
    return AuthenticateManager.instance;
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
    window.dispatchEvent(new Event('tokenChange'));
  }

  public deleteToken() {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('tokenChange'));
  }

  public checkToken() {
    return !!localStorage.getItem('token');
  }
}

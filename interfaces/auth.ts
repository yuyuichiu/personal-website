export default interface authInterface {
  isAuthenticated: boolean,
  username: string | null,
  role: number,
  onLogin: () => void,
  onLogout: () => void
}
import { createContext } from "react";
import type authInterface from "../interfaces/auth";

// Default value.
// Only will be adapted if used outside any provider
const AuthContext = createContext<authInterface>({
  isAuthenticated: false,
  username: null,
  role: 1,
  onLogin: () => {},
  onLogout: () => {}
})

export default AuthContext
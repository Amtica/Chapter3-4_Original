import { createContext, useContext, useState } from "react";
//import { jwtDecode } from "jwt-decode";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getUserFromToken());

  function getUserFromToken() {
    const token = localStorage.getItem("token");

    if (!token) return null;

    try {
      return jwtDecode(token);
    } catch {
      return null;
    }
  }

  function login(token) {
    localStorage.setItem("token", token);
    setUser(jwtDecode(token));
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

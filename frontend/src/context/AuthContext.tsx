import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { loginUser } from "../helpers/api-communicator";


type User = {
  password: string,
  email: string,
}

type UserAuth = {
  isLoggedIn: boolean,
  user: User | null,
  login: (email: string, password: string) => Promise<void>,
  signup: (email: string, name: string, password: string) => Promise<void>,
  logout: () => Promise<void>
}

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => { }, []);

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, password: data.password })
      setIsLoggedIn(true);
    }
  };
  const signup = (email: string, name: string, password: string) => { };
  const logout = () => { }

  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
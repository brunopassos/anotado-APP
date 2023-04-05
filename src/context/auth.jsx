import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    setIsLoggedIn(!isLoggedIn);
  }  

  const handleLogout = async () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleLogout,
        isLoggedIn,        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

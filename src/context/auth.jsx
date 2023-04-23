import { createContext, useState } from "react";
import { Api } from "../services";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userNotes, setUserNotes] = useState([]);

  const [isLoadding, setIsLoadding] = useState(false);

  const handleLogin = async () => {
    setIsLoggedIn(!isLoggedIn);
  }  

  const handleLogout = async () => {
    setIsLoggedIn(!isLoggedIn);
  }

  const getUserToken = async () => {
    const TOKEN = await AsyncStorage.getItem("@anotado_userToken");
    const objToken = JSON.parse(TOKEN);
    getUserNotes(objToken.token);
  }

  const getUserNotes = async (TOKEN) => {
    Api.get("/user/notes/me", {
        headers: {
            "Authorization" : `Bearer ${TOKEN}`
        }
    })
    .then((res) => setUserNotes(res.data))
    .then(_ => setIsLoadding(false))
    .catch( err => console.error(err.response.data));
}

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleLogout,
        isLoggedIn, 
        isLoadding,
        setIsLoadding,
        getUserNotes,
        userNotes,
        setUserNotes,
        getUserToken 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

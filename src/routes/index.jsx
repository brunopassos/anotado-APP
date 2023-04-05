import { useContext } from "react";

import { AuthRoutes } from "./auth.routes";
import { PublicRoutes } from "./public.routes";
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from "../context/auth";

export function Routes(){

    const { isLoggedIn } = useContext(AuthContext);
    
    return(
        <NavigationContainer>
            {isLoggedIn ?  <PublicRoutes/> : <AuthRoutes/>}      
        </NavigationContainer>
    )
}
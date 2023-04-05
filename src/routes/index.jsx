import { AuthRoutes } from "./auth.routes";
import { PublicRoutes } from "./public.routes";
import { NavigationContainer } from '@react-navigation/native';

export function Routes(){
    const rota = false;
    return(
        <NavigationContainer>
            {rota ?  <PublicRoutes/> : <AuthRoutes/>}      
        </NavigationContainer>
    )
}
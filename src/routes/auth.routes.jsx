import { Dashboard } from "../screens/Dashboard";
import { AddNote } from "../screens/AddNote";
import { ViewNote } from "../screens/ViewNote";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Stack.Navigator initialRouteName='Dashboard' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="AddNote" component={AddNote}/>
            <Stack.Screen name="ViewNote" component={ViewNote}/>
        </Stack.Navigator>
    )
}
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Pages/Login';
import Register from './Pages/Register'
import RecoverPassword from './Pages/RecoverPassword';
import Emailconfirmation from './Pages/Emailconfirmation';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
              name="Login"
              component={Login}
              options={{headerShown: false}}
              />  
            <Stack.Screen 
              name="Register"
              component={Register}
              options={{headerShown: false}}
              />
              <Stack.Screen 
              name="RecoverPassword"
              component={RecoverPassword}
              options={{headerShown: false}}
              />
              <Stack.Screen 
              name="Emailconfirmation"
              component={Emailconfirmation}
              options={{headerShown: false}}
              />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;
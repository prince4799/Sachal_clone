import 'react-native-gesture-handler'

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import MobileVerification from '../screens/MobileVerification/MobileVerification.jsx'
import Punch from '../screens/Punch/Punch.jsx';
import Registration from '../screens/Registration/Registration.jsx';


const Stack = createNativeStackNavigator();

const AppStack = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Registration" >
        <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
        <Stack.Screen name="MobileVerification" component={MobileVerification} options={{headerShown:false}}/>
        <Stack.Screen name="Punch" component={Punch} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default AppStack;

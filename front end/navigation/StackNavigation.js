import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <TabNavigation />
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="wallet" component={Wallet} />
    // </Stack.Navigator>
  );
};

// export const OnboardStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Splashscreen" component={SplashScreen} />
//     </Stack.Navigator>
//   );
// };

const AuthStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return <AuthStack />;
};

export default StackNavigation;

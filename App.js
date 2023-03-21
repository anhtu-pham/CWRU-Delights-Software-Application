import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer';
import SplashScreen from './screens/Welcome/Welcome.js';
import { OnboardingScreen1, OnboardingScreen2, OnboardingScreen3 } from './screens/Onboarding/Onboarding.js';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding1"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={CustomDrawer} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
          <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
          <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
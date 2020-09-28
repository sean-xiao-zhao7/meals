import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// navigator
import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = async (setLoaded) => {
  await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  setLoaded(true);
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    fetchFonts(setLoaded);
    return <AppLoading />;       
  }

  return (
    <MealsNavigator />
  );
}
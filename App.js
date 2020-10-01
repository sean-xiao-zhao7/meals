import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// navigator
import MealsNavigator from './navigation/MealsNavigator';

// reducers
import mealsReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

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
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
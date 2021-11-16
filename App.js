import 'react-native-gesture-handler';
import React from 'react';
import AppStack from "./src/stacks/AppStack";
import ThemeState from './src/context/theme/themeState';

export default function App () {
  return (
    <ThemeState>
      <AppStack />
    </ThemeState>
  )
}
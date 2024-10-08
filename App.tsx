/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {config} from '@gluestack-ui/config'; // Optional if you want to use default theme
import React from 'react';
import AppGluestackUIProvider from './src/components/providers/AppGluestackUIProvider';
import AppNavigation from './src/navigation';
import 'react-native-gesture-handler';

function App() {
  return (
    <AppGluestackUIProvider config={config}>
      <AppNavigation />
    </AppGluestackUIProvider>
  );
}

export default App;

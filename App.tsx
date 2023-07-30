/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren, useRef } from 'react';
import {
  NavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { RootNavigation } from './src/navigation';
import type { RootStackParamList } from './src/types/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

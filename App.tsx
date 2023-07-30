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

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

import { RootNavigation } from './src/navigation';
import type { RootStackParamList } from './src/types/navigation';

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList>>(null);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}>
      <SafeAreaProvider style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer ref={navigationRef}>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </PersistQueryClientProvider>
  );
};

export default App;

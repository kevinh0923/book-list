import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BookDetailScreen, BookListScreen } from '../screens';
import { RootStackParamList } from '../types/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => (
  <RootStack.Navigator initialRouteName="BookList">
    <RootStack.Screen
      component={BookListScreen}
      name="BookList"
      options={{
        headerTitle: 'Book List',
      }}
    />
    <RootStack.Screen component={BookDetailScreen} name="BookDetail" />
  </RootStack.Navigator>
);

export default RootNavigation;

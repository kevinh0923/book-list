import React, { PropsWithChildren } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

type ScreenProps = PropsWithChildren<{
  header?: JSX.Element;
}>;

export const Screen: React.FC<ScreenProps> = ({ header, children }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.header}>{header ? header : null}</View>
      <View style={styles.content}>{children}</View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
});

export default Screen;

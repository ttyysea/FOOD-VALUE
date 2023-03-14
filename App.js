/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Navigation from './src/navigation';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  
} from 'react-native';






const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1C1D1B',
    
  
  }
});

export default App;

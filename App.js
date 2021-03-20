import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CarsList from './Components/CarsList';
import Header from './Components/Header'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <CarsList/>

      <StatusBar style={'auto'} hidden={true} showHideTransition={'fade','slide'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 1,
        paddingTop : Platform.OS === "android" && 40,
      }}>
        <Routes />
      </View>
      <StatusBar backgroundColor='rgba(7, 26, 93, 255)' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7, 26, 93, 255)',
  }
});

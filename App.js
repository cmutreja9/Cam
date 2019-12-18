import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraX from './src/CameraX'
import RNCameraX from './src/RNCameraX'
import Picke from './src/Picke'
import Picker from './src/Picker'

export default function App() {
  return (
   <Picker />
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraX from './src/CameraX'

export default function App() {
  return (
    <CameraX />
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

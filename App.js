import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import { useState } from 'react';

export default function App() {
  const {name, setName} = useState("Swatantra")
  return (
  
      <About name={name}></About>
    
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

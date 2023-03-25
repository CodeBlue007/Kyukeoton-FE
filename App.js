// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet,Button,Alert, Text, View } from 'react-native';
// import Navigation from './pages/navigation/index';
import * as React from "react";
import Navigation from "./pages/navigation/index";
import { RecoilRoot } from "recoil";


function App() {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

export default App;


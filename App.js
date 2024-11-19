import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme, View, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = StyleSheet.create({
    background: {
      backgroundColor: isDarkMode ? 'black' : 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  const textStyle = StyleSheet.create({
    text: {
      color: isDarkMode ? 'white' : 'black',
      fontSize: 24,
    }
  });

  return (
    <SafeAreaView style={backgroundStyle.background}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={textStyle.text}>This is My First React Native Application</Text>
    </SafeAreaView>
  );
}

export default App;g
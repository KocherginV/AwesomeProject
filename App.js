import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Here are some boxes of different colours
        </Text>
      </View>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  container: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default App;

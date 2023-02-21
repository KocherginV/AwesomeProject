import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Here are some boxes of different colours
        </Text>
      </View>
      <View style={[styles.container, styles.cyan]}>
        <Text style={styles.textArea}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.container, styles.blue]}>
        <Text style={styles.textArea}>Blue #268bd2</Text>
      </View>
      <View style={[styles.container, styles.magenta]}>
        <Text style={styles.textArea}>Magenta #d33682</Text>
      </View>
      <View style={[styles.container, styles.orange]}>
        <Text style={styles.textArea}>Orange #cb4b16</Text>
      </View>
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
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  textArea: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
});

export default App;

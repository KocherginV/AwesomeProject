import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.container, boxColor]}>
      <Text style={styles.textArea}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  textArea: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
});

export default ColorBox;

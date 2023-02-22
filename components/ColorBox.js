import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
  const boxColor = {
    backgroundColor: props.hexCode,
  };
  const textStyle = {
    color:
      parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.container, boxColor]}>
      <Text style={[styles.textArea, textStyle]}>
        {props.colorName}: {props.hexCode}
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

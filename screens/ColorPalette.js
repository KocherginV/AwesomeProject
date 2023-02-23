import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
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
    backgroundColor: 'white',
  },
});

export default ColorPalette;

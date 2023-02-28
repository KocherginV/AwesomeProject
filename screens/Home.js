import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleColorsFetch = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    if (result.ok) {
      const palettes = await result.json();
      setPalettes(palettes);
    }
  }, []);
  useEffect(() => {
    handleColorsFetch();
  }, [handleColorsFetch]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleColorsFetch();
    setIsRefreshing(false);
  }, [handleColorsFetch]);

  return (
    <FlatList
      style={styles.list}
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('AddNewPaletteModal');
          }}
        >
          <Text style={styles.buttonText}>Launch Modal</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 0,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'teal',
  },
});

export default Home;

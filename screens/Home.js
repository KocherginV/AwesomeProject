import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const newPalette = route.params ? route.params.newPalette : null;

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

  useEffect(() => {
    if (newPalette) {
      setPalettes((palettes) => [newPalette, ...palettes]);
    }
  }, [newPalette]);

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
          <Text style={styles.buttonText}>Add a color palette</Text>
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

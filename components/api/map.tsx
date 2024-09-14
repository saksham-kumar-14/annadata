import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default function Map() {
  return (
    <ScrollView style={styles.container}>
      <Text>Map</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

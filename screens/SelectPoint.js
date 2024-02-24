import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const SelectPoint = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const navigation = useNavigation();

  const handlePress = (e) => {
    setSelectedPosition({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const confirmLocation = () => {
    if (!selectedPosition) {
      Alert.alert("Select a location");
      return;
    }
    navigation.navigate('MeetUpCreate', {
      location: selectedPosition,
    });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onPress={handlePress} initialRegion={{
        latitude: 37.5665,
        longitude: 126.9780,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        {selectedPosition && <Marker coordinate={selectedPosition} />}
      </MapView>
      <Button title="Check the location" onPress={confirmLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default SelectPoint;
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const UserLocationMap = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      {currentPosition ? (
        <>
          <MapView
            style={styles.map}
            initialRegion={currentPosition}
          >
            <Marker
              coordinate={currentPosition}
              title="You are here"
            />
          </MapView>
          <Button
            title="확인"
            onPress={() => navigation.navigate('MeetUpCategory', {
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
           })}
          />
        </>
      ) : null}
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

export default UserLocationMap;

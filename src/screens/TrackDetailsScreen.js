import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((track) => track._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View style={styles.continer}>
      <Text style={styles.text}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    margin: 15,
    height: 300,
  },
  continer: {
    flex: 1,
    backgroundColor: "white",
  },
  text:{
    marginTop:10,
    fontSize:25,
    alignSelf:'center'
  }
});

export default TrackDetailsScreen;

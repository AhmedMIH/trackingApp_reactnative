import React, { useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <View style={styles.continer}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetails", { _id: item._id })
              }
            >
              <ListItem style={styles.item}>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

TrackListScreen.navigationOptions = {
    title:'Tracks',
    headerTitleAlign:'center'
}

const styles = StyleSheet.create({
    continer:{
        flex:1,
        backgroundColor:'white'
    },
    item:{
        borderBottomColor:'black',
        borderBottomWidth:0.5,
    }
});

export default TrackListScreen;

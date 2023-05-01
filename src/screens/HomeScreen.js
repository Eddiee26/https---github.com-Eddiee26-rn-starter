import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
const HomeScreen = ({navigation}) => {
  console.log(navigation)
  return (
    <View>
    <Text style={styles.text}>Home Page</Text>
      <View style={styles.space}></View>

      <Button
        onPress={() => navigation.navigate("Component")}
        title="Go to Component"
      />
      <View style={styles.space}></View>

      <Button
        onPress={() => navigation.navigate("ListComponet")}
        title="Go to List"
      />
      <View style={styles.space}></View>
      <Button
        onPress={() => navigation.navigate("ImageComponent")}
        title="Go to Image"
      />

    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  space:{
    height:10,
    width:10
    
  }
});
export default HomeScreen

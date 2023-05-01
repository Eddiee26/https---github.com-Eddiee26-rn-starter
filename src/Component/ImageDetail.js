import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const ImageDetail = props => {
  return (

    <View>
        <Image source={props.imageSource}/>
      <View style={styles.space}></View>

        <Text style={styles.text}>{props.title}</Text>
      <View style={styles.space}></View>

        <Text style={styles.text}>Image Score: {props.score}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    space: {
      height: 10,
      width: 10,
    },
    text: {
     marginLeft:10,
     fontSize:15,fontWeight:600
    },
  });

export default ImageDetail
import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

const MyFirstComponent = () => {
     const Myname="Aditya Thakur"
  return (
    <View>
    <Text style={[styles.textStyle]}> This is the component screen..My first screen.</Text>
    <Text style={[styles.textStyle2]}> My Name is {Myname}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
textStyle:{
    fontSize:35,
    color:'#663399'
},
textStyle2:{
    fontSize:20,
    color:'#ff0000'
},

});

export default MyFirstComponent
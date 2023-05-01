import React,{useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CounterScreen = () => {
const[counter, setCounter]= useState(0);
    return (
   <View>
    <Button title='Increase'onPress={()=>{
        setCounter(counter+1)
    }}></Button>
    <View style={styles.space}></View>
    <Button title='Decrease'onPress={()=>{
        setCounter(counter-1)
    }}></Button>
    <Text>Counter is : {counter}</Text>
   </View>
  )
}

const styles= StyleSheet.create({
space:{
    height:10,
    width:10
}
});


export default CounterScreen
import React from 'react'
import { View, StyleSheet , Text, Button} from 'react-native'


const ColorCounterScreen = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
        <View style={styles.space}></View>
        <Text>{color}</Text>
        <Button title={`Increase ${color}`} onPress={()=>{
            onIncrease()
        }}/>
        <View style={styles.space}></View>
        <Button title={`Decrease ${color}`}  onPress={()=>{
            onDecrease()
        }}/>

    </View>  
  )
}
const styles= StyleSheet.create({
    space: {
        height: 10,
        width: 10,
      },
});

export default ColorCounterScreen
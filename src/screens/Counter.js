import React,{useReducer} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CounterScreen = () => {

const reducer=(state, action)=>{
    switch(action.type){
        case 'Increase':
           
            return {...state, count: state.count+ 1}
        case 'Decrease': 
         
        return {...state, count: state.count-1}  
    }
}
const [state, dispatch] = useReducer(reducer,{count:0})

    return (
   <View>
    <Button title='Increase'onPress={()=>{
        dispatch({type:'Increase'})
    }}></Button>
    <View style={styles.space}></View>
    <Button title='Decrease'onPress={()=>{
        dispatch({type:'Decrease'})
    }}></Button>
    <Text>Counter is : {state.count}</Text>
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
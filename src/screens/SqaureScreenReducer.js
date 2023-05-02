import React, { useState,useReducer } from 'react'
import { View, StyleSheet } from 'react-native'
import ColorCounterScreen from '../Component/ColorCounter';


const SqaureScreenReducer = () => {

const reducer= (state, action)=>{
        switch(action.colorToChange){
            case 'red':
               return state.red + action.amount > 256 || state.red + action.amount < 0? state:{...state, red: state.red + action.amount}
        
                case'green':
                return state.green + action.amount > 256 || state.green + action.amount < 0? state:{...state, green: state.green+ action.amount}

                case'blue':
                return state.blue + action.amount > 256 || state.blue + action.amount < 0? state:{...state, blue: state.blue+ action.amount}

                default:
                    return state;
        }
}
const  [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0 })
const{red, green, blue}= state;
    const ColorsIncrement = 15;

   
    return (
        <View>
            <ColorCounterScreen color={"Red"} onIncrease={() => dispatch({colorToChange:'red', amount:ColorsIncrement})}
                onDecrease={() =>  dispatch({colorToChange:'red', amount: -1*ColorsIncrement})} />
            <ColorCounterScreen color={"Green"} onIncrease={() => dispatch({colorToChange:'green', amount:ColorsIncrement})}
                onDecrease={() => dispatch({colorToChange:'green', amount: -1*ColorsIncrement})} />
            <ColorCounterScreen color={"Blue"} onIncrease={() => dispatch({colorToChange:'blue', amount:ColorsIncrement})}
                onDecrease={() => dispatch({colorToChange:'blue', amount: -1*ColorsIncrement})} />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} ></View>
        </View>
    )
}
const style = StyleSheet.create({

});
export default SqaureScreenReducer
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ColorCounterScreen from '../Component/ColorCounter';

const SquareScreen = () => {
    const ColorsIncrement = 15;
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    console.log(red)

    const setColor = (color, change) => {
        if (color === 'red') {
            if (red + change > 256 || red + change < 0) {
                return;
            }else{
                setRed(red+change)
            }
        }
        if ('blue' === color) {
            if (blue + change > 256 || blue + change < 0) {
                return;
            }else{
                setBlue(blue+change)
            }
        }
        if ('green' === color) {
            if (green + change > 256 || green + change < 0) {
                return;
            }else{
                setGreen(green+change)
            }
        }
    }
    return (
        <View>
            <ColorCounterScreen color={"Red"} onIncrease={() => setColor('red',ColorsIncrement)}
                onDecrease={() => setColor('red' , -ColorsIncrement)} />
            <ColorCounterScreen color={"Green"} onIncrease={() => setColor('green' , ColorsIncrement)}
                onDecrease={() => setColor('green' , -ColorsIncrement)} />
            <ColorCounterScreen color={"Blue"} onIncrease={() => setColor('blue' , ColorsIncrement)}
                onDecrease={() => setColor('blue' , -ColorsIncrement)} />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} ></View>
        </View>
    )
}
const style = StyleSheet.create({

});



export default SquareScreen
import React, { useState } from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {
    const [color, setColor] = useState([])
    return (
        <View>
            <Button title="Add color" onPress={() => {
                setColor([...color, randomColors()])
            }} />

            <FlatList horizontal={true}
                data={color}
                renderItem={
                    ({item}) => {
                        {
                            return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                        }
                    }}
                keyExtractor={(item) => item}>
            </FlatList>

            <FlatList horizontal={true}
                data={color}
                renderItem={
                    ({item}) => {
                        {
                            return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                        }
                    }}
                keyExtractor={(item) => item}>
            </FlatList>
        </View>
    )
}

const randomColors = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}
const styles = StyleSheet.create({

})

export default ColorScreen
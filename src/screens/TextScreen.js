import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'


const TextScreen = () => {
    const [name, SetName] = useState("")
    const [password, SetPassword] = useState("")


    return (
        <View>
            <Text style={styles.txtLabel}>Enter Name</Text>
            <TextInput style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={newvalue => SetName(newvalue)}
            ></TextInput>
            <Text style={styles.txtLabel}>My Name is {name}</Text>

            <Text style={styles.txtLabel}>Enter Password</Text>
            <TextInput style={styles.input}
            secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={newvalue => SetPassword(newvalue)}
            ></TextInput>
            { password.length<5? <Text style={styles.txtValidation}>Password length must greater than 5</Text>: null}

        </View>

    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    txtValidation: {
        margin: 10,
       color:'red'
    },
    txtLabel: {
        margin: 10,
       color:'black'
    }
})
export default TextScreen
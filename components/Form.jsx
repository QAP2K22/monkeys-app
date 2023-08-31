import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'

const Form = () => {
    const [name,setName] = useState("")
    return (
        <View>
            <Text style={{textAlign:"center"}}>Digite deu nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                placeholder='Digite seu nome'
            />

            <Button
                title="Enviar"
                onPress={() => alert(`Nome enviado com sucesso! Nome: ${name.length > 0 ?name : "Sem nome"}`)
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "black"
    },
});

export default Form
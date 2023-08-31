import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import RandomNumber from './RandonNumber'

const RandomNumberPage = ({number}) => {
    const [numero,setNumero] = useState("Numero")

    function isCrazy(returnNumber) {
        setNumero(returnNumber)
    }

    return (
        <View>
            <Text style={{textAlign:"center"}}>Numero aleatori33o</Text>
            <Text style={{textAlign:"center"}}>{numero}</Text>

            <RandomNumber min={1} max={20}  number={isCrazy}/>
        </View>
    )
}

export default RandomNumberPage
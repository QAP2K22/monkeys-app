import React from 'react'
import { Text } from 'react-native'

const NumeroAleatorio = (props) => {

    const { min, max } = props
    const minValue = Math.min(max,min)
    const maxValue = Math.max(max,min)
    
    return (
        <Text>{`Número aleatório entre ${min} e ${max}: ${Math.floor(Math.random() * (maxValue-minValue)+minValue)}`}</Text>
    )
}

export default NumeroAleatorio
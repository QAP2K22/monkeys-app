import React from 'react'
import { Button, Text } from 'react-native'

const RandomNumber = ({min,max,number}) => { 

    const minValue = Math.min(max, min)
    const maxValue = Math.max(max, min)

    function generateNumberAndReturn() {
       number(Math.floor(Math.random() * (maxValue-minValue)+minValue))
    }

    return (
        <Button
            title="Obter numero"
            onPress={() => generateNumberAndReturn()}
        />
    )
}

export default RandomNumber
import React from 'react'
import { Text } from 'react-native'

const MinMax = (props) => {
 
    const {min,max} = props
 
    return (
    /* <Text>{min>max?`${min} é maior que ${max}`:`${max} é maior que ${min}`}</Text> */

    <Text>{`${Math.max(min,max)} é maior que ${Math.min(min,max)}`}</Text>
  )
}

export default MinMax
import React from 'react'
import { Text } from 'react-native'

const MinMax = ({min,max}) => {
  return (
    <Text>{`${Math.max(min,max)} é maior que ${Math.min(min,max)}`}</Text>
  )
}

export default MinMax
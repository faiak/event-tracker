import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const BottomButton = ({ onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default BottomButton

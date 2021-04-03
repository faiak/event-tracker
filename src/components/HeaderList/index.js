import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

const HeaderList = ({ modalSort, isGridMode, setIsGridMode }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => modalSort.current.show(true)}
        style={styles.button}>
        <Text>Sort By</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsGridMode(!isGridMode)}
        style={styles.button}>
        <Text>{isGridMode ? 'List' : 'Grid'} Mode</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderList

import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const GridItem = ({ item }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Event', {
          eventId: item.id
        })
      }
      style={styles.cardItem}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: item.thumbnail
        }}
      />
      <View style={styles.textWrapper}>
        <Text>{item.name}</Text>
        <Text style={styles.textDetail}>
          {item.location} {!item.is_paid && '| Free'}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default GridItem

import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { removeEvent } from '../../stores/actions/user.action'
import styles from './styles'

const ListItem = ({ item, removeable }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Event', {
          eventId: item.id
        })
      }
      style={styles.card}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: item.thumbnail
        }}
      />
      <View style={styles.textWrapper}>
        <Text>{item.name}</Text>
        <Text>
          {item.location} {!item.is_paid && '| Free'}
        </Text>
      </View>
      {removeable && (
        <TouchableOpacity
          onPress={() => dispatch(removeEvent(item.id))}
          style={styles.removeButton}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  )
}

export default ListItem

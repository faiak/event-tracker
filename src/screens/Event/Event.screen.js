import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import BottomButton from '../../components/BottomButton'
import { trackEvent } from '../../stores/actions/user.action'
import styles from './Event.style'

const Event = ({ route, navigation, events }) => {
  const { eventId } = route.params
  const event = events.find(obj => obj.id == eventId)
  const dispatch = useDispatch()
  return (
    <>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{
            uri: event.thumbnail
          }}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.name}>{event.name}</Text>
          <Text>
            {event.location} {!event.is_paid && '| Free'}
          </Text>
        </View>
        <BottomButton
          onPress={() => {
            dispatch(trackEvent(event.id))
            Alert.alert('Event Added!')
          }}
          label="Track This Event!"
        />
      </View>
    </>
  )
}

const mapStateToProps = state => {
  return {
    events: state.eventReducer.events
  }
}

export default connect(mapStateToProps, null)(Event)

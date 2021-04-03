import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import ListList from '../../components/ListList'
import styles from './Profile.style'

const Profile = ({ navigation, event, name }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <View style={styles.outerWrapper}>
        <Text style={styles.welcomeText}>Hello {name} !</Text>
        <ListList event={event} removeable />
      </View>
    </>
  )
}

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
    event: state.eventReducer.events.filter(item =>
      state.userReducer.selectedEvent[state.userReducer.name].includes(item.id)
    )
  }
}

export default connect(mapStateToProps, null)(Profile)

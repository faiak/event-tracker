import React from 'react'
import { View, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import BottomButton from '../../components/BottomButton'
import { setName } from '../../stores/actions/user.action'
import styles from './Welcome.styles'

const Welcome = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const [text, onChangeText] = React.useState('')
  return (
    <>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Your Name"
        />
        <BottomButton
          onPress={() => {
            dispatch(setName(text))
            navigation.navigate('Home')
          }}
          label="Login"
        />
      </View>
    </>
  )
}

export default Welcome

import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { sortEvent } from '../../stores/actions/user.action'
import styles from './styles'

const ModalSort = forwardRef(({}, ref) => {
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()

  useImperativeHandle(ref, () => ({
    show() {
      setModalVisible(true)
    }
  }))

  const sortList = [
    {
      id: 'name',
      label: 'Name'
    },
    {
      id: 'location',
      label: 'Location'
    },
    {
      id: 'is_paid',
      label: 'Type'
    }
  ]

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}>
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          {sortList.map(val => (
            <TouchableOpacity
              key={val.id.toString()}
              onPress={() => {
                setModalVisible(!modalVisible)
                dispatch(sortEvent(val.id))
              }}
              style={styles.buttonSort}>
              <Text>{val.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Pressable>
    </Modal>
  )
})

export default ModalSort

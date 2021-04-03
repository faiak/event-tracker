import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modalView: {
    marginHorizontal: 23,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 13,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  buttonSort: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 3,
    borderWidth: 1,
    marginVertical: 4
  }
})

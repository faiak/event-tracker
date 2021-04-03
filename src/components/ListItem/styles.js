import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 13,
    borderRadius: 5,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  },
  thumbnail: { width: 75, height: 75, borderRadius: 5 },
  textWrapper: { paddingLeft: 21 },
  removeButton: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    paddingHorizontal: 8
  },
  removeText: { color: 'white' }
})

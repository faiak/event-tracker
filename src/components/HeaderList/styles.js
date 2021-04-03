import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginHorizontal: 13,
    paddingBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#AFAFAF',
    paddingHorizontal: 8,
    marginRight: 8
  }
})

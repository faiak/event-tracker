import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cardItem: {
    paddingBottom: 13,
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  },
  thumbnail: {
    width: '100%',
    height: 100,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  },
  textWrapper: { paddingLeft: 5, paddingTop: 5 },
  textDetail: { fontSize: 10 }
})

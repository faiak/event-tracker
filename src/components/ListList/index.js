import React from 'react'
import { FlatList } from 'react-native'
import ListItem from '../ListItem'

const ListList = ({ event, removeable }) => {
  return (
    <FlatList
      key={'#'}
      data={event}
      renderItem={({ item }) => (
        <ListItem item={item} removeable={removeable} />
      )}
      numColumns={1}
      keyExtractor={(item, idx) => idx.toString()}
    />
  )
}

export default ListList

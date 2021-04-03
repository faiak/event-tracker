import React from 'react'
import { FlatList } from 'react-native'
import GridItem from '../GridItem'

const GridList = ({ event }) => (
  <FlatList
    key={'_'}
    data={event}
    renderItem={({ item }) => <GridItem item={item} />}
    numColumns={2}
    keyExtractor={(item, idx) => `key_${idx}`}
  />
)

export default GridList

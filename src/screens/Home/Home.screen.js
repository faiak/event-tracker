import React, { useRef, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import styles from './Home.style'
import { connect } from 'react-redux'
import ModalSort from '../../components/ModalSort'
import GridList from '../../components/GridList'
import ListList from '../../components/ListList'
import HeaderList from '../../components/HeaderList'

const Home = ({ navigation, event, userSort }) => {
  const modalSort = useRef()

  const [isGridMode, setIsGridMode] = useState(true)

  return (
    <>
      <ModalSort ref={modalSort} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <HeaderList
            modalSort={modalSort}
            isGridMode={isGridMode}
            setIsGridMode={setIsGridMode}
          />
          {isGridMode ? <GridList event={event} /> : <ListList event={event} />}
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  const sortKey = state.userReducer.userSort[state.userReducer.name]
  return {
    userSort: state.userReducer.userSort,
    event: state.eventReducer.events.sort((a, b) =>
      a[sortKey] > b[sortKey] ? 1 : b[sortKey] > a[sortKey] ? -1 : 0
    )
  }
}

export default connect(mapStateToProps, null)(Home)

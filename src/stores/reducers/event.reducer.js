const initialState = {
  events: [
    {
      id: 1,
      name: 'Metallica Concert',
      is_paid: true,
      thumbnail:
        'http://wtsindiamedia.s3.amazonaws.com/sitemedia/2011/10/DSC_1154-1024x685.jpg',
      location: 'Palace Grounds'
    },
    {
      id: 2,
      name: 'Saree Exhibition',
      is_paid: false,
      thumbnail: 'https://metrosaga.com/wp-content/uploads/2019/04/3-5.png',
      location: 'Malleswaram Grounds'
    },
    {
      id: 3,
      name: 'Wine tasting event',
      is_paid: true,
      thumbnail:
        'https://specials-images.forbesimg.com/imageserve/1097618582/960x0.jpg?fit=scale',
      location: 'Links Brewery'
    },
    {
      id: 4,
      name: 'Startups Meet',
      is_paid: true,
      thumbnail:
        'https://www.yesdelft.com/wp-content/themes/yootheme/cache/meet-the-startups-f4e8b2d0.png',
      location: 'Kanteerava Indoor Stadium'
    },
    {
      id: 5,
      name: 'Summer Noon Party',
      is_paid: true,
      thumbnail:
        'https://image.freepik.com/free-vector/full-moon-party-summer_24908-11375.jpg',
      location: 'Kumara Par'
    },
    {
      id: 6,
      name: 'Rock and Roll nights',
      is_paid: true,
      thumbnail:
        'http://3.bp.blogspot.com/-OIR_MOQwhf0/WoW-z36wmjI/AAAAAAAAAIU/sxCYIfNA5Zk98d9rLV5L_hpG1ke1bHwvwCK4BGAYYCw/s400/Banner-RR-2018-01%2B%25E2%2580%2593%2Bmuoks%2B%25E2%2580%2593%2BSMALL.jpg',
      location: 'Sarjapur Road'
    },
    {
      id: 7,
      name: 'Barbecue Fridays',
      is_paid: true,
      thumbnail:
        'https://www.pe.com/wp-content/uploads/2019/02/RPE-L-PHILS-0205-1.jpg?w=945',
      location: 'Whitefield'
    },
    {
      id: 8,
      name: 'Summer workshop',
      is_paid: false,
      thumbnail: 'https://i.ytimg.com/vi/J1dzI1DSX58/maxresdefault.jpg',
      location: 'Indiranagar'
    },
    {
      id: 9,
      name: 'Impressions & Expressions',
      is_paid: false,
      thumbnail:
        'https://images-na.ssl-images-amazon.com/images/I/51AnvCXryWL._SX373_BO1,204,203,200_.jpg',
      location: 'MG Road'
    },
    {
      id: 10,
      name: 'Italian carnival',
      is_paid: false,
      thumbnail:
        'https://www.lifeinitaly.com/wp-content/uploads/2018/08/Depositphotos_41662139_m.jpg',
      location: 'Electronic City'
    }
  ],
  isLoading: false
}

export const eventReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    default:
      return state
  }
}

export default eventReducer

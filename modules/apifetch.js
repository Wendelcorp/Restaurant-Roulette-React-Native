const rootUrl = 'https://developers.zomato.com/api/v2.1/search?'

const findRestaurantsNearby = (lat, lon) => {
  const url = rootUrl + '&lat=' + lat + '&lon=' + lon
  console.log(url)

  // return fetch(url, {
  //   headers: {
  //     "header": {
  //       "user-key": "25124da6b064a59365f7a35495990899",
  //       "Accept": "application/json",
  //     }
  //   }
  // })
  //   .then(res => res.json())
}

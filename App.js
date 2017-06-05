import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const rootUrl = 'https://developers.zomato.com/api/v2.1/search?'

const myUrl = (lat, lon) => {
  const url = rootUrl + "count=20" + '&lat=' + lat + '&lon=' + lon
  console.log(url)
  return(url)
}

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      restaurant: "Find Something Tasty"
    };
  }
  componentWillMount() {
    this.getLocation()
  }
  componentDidMount() {
  }

getLocation() {
  navigator.geolocation.getCurrentPosition(
    (posData) => this.restaurantPool = this.findRestaurantsNearby(myUrl(posData.coords.latitude, posData.coords.longitude)),
    (error) => alert(error),
    {timeout:10000}
  )
}
findRestaurantsNearby(myUrl) {
  return fetch(myUrl, {
    "headers": {
      "user-key": "25124da6b064a59365f7a35495990899",
      "Accept": "application/json",
    }
  })
    .then(res => res.json())
    .then(json => {
      return json
    })
}

newRestaurant() {
  // const num = this.restaurantPool._65.results_found
  const randomNum = Math.floor(Math.random() * 20)
  foundRestaurant = this.restaurantPool._65.restaurants
  this.setState({
    restaurant: foundRestaurant[randomNum].restaurant.name
  })
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.headerText}>Restaurant Roulette</Text>
        </View>
        <View style={styles.pageBody}>
          <Text style={styles.restaurantName} onPress={this.newRestaurant.bind(this)}>{this.state.restaurant}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8447b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageHeader: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  pageBody: {
    flex:6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignSelf: "stretch",
    margin: 30,
    borderRadius: 8,
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  restaurantName: {
    fontSize: 46,
    color: '#8447b2',
  }
});

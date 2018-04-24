import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Image, Button, View, StyleSheet, ScrollView, FlatList, WebView, Linking, AsyncStorage, Dimensions } from 'react-native';
//import styles from '../../components/topBar/style'
//import topBar from '../../components/topBar'
import axios from 'axios'
import { StackNavigator, TabNavigator } from 'react-navigation'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatListItems: [],
      data: {
        name: '',
        email: '',
        phone: '',
        address: {}
      },
    }
  }

   /* Use promise 
  componentWillMount() {
   axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.setState({flatListItems: response.data}))
    .catch(err => console.log('landing error')) */

  // Use async  
  /* async getUser() {
    console.log('landing here bro')
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('landing here response', response)
        this.setState({flatListItems: response.data})
     } catch (error) {
        console.log('landing error', error);
    }
  } */
// }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => this.setState({flatListItems: response.data}))
      .catch(err => console.log('landing error'))
      

    AsyncStorage.getItem('data')
    .then(res => this.setState({ data: JSON.parse(res) }))
    .catch(err => console.log('landing here error'))
  }

  saveData(name, email, phone, address){
    const data = { name, email, phone, address }
    AsyncStorage.setItem('data', JSON.stringify(data))
    this.setState({ data })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  render() {
    console.log('check state', this.state.data.name)
    return (
      <View style = {styles.container}>
        <ScrollView>
          <View style = {styles.topBar}>
            <Text style ={styles.pageTitle}>HOME</Text>
          </View>
          <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
            <View style = {styles.promoCard}>
               <Image style = {styles.promoImage} source = {{uri: 'https://i.pinimg.com/564x/06/28/f2/0628f22d6899be1b2a5f31a221b2450f.jpg'}} />
            </View>
            <View style = {styles.promoCard}>
              <WebView style={styles.WebViewStyle} source={{uri: 'https://Google.com'}}/>
            </View>
            <View style = {styles.promoCard}></View>
          </ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Go to Home"
              onPress={() => this.props.navigation.navigate('ngantuk')}
            />
          </View>
          <View style = {styles.cardWrapper}>
            <View style = {styles.brandsTitle}>
              <Text style = {styles.headingText}>TOP BRANDS</Text>
              <Text style = {styles.linkText}>View all brands</Text>  
            </View>
            <View style = {styles.brandImagesWrapper}>
              <Image style = {styles.brandImage} source={require('../../../assets/img/hammer.jpg')} />
              <Image style = {styles.brandImage} source={require('../../../assets/img/egg.jpg')}/>
              <Image style = {styles.brandImage} source={require('../../../assets/img/orange.jpg')} />
            </View>
            <View style = {[styles.brandImagesWrapper, {marginTop: 20}]}>
              <Image style = {styles.brandImage} source={require('../../../assets/img/building.jpg')} />
              <Image style = {styles.brandImage} source={require('../../../assets/img/donut.jpg')} />
              <Image style = {styles.brandImage} source={require('../../../assets/img/container.jpg')} />
            </View>
          </View>
          <View style = {styles.cardWrapper}>
              <View style = {styles.infoWrapper}>
                <Image style = {styles.infoIcon} source = {{uri: 'https://image.flaticon.com/icons/png/256/838/838618.png'}} />
                <View style = {styles.infoDetail}>
                  <Text style = {[styles.headingText, {marginBottom: 10}]}>LOREM IPSUM</Text>
                  <Text style = {styles.bodyText}>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus.</Text>
                </View>
              </View>
            </View>
            <View style = {styles.flatLIstContainer}>
              {/* <Text onPress={() => this.getUser()} >TEST</Text> */}
              <FlatList
              keyExtractor={item => item.email}
              data={ this.state.flatListItems }
              ItemSeparatorComponent = {this.FlatListItemSeparator}
              renderItem={({item}) => 
                <View style={styles.flatListItem}>
                  <Text style={styles.item}>{item.name}</Text>
                  <Text style={styles.itemDetail}>{item.email}</Text>
                  <Text style={styles.itemDetail}>{item.phone}</Text>
                  <Text style={styles.itemDetail}>{item.address.street}</Text>
                  <Text style={styles.itemDetail}>{item.address.city}</Text>
                  <Button title='Simpan' onPress={() => this.saveData(item.name, item.email, item.phone, item.address.street, item.address.city)} />
                </View>
              }
              />
            </View>
            <View>
              <Text>Saved:</Text>
              <Text>{this.state.data.name}</Text>
              <Text>{this.state.data.email}</Text>
              <Text>{this.state.data.phone}</Text>
              <Text>{this.state.data.street}</Text>
              <Text>{this.state.data.city}</Text>
            </View>
            
        </ScrollView>
      </View>
    );
  }
}

/* class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
} */

/* export default TabNavigator({
  Home: { screen: Home },
  Settings: { screen: SettingsScreen },
});
 */

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  defaultMarginTop: {
    marginTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#4A90E2'
  },
  pageTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1.0)',
    letterSpacing: 4   
  },
  promoCard: {
    width: 350,
    height: 180,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    borderRadius: 6,
    backgroundColor: '#4A90E2'
  },
  promoImage: {
    width: 350,
    height: 180,
    borderRadius: 6,
    opacity: 0.5
  },
  cardWrapper: {
    padding: 12,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  brandsTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  headingText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: 'rgba(82,87,104,1.0)',
    letterSpacing: 1.5
  },
  linkText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: 'rgba(40,142,234,1.0)',
    letterSpacing: 1.5
  },
  brandImagesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  brandImage: {
    width: width*0.3,
    height: width*0.3,
    borderRadius: 6
  },
  infoWrapper: {
    flexDirection: 'row'
  },
  infoIcon: {
    width: 90,
    height: 90
  },
  infoDetail: {
    paddingLeft: 20,
    paddingRight:20,
  },
  bodyText: {
    width: 280,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: 'rgba(0,0,0,0.54)',
    letterSpacing: 1.2,
    lineHeight: 20,
    textAlign: 'justify' //only iOS, fallback 'left' on android
  },
  flatLIstContainer: {
    justifyContent: 'center',
  },
  flatListItem: {
    backgroundColor: '#FFF',
    padding: 12,
  },
  item: {
    fontSize: 20,
  },
  itemDetail: {
    fontSize: 16
  }
});

export default TabNavigator({
  Home: { screen: Home },
  Settings: { screen: SettingsScreen },
});
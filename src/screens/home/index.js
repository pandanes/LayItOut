import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Image, View, StyleSheet, ScrollView, WebView, Linking } from 'react-native';
//import styles from '../../components/topBar/style'
//import topBar from '../../components/topBar'

export default class Home extends Component {

  render() {

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
          <View style = {styles.cardWrapper}>
            <View style = {styles.brandsTitle}>
              <Text style = {styles.headingText}>TOP BRANDS</Text>
              <Text style = {styles.linkText}>View all brands</Text>  
            </View>
            <View style = {styles.brandImagesWrapper}>
              <Image style = {styles.brandImage} source = {{uri: 'https://i.pinimg.com/564x/61/83/b2/6183b29a7efa4e2bcca418ee82a155b0.jpg'}} />
              <Image style = {styles.brandImage} source = {{uri: 'https://i.pinimg.com/564x/42/bd/b5/42bdb51d1fde572f90374a835e9b1693.jpg'}} />
              <Image style = {styles.brandImage} source = {{uri: 'https://i.pinimg.com/564x/d3/07/46/d3074681f7277762a16cb1a2467b2900.jpg'}} />
            </View>
            <View style = {[styles.brandImagesWrapper, {marginTop: 20}]}>
              <Image style = {styles.brandImage} source = {{uri: 'https://i.pinimg.com/564x/92/66/6a/92666a298e30d7931ca59ac57a36cc46.jpg'}} />
              <Image style = {styles.brandImage} source = {{uri: 'https://i.pinimg.com/564x/dd/3b/32/dd3b32aaa16560b410837bfc03aba9fc.jpg'}} />
              <Image style = {styles.brandImage} source = {{uri: 'https://i.pinimg.com/564x/27/d7/67/27d767b54f64808d3373428811a92726.jpg'}} />
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultMarginTop: {
    marginTop: 20
  },
  container: {
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
    padding: 20,
    marginBottom: 20,
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
    width: 110,
    height: 110,
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
  }
});
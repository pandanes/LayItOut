import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Image, View, StyleSheet, ScrollView } from 'react-native';
//import styles from '../../components/topBar/style'
//import topBar from '../../components/topBar'

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.pageTitle}>HOME</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.promoCard}>
          </View>
          <View style={styles.promoCard}>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(250,250,250,1.0)'
  },
  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: 'rgba(247, 112, 98, 1.0)'
  },
  pageTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1.0)',
    letterSpacing: 5,
    //lineHeight: 20   
  },
  promoCard: {
    width: 350,
    height: 180,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    borderRadius: 6,
    backgroundColor: 'purple'
  }
});
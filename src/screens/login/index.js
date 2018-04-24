import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Image, View, } from 'react-native';
import styles from './style'
import Input from '../../components/input'
import Button from '../../components/button'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      pic: 'https://media.giphy.com/media/dYiUVNJqa9gsfAvSye/giphy.gif',
    }
  }

  handleUsername = (text) => {
    this.setState({ username: text})
  }

  handlePassword = (text) => {
    this.setState({ password: text })
 }

  handleLogin = (pic) => {
    const { email, password } = this.state;
    this.setState({ pic: 'https://placekitten.com/200/300'})
 }

  render() {
    const {username, password, pic} = this.state
    const valid = username && password != ''   
    const enabled = username.length > 0 && password.length > 0; 

    return (
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
         <Image source={{uri: pic}} style={styles.gambar} />
        </View>
        <View style={styles.form}>
          <Input 
          inputStyle = {styles.uname}
          placeholder = 'Username'  
          placeholderColor = '#BDBDBD'
          onChangeText = {text => this.handleUsername(text)}
          blurOnSubmit = {false}
          onSubmitEditing = {() => this.bla.focus()}
          value = {this.state.text1}
          />
          <Input 
          refs = {(input) => {this.bla = input}}
          inputStyle = {styles.pass}
          placeholder = 'Password'
          placeholderColor = '#BDBDBD'          
          secure
          onChangeText = {text => this.handlePassword(text)}
          value = {this.state.text2}
          />
        </View>
        <View style = {styles.buttoncontainer}>
          <Button 
          onPress = {pic => this.handleLogin(pic)}
          buttonStyle = {valid ? {backgroundColor:'green'} : {backgroundColor:'grey'}}
          disabled = {!enabled}
          text = 'LOGIN'
          buttonText = {styles.buttonText}
          onPress = {() => this.props.navigation.navigate('home')}
          />
        </View>
      </View>
    );
  }
}


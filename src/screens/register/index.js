import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Input from '../../components/input'
import Button from '../../components/button'
import { connect } from 'react-redux'
import { mainActions} from '../../redux/modules/register'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 100
  },
  imagecontainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 60
  },
  gambar: {
    width: 200,
    height: 200,
    borderRadius: 200/2
  },
  buttoncontainer: {
    alignItems: 'center',
    marginTop: 30
  },
  uname: {
    borderWidth: 1,
    padding: 10
  },
  pass: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10
  },
  button: {
    alignItems: 'center',
    width: 100,
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderWidth: 1,
    borderColor: '#494949'
  },
  buttonText: {
    fontSize: 20
  }
})

//GET STATE
const mapStateToProps = state => state.register

//DISPATCH ACTIONS
//lempar value text ke modules
const mapDispatchToProps = dispatch => ({
  saveUsername: text => dispatch(mainActions.saveUsername(text)),
  saveEmail: text => dispatch(mainActions.saveEmail(text))
})

//Save to async storage
handleSignUp = (navigation, username, email) => {
  const data = { username, email }
  console.log('navigation', username)
  AsyncStorage.setItem('data', JSON.stringify(data))
  .then(() => navigation.navigate({ routeName: 'home'}))
  .catch(err => console.log('landing here error'))
}

const Register = ({ username, email, saveUsername, saveEmail, navigation }) => (
  <View>
    <View>
      <Input 
        inputStyle = {styles.uname}
        placeholder = 'Username'  
        placeholderColor = '#BDBDBD'
        onChangeText = {text => saveUsername(text)}
        blurOnSubmit = {false}
        onSubmitEditing = {() => this.bla.focus()}
        value = {username}
        />
      <Input 
        refs = {(input) => {this.bla = input}}
        inputStyle = {styles.pass}
        placeholder = 'Email'
        placeholderColor = '#BDBDBD'          
        secure
        onChangeText = {text => saveEmail(text)}
        />
    </View>
    <View style = {styles.buttoncontainer}>
      <Button 
      onPress = {() => handleSignUp(navigation, username, email)}
    //  buttonStyle = {valid ? {backgroundColor:'green'} : {backgroundColor:'grey'}}
    //  disabled = {!enabled}
      buttonStyle = {styles.button}
      text = 'SIGN UP'
      buttonText = {styles.buttonText}
      //onPress = {() => this.props.navigation.navigate('Home')}
      />
    </View>
  </View>
)

export default connect(mapStateToProps, mapDispatchToProps)(Register)


import { StyleSheet } from 'react-native'

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
  });
  
  export default styles;
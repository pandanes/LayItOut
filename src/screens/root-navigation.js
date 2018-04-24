
import { StackNavigator } from 'react-navigation'

import Login from './login'
import TabNavigator from './home'
import Ngantuk from './ngantuk'

const AppNavigator = StackNavigator({
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    ngantuk: {
      screen: Ngantuk,
      headerTitle: 'This is home where I belong',
    }
})

export default AppNavigator

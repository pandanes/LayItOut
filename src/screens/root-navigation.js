
import { StackNavigator } from 'react-navigation'

import TabNavigator from './home'
import Ngantuk from './ngantuk'

const AppNavigator = StackNavigator({
    home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    ngantuk: {
      screen: Ngantuk,
    }
})

export default AppNavigator

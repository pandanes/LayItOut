import React from 'react';
import { View, Text } from 'react-native'
import styles from './style'

const topBar = (props) => (
     <View
    style = {styles.topBar}
    >
        <Text style = {styles.pageTitle}>
        {props.pageTitle}
        </Text>
    
    </View>
)

export default topBar
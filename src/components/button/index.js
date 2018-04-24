import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style'

const Button = (props) => (
     <TouchableOpacity
    style = {[styles.button, props.buttonStyle]}
    onPress = {props.onPress}
    disabled = {props.disabled}
    >
        <Text style = {props.buttonText}>
        {props.text}
        </Text>
    
    </TouchableOpacity>

)

export default Button
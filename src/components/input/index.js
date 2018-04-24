import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => (
     <TextInput
    ref = {props.refs}
    style = {props.inputStyle}
    placeholder = {props.placeholder}
    placeholderTextColor = {props.placeholderColor} 
    underlineColorAndroid = "transparent"
    secureTextEntry = {props.secure}
    onChangeText = {props.onChangeText}
    onSubmitEditing = {props.onSubmitEditing}
    value = {props.value}
    />
)

export default Input
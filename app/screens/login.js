import { View, Text, StyleSheet, Image, } from 'react-native';
import React from 'react';
import colors from '../shared/colors';
import { Ionicons } from '@expo/vector-icons'; 


export default function Login() {
  return (
    <View>
      {<Image source={require('./../assets/images/login.png')} /> }
      <View style = {styles.container}>
        <Text style = {styles.welcomeNotes}>Welcome to EduCafe </Text>
        <Text style = {styles.loginSignup}>Login/Signup</Text>
        <View style = {styles.button}>
          { <Ionicons name="logo-google" size={24} color="white" style={{marginRight: 10 }} />}
          <Text style={{color: colors.white}} >Sign In with Google</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: '#FFF',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  welcomeNotes: {
    fontSize: 35, 
    textAlign: 'center', 
    fontWeight: 'bold',
  },

  loginSignup: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 20,
  },
  button: {
    backgroundColor: colors.primary,
    margin: 30,
    padding: 30,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  
  },


});

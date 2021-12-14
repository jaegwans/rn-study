import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton';

const App=()=> {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center'

    }}>
      <Text style={{fontSize:30,marginBottom:10}}>Button Component</Text>
      <Button title="Button" onPress={()=>alert('click!')}/>
      <MyButton title="button13"/>
      <MyButton title="button13">children props</MyButton>
    

      
    </View>
  );
}



export default App;


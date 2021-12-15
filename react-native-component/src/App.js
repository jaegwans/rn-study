import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyButton from '../components/MyButton';
import Counter from '../components/Counter';
import EventInput from '../components/EventInput';

const App=()=> {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center'

    }}>
      {/* <Counter />
      <MyButton title="button13" onPress={()=>alert('hello')}></MyButton> */}
     <EventInput/>
    

      
    </View>
  );
}



export default App;


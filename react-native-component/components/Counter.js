import React,{ useState } from 'react';
import {View,Text,Button} from 'react-native';
import MyButton from './MyButton';

const Counter = () => {
    const [count, setCount] = useState(0); //초기값 및 할당 
    const [double, setDouble] = useState(0); //초기값 및 할당 
    return(
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:30,margin:10}}>{count}</Text>
            <Text style={{fontSize:30,margin:10}}>{double}</Text>
            
            <MyButton title="+11" onPress={
                () =>{setCount(count+1);/* useCount 사용 */
                    setDouble(double+2);
                
                }
        
        }/>
            <MyButton title="-11" onPress={
                ()=>{setCount(count-1);
                    setDouble(double-2);
                
                }

            }
                
                />
        </View>
    );
};

export default Counter;
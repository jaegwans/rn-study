import React from 'react';
import {Pressable, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton=props=>{//온클릭이나 스타일 속성들은 app.js에서 말고 컴포넌트 파일에서 설정해줌 
    return(
        <Pressable
        style={{
            backgroundColor:'#3498db',
            padding:16,
            margin:10,
            borderRadius:8,
        }} onPress={()=>props.onPress()}>

            <Text style={{fontSize:25,color:'white'}}>{props.children||props.title}</Text>
        </Pressable>

    );
};

MyButton.propTypes={ //defaultProps가 더 우선함 
    title:PropTypes.string.isRequired,
    onPress:PropTypes.func.isRequired,

}
MyButton.defaultProps={
    title:'button'
}

export default MyButton;
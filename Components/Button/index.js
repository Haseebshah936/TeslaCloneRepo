import React from 'react';
import { Text , Pressable, View } from 'react-native';
import styles from './style';

function Button(props) {
    const {type, text, onPress} = props;
    const background = type==="primary" ? '#171A20CC' : '#FFFFFFA6';
    const textColor =  type==="primary" ? '#FFFFFF' : '#171A28';

    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: background}]}
                onPress= {onPress}
            >

                <Text style={[styles.text, {color: textColor}]}>
                    {text}
                </Text>

            </Pressable>
        </View>
    );
}

export default Button;
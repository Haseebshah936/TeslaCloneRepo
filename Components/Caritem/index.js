import React from 'react';
import { ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styles from './style';
import Button from '../Button';

function CarItem(props) {
    const {image, name, tagline, taglineCTA} = props.car;
    // console.warn(image);
    return (
        <View style={styles.carContainer}>

        <ImageBackground 
          source={image}
          style={styles.image}
        />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>
                {tagline}
                {' '}
                <Text style={styles.subTitleCTA}>
                    {taglineCTA}
                </Text>
            </Text>
        </View>
        <View style={styles.button}>

            <Button 
                type="primary"
                text="Custom order" 
                onPress={()=> {console.warn("Custom Order Pressed");}}
            />

            <Button 
                type="Secondary"
                text="Existing Inventory" 
                onPress={()=> {console.warn("Existing Inventory Pressed");}}
            />

        </View>

      </View>  
    );
}

export default CarItem;
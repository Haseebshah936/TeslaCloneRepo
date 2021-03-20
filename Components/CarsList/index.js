import React from 'react';

import styles from './style';
import cars from './cars';
import CarItem from '../Caritem'
import { Dimensions, FlatList, View } from 'react-native';
function CarsList(props) {
    return (
        <View style={styles.container}>

            <FlatList 
                data={cars}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <CarItem car={item}/>}
                snapToAlignment= {'start'}
                snapToInterval= {Dimensions.get('window').height}
                decelerationRate = 'fast'
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

export default CarsList;
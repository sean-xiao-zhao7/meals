import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

// styles
import global from '../styles/styles';

const MealItem = props => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.outer}>
                <View style={styles.innerTop}>
                    <ImageBackground source={{uri: props.itemData.item.imageUrl}} style={global.image}>
                        <Text style={{...global.text, ...styles.text}}>{props.itemData.item.title}</Text>
                    </ImageBackground>
                </View>
                <View style={styles.innerBottom}>
                    <Text style={global.text}>{props.itemData.item.duration}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    outer: {
        height: 400,
    },
    innerTop: {
        height: '70%',
    },
    innerBottom: {
        
    },
    text: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: '#fff',        
    },
});

export default MealItem;
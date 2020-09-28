import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// styles
import styles from '../styles/styles';
import { main } from '../styles/colors';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{...styles.gridItem, backgroundColor: props.itemData.item.color}}
        >
            <View>
                <Text style={styles.text}>{props.itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryGridTile;
import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';

// comps
import MealItem from '../components/MealItem';

const MealList = props => {
    // functions
    const renderMeal = (itemData) => {
        return <MealItem itemData={itemData} onPress={() => {
            props.navigation.navigate({ routeName: 'MealDetails', params: { mealId: itemData.item.id, title: itemData.item.title }});
        }}
        />
    };    

    return (
        <View>
            <FlatList
                data={props.meals}
                renderItem={renderMeal}
            />
            <Button title='Start Over' onPress={() => props.navigation.popToTop()} />
        </View>
    );
};

export default MealList;
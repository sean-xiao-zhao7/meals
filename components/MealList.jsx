import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

// comps
import MealItem from '../components/MealItem';

const MealList = props => {
    const favs = useSelector(state => state.meals.favoriteMeals);

    // functions
    const renderMeal = (itemData) => {
        const isFav = favs.some(meal => meal.id === itemData.item.id);
        return <MealItem itemData={itemData} onPress={() => {
            props.navigation.navigate({ routeName: 'MealDetails', params: { mealId: itemData.item.id, title: itemData.item.title, isFav: isFav }});
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
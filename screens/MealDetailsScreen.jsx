import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// data
import { MEALS } from '../data/dummy-data-meal';

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const meal = MEALS.find(meal => meal.id === mealId);

    return (
        <View>
            <Text>{meal.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

MealDetailsScreen.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('mealId');
    return {
        headerTitle: MEALS.find(meal => meal.id === id).title
    }
};

export default MealDetailsScreen;
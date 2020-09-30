import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

// comps
import MealItem from '../components/MealItem';

// data
import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data-meal';

const CategoryMealScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');
    const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    // functions
    const renderMeal = (itemData) => {
        return <MealItem itemData={itemData} onPress={() => {
            props.navigation.navigate({ routeName: 'MealDetails', params: { mealId: itemData.item.id }});
        }}
        />
    };    

    return (
        <View>
            <FlatList
                data={meals}
                renderItem={renderMeal}
            />
            <Button title='Start Over' onPress={() => props.navigation.popToTop()} />
        </View>
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(item => item.id === categoryId);
    return {
        headerTitle: selectedCategory.title
    };
};

export default CategoryMealScreen;
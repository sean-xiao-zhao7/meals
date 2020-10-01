import React from 'react';
import { useSelector } from 'react-redux';

// comps
import MealList from '../components/MealList';

// data
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const meals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <MealList meals={meals} navigation={props.navigation} />
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
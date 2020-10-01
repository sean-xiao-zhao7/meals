import { MEALS } from '../../data/dummy-data-meal';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);            
            if (existingIndex >= 0) {
                let newFavMeals = [...state.favoriteMeals];
                newFavMeals.splice(existingIndex, 1);
                return {...state, favoriteMeals: newFavMeals};
            } else {
                return {...state, favoriteMeals: [...state.favoriteMeals, state.meals.find(meal => meal.id === action.mealId)]}
            };
        case SET_FILTERS:
            const newFilteredMeals = state.meals.filter(meal => {
                if (action.filterBooleans.gluten && !meal.isGlutenFree) {
                    return false;
                }
                return true;
            });
            return {...state, filteredMeals: newFilteredMeals};
        default:
            return state;
    }    
    return state;
};

export default mealsReducer;
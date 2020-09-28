import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

// screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

// styles
import { main } from '../styles/colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,    
}, {
    defaultNavigationOptions: {
        headerTitle: 'Meals App',
        headerStyle: {
            backgroundColor: main,        
        }
    }
});

export default createAppContainer(MealsNavigator);
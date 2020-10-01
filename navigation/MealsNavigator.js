import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

// screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

// styles
import { main, sec } from '../styles/colors';

const defaultStackHeaderConfigs = {
    defaultNavigationOptions: {
        headerTitle: 'Meals App',
        headerStyle: {
            backgroundColor: main,
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold',
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans',
        }
    }
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,
}, defaultStackHeaderConfigs);

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
}, defaultStackHeaderConfigs);

const tabScreenConfigs = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: main
        },
    },
    Favs: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
        },
    },
};

const MealsTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfigs, {
        activeTintColor: main,
        shifting: true
    })
    : createBottomTabNavigator(tabScreenConfigs, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans',
            },
            activeTintColor: main,
        }
    });

const rootNav = createDrawerNavigator({
    MealsTabs: {
        screen: MealsTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals',
        },
    },
    Filters: {
        screen: createStackNavigator({
            Filters: FiltersScreen,
        }, defaultStackHeaderConfigs),
        navigationOptions: {
            drawerLabel: 'Options',
        },
    }
}, {
    contentOptions: {
        activeTintColor: main,
        labelStyle: {
            fontFamily: 'open-sans-bold',
        }
    }
});

export default createAppContainer(rootNav);
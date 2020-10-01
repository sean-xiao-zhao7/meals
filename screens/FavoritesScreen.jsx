import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

// comps
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    return (
        <MealList meals={favoriteMeals} navigation={props.navigation} />             
    );
};

FavoritesScreen.navigationOptions = props => {
    return {
        headerTitle: 'Favorites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                props.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
    }
};

export default FavoritesScreen;
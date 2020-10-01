import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';

// comps
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    return (
        !favoriteMeals 
        ? <MealList meals={favoriteMeals} navigation={props.navigation} />
        : <Text>No favorites</Text>
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
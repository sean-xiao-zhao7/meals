import React, { useEffect, useCallback } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

// comps
import HeaderButton from '../components/HeaderButton';

// actions
import { toggleFavorite } from '../store/actions/meals';

// styles
import styles from '../styles/styles';

const MealDetailsScreen = props => {
    // get meal
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const mealId = props.navigation.getParam('mealId');    
    const meal = availableMeals.find(meal => meal.id === mealId);

    // check favorite
    const isMealFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));

    // set up favorite action
    const dispatch = useDispatch();
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: isMealFavorite});
    }, [isMealFavorite]);

    return (
        <ScrollView>
            <Image source={{uri: meal.imageUrl}} style={styles.image} />
            <Text>{meal.title}</Text>
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const title = navigationData.navigation.getParam('title');
    const toggleFav = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');
    return {
        headerTitle: title,
        headerRight: () => <HeaderButtons
            HeaderButtonComponent={HeaderButton}
        >
            <Item title='Favorite' iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={toggleFav} />
        </HeaderButtons>
    }
};

export default MealDetailsScreen
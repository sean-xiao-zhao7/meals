import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

// comps
import HeaderButton from '../components/HeaderButton';

// styles
import styles from '../styles/styles';

const MealDetailsScreen = props => {
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const mealId = props.navigation.getParam('mealId');
    const meal = availableMeals.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: meal.imageUrl}} style={styles.image} />
            <Text>{meal.title}</Text>
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const title = navigationData.navigation.getParam('title');
    return {
        headerTitle: title,
        headerRight: () => <HeaderButtons
            HeaderButtonComponent={HeaderButton}
        >
            <Item title='Favorite' iconName='ios-star' onPress={
                () => {}
            } />
        </HeaderButtons>
    }
};

export default MealDetailsScreen
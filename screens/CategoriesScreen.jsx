import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// comps
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

// data
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

    // functions
    const renderGridItem = (itemData) => {
        return <CategoryGridTile itemData={itemData} onPress={() => {
            props.navigation.navigate({ routeName: 'CategoryMeals', params: { categoryId: itemData.item.id } })
        }}
        />;
    };

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    );
};

CategoriesScreen.navigationOptions = props => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                props.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
    };
}

export default CategoriesScreen;
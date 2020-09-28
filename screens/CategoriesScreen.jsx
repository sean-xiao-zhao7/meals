import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

// comps
import CategoryGridTile from '../components/CategoryGridTile';

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

export default CategoriesScreen;
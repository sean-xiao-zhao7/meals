import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

// actions
import { setFilters as setFiltersAction } from '../store/actions/meals';

// comps
import HeaderButton from '../components/HeaderButton';

const FilterSwitch = props => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text>{props.title}</Text>
            <Switch value={props.value} onValueChange={props.valueFunc} />
        </View>
    );
};

const FilterScreen = props => {
    const { navigation } = props;

    const [gluten, setGluten] = useState(false);
    const [veg, setVeg] = useState(false);
    const [bigVeg, setBigVeg] = useState(false);
    const [notfood, setNotfood] = useState(false);

    const dispatch = useDispatch();

    const setFilters = useCallback(() => {
        const filters = {
            gluten:gluten,
            veg:veg,
            bVeg:bigVeg,
            nf:notfood,
        };

        dispatch(setFiltersAction(filters));        
    }, [gluten, veg, bigVeg, notfood, dispatch]);

    useEffect(() => {
        navigation.setParams({filters: setFilters});
    }, [setFilters]);

    return (
        <View style={{ margin: 10, flex: 1, alignItems: 'center' }}>
            <FilterSwitch value={gluten} valueFunc={setGluten} title={'Gluten'} />
            <FilterSwitch value={veg} valueFunc={setVeg} title={'Not meat'} />
            <FilterSwitch value={bigVeg} valueFunc={setBigVeg} title={'Really not meat'} />
            <FilterSwitch value={notfood} valueFunc={setNotfood} title={'Not human food'} />
        </View>
    );
};

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meals Options',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='md-checkmark-circle-outline' onPress={() => {
                navData.navigation.getParam('filters')()
            }} />
        </HeaderButtons>,
        drawerLabel: 'Meals Options'
    }
};

export default FilterScreen;
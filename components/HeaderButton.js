import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

// styles
import { sec } from '../styles/colors';

const MyHeaderButton = props => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={
            Platform.OS === 'android' ? 'white' : sec
        } />
    );
};

export default MyHeaderButton;
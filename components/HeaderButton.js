import React from 'react';
import { HeaderButton } from 'react-native-header-buttons';
import { Ionicons } from '@expo/vector-icons';

// styles
import { main } from '../styles/colors';

const MyHeaderButton = props => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} />
    );
};

export default MyHeaderButton;
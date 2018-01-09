import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create component
const App = () => {
    return (
        <Text>Some Text</Text>
    );
};

AppRegistry.registerComponent('albums', () => App);
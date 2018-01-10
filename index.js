import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => {
    return (
        <Header />

    );
};

AppRegistry.registerComponent('albums', () => App);
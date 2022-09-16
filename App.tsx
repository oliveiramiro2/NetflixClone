import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import RoutesNetflix from './src/routes';

const App: React.FC = () => (
    <NavigationContainer>
        <RoutesNetflix />
        <StatusBar style="auto" />
    </NavigationContainer>
);

export default App;

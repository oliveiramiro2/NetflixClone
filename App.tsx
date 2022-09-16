import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import RoutesNetflix from './src/routes';

const fontLemonMilkRegular = require('./assets/LEMONMILK-Regular.otf');
const fontLemonMilkMedium = require('./assets/LEMONMILK-Medium.otf');
const fontLemonMilkLight = require('./assets/LEMONMILK-Light.otf');
const fontLemonMilkBold = require('./assets/LEMONMILK-Bold.otf');

const App: React.FC = () => {
    const [loaded] = useFonts({
        LemonMilkR: fontLemonMilkRegular,
        LemonMilkM: fontLemonMilkMedium,
        LemonMilkL: fontLemonMilkLight,
        LemonMilkB: fontLemonMilkBold,
    });

    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <RoutesNetflix />
            <StatusBar style="light" />
        </NavigationContainer>
    );
};

export default App;

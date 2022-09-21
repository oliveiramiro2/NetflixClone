import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import RoutesNetflix from './src/routes';
import AuthProvider from './src/services/auth';

const fontLemonMilkRegular = require('./assets/LEMONMILK-Regular.otf');
const fontLemonMilkMedium = require('./assets/LEMONMILK-Medium.otf');
const fontLemonMilkLight = require('./assets/LEMONMILK-Light.otf');
const fontLemonMilkBold = require('./assets/LEMONMILK-Bold.otf');

const fontInterRegular = require('./assets/Inter-Regular.ttf');
const fontInterMedium = require('./assets/Inter-Medium.ttf');
const fontInterLight = require('./assets/Inter-Light.ttf');
const fontInterBold = require('./assets/Inter-Bold.ttf');
const fontInterThin = require('./assets/Inter-Thin.ttf');

const App: React.FC = () => {
    const [loaded] = useFonts({
        LemonMilkR: fontLemonMilkRegular,
        LemonMilkM: fontLemonMilkMedium,
        LemonMilkL: fontLemonMilkLight,
        LemonMilkB: fontLemonMilkBold,
        InterR: fontInterRegular,
        InterM: fontInterMedium,
        InterL: fontInterLight,
        InterB: fontInterBold,
        InterT: fontInterThin,
    });

    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <AuthProvider>
                <>
                    <RoutesNetflix />
                    <StatusBar style="inverted" />
                </>
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;

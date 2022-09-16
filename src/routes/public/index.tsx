import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePublic from '../../Pages/public/HomePublic';

export type PublicStackParams = {};

const Stack: any = createNativeStackNavigator<PublicStackParams>();

const PublicRoutes: any = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePublic} />
    </Stack.Navigator>
);

export default PublicRoutes;

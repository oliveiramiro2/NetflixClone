import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type PublicStackParams = {}

const Stack: any = createNativeStackNavigator<PublicStackParams>();

const PublicRoutes: any = () => (
    <Stack.Navigator>
    </Stack.Navigator>
);

export default PublicRoutes;


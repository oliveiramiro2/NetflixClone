import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import HomePrivate from '../../pages/private/HomePrivate';
import styles from './styles';

export type PrivateStackParams = {
    HomePrivate: object | undefined;
};

interface RouteData {
    route: RouteData;
    name: string;
}

/* interface IPropsIcons {
    color: '';
    size: number;
}

const TabStack: any = createBottomTabNavigator<PrivateStackParams>(); */
const Stack: any = createNativeStackNavigator<PrivateStackParams>();

/* const StackTabNavigation: Function = () => {
    <TabStack.Navigator
        screenOptions={({ route }: RouteData) => ({
            tabBarIcon: ({ color, size }: IPropsIcons) => {},
            tabBarActiveTintColor: '',
            tabBarInactiveTintColor: '',
        })}
    >
        <TabStack.Screen
            name="ScreenHome"
            component={}
            options={{
                title: '',
            }}
        />
    </TabStack.Navigator>
} */

const PrivateRoutes = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { ...styles.headerContain },
            headerTitle: () => (
                <View style={[styles.containImg]}>
                    <ImageBackground
                        style={[styles.img]}
                        source={require('../../assets/imgs/netflix.png')}
                    />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <FontAwesome5 name="pen" size={20} color="white" />
                </TouchableOpacity>
            ),
            headerLeft: () => <View />,
        }}
    >
        <Stack.Screen name="HomePrivate" component={HomePrivate} />
    </Stack.Navigator>
);

export default PrivateRoutes;

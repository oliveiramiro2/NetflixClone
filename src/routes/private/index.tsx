import React from 'react';
import { View, Text, Image } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Ionicons,
    MaterialCommunityIcons,
    Fontisto,
    AntDesign,
} from '@expo/vector-icons';

import SelectMovie from '../../Pages/private/SelectMovie';
import QuickLaugh from '../../Pages/private/QuickLaugh';
import News from '../../Pages/private/News';
import Games from '../../Pages/private/Games';
import Download from '../../Pages/private/Downloads';
import styles from './styles';

export type PrivateStackParams = {
    SelectMovie: object | undefined;
    QuickLaugh: object | undefined;
    News: object | undefined;
    Games: object | undefined;
    Download: object | undefined;
};

const TabStack = createBottomTabNavigator<PrivateStackParams>();
// const Stack = createNativeStackNavigator<PrivateStackParams>();

const PrivateRoutes = () => (
    <TabStack.Navigator
        screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, size }) => {
                if (route.name === 'SelectMovie') {
                    return (
                        <View style={[styles.containIcons]}>
                            <Ionicons
                                name={
                                    navigation.isFocused()
                                        ? 'home'
                                        : 'home-outline'
                                }
                                size={size}
                                color={color}
                            />
                            <Text style={[styles.text]}>Início</Text>
                        </View>
                    );
                }
                if (route.name === 'QuickLaugh') {
                    return (
                        <View style={[styles.containIcons]}>
                            <Ionicons
                                name={
                                    navigation.isFocused()
                                        ? 'game-controller'
                                        : 'game-controller-outline'
                                }
                                size={size}
                                color={color}
                            />
                            <Text style={[styles.text]}>Jogos</Text>
                        </View>
                    );
                }
                if (route.name === 'News') {
                    return (
                        <View style={[styles.containIcons]}>
                            <MaterialCommunityIcons
                                name={
                                    navigation.isFocused()
                                        ? 'script-text-play'
                                        : 'script-text-play-outline'
                                }
                                size={size}
                                color={color}
                            />
                            <Text style={[styles.text]}>Novidades</Text>
                        </View>
                    );
                }
                if (route.name === 'Games') {
                    return (
                        <View style={[styles.containIcons]}>
                            {navigation.isFocused() ? (
                                <>
                                    <AntDesign
                                        name="smile-circle"
                                        size={size}
                                        color={color}
                                    />
                                    <Text style={[styles.text]}>
                                        Risadas rápidas
                                    </Text>
                                </>
                            ) : (
                                <>
                                    <Fontisto
                                        name="slightly-smile"
                                        size={size}
                                        color={color}
                                    />
                                    <Text style={[styles.text]}>
                                        Risadas rápidas
                                    </Text>
                                </>
                            )}
                        </View>
                    );
                }
                if (route.name === 'Download') {
                    return (
                        <View style={[styles.containIcons]}>
                            <MaterialCommunityIcons
                                name={
                                    navigation.isFocused()
                                        ? 'download-circle'
                                        : 'download-circle-outline'
                                }
                                size={size}
                                color={color}
                            />
                            <Text style={[styles.text]}>Downloads</Text>
                        </View>
                    );
                }
            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: 'darkgray',
            tabBarStyle: {
                backgroundColor: '#000000',
                borderTopWidth: 2,
                borderTopColor: '#000000',
            },
        })}
        initialRouteName="SelectMovie"
    >
        <TabStack.Screen
            name="SelectMovie"
            component={SelectMovie}
            options={{
                headerStyle: { ...styles.headerContain },
                headerTransparent: true,
                headerTitle: () => (
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/imgs/netflix.png')}
                    />
                ),
                title: '',
            }}
        />
        <TabStack.Screen
            name="QuickLaugh"
            component={QuickLaugh}
            options={{
                headerStyle: { ...styles.headerContain },
                headerTransparent: true,
                headerTitle: () => (
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/imgs/netflix.png')}
                    />
                ),
                title: '',
            }}
        />
        <TabStack.Screen
            name="News"
            component={News}
            options={{
                headerStyle: { ...styles.headerContain },
                headerTransparent: true,
                headerTitle: () => (
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/imgs/netflix.png')}
                    />
                ),
                title: '',
            }}
        />
        <TabStack.Screen
            name="Games"
            component={Games}
            options={{
                headerStyle: { ...styles.headerContain },
                headerTransparent: true,
                headerTitle: () => (
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/imgs/netflix.png')}
                    />
                ),
                title: '',
            }}
        />
        <TabStack.Screen
            name="Download"
            component={Download}
            options={{
                headerStyle: { ...styles.headerContain },
                headerTransparent: true,
                headerTitle: () => (
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/imgs/netflix.png')}
                    />
                ),
                title: '',
            }}
        />
    </TabStack.Navigator>
);

export default PrivateRoutes;

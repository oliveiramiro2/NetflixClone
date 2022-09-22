import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomePublic from '../../pages/public/HomePublic';
import SingUp from '../../pages/public/SingUp';
import styles from './styles';

export type PublicStackParams = {
    Home: object | undefined;
    SingUp: object | undefined;
};

const Stack = createNativeStackNavigator<PublicStackParams>();

const PublicRoutes = () => (
    <Stack.Navigator>
        <Stack.Screen
            options={({ navigation }: any) => ({
                headerStyle: { ...styles.headerContain },
                headerTransparent: true,
                headerTitle: () => (
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/imgs/netflix.png')}
                    />
                ),
                headerRight: () => (
                    <View style={[styles.containText]}>
                        <TouchableOpacity>
                            <Text style={[styles.textRight]}>Privacidade</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SingUp')}
                        >
                            <Text style={[styles.textRight]}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                ),
            })}
            name="Home"
            component={HomePublic}
        />
        <Stack.Screen
            options={{
                headerStyle: { ...styles.headerContain },
                headerTransparent: true,
                headerBackVisible: true,
                headerTitle: '',
                headerLeft: () => (
                    <View style={[styles.containArrowBack]}>
                        <Ionicons name="arrow-back" color="white" size={30} />
                        <Image
                            style={[styles.img2]}
                            source={require('../../assets/imgs/netflix.png')}
                        />
                    </View>
                ),
            }}
            name="SingUp"
            component={SingUp}
        />
    </Stack.Navigator>
);

export default PublicRoutes;

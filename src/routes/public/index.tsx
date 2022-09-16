import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePublic from '../../pages/public/HomePublic';
import styles from './styles';

export type PublicStackParams = {};

const Stack: any = createNativeStackNavigator<PublicStackParams>();

const PublicRoutes: any = () => (
    <Stack.Navigator>
        <Stack.Screen
            options={{
                headerStyle: { ...styles.headerContain },
                headerTransparent: true,
                headerTitle: () => (
                    <Image
                        style={[styles.picture]}
                        source={require('../../assets/imgs/netflix.png')}
                    />
                ),
                headerRight: ({ routes }) => (
                    <View style={[styles.containText]}>
                        <TouchableOpacity>
                            <Text style={[styles.textRight]}>Privacidade</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.textRight]}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                ),
            }}
            name="Home"
            component={HomePublic}
        />
    </Stack.Navigator>
);

export default PublicRoutes;

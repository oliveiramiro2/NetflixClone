import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

const Header: React.FC = () => (
    <View style={[styles.contain]}>
        <View>
            <Text> {'       '}</Text>
        </View>
        <Image
            style={[styles.img]}
            resizeMode="stretch"
            source={require('../../../../../assets/imgs/netflix.png')}
        />
        <View>
            <TouchableOpacity>
                <FontAwesome5 name="pen" size={20} color="white" />
            </TouchableOpacity>
        </View>
    </View>
);

export default Header;

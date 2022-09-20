import { View, Text } from 'react-native';
import React from 'react';

import styles from './styles';

const Games: React.FC = () => (
    <View style={[styles.contain]}>
        <Text style={[styles.text]}>Jogos</Text>
    </View>
);

export default Games;

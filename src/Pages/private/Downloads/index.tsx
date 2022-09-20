import { View, Text } from 'react-native';
import React from 'react';

import styles from './styles';

const Download: React.FC = () => (
    <View style={[styles.contain]}>
        <Text style={[styles.text]}>Baixar</Text>
    </View>
);

export default Download;

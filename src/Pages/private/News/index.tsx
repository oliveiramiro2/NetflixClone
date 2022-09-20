import { View, Text } from 'react-native';
import React from 'react';

import styles from './styles';

const News: React.FC = () => (
    <View style={[styles.contain]}>
        <Text style={[styles.text]}>Novidades</Text>
    </View>
);

export default News;

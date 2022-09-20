import { View, Text } from 'react-native';
import React from 'react';

import styles from './styles';

const QuickLaugh: React.FC = () => (
    <View style={[styles.contain]}>
        <Text style={[styles.text]}>Risada rápida</Text>
    </View>
);

export default QuickLaugh;

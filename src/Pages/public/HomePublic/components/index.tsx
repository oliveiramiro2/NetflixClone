import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './styles';

interface IProps {
    modal(params: boolean): void;
}

const Button: React.FC<IProps> = ({ modal }) => (
    <TouchableOpacity onPress={() => modal(true)}>
        <View style={[styles.button]}>
            <Text style={[styles.textButton]}>Vamos lá</Text>
        </View>
    </TouchableOpacity>
);

export default Button;

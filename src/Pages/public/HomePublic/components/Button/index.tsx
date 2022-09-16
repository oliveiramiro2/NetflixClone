import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './styles';

interface IProps {
    modal?(params: boolean): void;
    lock?: boolean;
    onPress?: Function;
}

const Button: React.FC<IProps> = ({ modal, lock, onPress }) => (
    <TouchableOpacity
        disabled={lock}
        onPress={() =>
            modal !== undefined
                ? modal(true)
                : onPress !== undefined && onPress()
        }
    >
        <View style={[styles.button]}>
            <Text style={[styles.textButton]}>Vamos lá</Text>
        </View>
    </TouchableOpacity>
);

export default Button;

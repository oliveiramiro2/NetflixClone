import { View, ActivityIndicator, Image } from 'react-native';
import React from 'react';

import styles from './styles';
import { metrics } from '../../../../../services/metrics';

const ModalLoading: React.FC = () => (
    <View style={[styles.contain]}>
        <View>
            <Image
                source={require('../../../../../assets/imgs/netflix.png')}
                style={[styles.img]}
                resizeMode="contain"
            />
            <ActivityIndicator
                color={metrics.colors.color2}
                animating
                size="large"
            />
        </View>
    </View>
);

export default ModalLoading;

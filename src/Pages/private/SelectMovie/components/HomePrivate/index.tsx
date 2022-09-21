import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import Image from 'react-native-image-progress';
import * as ProgressBar from 'react-native-progress';

import styles from './styles';
import Header from '../Header';
import { metrics } from '../../../../../services/metrics';

const userArray: string[] = [
    'Usuário 1',
    'Usuário 2',
    'Usuário 3',
    'Usuário 4',
    'Usuário 5',
];

interface IProps {
    setShowModal(param: boolean): void;
    setUserName(param: string): void;
}

const HomePrivate: React.FC<IProps> = ({ setShowModal, setUserName }) => (
    <View style={[styles.contain]}>
        <Header />
        <View style={[styles.containTitle]}>
            <Text style={[styles.textTitle]}>Quem está assisitindo?</Text>
        </View>
        <View style={[styles.containContent]}>
            {userArray.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        setUserName(item);
                        setShowModal(false);
                    }}
                >
                    <View
                        style={[
                            styles.containImg,
                            index + 1 === userArray.length &&
                                (index + 1) % 2 !== 0 &&
                                styles.lastOneContainImg,
                        ]}
                    >
                        <Image
                            source={{
                                uri: `https://api.lorem.space/image/face?w=${Math.round(
                                    Math.random() * metrics.dimensions.width
                                )}&amp;amp;amp;amp;h=${Math.round(
                                    Math.random() * metrics.dimensions.height
                                )}`,
                            }}
                            indicator={ProgressBar.Pie}
                            indicatorProps={{
                                size: 25,
                                borderWidth: 0,
                                color: metrics.colors.color2,
                                unfilledColor: '#3a3939',
                            }}
                            style={[styles.img]}
                            imageStyle={[styles.img]}
                            resizeMode="cover"
                        />
                        <Text
                            style={[
                                styles.textNameUser,
                                index + 1 === userArray.length &&
                                    (index + 1) % 2 !== 0 &&
                                    styles.lastOneTextNameUser,
                            ]}
                        >
                            {item}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

export default HomePrivate;

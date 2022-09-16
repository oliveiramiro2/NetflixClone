import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import { metrics } from '../../../services/metrics';
import styles from './styles';

interface ISliderData {
    key: number;
    title: string;
    text: string;
    image: string;
}

interface IEachSlider extends ISliderData {
    item: ISliderData;
}

const slides: ISliderData[] = [
    {
        key: 1,
        title: 'Filmes, sériess e\nmuito mais, sem\nlimites',
        text: 'Assista onde quiser. Cancele\nquando quiser',
        image: `https://api.lorem.space/image/movie?w=${Math.round(
            Math.random() * metrics.dimensions.width
        )}&amp;amp;amp;amp;h=${Math.round(
            Math.random() * metrics.dimensions.height
        )}`,
    },
    {
        key: 2,
        title: 'Baixe e assita\noffline',
        text: 'Tenha sempre algo para assistir\noffline',
        image: `https://api.lorem.space/image/movie?w=${Math.round(
            Math.random() * metrics.dimensions.width
        )}&amp;amp;amp;amp;h=${Math.round(
            Math.random() * metrics.dimensions.height
        )}`,
    },
    {
        key: 3,
        title: 'Sem\ncompromisso',
        text: 'Assine hoje, cancele quando\nquiser',
        image: `https://api.lorem.space/image/movie?w=${Math.round(
            Math.random() * metrics.dimensions.width
        )}&amp;amp;amp;amp;h=${Math.round(
            Math.random() * metrics.dimensions.height
        )}`,
    },
    {
        key: 4,
        title: 'Assista onde\nquiser',
        text: 'Assista no celular, table, laptop,\nTC ou outros aparelhos',
        image: `https://api.lorem.space/image/movie?w=${Math.round(
            Math.random() * metrics.dimensions.width
        )}&amp;amp;amp;amp;h=${Math.round(
            Math.random() * metrics.dimensions.height
        )}`,
    },
];

const Button: React.FC = () => (
    <TouchableOpacity>
        <View style={[styles.button]}>
            <Text style={[styles.textButton]}>Vamos lá</Text>
        </View>
    </TouchableOpacity>
);

const Images: Function = (item: IEachSlider) => (
    <View style={styles.slide}>
        <ImageBackground
            style={[styles.contain]}
            source={{ uri: item.item.image }}
        />
        <View style={[styles.containText]}>
            <Text style={styles.title}>{item.item.title}</Text>
            <Text style={styles.text}>{item.item.text}</Text>
        </View>
    </View>
);

const HomePublic: React.FC = () => (
    <View style={[styles.contain]}>
        <AppIntroSlider
            bottomButton
            renderNextButton={() => <Button />}
            renderDoneButton={() => <Button />}
            renderItem={(item) => Images(item)}
            data={slides}
            dotStyle={styles.dotStyles}
        />
    </View>
);

export default HomePublic;

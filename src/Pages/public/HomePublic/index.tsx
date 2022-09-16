import { View, Text, ImageBackground, Modal } from 'react-native';
import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import ModalSingIn from './components/ModalSingIn';
import Button from './components/Button';
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

const HomePublic: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <View style={[styles.contain]}>
            <AppIntroSlider
                bottomButton
                renderNextButton={() => <Button modal={setShowModal} />}
                renderDoneButton={() => <Button modal={setShowModal} />}
                renderItem={(item) => Images(item)}
                data={slides}
                dotStyle={styles.dotStyles}
            />

            <Modal
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <ModalSingIn modal={setShowModal} />
            </Modal>
        </View>
    );
};

export default HomePublic;

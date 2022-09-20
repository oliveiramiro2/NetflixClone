import { View, Text, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HomePrivate from './components/HomePrivate';
import styles from './styles';

const SelectMovie: React.FC = () => {
    const [dataAs, setDataAs] = useState();
    const [showModal, setShowModal] = useState<boolean>(true);
    const [, setUserName] = useState<string>('');

    useEffect(() => {
        dataAs === undefined && tt();
        // console.log(dataAs);
    }, [dataAs]);

    const tt = () => {
        axios
            .get('https://embed.warezcdn.net/filme/tt0000091')
            .then(({ data, status }) => {
                // console.log(status, data);
                setDataAs(data);
            })
            .catch(() => {});
    };

    return (
        <View style={[styles.contain]}>
            <Text>index</Text>
            <Modal
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
                transparent={false}
            >
                <HomePrivate
                    setShowModal={setShowModal}
                    setUserName={setUserName}
                />
            </Modal>
        </View>
    );
};

export default SelectMovie;

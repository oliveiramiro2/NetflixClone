import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';

import styles from './styles';

const download = require('../../../assets/imgs/download.jpeg');

const Download: React.FC = () => (
    <ScrollView style={[styles.contain]}>
        <View style={[styles.containContent]}>
            <View style={[styles.containSmart]}>
                <EvilIcons
                    name="gear"
                    color="#a9a9a9"
                    size={23}
                    style={[styles.ml5]}
                />
                <Text style={[styles.textSmart, styles.ml5]}>
                    Smart download
                </Text>
            </View>

            <View style={[styles.containDescribe]}>
                <Text style={[styles.TextTitle]}>
                    Conheça o Downloads para você
                </Text>

                <Text style={[styles.textSmart, styles.textDescribe]}>
                    Vamos baixar uma seleção personalizada de filmes e séries
                    para você sempre ter um título para assistir no celular.
                </Text>

                <Image source={download} style={[styles.imgDownload]} />

                <TouchableOpacity style={[styles.buttonBlue]}>
                    <Text style={[styles.textButton1]}>Configurar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonGray]}>
                    <Text style={[styles.textButton2]}>
                        Encontre mais títulos para baixar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
);

export default Download;

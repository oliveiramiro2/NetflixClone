import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
// import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import { IMovieData } from '../..';
import { BASE_URL_IMAGE } from '../../../../../services/API';

interface IProps extends IMovieData {
    dataMovie: IMovieData;
    showModal(param: boolean): void;
}

const ModalSelected: React.FC<IProps> = ({ dataMovie, showModal }) => {
    React.useEffect(() => {
        /* movies(dataMovie.id?.toString)
            .then(({ data }) => console.log(data))
            .catch((err) => console.log(err)); */
        /* axios
            .get(
                `https://api.themoviedb.org/3/movie/${dataMovie.id}?api_key=4aed9df3f0686e9061d3735372c2b523&language=pt-BR`
            )
            .then(({ data }) =>
                console.log(data, dataMovie.id, '---', dataMovie.imdb_id)
            )
            .catch(() => console.log(dataMovie.id, '---', dataMovie.imdb_id)); */
    }, []);
    return (
        <View style={[styles.containClose]}>
            <TouchableOpacity
                style={[styles.containClose]}
                onPress={() => showModal(false)}
            >
                <View style={[styles.contain]}>
                    <View style={[styles.containDescription]}>
                        <Image
                            style={[styles.img]}
                            source={{
                                uri: BASE_URL_IMAGE + dataMovie.poster_path,
                            }}
                            resizeMode="cover"
                        />
                        <View style={[styles.containDescriptionRight]}>
                            <Text style={[styles.text, styles.textTitle]}>
                                {dataMovie.title || dataMovie.name}
                            </Text>
                            <View style={[styles.containDescription]}>
                                <Text
                                    style={[styles.text, styles.textYearTime]}
                                >
                                    {dataMovie.release_date !== undefined
                                        ? dataMovie.release_date?.slice(0, 4)
                                        : dataMovie.first_air_date?.slice(0, 4)}
                                </Text>
                                {dataMovie.adult && (
                                    <Image
                                        style={[styles.imgAdult]}
                                        source={require('../../../../../assets/imgs/adult.png')}
                                        resizeMode="cover"
                                    />
                                )}
                            </View>
                            <Text style={[styles.text, styles.textOverview]}>
                                {dataMovie.overview}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={[
                            styles.containDescription,
                            styles.containActions,
                        ]}
                    >
                        <TouchableOpacity>
                            <View style={[styles.containActionsIconsText]}>
                                <AntDesign
                                    name="play"
                                    size={25}
                                    color="white"
                                />
                                <Text style={[styles.text]}>Assistir</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.containActionsIconsText]}>
                                <AntDesign
                                    name="arrowdown"
                                    size={25}
                                    color="white"
                                />
                                <Text style={[styles.text]}>Baixar</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.containActionsIconsText]}>
                                <AntDesign
                                    name="plus"
                                    size={25}
                                    color="white"
                                />
                                <Text style={[styles.text]}>Minha lista</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.containActionsIconsText]}>
                                <AntDesign
                                    name="sharealt"
                                    size={25}
                                    color="white"
                                />
                                <Text style={[styles.text]}>Compartilhar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.line]} />
                    <TouchableOpacity>
                        <View
                            style={[
                                styles.containDescription,
                                styles.containMoreInfo,
                            ]}
                        >
                            <View
                                style={[
                                    styles.containDescription,
                                    styles.containMoreInfoIconText,
                                ]}
                            >
                                <AntDesign
                                    name="infocirlce"
                                    size={25}
                                    color="white"
                                />
                                <Text
                                    style={[styles.text, styles.textMoreInfo]}
                                >
                                    Mais Informações
                                </Text>
                            </View>
                            <AntDesign name="right" size={25} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ModalSelected;

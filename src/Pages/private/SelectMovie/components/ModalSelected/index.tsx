import { View, Text, Image } from 'react-native';
import React from 'react';
import axios from 'axios';

import styles from './styles';
import { IMovieData } from '../..';
import { BASE_URL_IMAGE, movies } from '../../../../../services/API';

interface IProps extends IMovieData {
    dataMovie: IMovieData;
}

const ModalSelected: React.FC<IProps> = ({ dataMovie }) => {
    React.useEffect(() => {
        movies(dataMovie.id?.toString)
            .then(({ data }) => console.log(data))
            .catch((err) => console.log(err));
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
        <View style={[styles.contain]}>
            <View style={[styles.containDescription]}>
                <Image
                    style={[styles.img]}
                    source={{ uri: BASE_URL_IMAGE + dataMovie.poster_path }}
                    resizeMode="cover"
                />
                <View style={[styles.containDescriptionRight]}>
                    <Text style={[styles.text, styles.textTitle]}>
                        {dataMovie.title}
                    </Text>
                    <Text style={[styles.text, styles.textYearTime]}>
                        {dataMovie.release_date?.slice(0, 4)}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ModalSelected;

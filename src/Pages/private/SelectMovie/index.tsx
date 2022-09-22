import { View, Text, Modal, Alert } from 'react-native';
import React, { useState, useMemo } from 'react';

import HomePrivate from './components/HomePrivate';
import { movies } from '../../../services/API';
import styles from './styles';

interface IMovieData {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection?: null | object;
    budget?: number;
    genres?: object[];
    id?: number;
    name?: string;
    homepage?: string | null;
    imdb_id?: string | null;
    original_language?: string;
    original_title?: string;
    overview?: string | null;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: object[];
    logo_path?: string | null;
    origin_country?: string;
    production_countries?: object[];
    iso_3166_1?: string;
    release_date?: string;
    revenue?: number;
    runtime?: number | null;
    spoken_languages?: object[];
    iso_639_1?: string;
    status?: string;
    tagline?: string | null;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

const SelectMovie: React.FC = () => {
    const [dataAs, setDataAs] = useState<IMovieData[]>([] as IMovieData[]);
    const [showModal, setShowModal] = useState<boolean>(true);
    const [, setUserName] = useState<string>('');

    useMemo(() => {
        movies('popular', '1')
            .then(({ data }: any) => {
                setDataAs(data.results);
            })
            .catch(() =>
                Alert.alert(
                    'Erro',
                    'Desculpe não foi possível acessar o catálogo de filmes'
                )
            );
    }, []);

    return (
        <View style={[styles.contain]}>
            <Text style={[styles.text]}>index</Text>
            {/* {dataAs !== undefined &&
            dataAs.map((item, index) => (
                <Text key={index} style={[styles.text]}>{item.title},</Text>
            )} */}
            {dataAs.length > 1 &&
                dataAs.map((item, index) => (
                    <Text style={[styles.text]} key={index}>
                        {item.title}
                    </Text>
                ))}
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

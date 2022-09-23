import {
    View,
    Text,
    Modal,
    Alert,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';
import React, { useState, useMemo } from 'react';

import HomePrivate from './components/HomePrivate';
import { movies, series, BASE_URL_IMAGE } from '../../../services/API';
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

interface IListMovieProps extends IMovieData {
    data: IMovieData;
    top?: boolean;
}

const ListMovie: React.FC<IListMovieProps> = ({ data, top, id }) => (
    <View key={id} style={[styles.MH]}>
        <Image
            source={{
                uri: `${BASE_URL_IMAGE}${data.poster_path}`,
            }}
            style={[styles.imgs, top !== undefined && top && styles.imgsTop]}
            resizeMode="cover"
        />
    </View>
);

const SelectMovie: React.FC = () => {
    const [moviesPopular, setMoviesPopular] = useState<IMovieData[]>(
        [] as IMovieData[]
    );
    const [playingNow, setPlayingNow] = useState<IMovieData[]>(
        [] as IMovieData[]
    );
    const [topRated, setTopRated] = useState<IMovieData[]>([] as IMovieData[]);
    const [serieOnTheAirToday, setSerieOnTheAirToday] = useState<IMovieData[]>(
        [] as IMovieData[]
    );
    const [serieOnTheAirWeek, setSerieOnTheAirWeek] = useState<IMovieData[]>(
        [] as IMovieData[]
    );
    const [showModal, setShowModal] = useState<boolean>(true);
    const [seriesPopular, setSeriesPopular] = useState<IMovieData[]>(
        [] as IMovieData[]
    );
    const [seriesTopRated, setSeriesTopRated] = useState<IMovieData[]>(
        [] as IMovieData[]
    );
    const [, setUserName] = useState<string>('');

    useMemo(() => {
        movies('popular', '1')
            .then(({ data }: any) => {
                setMoviesPopular(data.results);
            })
            .catch(() =>
                Alert.alert(
                    'Erro',
                    'Desculpe não foi possível acessar o catálogo de filmes'
                )
            );

        movies('now_playing', '1')
            .then(({ data }: any) => {
                setPlayingNow(data.results);
            })
            .catch(() =>
                Alert.alert(
                    'Erro',
                    'Desculpe não foi possível acessar o catálogo de filmes'
                )
            );

        movies('top_rated', '1')
            .then(({ data }: any) => {
                setTopRated(data.results);
            })
            .catch(() =>
                Alert.alert(
                    'Erro',
                    'Desculpe não foi possível acessar o catálogo de filmes'
                )
            );

        series('airing_today', '1')
            .then(({ data }: any) => {
                setSerieOnTheAirToday(data.results);
            })
            .catch(() =>
                Alert.alert(
                    'Erro',
                    'Desculpe não foi possível acessar o catálogo de filmes'
                )
            );

        series('on_the_air', '1')
            .then(({ data }: any) => {
                setSerieOnTheAirWeek(data.results);
            })
            .catch(() =>
                Alert.alert(
                    'Erro',
                    'Desculpe não foi possível acessar o catálogo de filmes'
                )
            );

        series('popular', '1')
            .then(({ data }: any) => {
                setSeriesPopular(data.results);
            })
            .catch(() =>
                Alert.alert(
                    'Erro',
                    'Desculpe não foi possível acessar o catálogo de filmes'
                )
            );

        series('top_rated', '1')
            .then(({ data }: any) => {
                setSeriesTopRated(data.results);
            })
            .catch(() =>
                Alert.alert(
                    'Erro',
                    'Desculpe não foi possível acessar o catálogo de filmes'
                )
            );
    }, []);

    return (
        <ScrollView style={[styles.contain]}>
            <View style={[styles.containContent]}>
                <View style={[styles.containSlider]}>
                    <Text style={[styles.text, styles.title]}>
                        Filmes populares
                    </Text>
                    {moviesPopular.length > 1 && (
                        <FlatList
                            data={moviesPopular}
                            horizontal
                            renderItem={({ item }) => (
                                <ListMovie data={item} top />
                            )}
                        />
                    )}
                </View>
                <View style={[styles.containSlider]}>
                    <Text style={[styles.text, styles.title]}>
                        Séries e programas populares
                    </Text>
                    {seriesPopular.length > 1 && (
                        <FlatList
                            data={seriesPopular}
                            horizontal
                            renderItem={({ item }) => (
                                <ListMovie data={item} top />
                            )}
                        />
                    )}
                </View>
                <View style={[styles.containSlider]}>
                    <Text style={[styles.text, styles.title]}>
                        Filmes passando agora
                    </Text>
                    {playingNow.length > 1 && (
                        <FlatList
                            data={playingNow}
                            horizontal
                            renderItem={({ item }) => <ListMovie data={item} />}
                        />
                    )}
                </View>
                <View style={[styles.containSlider]}>
                    <Text style={[styles.text, styles.title]}>
                        Filmes mais votados
                    </Text>
                    {topRated.length > 1 && (
                        <FlatList
                            data={topRated}
                            horizontal
                            renderItem={({ item }) => <ListMovie data={item} />}
                        />
                    )}
                </View>
                <View style={[styles.containSlider]}>
                    <Text style={[styles.text, styles.title]}>
                        Séries e programas no ar hoje
                    </Text>
                    {serieOnTheAirToday.length > 1 && (
                        <FlatList
                            data={serieOnTheAirToday}
                            horizontal
                            renderItem={({ item }) => <ListMovie data={item} />}
                        />
                    )}
                </View>
                <View style={[styles.containSlider]}>
                    <Text style={[styles.text, styles.title]}>
                        Séries e programas no ar em menos de 7 dias
                    </Text>
                    {serieOnTheAirWeek.length > 1 && (
                        <FlatList
                            data={serieOnTheAirWeek}
                            horizontal
                            renderItem={({ item }) => <ListMovie data={item} />}
                        />
                    )}
                </View>
                <View style={[styles.containSlider]}>
                    <Text style={[styles.text, styles.title]}>
                        Séries e programas mais votados
                    </Text>
                    {seriesTopRated.length > 1 && (
                        <FlatList
                            data={seriesTopRated}
                            horizontal
                            renderItem={({ item }) => <ListMovie data={item} />}
                        />
                    )}
                </View>
            </View>
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
        </ScrollView>
    );
};

export default SelectMovie;

import {
    View,
    Text,
    Modal,
    Alert,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useMemo } from 'react';

import HomePrivate from './components/HomePrivate';
import ModalSelected from './components/ModalSelected';
import { movies, series, BASE_URL_IMAGE } from '../../../services/API';
import styles from './styles';

export interface IMovieData {
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
    first_air_date?: string;
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
    setSelected(param: boolean): void;
    setData(param: IMovieData): void;
}

const ListMovie: React.FC<IListMovieProps> = ({
    data,
    top,
    setSelected,
    setData,
    id,
}) => (
    <View key={id} style={[styles.MH]}>
        <TouchableOpacity
            onPress={() => {
                setSelected(true);
                setData(data);
            }}
        >
            <Image
                source={{
                    uri: `${BASE_URL_IMAGE}${data.poster_path}`,
                }}
                style={[
                    styles.imgs,
                    top !== undefined && top && styles.imgsTop,
                ]}
                resizeMode="cover"
            />
        </TouchableOpacity>
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
    const [seriesPopular, setSeriesPopular] = useState<IMovieData[]>(
        [] as IMovieData[]
    );
    const [seriesTopRated, setSeriesTopRated] = useState<IMovieData[]>(
        [] as IMovieData[]
    );
    const [, setUserName] = useState<string>('');
    const [showModalHome, setShowModalHome] = useState<boolean>(true);
    const [showModalSelected, setShowModalSelected] = useState<boolean>(false);
    const [movieSelected, setMovieSelected] = useState<IMovieData>(
        {} as IMovieData
    );

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
                    {moviesPopular.length > 1 && (
                        <FlatList
                            data={moviesPopular}
                            horizontal
                            renderItem={({ item }) => (
                                <ListMovie
                                    data={item}
                                    top
                                    setData={setMovieSelected}
                                    setSelected={setShowModalSelected}
                                />
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
                                <ListMovie
                                    data={item}
                                    top
                                    setData={setMovieSelected}
                                    setSelected={setShowModalSelected}
                                />
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
                            renderItem={({ item }) => (
                                <ListMovie
                                    data={item}
                                    setData={setMovieSelected}
                                    setSelected={setShowModalSelected}
                                />
                            )}
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
                            renderItem={({ item }) => (
                                <ListMovie
                                    data={item}
                                    setData={setMovieSelected}
                                    setSelected={setShowModalSelected}
                                />
                            )}
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
                            renderItem={({ item }) => (
                                <ListMovie
                                    data={item}
                                    setData={setMovieSelected}
                                    setSelected={setShowModalSelected}
                                />
                            )}
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
                            renderItem={({ item }) => (
                                <ListMovie
                                    data={item}
                                    setData={setMovieSelected}
                                    setSelected={setShowModalSelected}
                                />
                            )}
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
                            renderItem={({ item }) => (
                                <ListMovie
                                    data={item}
                                    setData={setMovieSelected}
                                    setSelected={setShowModalSelected}
                                />
                            )}
                        />
                    )}
                </View>
            </View>
            <Modal
                visible={showModalHome}
                onRequestClose={() => setShowModalHome(false)}
                transparent={false}
            >
                <HomePrivate
                    setShowModal={setShowModalHome}
                    setUserName={setUserName}
                />
            </Modal>

            <Modal
                visible={showModalSelected}
                onRequestClose={() => setShowModalSelected(false)}
                transparent
                style={{ height: 200 }}
            >
                <ModalSelected
                    dataMovie={movieSelected}
                    showModal={setShowModalSelected}
                />
            </Modal>
        </ScrollView>
    );
};

export default SelectMovie;

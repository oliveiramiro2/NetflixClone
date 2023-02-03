import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    FlatList,
    Image,
} from 'react-native';
import React, { useState, useMemo } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { getMonthString, semiHeader } from '../../../services/Utils';
import { BASE_URL_IMAGE, series } from '../../../services/API';
import { IMovieData } from '../SelectMovie';
import styles from './styles';

interface INewSerieProps {
    data: IMovieData;
}

const NewSerie: React.FC<INewSerieProps> = ({ data }) => (
    <View style={[styles.containPreviewSerie]}>
        <Text style={[styles.textDate]}>
            {getMonthString()} {'\n'}
            {data.first_air_date?.split('-')[1]}
        </Text>
        <View>
            <Image
                source={{
                    uri: `${BASE_URL_IMAGE}${data.poster_path}`,
                }}
                style={[styles.img]}
                resizeMode="cover"
            />
            <View style={[styles.containTitle]}>
                <Text style={[styles.textTitle]}>{data.name}</Text>
                <Ionicons
                    name="notifications-outline"
                    color="#fff"
                    size={25}
                    style={{ marginTop: 10 }}
                />
                <Ionicons
                    name="information-circle-outline"
                    color="#fff"
                    size={25}
                    style={{ marginTop: 10 }}
                />
            </View>
            <View style={[styles.containOverview]}>
                <Text style={[styles.textSemiHeader, styles.textOverview]}>
                    {data.overview}
                </Text>
            </View>
        </View>
    </View>
);

const News: React.FC = () => {
    const [semiHeaderSeleted, setSemiHeaderSeleted] = useState<number>(0);
    const [serieOnTheAirWeek, setSerieOnTheAirWeek] = useState<IMovieData[]>(
        [] as IMovieData[]
    );

    useMemo(() => {
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
    }, []);

    return (
        <View style={[styles.contain]}>
            <View style={[styles.containContent]}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {semiHeader.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSemiHeaderSeleted(index)}
                        >
                            <View
                                style={[
                                    styles.containItemSemiHeader,
                                    semiHeaderSeleted === index &&
                                        styles.containItemSemiHeaderSelected,
                                ]}
                            >
                                <MaterialCommunityIcons
                                    name={value.icon}
                                    size={25}
                                    color="#f00"
                                />
                                <Text
                                    style={[
                                        styles.textSemiHeader,
                                        semiHeaderSeleted === index &&
                                            styles.textSemiHeaderSelected,
                                    ]}
                                >
                                    {value.text}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <FlatList
                    data={serieOnTheAirWeek}
                    keyExtractor={(item, index) =>
                        item.id?.toString() || index.toString()
                    }
                    renderItem={({ item }) => <NewSerie data={item} />}
                />
            </View>
        </View>
    );
};

export default News;

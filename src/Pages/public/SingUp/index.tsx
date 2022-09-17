import {
    View,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';
import { MotiView } from 'moti';
import React, { useState, useContext } from 'react';

import { auth } from '../../../services/API';
import { AuthContext } from '../../../services/auth';

import styles from './styles';

const SingUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [bigLabel, setBigLabel] = useState<boolean[]>([true, true]);
    const [, setForceRenderer] = useState<any>();

    const { setLogined, setUserData } = useContext(AuthContext);

    const singUp: Function = () => {
        const sendData = {
            email,
            password,
        };

        auth(sendData)
            .then(() => {
                /*
                    set logic to make login like made in finally
                */
            })
            .catch(() => {
                /*
                    set a feedback to user with error on login
                */
            })
            .finally(() => {
                setLogined(true);
                setUserData({ login: email, password });
            });
    };

    return (
        <View style={[styles.contain]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView style={[styles.containContent]}>
                    <View style={[styles.MT5]}>
                        <MotiView
                            from={{ top: 40 }}
                            animate={{ top: 20 }}
                            onDidAnimate={() => {
                                setBigLabel((prev) => {
                                    prev[0] = false;
                                    return prev;
                                });
                                setForceRenderer(bigLabel);
                                setForceRenderer(null);
                            }}
                            transition={{ type: 'timing', duration: 950 }}
                            style={[styles.containLabel]}
                        >
                            <Text
                                style={[
                                    styles.textLabel,
                                    bigLabel[0] && styles.textBigLabel,
                                ]}
                            >
                                Email
                            </Text>
                        </MotiView>
                        <TextInput
                            defaultValue={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholderTextColor="#FFFFFF"
                            style={[styles.input]}
                            ref={(ref) => {
                                if (
                                    ref !== undefined &&
                                    ref &&
                                    !ref.isFocused() &&
                                    email.length === 0
                                ) {
                                    setTimeout(() => ref.focus(), 1000);
                                }
                            }}
                        />
                    </View>
                    <View style={[styles.MT5]}>
                        <MotiView
                            from={{ top: 40 }}
                            animate={{ top: 20 }}
                            transition={{ type: 'timing', duration: 950 }}
                            onDidAnimate={() => {
                                setBigLabel((prev) => {
                                    prev[1] = false;
                                    return prev;
                                });
                                setForceRenderer(bigLabel);
                                setForceRenderer(null);
                            }}
                            style={[styles.containLabel]}
                        >
                            <Text
                                style={[
                                    styles.textLabel,
                                    bigLabel[1] && styles.textBigLabel,
                                ]}
                            >
                                Senha
                            </Text>
                        </MotiView>
                        <TextInput
                            style={[styles.input]}
                            defaultValue={password}
                            autoCapitalize="none"
                            placeholderTextColor="#FFFFFF"
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <View style={[styles.containButton]}>
                        <TouchableOpacity onPress={() => singUp()}>
                            <Text style={[styles.textButton]}>Entrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.containNeededHelp]}>
                        <TouchableOpacity>
                            <Text style={[styles.textNeededHelp]}>
                                Precisa de ajuda?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.containNewUser]}>
                        <TouchableOpacity>
                            <Text
                                style={[
                                    styles.textNeededHelp,
                                    styles.textNewUser,
                                ]}
                            >
                                Novo por aqui? Inscreva-se agora.
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.containNewUser, styles.containInfoRC]}>
                        <Text style={[styles.textInfoRC]}>
                            O acesso está protegido pelo Google reCAPTCHA para
                            garantir que você não é um robô.
                        </Text>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};

export default SingUp;

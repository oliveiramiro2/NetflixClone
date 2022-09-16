import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import Button from '../Button';
import styles from './styles';

interface IProps {
    modal(params: boolean): void;
}

const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ModalSingIn: React.FC<IProps> = ({ modal }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [inputsFocused, setInputsFocused] = useState<boolean[]>([
        false,
        false,
    ]);
    const [, setForceRenderer] = useState<boolean[]>([]);
    const [wrongEmail, setWrongEmail] = useState<boolean>(true);
    const [wrongPassword, setWrongPassword] = useState<boolean>(true);

    useEffect(() => {
        regexEmail.test(email) ? setWrongEmail(false) : setWrongEmail(true);
    }, [email]);

    useEffect(() => {
        password.length > 5 && password.length < 61
            ? setWrongPassword(false)
            : setWrongPassword(true);
    }, [password]);

    return (
        <KeyboardAvoidingView style={[styles.contain]}>
            <TouchableOpacity onPress={() => modal(false)}>
                <View style={[styles.containClose]}>
                    <Ionicons name="close" size={25} color="#888888" />
                </View>
            </TouchableOpacity>
            <View style={[styles.containContent]}>
                <Text style={[styles.textTitle]}>
                    Tudo pronto para{'\n'}assistir
                </Text>
                <Text style={[styles.textSubtitle]}>
                    Informe seu email para criar ou acessar sua conta
                </Text>

                <View>
                    <View style={[styles.containLabel]}>
                        <Text style={[styles.textLabel]}>Email</Text>
                    </View>
                    <TextInput
                        onFocus={() => {
                            setInputsFocused((prev) => {
                                prev[0] = true;
                                return prev;
                            });
                            setForceRenderer(inputsFocused);
                            setForceRenderer([]);
                        }}
                        onBlur={() => {
                            setInputsFocused((prev) => {
                                prev[0] = false;
                                return prev;
                            });
                            setForceRenderer(inputsFocused);
                            setForceRenderer([]);
                        }}
                        style={[
                            styles.input,
                            inputsFocused[0] && styles.inputFocused,
                            !wrongEmail && styles.rightEmail,
                        ]}
                        defaultValue={email}
                        onChangeText={setEmail}
                        autoFocus={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        ref={(ref) => {
                            if (ref !== undefined && ref && wrongEmail) {
                                setTimeout(() => ref.focus(), 100);
                            }
                        }}
                    />
                    {wrongEmail ? (
                        <Text style={[styles.textWWrongEmail]}>
                            E-mail inválido
                        </Text>
                    ) : (
                        <View>
                            <View style={[styles.containLabel]}>
                                <Text style={[styles.textLabel]}>Senha</Text>
                            </View>
                            <TextInput
                                onFocus={() => {
                                    setInputsFocused((prev) => {
                                        prev[1] = true;
                                        return prev;
                                    });
                                    setForceRenderer(inputsFocused);
                                    setForceRenderer([]);
                                }}
                                onBlur={() => {
                                    setInputsFocused((prev) => {
                                        prev[1] = false;
                                        return prev;
                                    });
                                    setForceRenderer(inputsFocused);
                                    setForceRenderer([]);
                                }}
                                style={[
                                    styles.input,
                                    inputsFocused[1] && styles.inputFocused,
                                    !wrongPassword && styles.rightEmail,
                                ]}
                                defaultValue={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                autoFocus={false}
                                autoCapitalize="none"
                            />
                            {wrongPassword && (
                                <Text style={[styles.textWWrongEmail]}>
                                    A senha deve conter de 6 a 60 dígitos
                                </Text>
                            )}
                        </View>
                    )}
                </View>
                <View style={[styles.containButton]}>
                    <Button
                        lock={!(!wrongEmail && !wrongPassword)}
                        onPress={() => {
                            Alert.alert(
                                'Sucesso',
                                'Você foi cadastrado em nosso sistema, realize o login e aproveite a estadia!'
                            );
                            modal(false);
                        }}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ModalSingIn;

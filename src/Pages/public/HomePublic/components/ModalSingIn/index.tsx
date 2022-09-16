import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
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
    const [wrongEmail, setWrongEmail] = useState<boolean>(false);

    useEffect(() => {
        regexEmail.test(email) ? setWrongEmail(true) : setWrongEmail(false);
    }, [email]);

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
                        style={[styles.input, wrongEmail && styles.rightEmail]}
                        defaultValue={email}
                        onChangeText={setEmail}
                        autoFocus={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        ref={(ref) => {
                            if (ref !== undefined && ref && !ref.isFocused()) {
                                setTimeout(() => ref.focus(), 100);
                            }
                        }}
                    />
                    {!wrongEmail && (
                        <Text style={[styles.textWWrongEmail]}>
                            E-mail inválido
                        </Text>
                    )}
                </View>
                <View style={[styles.containButton]}>
                    <Button />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ModalSingIn;

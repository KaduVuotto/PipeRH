import React from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet, TextInput, KeyboardAvoidingView, } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textEmail: '',
            textSenha: '',
            emailIsValid: false,
            formIsNew: true,
            messageEmailError: '',
        }
    }

    static navigationsOptions = {
        title: 'Login',
    }

    onChangeHandler(field, value) {
        this.setState({ [field]: value });
      }
    validateEmail(textEmail) {
        if (textEmail == '') {
            this.setState({ formIsNew: false, emailIsValid: false, messageEmailError: 'Campo obrigatório' })
            return null
        }
        let validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            formIsNew: false,
            emailIsValid: validate.test(textEmail),
            messageEmailError: validate.test(textEmail) ? '' : 'Email inválido'
        })
    }

    renderAlertEmail() {
        if (this.state.formIsNew == false && this.state.emailIsValid == false) {
            return (
                <Text style={{ color: 'red', fontSize: 14, marginLeft: 35 }}>{this.state.messageEmailError}</Text>
            )
        }
    }

    tryEntrar() {
        if (this.state.textSenha > '' &&
            this.state.textEmail > '') {
        } else {
            Alert.alert('Erro!', 'Os campos não podem ser nulos')
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>

                <Header style={styles.header}>
                    <View style={styles.view}>
                        <Image style={{ width: 200, height: 150 }} source={require('../../img/rcky.png')} />
                    </View>
                </Header>
                <KeyboardAvoidingView>
                    <ScrollView>
                        <View style={{ paddingTop: 280 }} >
                            <View>
                                <Text style={styles.textCamposFormulario}>E-mail: </Text>
                                <TextInput
                                    placeholder='seunome@emai.com'
                                    style={styles.textInputFormulario}
                                    onChangeText={(text) => {
                                        this.validateEmail(text);
                                        this.onChangeHandler('textEmail', text)
                                    }}
                                    value={this.state.textEmail}
                                />
                                {this.renderAlertEmail()}
                                <Text style={styles.textCamposFormulario}>Senha: </Text>
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder='******'
                                    style={styles.textInputFormulario}
                                    onChangeText={(textSenha) => this.setState({ textSenha })}
                                    value={this.state.textSenha} />
                                <View>
                                    <Button onPress={() => navigate('Home')} style={styles.alternativeLayoutButtonContainer}>
                                        <Text style={{ color: '#134CA1', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Container >
        );
    }
}

Login.navigationOptions = {
    title: 'Login',
}
export default Login;

const styles = StyleSheet.create({
    view: {
        paddingTop: 80,
        backgroundColor: '#134CA1',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#134CA1',
    },
    container: {
        backgroundColor: '#134CA1',
        flex: 2,
    },
    viewContent: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCamposFormulario: {
        color: 'white',
        marginTop: 5,
        borderRadius: 25,
        marginLeft: 10,
        fontSize: 18,
        marginLeft: 40,
        marginRight: 40,
    },
    textInputFormulario: {
        height: 40,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 7,
        backgroundColor: 'white',
        borderColor: '#d4d4d4',
        borderWidth: 1,
        margin: 10,
    },
    alternativeLayoutButtonContainer: {
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 45,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 25,
    },
});
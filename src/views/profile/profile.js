import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet, KeyboardAvoidingView, TextInput, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textSenha: '',
      textNome: '',
      formIsNew: true,
    }
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
  register() {
    if (this.state.textNome.length > 0) {
      this.props.navigation.goBack();
      Alert.alert("Sucesso!", "Perfil salvo com sucesso!");
    }
    else {
      Alert.alert("Atenção!", "Verifique os campos e preencha-os corretamente!");
    }
  }
  renderAlertEmail() {
    if (this.state.formIsNew == false && this.state.emailIsValid == false) {
      return (
        <Text style={{ color: 'red', fontSize: 12, marginLeft: 5 }}>{this.state.messageEmailError}</Text>
      )
    }
  }
  ShowMaxAlert = (textNome) => {
    var TextLength = textNome.length.toString();
    if (TextLength == 60) {
      Alert.alert("Desculpe, você digitou o limite máximo de caracteres.")
      // Put your code here which you want to execute when TextInput entered text reached to 10.
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={{ flex: 1, margin: 16 }}>
            <Icon onPress={() => this.props.navigation.goBack()} type="MaterialIcons" name="arrow-back" style={{ color: 'white' }} />
          </Left>
          <Title style={{ flex: 1, alignSelf: 'center' }}>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Perfil</Text>
          </Title>
          <Right style={{ flex: 1, margin: 16 }}>
            <Icon onPress={() => this.register()} type="MaterialIcons" name="done" style={{ color: 'white' }} />
          </Right>
        </Header>
        <View style={styles.container}>

          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={styles.viewFormulario}>
              <Text style={styles.textCamposFormulario}>Seu nome: </Text>
              <TextInput maxLength={60} placeholder='Nome Completo' style={styles.textInputFormulario} onChangeText={(textNome) => { this.onChangeHandler('textNome', textNome); this.ShowMaxAlert(textNome) }}
                value={this.state.textNome} />

              <Text style={styles.textCamposFormulario}>Seu e-mail: </Text>
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


              <Button style={styles.alternativeLayoutButtonContainer}>
                <Text>Alterar Senha</Text>
              </Button>

            </View>
          </KeyboardAvoidingView>
        </View>
      </Container>
    );
  }
}
Profile.navigationOptions = {
  title: 'Profile',
}
export default Profile;

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: '#134CA1',
  },
  header: {
    backgroundColor: '#134CA1',
  },
  container: {
    //justifyContent:'space-around',
    paddingTop: 20,
    alignItems: 'stretch',
    paddingBottom: 25,
    backgroundColor: '#E4E4E4',
    flex: 1,
  },
  viewFormulario: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#A6ABAB',
    borderBottomWidth: 1,
    shadowColor: '#A6ABAB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 25,
    shadowRadius: 2,
    padding: 50,
    backgroundColor: 'white',
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  textInputFormulario: {
    height: 40,
    borderRadius: 7,
    backgroundColor: 'white',
    borderColor: '#d4d4d4',
    borderWidth: 1,
    margin: 10,
  },
  textCamposFormulario: {
    marginTop: 5,
    borderRadius: 25,
    marginLeft: 10,
    fontSize: 18,
  },
  alternativeLayoutButtonContainer: {
    margin: 25,
    margin: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    backgroundColor: '#134CA1'

  },
});
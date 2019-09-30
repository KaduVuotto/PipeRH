import React, { Component } from 'react';
import { Container, Header, Left, Right, Title, Icon, View, Text, Tab, Tabs, TabHeading, Drawer, Content, Button } from 'native-base';
import { Image, StyleSheet, FlatList, Platform, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class MarginRight extends Component {
  state = {
    isVisible: false, //state of modal default false  
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => { console.log("Modal has been closed.") }}>
          {/*All views of Modal*/}
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
            <Button title="Click To Close Modal" onPress={() => {
              this.setState({ isVisible: !this.state.isVisible })
            }} />
          </View>
        </Modal>
      </View>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data1: [
      { id: "00", name: "Holerite deste mês está disponivel" },
    ],
    data2: [
      { id: "01", name: "Holerite do mês de Abril" },
      { id: "02", name: "Holerite do mês de Março" },
      { id: "03", name: "Holerite do mês de Fevereiro" },
      { id: "04", name: "Holerite do mês de Janeiro" },
    ],
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header} hasTabs>
          <Left style={{ flex: 1, margin: 16 }}>
            <Icon type="Entypo" name="menu" style={{ color: 'white' }} onPress={() => {
              this.setState({ isVisible: !this.state.isVisible })
            }} />
          </Left>
          <Title style={{ flex: 1, }}>
            <Image style={{ width: 60, height: 35, }} source={require('../../img/rcky.png')} />
          </Title>
          <Right style={{ flex: 1, margin: 16 }}>
            <Icon type="FontAwesome" name="user" style={styles.icon} onPress={() => navigate('Profile')} />
          </Right>
        </Header>
        <View style={styles.container}>
          <Tabs>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="MaterialIcons" name="notifications" /></TabHeading>}>
              {/*<Notification notification={notification} />*/}
              <View style={styles.container}>
                <FlatList
                  data={this.state.data1}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.itemNotification}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                          <Icon type="MaterialCommunityIcons" name="file-document" style={{ color: '#134CA1', width: 30, height: 30, }} />
                          <Text style={styles.textNotification}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </Tab>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="MaterialCommunityIcons" name="file-document" /></TabHeading>}>
              {/*<Messages messages={messages} />*/}
              <View style={styles.container}>
                <FlatList
                  data={this.state.data2}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.itemDocument}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate() }}>
                          <Text style={styles.textDocument}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </Tab>
          </Tabs>
        </View>
      </Container>

    );
  }
}
export default Home;

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: '#134CA1',
  },
  header: {
    backgroundColor: '#134CA1',
  },
  container: {
    backgroundColor: '#E4E4E4',
    flex: 1,
  },
  icon: {
    color: 'white',
    width: 30,
    height: 30,
  },
  itemNotification: {
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
  itemDocument: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#A6ABAB',
    borderBottomWidth: 1,
    shadowColor: '#A6ABAB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 25,
    shadowRadius: 2,
    padding: 20,
    backgroundColor: 'white',
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,

  },
  textNotification: {
    color: "#134CA1",
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textDocument: {
    color: "#134CA1",
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00BCD4",
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,

  },
  text: {
    color: '#3f2949',
    marginTop: 10
  }
});
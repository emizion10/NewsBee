import React, {Component} from 'react';
import {Container, Content, List} from 'native-base';
import {getArticles} from '../../service/news';
import {Alert, View, ActivityIndicator} from 'react-native';
import DataItem from '../../components/dataItem';
import ModalComponent from '../../components/modal';

export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticle: {},
    };
  }

  handleItemPress = articleData => {
    this.setState({
      setModalVisible: true,
      modalArticle: articleData,
    });
  };
  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticle: {},
    });
  };

  componentDidMount() {
    getArticles('technology').then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something Went Wrong');
      },
    );
  }

  render() {
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator
          style={{marginTop: 250}}
          animating={this.state.isLoading}
        />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItem onPress={this.handleItemPress} data={item} />;
        }}
      />
    );
    return (
      <Container>
        <Content>{view}</Content>
        <ModalComponent
          show={this.state.setModalVisible}
          articleData={this.state.modalArticle}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}

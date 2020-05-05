import React, {Component} from 'react';
import {Dimensions, Modal, Share} from 'react-native';
import {WebView} from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {
  Container,
  Left,
  Header,
  Body,
  Icon,
  Title,
  Button,
  Right,
  Content,
} from 'native-base';

const webviewHeight = Dimensions.get('window').height - 56;

class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    return this.props.onClose();
  };
  handleShare = () => {
    const {url, title} = this.props.articleData;
    const message = `${title}\n\nRead More @${url}\n\nShared Via News Bee`;
    return Share.share({title, message, url}, {dialogTitle: `Share ${title}`});
  };
  render() {
    const {show, articleData} = this.props;
    const {url} = articleData;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={show}
          onRequestClose={this.handleClose}>
          <Container
            style={{margin: 15, marginBottom: 0, backgroundColor: 'white'}}>
            <Header style={{backgroundColor: '#009387'}}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" style={{color: 'white', fontSize: 15}} />
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} style={{color: 'white'}} />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{color: 'white', fontSize: 15}} />
                </Button>
              </Right>
            </Header>
            <Content>
              <AutoHeightWebView
                source={{uri: url}}
                style={{
                  width: Dimensions.get('window').width,
                }}
                onError={this.handleClose}
                startInLoadingState={true}
                scalesPageToFit={false}
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ModalComponent;

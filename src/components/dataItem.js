import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Button,
  Right,
} from 'native-base';
import {View} from 'react-native';
import TimeAgo from './time';

export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  handlePress = () => {
    const {url, title} = this.data;
    this.props.onPress({url, title});
  };
  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: this.data.urlToImage
                ? this.data.urlToImage
                : 'https://image.shutterstock.com/image-vector/world-news-flat-vector-icon-260nw-674423185.jpg',
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.data.description}
          </Text>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 8}}>
            <Text note>{this.data.source.name}</Text>
            <TimeAgo time={this.data.publishedAt} />
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

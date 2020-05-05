import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Right,
  Title,
  Body,
} from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#009387'}} hasTabs>
          <Left />
          <Body>
            <Title style={{color: 'white'}}>News Bee</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab
            tabStyle={{backgroundColor: '#009387'}}
            activeTabStyle={{backgroundColor: '#009387'}}
            heading="General">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#009387'}}
            activeTabStyle={{backgroundColor: '#009387'}}
            heading="Business">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#009387'}}
            activeTabStyle={{backgroundColor: '#009387'}}
            heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

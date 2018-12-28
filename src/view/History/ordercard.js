import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Title, Left, Right, Icon, Button, Body, Text, Card, CardItem} from "native-base";

export interface Props {
	item: any;
}
export interface State {}
export class OrderItem extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.item = this.props.item;
  }

  render() {
    return (
      <Card style={[styles.cardContainer]}>
         <CardItem header bordered>
           <Body>
             <Text>{this.item.title}</Text>
           </Body>
           <Right>
             <Text>{this.item.deliverDate}</Text>
             <Text note primary>{this.item.deliverStatus}</Text>
           </Right>
         </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{this.item.description}</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
           <Left>
             <Text note>{this.item.orderStatus}</Text>
           </Left>
           <Body>
             <Text note>{this.item.orderDate}</Text>
           </Body>
           <Right>
             <Text>{this.item.amount}</Text>
           </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10
  }
});

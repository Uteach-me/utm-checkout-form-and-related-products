/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import Wrapper from '../elements/Wrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      products: [],
      product: {
        __v: 0,
        _id: 4,
        course: {
          name: 'Awesome Concrete Shirt',
          image: 'http://lorempixel.com/640/480/cats',
          video: 'http://lorempixel.com/640/480/sports',
          category: 'sysadmin',
          lengthInHours: 449,
          articleCount: 89,
          resourceCount: 59,
        },
        lastUpdateDate: '2019-05-25T06:38:38.037Z',
        originalPrice: 649,
        salesPrice: 580,
        totalNumOfPurchases: 114141,
        averageRating: 4,
      },
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get('/products')
      .then((response) => {
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          products: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
      });
  }

  render() {
    return (
      <Wrapper>
        <div>
        Hello World
        </div>
      </Wrapper>
    );
  }
}

export default App;

/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import Wrapper from '../elements/Wrapper';
import TextWrapper from '../elements/TextWrapper';
import Prices from '../elements/Prices';
import Expiration from '../elements/Expiration';
import Button from '../elements/Button';
import Guarantee from '../elements/Guarantee';
import IncentivesWrapper from '../elements/IncentivesWrapper';
import Incentive from '../elements/Incentive';
import { VideoIcon } from '../elements/Icons';

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
          image: 'http://loremflickr.com/640/480',
          video: 'http://loremflickr.com/640/480',
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
        <TextWrapper>
          <Prices>
            <strong>$11.99</strong>
            <s>$194.99</s>
            94% off
          </Prices>
          <Expiration>
            <strong>9 hours</strong>
            {' '}
          left at this price!
          </Expiration>
          <Button addToCart>
            Add to cart
          </Button>
          <Button buyNow>
            Buy now
          </Button>
          <Guarantee>
            30-Day Money-Back Guarantee
          </Guarantee>
          <IncentivesWrapper>
            This course includes
            <Incentive>
              <VideoIcon />
              17 hours of video
            </Incentive>
            <Incentive>
              3 articles
            </Incentive>
          </IncentivesWrapper>
        </TextWrapper>
      </Wrapper>
    );
  }
}

export default App;

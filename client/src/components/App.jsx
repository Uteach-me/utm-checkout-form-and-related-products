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
import {
  VideoIcon, ArticleIcon, ResourcesIcon, CertificateIcon, AccessIcon, MobileIcon,
} from '../elements/Icons';
import PlayButton from '../elements/PlayButton';
import VideoWrapper from '../elements/VideoWrapper';
import VideoPreview from '../elements/VideoPreview';
import CouponWrapper from '../elements/CouponWrapper';
import CouponButton from '../elements/CouponButton';
import CouponForm from './CouponForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      products: [],
      product: {},
      couponButtonClicked: false,
    };
    this.getProduct = this.getProduct.bind(this);
    this.couponButtonClickHandler = this.couponButtonClickHandler.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    axios.get('/products/7')
      .then((response) => {
        // console.log(response.data);
        const data = response.data;
        this.setState({
          product: data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
      });
  }

  couponButtonClickHandler() {
    this.setState({
      couponButtonClicked: true,
    });
  }

  render() {
    return (
      this.state.product[0] ? (
        <Wrapper>
          <VideoWrapper>
            <PlayButton />
            <VideoPreview src={this.state.product[0].course.video} />
          </VideoWrapper>
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
                <ArticleIcon />
              3 articles
              </Incentive>
              <Incentive>
                <ResourcesIcon />
              2 downloadable resources
              </Incentive>
              <Incentive>
                <AccessIcon />
              Full lifetime access
              </Incentive>
              <Incentive>
                <MobileIcon />
              Access on mobile and TV
              </Incentive>
              <Incentive>
                <CertificateIcon />
              Certificate of Completion
              </Incentive>
            </IncentivesWrapper>
            <CouponWrapper>
              {this.state.couponButtonClicked ? (
                <CouponForm />
              ) : (
                <CouponButton onClick={this.couponButtonClickHandler}>
              Apply Coupon
                </CouponButton>
              )}
            </CouponWrapper>
          </TextWrapper>
        </Wrapper>
      ) : (
        <div />
      )
    );
  }
}

export default App;

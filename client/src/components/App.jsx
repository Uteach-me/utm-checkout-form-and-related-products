/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
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
import VideoModal from './VideoModal.jsx';

// initializes moment js
moment().format();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      products: [],
      product: {},
      couponButtonClicked: false,
      hoursRemaining: 0,
      showVideoModal: false,
    };
    this.getProduct = this.getProduct.bind(this);
    this.couponButtonClickHandler = this.couponButtonClickHandler.bind(this);
    this.calculateSalesTimeRemaining = this.calculateSalesTimeRemaining.bind(this);
    this.showVideoHandler = this.showVideoHandler.bind(this);
    this.closeVideoHandler = this.closeVideoHandler.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    // eslint-disable-next-line max-len
    const randomNumber = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + Math.ceil(1);

    axios.get(`/products/${randomNumber}`)
      .then((response) => {
        // console.log(response.data);
        const { data } = response;
        this.setState({
          product: data,
        }, this.calculateSalesTimeRemaining);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
      });
  }

  showVideoHandler() {
    this.setState({
      showVideoModal: true,
    });
  }

  closeVideoHandler() {
    this.setState({
      showVideoModal: false,
    });
  }

  couponButtonClickHandler() {
    this.setState({
      couponButtonClicked: true,
    });
  }

  calculateSalesTimeRemaining() {
    const { product } = this.state;
    const a = moment(product[0].salesEndDate);
    const b = moment();
    const duration = a.diff(b, 'hours');
    this.setState({
      hoursRemaining: duration,
    });
  }

  render() {
    const { product } = this.state;
    const { couponButtonClicked } = this.state;
    const { hoursRemaining } = this.state;
    const { showVideoModal } = this.state;
    return (
      product[0] ? (
        <Wrapper>
          <VideoWrapper onClick={this.showVideoHandler}>
            <PlayButton />
            <VideoPreview src={product[0].course.video} />
          </VideoWrapper>
          <TextWrapper>
            <Prices>
              <strong>
                $
                {product[0].salesPrice}
              </strong>
              <s>
                $
                {product[0].originalPrice}
              </s>
            94% off
            </Prices>
            <Expiration>
              <strong>
                {hoursRemaining}
                {' '}
                hours
              </strong>
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
                {product[0].course.lengthInHours}
                {' '}
                hours of video
              </Incentive>
              <Incentive>
                <ArticleIcon />
                {product[0].course.articleCount}
                {' '}
                articles
              </Incentive>
              <Incentive>
                <ResourcesIcon />
                {product[0].course.resourceCount}
                {' '}
                downloadable resources
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
              {couponButtonClicked ? (
                <CouponForm />
              ) : (
                <CouponButton onClick={this.couponButtonClickHandler}>
              Apply Coupon
                </CouponButton>
              )}
            </CouponWrapper>
          </TextWrapper>
          {showVideoModal ? (
            <VideoModal product={product[0]} closeVideoHandler={this.closeVideoHandler} />
          ) : null}
        </Wrapper>
      ) : (
        <div>
          <h2>Loading</h2>
        </div>
      )
    );
  }
}

export default App;

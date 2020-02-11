import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Background from '../elements/VideoModal/Background';
import VideoModalWrapper from '../elements/VideoModal/VideoModalWrapper';
import CoursePreviewHeaderWrapper from '../elements/VideoModal/CoursePreviewHeaderWrapper';
import CoursePreviewTitle from '../elements/VideoModal/CoursePreviewTitle';
import VideoPlayer from '../elements/VideoModal/VideoPlayer';
import SampleVideoText from '../elements/VideoModal/SampleVideoText';
import SampleVideoItemWrapper from '../elements/VideoModal/SampleVideoItemWrapper';
import SampleVideoItemImage from '../elements/VideoModal/SampleVideoItemImage';
import VideoItemDescWrapper from '../elements/VideoModal/VideoItemDescWrapper';
import { PlayIcon, CloseIcon } from '../elements/Icons';
import SampleVideoItemDesc from '../elements/VideoModal/SampleVideoItemDesc';

const videoModal = document.getElementById('video-modal');

class VideoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      src: props.product.videoUrl1,
      product: props.product,
    };
    this.videoClickHandler = this.videoClickHandler.bind(this);
  }

  videoClickHandler(url) {
    this.setState({
      src: url,
    });
  }

  render() {
    const { product } = this.state;
    const { src } = this.state;
    const { closeVideoHandler } = this.props;
    return ReactDOM.createPortal(
      <Background>
        <VideoModalWrapper>
          <CoursePreviewHeaderWrapper>
            <CoursePreviewTitle>
              Course Preview: Learn Javascript in 24 Days
            </CoursePreviewTitle>
            <CloseIcon onClick={closeVideoHandler} />
          </CoursePreviewHeaderWrapper>
          <VideoPlayer src={src} />
          <SampleVideoText>
            Free Sample Videos:
          </SampleVideoText>
          <SampleVideoItemWrapper value={product.videoUrl1} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl1)}>
            <SampleVideoItemImage src="https://uteach-me-images.s3-us-west-1.amazonaws.com/VideoImages/Video1.jpg" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                JavaScript in 3 hours
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl2} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl2)}>
            <SampleVideoItemImage src="https://uteach-me-images.s3-us-west-1.amazonaws.com/VideoImages/Video2.jpg" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                JavaScript in 1 hour
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl3} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl3)}>
            <SampleVideoItemImage src="https://uteach-me-images.s3-us-west-1.amazonaws.com/VideoImages/Video3.jpg" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                JavaScript: Understanding the Weird Parts
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl4} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl4)}>
            <SampleVideoItemImage src="https://uteach-me-images.s3-us-west-1.amazonaws.com/VideoImages/Video4.jpg" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                The Best Way to Learn JavaScript
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl5} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl5)}>
            <SampleVideoItemImage src="https://uteach-me-images.s3-us-west-1.amazonaws.com/VideoImages/Video5.jpg" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                JavaScript 8 Hour Course
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl6} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl6)}>
            <SampleVideoItemImage src="https://uteach-me-images.s3-us-west-1.amazonaws.com/VideoImages/Video6.jpg" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                Learn JavaScript in 12 Minutes
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl7} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl7)}>
            <SampleVideoItemImage src="https://uteach-me-images.s3-us-west-1.amazonaws.com/VideoImages/Video7.jpg" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                JavaScript in 5 Minutes
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl8} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl8)}>
            <SampleVideoItemImage src="https://uteach-me-images.s3-us-west-1.amazonaws.com/VideoImages/Video8.jpg" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                Learn Python in 24 Days
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
        </VideoModalWrapper>
      </Background>,
      videoModal,
    );
  }
}

export default VideoModal;

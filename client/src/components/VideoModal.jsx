import React from 'react';
import ReactDOM from 'react-dom';
import Background from '../elements/VideoModal/Background';
import VideoModalWrapper from '../elements/VideoModal/VideoModalWrapper';
import CoursePreviewHeaderWrapper from '../elements/VideoModal/CoursePreviewHeaderWrapper';
import CoursePreviewTitle from '../elements/VideoModal/CoursePreviewTitle';
import VideoPlayer from '../elements/VideoModal/VideoPlayer';
import SampleVideoText from '../elements/VideoModal/SampleVideoText';
import SampleVideoItemWrapper from '../elements/VideoModal/SampleVideoItemWrapper';
import SampleVideoItemImage from '../elements/VideoModal/SampleVideoItemImage';
import VideoItemDescWrapper from '../elements/VideoModal/VideoItemDescWrapper';
import { PlayIcon } from '../elements/Icons';
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
    return ReactDOM.createPortal(
      <Background>
        <VideoModalWrapper>
          <CoursePreviewHeaderWrapper>
            <CoursePreviewTitle>
              Course Preview: Learn Python in 24 Days
            </CoursePreviewTitle>
          </CoursePreviewHeaderWrapper>
          <VideoPlayer src={src} />
          <SampleVideoText>
            Free Sample Videos:
          </SampleVideoText>
          <SampleVideoItemWrapper value={product.videoUrl1} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl1)}>
            <SampleVideoItemImage src="https://loremflickr.com/320/240" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                SQL - MySql for Data Analytics and Business Intelligence
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl2} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl2)}>
            <SampleVideoItemImage src="https://loremflickr.com/320/240" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                SQL - MySql for Data Analytics and Business Intelligence
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl3} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl3)}>
            <SampleVideoItemImage src="https://loremflickr.com/320/240" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                SQL - MySql for Data Analytics and Business Intelligence
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl4} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl4)}>
            <SampleVideoItemImage src="https://loremflickr.com/320/240" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                SQL - MySql for Data Analytics and Business Intelligence
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl5} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl5)}>
            <SampleVideoItemImage src="https://loremflickr.com/320/240" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                SQL - MySql for Data Analytics and Business Intelligence
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl6} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl6)}>
            <SampleVideoItemImage src="https://loremflickr.com/320/240" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                SQL - MySql for Data Analytics and Business Intelligence
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl7} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl7)}>
            <SampleVideoItemImage src="https://loremflickr.com/320/240" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                SQL - MySql for Data Analytics and Business Intelligence
              </SampleVideoItemDesc>
            </VideoItemDescWrapper>
          </SampleVideoItemWrapper>
          <SampleVideoItemWrapper value={product.videoUrl8} currentSrc={src} onClick={() => this.videoClickHandler(product.videoUrl8)}>
            <SampleVideoItemImage src="https://loremflickr.com/320/240" />
            <VideoItemDescWrapper>
              <PlayIcon />
              <SampleVideoItemDesc>
                SQL - MySql for Data Analytics and Business Intelligence
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

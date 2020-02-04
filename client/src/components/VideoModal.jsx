import React from 'react';
import ReactDOM from 'react-dom';
import Background from '../elements/VideoModal/Background';
import VideoModalWrapper from '../elements/VideoModal/VideoModalWrapper';
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
    // this.videoClickHandler = this.videoClickHandler.bind(this);
  }

  // videoClickHandler(url) {
  //   this.setState({
  //     src: url,
  //   });
  // }

  render() {
    const { product } = this.state;
    const { src } = this.state;
    return ReactDOM.createPortal(
      <Background>
        <VideoModalWrapper>
          <CoursePreviewTitle>
            Course Preview: Learn Python in 24 Days
          </CoursePreviewTitle>
          <VideoPlayer src={src} />
          <SampleVideoText>
            Free Sample Videos:
          </SampleVideoText>
          <SampleVideoItemWrapper url="https://www.youtube.com/embed/hdI2bqOjy3c">
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

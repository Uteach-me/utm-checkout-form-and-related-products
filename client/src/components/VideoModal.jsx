import React from 'react';
import ReactDOM from 'react-dom';
import Background from '../elements/VideoModal/Background';
import VideoModalWrapper from '../elements/VideoModal/VideoModalWrapper';
import CoursePreviewTitle from '../elements/VideoModal/CoursePreviewTitle';

const videoModal = document.getElementById('video-modal');

class VideoModal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <Background>
        <VideoModalWrapper>
          <CoursePreviewTitle>
            Course Preview: Learn Python in 24 Days
          </CoursePreviewTitle>
        </VideoModalWrapper>
      </Background>,
      videoModal,
    );
  }
}

export default VideoModal;

import React from 'react';
import ReactDOM from 'react-dom';
import Background from '../elements/VideoModal/Background';
import VideoModalWrapper from '../elements/VideoModal/VideoModalWrapper';

const videoModal = document.getElementById('video-modal');

class VideoModal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <Background>
        <VideoModalWrapper>
          This is the modal box
        </VideoModalWrapper>
      </Background>,
      videoModal,
    );
  }
}

export default VideoModal;

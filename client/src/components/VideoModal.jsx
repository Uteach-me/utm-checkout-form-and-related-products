import React from 'react';
import ReactDOM from 'react-dom';
import Background from '../elements/VideoModal/Background';
import VideoModalBox from '../elements/VideoModal/VideoModalBox';

const videoModal = document.getElementById('video-modal');

class VideoModal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <Background>
        <VideoModalBox>
          This is the modal box
        </VideoModalBox>
      </Background>,
      videoModal,
    );
  }
}

export default VideoModal;

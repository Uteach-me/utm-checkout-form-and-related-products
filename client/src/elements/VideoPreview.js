import styled from 'styled-components';

const VideoPreview = styled.img`
  width: 100%;
  src: ${(props) => props.src};
`;

export default VideoPreview;

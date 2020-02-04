import styled from 'styled-components';

const SampleVideoItemImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  position: relative;
  width: 20%;
  src: ${(props) => props.src};
`;

export default SampleVideoItemImage;

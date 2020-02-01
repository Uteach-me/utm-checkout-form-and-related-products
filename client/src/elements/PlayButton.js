import styled from 'styled-components';

const PlayButton = styled.div`
  position: absolute;
  top: 0;
  height: 0;
  width: 100%;
  height: 100%;
  background: url(https://www.udemy.com/staticx/udemy/js/webpack/icon-play.ac3f32ecb72a0c3f674fa5a3f3062a56.svg) center center / auto 50% no-repeat;
  &:hover {
    transform: scale(1.2);
    transition: transform 150ms ease-in-out;
  }
`;

export default PlayButton;

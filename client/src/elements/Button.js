import styled, { css } from 'styled-components';

const Button = styled.button`
  margin-top: 0.5em;
  width: 100%;
  padding: 1em 0;
  text-align: center;
  border: 1px solid #888;
  background: #fff;
  color: #888;

  ${(props) => props.addToCart && css`
    background: red;
    color: #fff;
    border-color: red;

    &:hover {
      background: maroon;
      border-color: maroon;
    }
  `}

  ${(props) => props.buyNow && css`
    margin-bottom: 0.5em;
    margin-top: 0.5em;

    &:hover {
      background: #eee;
    }
  `}
`;

export default Button;

// Create primary and secondary button style

/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 0;
  display: block;
  border-radius: 4px;
  color: #505763;
  padding: 3px;
  font-size: 15px;
  line-height: 1.43;
`;

const StyledInput = styled.input`
  type: text;
  height: 34px;
  padding: 0 10px;
  font-size: 13px;
  line-height; 1.287;
  position: relative;
  float: left;
  width: 100%;
  color: #29303b;
  border: 1px solid #8a92a3;
`;

const StyledButton = styled.input`
  height: 36px;
  padding: 0 10px;
  font-size: 13px;
  line-height: 1.287;
  border-radius: 2px;
  margin-left: -1px;
  position: relative;
  color: #fff;
  background-color: #ec5252;
  border: 1px solid transparent;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

class CouponForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledForm>
        <StyledDiv>
          <StyledInput placeholder="Enter coupon" />
          <StyledButton type="submit" value="Apply" />
        </StyledDiv>
      </StyledForm>
    );
  }
}

export default CouponForm;

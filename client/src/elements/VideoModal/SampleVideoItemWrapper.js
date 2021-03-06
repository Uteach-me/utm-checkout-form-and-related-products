import styled from 'styled-components';

const SampleVideoItemWrapper = styled.div`
  background-color: ${(props) => ((props.value === props.currentSrc) ? '#505763' : '#29303b')};
  min-height: 70px;
  display: flex;
  border-bottom: 1px solid #686f7a;
  color: #fff;
  font-size: 13px;
  padding: 8px 16px;
  box-sizing: border-box;
  font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
  line-height: 1.43;
  cursor: pointer;
`;

export default SampleVideoItemWrapper;

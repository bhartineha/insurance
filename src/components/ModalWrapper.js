import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 520px;
  height: 780px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

ModalWrapper.displayName = 'ModalWrapper';

export default ModalWrapper;

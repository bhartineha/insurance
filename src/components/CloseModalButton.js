import styled from "styled-components";
import { MdClose } from "react-icons/md";

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 22px;
  height: 22px;
  padding: 0;
  z-index: 10;
`;

CloseModalButton.displayName = "CloseModalButton";

export default CloseModalButton;

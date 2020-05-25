import React from "react";
import styled from "styled-components";

const PageContainer = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default PageContainer;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

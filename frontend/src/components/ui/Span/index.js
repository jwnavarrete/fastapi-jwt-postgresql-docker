import React from "react";
import styled from "styled-components";

const Span = styled.span`
  background: inherit;
`;

const index = (props) => {
  return <Span {...props}>{props.children}</Span>;
};

export default index;

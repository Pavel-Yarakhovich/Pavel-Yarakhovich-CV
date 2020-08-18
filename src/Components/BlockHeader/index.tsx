import React, { memo } from "react";
import styled from "@emotion/styled";

export const BlockHeader = memo(({ header }: { header: string }) => {
  return <Header>{header}</Header>;
});

const Header = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 20px 40px;
`;

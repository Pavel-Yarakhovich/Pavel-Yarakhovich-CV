import React, { memo } from "react";
import styled from "@emotion/styled";

export const BlockHeader = memo(({ header }: { header: string }) => {
  return <Header>{header}</Header>;
});

const Header = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem;
  width: 100%;
  margin-top: 0;
`;

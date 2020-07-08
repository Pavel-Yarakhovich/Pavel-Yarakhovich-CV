import React, { memo } from "react";
import * as Styled from "./styled";

interface IWorkInfo {
  companyLogo: string;
  companyName: string;
  period: string;
  position: string;
  duties: string[];
}

export const WorkPlace: React.FC<IWorkInfo> = memo(
  ({ companyLogo, companyName, period, position, duties }) => {
    return (
      <Styled.Container>
        <Styled.Logo src={companyLogo} />
        <Styled.Info>
          <Styled.Position>{position}</Styled.Position>
          <Styled.CompanyName>{companyName}</Styled.CompanyName>
          <Styled.Period>{period}</Styled.Period>
          {duties.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </Styled.Info>
      </Styled.Container>
    );
  }
);

import React, { memo } from "react";
import { WorkPlace } from "./WorkPlace";
import Omertex from "../../../Assets/img/omertex.png";
import Freelance from "../../../Assets/img/freelance.png";
import * as Styled from "./styled";

export const WorkExperience = memo(() => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>Work experience</Styled.Title>
        <Styled.Experience>
          <WorkPlace
            companyLogo={Omertex}
            companyName="Omertex, Ltd"
            period="january 2020 - present"
            position="Frontend developer"
            duties={["this", "that"]}
          />
          <WorkPlace
            companyLogo={Freelance}
            companyName="Self-Employed"
            period="june 2019 - january 2020"
            position="Frontend developer"
            duties={["this", "that"]}
          />
        </Styled.Experience>
      </Styled.Container>
    </Styled.Wrapper>
  );
});

import React, { memo } from "react";
import { WorkExperience } from "./WorkExperience";
import { Courses } from "./Courses";
import { Github } from "./Github";
import * as Styled from "./styled";

export const Developer: React.FC = memo(() => {
  return (
    <Styled.Container id="developer">
      <Styled.Content>
        <WorkExperience />
        <Courses />
        <Github />
      </Styled.Content>
    </Styled.Container>
  );
});

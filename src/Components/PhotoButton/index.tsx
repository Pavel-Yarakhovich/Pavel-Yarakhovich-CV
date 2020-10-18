import React, { memo, useState } from "react";

import { Modal } from "../../Shared/Modal";
import { Toolkit } from "../Toolkit";
import { ToolkitCategoryContent } from "../ToolkitCategoryContent";
import { Github } from "../Developer/Github";
import { WorkExperience } from "../Developer/WorkExperience";

import * as Styled from "./styled";

export const PhotoButton = memo(() => {
  const [chosenInfo, setChosenInfo] = useState("");
  const [chosenCategory, setChosenCategory] = useState("languages");

  const handleChosenCategory = (id: string) => {
    setChosenCategory(id);
    // scrollIntoView("toolkit");
  };

  return (
    <>
      <Styled.Container>
        <Styled.Buttons>
          <Styled.ButtonLeftTop onClick={() => setChosenInfo("Toolkit")}>
            {/* <span>Toolkit</span> */}
            <Styled.LTIcon />
          </Styled.ButtonLeftTop>
          <Styled.ButtonRightTop
            onClick={() => setChosenInfo("Work Experience")}
          >
            {/* <span>Work Experience</span> */}
            <Styled.RTIcon />
          </Styled.ButtonRightTop>
          <Styled.ButtonLeftBottom onClick={() => setChosenInfo("GitHub")}>
            {/* <span>GitHub</span> */}
            <Styled.LBIcon />
          </Styled.ButtonLeftBottom>
          <Styled.ButtonRightBottom
            onClick={() => setChosenInfo("Learning")}
          >
            {/* <span>Learning</span> */}
            <Styled.RBIcon />
          </Styled.ButtonRightBottom>

          <Styled.Self src="/img/self.jpeg" alt="" />
        </Styled.Buttons>
      </Styled.Container>

      <Modal isOpen={!!chosenInfo} handleClose={() => setChosenInfo('')}>
        { chosenInfo === "Toolkit" && (
          <Styled.InfoContainer>
            <Toolkit setChosenCategory={handleChosenCategory} id="toolkit" />
            <ToolkitCategoryContent chosenCategory={chosenCategory} />
          </Styled.InfoContainer>
        )}
        { chosenInfo === "GitHub" && <Github /> }
        { chosenInfo === "Work Experience" && <WorkExperience /> }
      </Modal>
    </>
  );
});

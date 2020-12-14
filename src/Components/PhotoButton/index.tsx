import React, { memo, useState, useRef, useEffect } from "react";
import { Transition } from "react-transition-group";

import { Modal } from "../../Shared/Modal";
import { Toolkit } from "../Toolkit";
import { ToolkitCategoryContent } from "../ToolkitCategoryContent";
import { Github } from "../Developer/Github";
import { WorkExperience } from "../Developer/WorkExperience";
import { BooksCourses } from "../Developer/BooksCourses";
import { useObserver } from "../../Hooks/useObserver";

import * as Styled from "./styled";
import { Preview } from "../GenerateCV/styled";

interface VisibilityProps {
  [key: string ]: boolean;
}

export const PhotoButton = memo(() => {
  const [chosenInfo, setChosenInfo] = useState("");
  const [chosenCategory, setChosenCategory] = useState("languages");
  const [buttonsVisibility, setButtonsVisibility] = useState<VisibilityProps>({
    leftTop: false,
    rightTop: false,
    leftBottom: false,
    rightBottom: false,
  });

  useEffect(() => {
    console.log(buttonsVisibility);
  }, [buttonsVisibility]);

  const handleChosenCategory = (id: string) => {
    setChosenCategory(id);
    // scrollIntoView("toolkit");
  };

  interface VisibilityWrapperProps {
    children: any;
    corner: string;
  }

  const VisibilityWrapper = React.forwardRef(
    (props: VisibilityWrapperProps, ref: any) => {
      const { children, corner } = props;

      useObserver(ref, 0.15, (isVisible) => {
        if (buttonsVisibility[corner] !== isVisible) {
          setButtonsVisibility((prev) => ({ ...prev, [corner]: isVisible }));
        }
      });

      return <div ref={ref}>{children}</div>;
    }
  );

  return (
    <>
      <Styled.Container>
        <Styled.Buttons>
          <Styled.ButtonLeftTop onClick={() => setChosenInfo("Toolkit")}>
            <VisibilityWrapper
              corner="leftTop"
              ref={useRef<HTMLButtonElement>(null)}
            >
              <Transition
                in={buttonsVisibility.leftTop}
                timeout={500}
              >
                {state => (
                  <Styled.LTIcon style={{ ...LeftTop, ...LeftTopVisible[state] }} />
                )}
              </Transition>
              
            </VisibilityWrapper>
          </Styled.ButtonLeftTop>

          <Styled.ButtonRightTop
            onClick={() => setChosenInfo("Work Experience")}
          >
            <VisibilityWrapper
              corner="rightTop"
              ref={useRef<HTMLButtonElement>(null)}
            >
              <Transition
                in={buttonsVisibility.rightTop}
                timeout={500}
              >
                {state => (
                  <Styled.RTIcon style={{ ...RightTop, ...RightTopVisible[state] }} />
                )}
              </Transition>

            </VisibilityWrapper>
          </Styled.ButtonRightTop>

          <Styled.ButtonLeftBottom onClick={() => setChosenInfo("GitHub")}>
            <VisibilityWrapper
              corner="leftBottom"
              ref={useRef<HTMLButtonElement>(null)}
            >
              <Transition
                in={buttonsVisibility.leftBottom}
                timeout={500}
              >
                {state => (
                  <Styled.LBIcon style={{ ...LeftBottom, ...LeftBottomVisible[state] }} />
                )}
              </Transition>
            </VisibilityWrapper>
          </Styled.ButtonLeftBottom>

          <Styled.ButtonRightBottom onClick={() => setChosenInfo("Learning")}>
            <VisibilityWrapper
              corner="rightBottom"
              ref={useRef<HTMLButtonElement>(null)}
            >
              <Transition
                in={buttonsVisibility.rightBottom}
                timeout={{ appear: 500, enter: 500, exit: 500 }}
                mountOnEnter
                unmountOnExit
              >
                {state => (
                  <Styled.RBIcon style={{ ...RightBottom, ...RightBottomVisible[state] }} />
                )}
              </Transition>
            </VisibilityWrapper>
          </Styled.ButtonRightBottom>

          <Styled.Self src="/img/self.jpeg" alt="" />
        </Styled.Buttons>
      </Styled.Container>

      <Modal isOpen={!!chosenInfo} handleClose={() => setChosenInfo("")}>
        {chosenInfo === "Toolkit" && (
          <Styled.InfoContainer>
            <Toolkit setChosenCategory={handleChosenCategory} id="toolkit" />
            <ToolkitCategoryContent chosenCategory={chosenCategory} />
          </Styled.InfoContainer>
        )}
        {chosenInfo === "GitHub" && <Github />}
        {chosenInfo === "Work Experience" && <WorkExperience />}
        {chosenInfo === "Learning" && <BooksCourses />}
      </Modal>
    </>
  );
});

const LeftTop = {
  top: "50%",
  left: "50%",
  opacity: 0,
  transition: "all 500ms ease",
};

const LeftTopVisible = {
  entering: { top: "50%", left: "50%", opacity: 1 },
  entered: { top: 0, left: 0, opacity: 1 },
  exiting: { top: "50%", left: "50%", opacity: 0 },
  exited: { top: "50%", left: "50%", opacity: 0 },
  unmounted: {},
};


const RightTop = {
  top: "50%",
  right: "50%",
  opacity: 0,
  transition: "all 500ms ease",
};

const RightTopVisible = {
  entering: { top: "50%", right: "50%", opacity: 0 },
  entered: { top: 0, right: 0, opacity: 1 },
  exiting: { top: "50%", right: "50%", opacity: 0 },
  exited: { top: "50%", right: "50%", opacity: 0 },
  unmounted: {},
};


const LeftBottom = {
  bottom: "50%",
  left: "50%",
  opacity: 0,
  transition: "all 500ms ease",
};

const LeftBottomVisible = {
  entering: { bottom: "50%", left: "50%", opacity: 1 },
  entered: { bottom: 0, left: 0, opacity: 1 },
  exiting: { bottom: "50%", left: "50%", opacity: 1 },
  exited: { bottom: "50%", left: "50%", opacity: 0 },
  unmounted: {},
};


const RightBottom = {
  bottom: "50%",
  right: "50%",
  opacity: 0,
  transition: "all 500ms ease",
};

const RightBottomVisible = {
  entering: { bottom: "50%", right: "50%", opacity: 1 },
  entered: { bottom: 0, right: 0, opacity: 1 },
  exiting: { bottom: "50%", right: "50%", opacity: 1 },
  exited: { bottom: "50%", right: "50%", opacity: 0 },
  unmounted: {},
};

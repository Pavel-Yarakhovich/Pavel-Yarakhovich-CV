import React, { memo, useEffect } from "react";
import { Transition } from "react-transition-group";
import { Reading } from "./Reading";
import { Sports } from "./Sports";
import { Cooking } from "./Cooking";
import { Learning } from "./Learning";

import * as Styled from "./styled";

export const Hobbies: React.FC<{ inProp: boolean, id?: string }> = memo(({ inProp, id }) => {
  return (
    <Transition in={inProp} timeout={320}>
      {(state) => (
        <Styled.Container
          id={id}
          style={{
            ...defStyle,
            ...transStyles[state],
          }}
        >
          <Reading />
          <Sports />
          <Cooking />
          <Learning />
        </Styled.Container>
      )}
    </Transition>
  );
});

const defStyle = {
  transform: "rotate(180deg) scale(0)",
  transformOrigin: "center",
  transition: "all 320ms ease-out",
};

const transStyles = {
  entering: { transform: "rotate(180deg) scale(0)" },
  entered: { transform: "rotate(0deg) scale(1)" },
  exiting: { transform: "rotate(180deg) scale(0)" },
  exited: { transform: "rotate(180deg) scale(0)" },
  unmounted: {},
};

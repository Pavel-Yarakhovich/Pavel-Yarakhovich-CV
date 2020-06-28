import React, { memo, useEffect, useState } from "react";
import { Hobbies } from "./Hobbies";
import * as Styled from "./styled";

export const Person: React.FC = memo(() => {
  const [isVisible, setVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
    const [entry] = entries;
    entry.isIntersecting ? setVisible(true) : setVisible(false);
  };
  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    const target = document.getElementById("central");
    target && observer.observe(target);
  });

  return (
    <Styled.Container id="person">
      <Styled.Content  id="central">
        {/* <Styled.CentralBlock id="central"></Styled.CentralBlock> */}
        <Hobbies inProp={isVisible}/>
      </Styled.Content>
    </Styled.Container>
  );
});

import React, { memo, useState } from "react";
import { Transition } from "react-transition-group";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import OpenInNewRoundedIcon from "@material-ui/icons/OpenInNewRounded";
import * as Styled from "./styled";

interface Props {
  name: string;
  description: string;
  logo?: string;
  link?: string;
}

export const CategoryItem: React.FC<Props> = memo((props) => {
  const { name, description, logo, link } = props;
  const [expanded, setExpanded] = useState(false);
  const toggleDescription = (e: React.MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  const openDescription = (e: React.MouseEvent): void => {
    e.preventDefault();
    setExpanded(true);
  };

  return (
    <Styled.Container onClick={openDescription}>
      <Styled.Name>{name}</Styled.Name>
      <Styled.ToggleButton onClick={toggleDescription}>
        {expanded ? <CloseRoundedIcon /> : <AddRoundedIcon />}
      </Styled.ToggleButton>
      <Transition
        in={expanded}
        timeout={{
          appear: 0,
          enter: 0,
          exit: 500,
        }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <>
            <Styled.Description
              style={{
                ...defaultDescription,
                ...transitionDescription[state],
              }}
            >
              {description}
            </Styled.Description>
            {link && (
              <Styled.LinkToDocs>
                Docs:
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
                <Styled.OuterLinkSign>
                  <OpenInNewRoundedIcon fontSize="small" />
                </Styled.OuterLinkSign>
              </Styled.LinkToDocs>
            )}
          </>
        )}
      </Transition>
      {logo && (
        <Transition
          in={expanded}
          timeout={{
            appear: 0,
            enter: 0,
            exit: 320,
          }}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <Styled.Logo
              style={{
                ...defaultLogo,
                ...transitionLogo[state],
              }}
              src={logo}
            />
          )}
        </Transition>
      )}
    </Styled.Container>
  );
});

const defaultDescription = {
  opacity: 0,
  transition: "all 500ms ease",
};

const transitionDescription = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const defaultLogo = {
  transform: "rotate(90deg)",
  opacity: 0,
  transformOrigin: "top right",
  transition: "all 320ms ease-in",
};

const transitionLogo = {
  entering: { transform: "rotate(90deg)", opacity: 0 },
  entered: { transform: "rotate(0deg)", opacity: 1 },
  exiting: { transform: "rotate(90deg)", opacity: 0 },
  exited: { transform: "rotate(90deg)", opacity: 0 },
  unmounted: { transform: "rotate(90deg)", opacity: 0 },
};

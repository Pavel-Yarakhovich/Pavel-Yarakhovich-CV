import styled from "@emotion/styled";
import { themes } from "../../../../Configuration/themes";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 1.5rem;
  border: 2px solid ${themes.notification_text};
  padding: 10px;
  box-sizing: border-box;
`;

export const Title = styled.span`
  font-size: 1.15;
  font-weight: 600;
  letter-spacing: 0.04rem;
  margin-bottom: 1.5rem;
`;

export const SelectedRepo = styled.div`
  display: flex;
  flex-flow: column;
  margin: 1rem 0;
`;

export const RepoName = styled.span`
  color: ${themes.button_hover};
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const CreatedAt = styled.span`
  font-style: italic;
  font-weight: 100;
  font-size: 0.9rem;
`;

export const RepoDescription = styled.p``;

export const RepoLink = styled.div`
  position: relative;
  font-size: 14px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  padding: 0 30px 12px 0;

  a {
    color: ${themes.link};
    margin: 0;
    padding: 0 12px;
  }
`;

export const OuterLinkSign = styled.div`
  position: absolute;
  right: 10px;
  top: -5px;
  color: ${themes.link};
`;

interface ISelectState {
  isSelected: boolean;
  isDisabled: boolean;
  isFocused: boolean;
}

export const customStyles = {
  option: (provided: {}, state: ISelectState) => ({
    ...provided,
    color: state.isSelected ? themes.main_bg : themes.sign_up_form_text,
    padding: 10,
  }),
  container: (provided: {}, state: ISelectState) => ({
    ...provided,
    outline: "none",
  }),
  control: (provided: {}, state: ISelectState) => ({
    ...provided,
    border: `1px solid ${
      state.isFocused ? themes.button_hover : themes.sign_up_form_text
    }`,
    outline: "none",
    display: "flex",
    minWidth: 300,
  }),
  singleValue: (provided: {}, state: ISelectState) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

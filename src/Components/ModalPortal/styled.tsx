import styled from '@emotion/styled';
import { themes } from '../../Configuration/themes';

export const InfoContainer = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const Tab = styled.div`
  background: none;
  border: none;
  border-left: 1px solid ${themes.scroll_thumb};
  font-size: 0.75rem;
  flex-grow: 1;
  font-weight: ${props => props.active ? 400 : 100};
  padding: 5px;
  transition: all 250ms ease;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;
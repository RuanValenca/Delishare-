import styled from "styled-components";
import { keyframes } from "styled-components";
import { Settings } from "lucide-react";
export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.font.colors.lightBlue};
  box-shadow: 0px 3px 5px ${({ theme }) => theme.colors.shadow};
  align-items: center;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.h1``;

export const DivName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const DivLink = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.font.colors.DarkBlue};
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const P = styled.p`
  cursor: pointer;
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); } 

`;

export const SettingIcon = styled(Settings)`
  width: 55px;
  cursor: pointer;
  padding: 0 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    animation: ${spin} 2s linear infinite;
  }
`;

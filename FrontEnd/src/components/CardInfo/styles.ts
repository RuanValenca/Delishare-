import styled from "styled-components";

interface Props {
  bgColor: string;
  IconColor: string;
}

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.shadow};
  height: 300px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  gap: 1rem;
`;

export const Icon = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ bgColor, theme }) => bgColor ?? theme.colors.background};
  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme, IconColor }) => IconColor ?? theme.colors.primary};
  }
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.font.colors.DarkBlue};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.textXl};
  margin: 0;
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.font.colors.secondaryText};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.size.textBase};
  width: 100%;
  line-height: 1.5;
`;

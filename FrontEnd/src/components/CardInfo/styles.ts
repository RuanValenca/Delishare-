import styled from "styled-components";

interface Props {
  bgColor: string;
}

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 2px 5px ${({ theme }) => theme.colors.shadow};
  height: 300px;
  border-radius: 12px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Icon = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 95px;
  border-radius: 95px;

  background: ${({ bgColor, theme }) => bgColor ?? theme.colors.background};
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.font.colors.DarkBlue};
  font-weight: ${({ theme }) => theme.font.weight.normal};
`;

export const DivDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 0.5rem 1rem;
  height: 30%;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Description = styled.p`
  position: absolute;
  bottom: 0;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.font.colors.secondaryText};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.size.textSm};
`;

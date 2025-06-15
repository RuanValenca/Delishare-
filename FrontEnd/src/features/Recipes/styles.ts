import styled from "styled-components";

export const Container = styled.nav`
  padding: 3rem 6rem 3rem 4rem;
  display: grid;
`;

export const DivTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  background: ${({ theme }) => theme.font.colors.gradientText};
  background-clip: text;
  color: transparent;
  font-size: ${({ theme }) => theme.font.size.text4Xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.font.colors.secondaryText};
  font-size: ${({ theme }) => theme.font.size.textBase};
  font-weight: ${({ theme }) => theme.font.weight.normal};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  gap: 1rem;
`;

export const Buttons = styled.div`
  border-radius: 12px;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;

  &:has(:nth-child(4)) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

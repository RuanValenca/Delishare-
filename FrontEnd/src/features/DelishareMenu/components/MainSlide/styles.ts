import styled from "styled-components";

export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.gradientBackground};
  color: ${({ theme }) => theme.font.colors.whiteText};
  padding: 3rem 8rem 3rem 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 80vh;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Phrase = styled.h1`
  width: 95%;
  height: fit-content;
  font-size: ${({ theme }) => theme.font.size.text4Xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Description = styled.p`
  width: 100%;
  height: fit-content;
  font-size: ${({ theme }) => theme.font.size.textXl};
  font-weight: ${({ theme }) => theme.font.weight.normal};
`;

export const DivImage = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4rem;
`;

export const Img = styled.img`
  border-radius: 12px;
  width: 90%;
  height: 70%;
  border: 1px solid red;
`;

export const P = styled.p``;

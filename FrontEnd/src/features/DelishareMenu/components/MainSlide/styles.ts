import styled from "styled-components";

export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.gradientBackground};
  color: ${({ theme }) => theme.font.colors.whiteText};
  padding: 3rem 6rem 3rem 4rem;
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
  position: relative;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 85%;
  object-fit: cover;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  right: -20px;
  bottom: 0;
  position: absolute;
  border-radius: 12px;
  width: fit-content;
  height: fit-content;
  background: ${({ theme }) => theme.colors.background};
`;

export const P = styled.p``;

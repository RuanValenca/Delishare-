import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DivInfo = styled.div`
  padding: 0rem 4rem 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DivText = styled.div`
  height: 200px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.blueSchema.light};
`;

export const Title = styled.h1`
  background: ${({ theme }) => theme.font.colors.gradientText};
  background-clip: text;
  color: transparent;
  font-size: ${({ theme }) => theme.font.size.text4Xl};
`;

export const TitleInfo = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.font.colors.DarkBlue};
  font-size: ${({ theme }) => theme.font.size.text2Xl};
`;

export const Description = styled.p`
  width: 100%;
  height: fit-content;
  color: ${({ theme }) => theme.font.colors.secondaryText};
  font-size: ${({ theme }) => theme.font.size.textLg};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

export const DivImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 6px 15px ${({ theme }) => theme.colors.shadow};
`;

export const Tech = styled.div`
  padding: 0rem 4rem 2rem;
  display: grid;
  gap: 2rem;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

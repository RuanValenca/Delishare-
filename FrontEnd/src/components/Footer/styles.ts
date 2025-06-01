import styled from "styled-components";

export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.blueSchema.light};
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DivLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;

export const Li = styled.li`
  width: fit-content;
  cursor: pointer;
  color: ${({ theme }) => theme.font.colors.secondaryText};
  font-size: ${({ theme }) => theme.font.size.textSm};
  font-weight: ${({ theme }) => theme.font.weight.light};

  &:hover {
    color: ${({ theme }) => theme.font.colors.lightBlue};
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.font.colors.lightBlue};
  font-size: ${({ theme }) => theme.font.size.textXl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Description = styled.p`
  width: 80%;
  height: fit-content;
  color: ${({ theme }) => theme.font.colors.secondaryText};
  font-size: ${({ theme }) => theme.font.size.textBase};
  font-weight: ${({ theme }) => theme.font.weight.normal};
`;

export const Hr = styled.hr`
  width: 100%;
  background: ${({ theme }) => theme.colors.blueSchema.dark};
  border: none;
  height: 1px;
`;

export const License = styled.p`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.font.colors.secondaryText};
  font-size: ${({ theme }) => theme.font.size.textXs};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

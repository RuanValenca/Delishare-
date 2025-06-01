import styled from "styled-components";

export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  color: ${({ theme }) => theme.font.colors.lightBlue};
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

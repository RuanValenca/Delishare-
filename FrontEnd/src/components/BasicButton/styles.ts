import styled from "styled-components";

interface StyledButtonProps {
  variantStyles: string;
  disabled?: boolean;
  fontSize?: string;
  widthSize?: string;
}

export const Button = styled.button<StyledButtonProps>`
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;

  ${({ fontSize }) => fontSize};
  ${({ widthSize }) => widthSize};
  ${({ variantStyles }) => variantStyles};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

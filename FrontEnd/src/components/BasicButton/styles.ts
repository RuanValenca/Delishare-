// src/components/Button/styles.ts
import styled from "styled-components";
import theme from "../../styles/theme";

interface ButtonStyledProps {
  font: "xsmall" | "small" | "medium" | "large" | "xlarge";
  width: "small" | "medium" | "large" | "fullWidth";
  bgColor: string;
  textColor: string;
  disabled?: boolean;
}

const fontSizes: Record<ButtonStyledProps["font"], string> = {
  xsmall: theme.font.size.textXs, // ex: "0.75rem"
  small: theme.font.size.textSm, // ex: "0.875rem"
  medium: theme.font.size.textBase, // ex: "1rem"
  large: theme.font.size.textLg, // ex: "1.125rem"
  xlarge: theme.font.size.textXl, // ex: "1.25rem"
};

const widths: Record<ButtonStyledProps["width"], string> = {
  small: "5rem",
  medium: "8rem",
  large: "15rem",
  fullWidth: "100%",
};

const paddings: Record<ButtonStyledProps["width"], string> = {
  small: "5px",
  medium: "7px",
  large: "10px",
  fullWidth: "10px",
};

export const Button = styled.button<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ font }) => fontSizes[font]};
  width: ${({ width }) => widths[width]};
  padding: ${({ width }) => paddings[width]};

  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};

  border: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

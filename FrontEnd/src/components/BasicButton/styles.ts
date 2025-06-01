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
  xsmall: theme.font.size.textXs,
  small: theme.font.size.textSm,
  medium: theme.font.size.textBase,
  large: theme.font.size.textLg,
  xlarge: theme.font.size.textXl,
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
  background: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border: none;
  transition: transform 0.05s linear;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    animation: none;
  }

  &:active {
    transform: scale(0.99);
  }
`;

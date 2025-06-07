import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import type { ReactNode } from "react";
interface ButtonStyledProps {
  icon?: ReactNode;
  iconColorHover?: ReactNode;
  children?: ReactNode;
  textColor: string;
  font: "xsmall" | "small" | "medium" | "large" | "xlarge";
  width: "small" | "medium" | "large" | "fullWidth";
  height: "small" | "medium" | "large" | "fullWidth";
  bgColor: string;
  bgColorHover?: string;
  borderColor?: boolean;
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

const heights: Record<ButtonStyledProps["width"], string> = {
  small: "2rem",
  medium: "3rem",
  large: "5rem",
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
  height: ${({ height }) => heights[height]};
  padding: ${({ width }) => paddings[width]};
  border: 1px solid
    ${({ borderColor, theme }) =>
      borderColor ? theme.colors.border : "transparent"};
  background: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  transition:
    transform 0.05s linear,
    background-color 0.3s ease;
  gap: 2rem;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    animation: none;
  }

  &:active {
    transform: scale(0.99);
  }

  ${({ bgColorHover, theme }) =>
    bgColorHover &&
    css`
      &:hover {
        background-color: ${bgColorHover};

        svg {
          color: ${bgColorHover === theme.colors.blueSchema.light
            ? theme.colors.blueSchema.dark
            : bgColorHover === theme.colors.greenSchema.light
              ? theme.colors.greenSchema.dark
              : "inherit"};
        }
      }
    `}
`;

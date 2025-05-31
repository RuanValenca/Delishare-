import type { ReactNode } from "react";
import * as S from "./styles";
import theme from "../../styles/theme";

interface ButtonProps {
  children: ReactNode;
  font?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  width?: "small" | "medium" | "large" | "fullWidth";
  variant?: "primary" | "secondary" | "gradient";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  disabled = false,
  font = "medium",
  width = "medium",
  onClick,
}: ButtonProps) {
  const fontSize = {
    xsmall: `
    font-size: ${theme.font.size.textXs};
  `,
    small: `
    font-size: ${theme.font.size.textSm};
  `,
    medium: `
    font-size: ${theme.font.size.textBase};
  `,
    large: `
    font-size: ${theme.font.size.textLg};
  `,
    xlarge: `
    font-size: ${theme.font.size.textXl};
  `,
  };

  const widthSize = {
    small: `
    padding: 5px;
    width:5rem;
  `,
    medium: `
    padding: 7px;
    width:8rem;
  `,
    large: `
    padding: 10px;
    width:15rem;
  `,
    fullWidth: `
    padding: 10px;
    width:100%;
  `,
  };

  const variantStyles = {
    primary: `
    background-color: ${theme.colors.primary};
    color: ${theme.font.colors.whiteText};
    border: none;
  `,
    secondary: `
    background-color: ${theme.colors.secondary};
    color: ${theme.font.colors.whiteText};
    border: none;
  `,
    gradient: `
    background: ${theme.colors.gradientBackground};
    color: ${theme.font.colors.whiteText};
    border: none;
  `,
  };

  return (
    <S.Button
      fontSize={fontSize[font]}
      widthSize={widthSize[width]}
      variantStyles={variantStyles[variant]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}

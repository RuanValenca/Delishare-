import type { ReactNode } from "react";
import * as S from "./styles";

interface ButtonProps {
  children: ReactNode;
  textColor: string;
  font?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  width: "small" | "medium" | "large" | "fullWidth";
  bgColor: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  textColor,
  font = "medium",
  width = "medium",
  bgColor = "#0070f3", // valor default (ex: azul)
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <S.Button
      textColor={textColor}
      font={font}
      width={width}
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}

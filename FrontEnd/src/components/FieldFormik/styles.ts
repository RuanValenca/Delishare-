import styled, { css } from "styled-components";
import InputMask from "react-input-mask";

interface PropsContainer {
  leftLabel?: boolean;
}
export const Container = styled.div<PropsContainer>`
  display: flex;
  flex-direction: ${({ leftLabel }) => (leftLabel ? "row" : "column")};
  align-items: ${({ leftLabel }) => (leftLabel ? "baseline" : "unset")};
  gap: ${({ leftLabel }) => (leftLabel ? "0.5rem" : "none")};

  label {
    color: ${({ theme }) => theme.font.colors.mainText};
    padding-bottom: 0.8rem;
  }
`;

export const StyledError = styled.p`
  color: red;
`;

interface IInputContainer {
  sizeHeight: string;
  bgColor?: string;
  disabled?: boolean;
}

export const InputContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bgColor" && prop !== "sizeHeight",
})<IInputContainer>`
  position: relative;
  border-radius: 10px;
  height: ${(props) => props.sizeHeight};

  background-color: ${({ theme }) => theme.colors?.background};
`;

interface ILeftBackgroundProps {
  bgColor?: "secondary" | "danger";
}
export const LeftBackground = styled.div<ILeftBackgroundProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors?.background};

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3rem;
  z-index: 1;

  background-color: ${({ theme }) => theme.colors?.background};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: inset 0px 3px 6px #00000029;
`;

interface IStyledField {
  leftIcon?: boolean;
  align?: "center" | "start" | "end";
  sizeHeight?: string;
  bgColor?: string;
  disabled?: boolean;
  isChild?: boolean;
  isBold?: boolean;
}

const commonStyles = css<IStyledField>`
  border-radius: 6px;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  text-align: ${(props) => props.align};
  background-color: transparent;
  font-size: 14px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.font?.colors.muted : theme.font?.colors.mainText};
  padding-left: ${(props) => (props.leftIcon ? "4rem" : "1rem")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.font.colors?.mainText};
  }
  border: ${({ theme }) => "1px solid" + theme.colors?.border};

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;

export const MaskedField = styled(InputMask)<IStyledField>`
  ${commonStyles}
  /* Estilos para remover as setas do input number */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type="number"] {
    appearance: textfield;
  }
  appearance: none;
`;

export const StyledField = styled.input.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "align" && prop !== "bgColor" && prop !== "leftIcon",
})<IStyledField>`
  ${commonStyles}
  /* Estilos para remover as setas do input number */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type="number"] {
    appearance: textfield;
  }
  appearance: none;
`;

interface IInputStyledFieldText {
  sizeHeight?: string;
  leftIcon?: boolean;
  align?: "center" | "start" | "end";
  bgColor?: string;
  padding?: string;
}
export const StyledFieldText = styled.textarea.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "sizeHeight" &&
    prop !== "align" &&
    prop !== "bgColor" &&
    prop !== "leftIcon",
})<IInputStyledFieldText>`
  ${commonStyles}

  position: relative;
  border-radius: 10px;
  height: ${(props) => (props.sizeHeight ? props.sizeHeight : "4rem")};
  padding: ${(props) => (props.padding ? props.padding : "15px")};
`;

export const DivSelect = styled.div<IStyledField>`
  ${commonStyles}
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 15px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) =>
    props.disabled
      ? props.theme.font.colors?.secondaryText
      : props.theme.font.colors?.mainText};
  * {
    border-radius: 15px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors?.background};
  }
  border: ${({ theme }) => "1px solid" + theme.colors?.border};
`;

export const DivGeneral = styled.div<IStyledField>`
  ${commonStyles}
  position: absolute;
  display: flex;
  align-items: center;

  border: ${({ theme }) => "1px solid" + theme.colors?.border};

  background-color: ${({ theme }) => theme.colors?.background};
  top: 100%;
  left: 0;
  right: 0;
  max-height: 250px;
  height: fit-content;
  z-index: 1000;
  overflow-y: auto;

  flex-direction: column;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const DivSelectOption = styled.div<IStyledField>`
  display: grid;
  grid-template-columns: 1fr;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const DivGroup = styled.div<IStyledField>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${({ theme }) => theme.colors?.background};
`;

export const DivGroup2 = styled.div<IStyledField>`
  padding: 0 0 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${({ theme }) => theme.colors?.background};
`;

export const DivInput = styled.div<IStyledField>`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  padding: 5px 0;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.background};

  ${(props) =>
    props.isChild &&
    css`
      margin-left: 15px;
    `}
`;

export const Input = styled.input<IStyledField>``;

export const H6 = styled.h6<IStyledField>`
  background-color: ${({ theme }) => theme.colors?.background};

  ${(props) =>
    props.isBold &&
    css`
      font-weight: bold;
    `}
`;

export const StyledSelect = styled.select.withConfig({
  shouldForwardProp: (prop) => prop !== "align",
})<IStyledField>`
  ${commonStyles}
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) =>
    props.disabled
      ? props.theme.font.colors?.secondaryText
      : props.theme.font.colors?.mainText};

  * {
    border-radius: 15px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors?.background};
  }
`;

export const StyledMultipleSelect = styled.select.withConfig({
  shouldForwardProp: (prop) => prop !== "align",
})<IStyledField>`
  ${commonStyles}
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) =>
    props.disabled
      ? props.theme.font.colors?.secondaryText
      : props.theme.font.colors?.mainText};

  * {
    border-radius: 15px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors?.background};
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.font.colors?.mainText};
`;

export const DownIcon = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.font.colors?.mainText};
`;

import { useState } from "react";
import type { ReactNode } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { ErrorMessage } from "formik";

import * as S from "./styles";
import React from "react";

export interface IFormOptions {
  title: string;
  value: number | string;
}

interface Props {
  name: string;
  type:
    | "textarea"
    | "password"
    | "select"
    | "string"
    | "email"
    | "number"
    | "date"
    | "checkbox";
  align?: "center" | "start" | "end";
  error?: boolean;
  component?: string;
  label?: ReactNode | string;
  placeholder?: string;
  leftIcon?: ReactNode;
  widthSize?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "fullWidth";
  labelSize?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "fullWidth";
  heightSize?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "textSmall"
    | "textLarge";
  onChange?: <
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  >(
    e: React.ChangeEvent<T>
  ) => void;
  onBlur?: <
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  >(
    e: React.FocusEvent<T>
  ) => void;
  onClick?: (
    e:
      | React.FocusEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
          Element
        >
      | React.MouseEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
          MouseEvent
        >
  ) => void;
  options?: IFormOptions[];
  disabled?: boolean;
  checked?: boolean;
  leftLabel?: boolean;
  notLimitHeight?: boolean;
  value?: string | number;
  mask?: string;
  cols?: number;
  className?: string;
  bgColor?: string;
  leftIconBgColor?: "secondary" | "danger";
  padding?: string;
}

export default function FieldFormik({
  name,
  type,
  error,
  align = "start",
  component,
  label,
  placeholder,
  widthSize = "xlarge",
  heightSize = "medium",
  leftIcon,
  onChange,
  onBlur,
  options,
  disabled,
  value,
  mask,
  checked,
  className,
  notLimitHeight = false,
  bgColor,
  leftLabel,
  leftIconBgColor,
  labelSize = "fullWidth",
  padding,
  onClick,
}: Props) {
  const sizeWidth = {
    xxsmall: { width: "6rem" },
    xsmall: { width: "10rem" },
    small: { width: "15rem" },
    medium: { width: "18rem" },
    large: { width: "20rem" },
    xlarge: { width: "25rem" },
    xxlarge: { width: "27rem" },
    fullWidth: { width: "100%" },
  };

  const sizeHeight = {
    xxsmall: "2rem",
    xsmall: "2.5rem",
    small: "3rem",
    medium: "4rem",
    large: "5.5rem",
    textSmall: "8rem",
    textLarge: "30rem",
  };

  const [visible, setVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    onChange?.(e);
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    onBlur?.(e);
  };

  const handleClick = (
    e:
      | React.FocusEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
          Element
        >
      | React.MouseEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
          MouseEvent
        >
  ) => {
    onClick?.(e);
  };

  function renderPassword() {
    return (
      <>
        <S.StyledField
          placeholder={placeholder}
          bgColor={bgColor}
          align={align}
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          leftIcon={!!leftIcon}
          onChange={onChange}
          onBlur={onBlur}
          onClick={onClick}
          disabled={disabled}
          value={value && value}
        />
        <S.EyeIcon onClick={() => setVisible(!visible)}>
          {visible ? <Eye /> : <EyeClosed />}
        </S.EyeIcon>
      </>
    );
  }

  function renderString() {
    return (
      <>
        <S.MaskedField
          placeholder={placeholder}
          bgColor={bgColor}
          align={align}
          id={name}
          name={name}
          type={type}
          leftIcon={!!leftIcon}
          onChange={handleChange}
          onBlur={handleBlur}
          onClick={onClick}
          disabled={disabled}
          value={value && value}
          mask={mask!}
        />
      </>
    );
  }

  function renderText() {
    return (
      <>
        <S.StyledFieldText
          placeholder={placeholder}
          bgColor={bgColor}
          sizeHeight={sizeHeight[heightSize]}
          id={name}
          name={name}
          form={name}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          onClick={(e) => handleClick(e)}
          disabled={disabled}
          padding={padding}
        />
      </>
    );
  }

  function renderNumber() {
    return (
      <>
        <S.MaskedField
          placeholder={placeholder}
          bgColor={bgColor}
          align={align}
          id={name}
          name={name}
          type={type}
          leftIcon={!!leftIcon}
          onChange={onChange}
          onBlur={onBlur}
          onClick={onClick}
          disabled={disabled}
          value={value && value}
          mask={mask!}
        />
      </>
    );
  }

  function renderCheckbox() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: "1rem",
          ...sizeWidth[widthSize],
        }}
      >
        <input
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          onClick={onClick}
          disabled={disabled}
          checked={checked!}
          value={value}
        />
        <b style={{ height: notLimitHeight ? "" : "1.5rem" }}>{placeholder}</b>
      </div>
    );
  }

  function renderDate() {
    return (
      <>
        <S.StyledField
          align={align}
          placeholder={placeholder}
          bgColor={bgColor}
          id={name}
          name={name}
          type={type}
          leftIcon={!!leftIcon}
          onChange={onChange}
          onBlur={onBlur}
          onClick={onClick}
          disabled={disabled}
          value={value && value}
        />
      </>
    );
  }

  function renderSelect() {
    return (
      <>
        <S.StyledSelect
          className="dropdown-select"
          align={align}
          id={name}
          name={name}
          leftIcon={!!leftIcon}
          onChange={onChange}
          onBlur={onBlur}
          onClick={(e) => handleClick(e)}
          disabled={disabled}
          value={value && value}
        >
          {options &&
            options.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.title}
                </option>
              );
            })}
        </S.StyledSelect>
      </>
    );
  }

  const typeRender = {
    date: renderDate(),
    textarea: renderText(),
    email: renderString(),
    string: renderString(),
    number: renderNumber(),
    select: renderSelect(),
    checkbox: renderCheckbox(),
    password: renderPassword(),
  };

  return (
    <S.Container
      style={{ ...sizeWidth[widthSize] }}
      className={className}
      leftLabel={leftLabel}
    >
      {label && (
        <label
          htmlFor={name}
          style={{ ...sizeWidth[labelSize], fontSize: "14px" }}
        >
          {label}
        </label>
      )}
      {type === "textarea" || type === "checkbox" ? (
        typeRender[type]
      ) : (
        <S.InputContainer
          sizeHeight={sizeHeight[heightSize]}
          disabled={disabled}
          bgColor={bgColor}
        >
          {leftIcon && (
            <S.LeftBackground bgColor={leftIconBgColor}>
              {leftIcon}
            </S.LeftBackground>
          )}
          {typeRender[type]}
        </S.InputContainer>
      )}
      {error && (
        <ErrorMessage name={name} component={component}>
          {(msg) => <S.StyledError>{msg}</S.StyledError>}
        </ErrorMessage>
      )}
    </S.Container>
  );
}

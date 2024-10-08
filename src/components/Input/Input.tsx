import { forwardRef, InputHTMLAttributes, memo } from "react";
import { Typography } from "../Typography";
import * as S from "./Input.styled";

export type InputType = "default" | "error" | "success";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputType;
  label?: string;
  error?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  onIconLeftClick?: () => void;
  onIconRightClick?: () => void;
}

function getInputComponent(type: InputType) {
  switch (type) {
    case "error":
      return S.ErrorInput;
    case "success":
      return S.SuccessInput;
    default:
      return S.DefaultInput;
  }
}

const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(function (
    {
      variant = "default",
      label,
      error,
      iconLeft,
      iconRight,
      onIconLeftClick,
      onIconRightClick,
      disabled,
      ...rest
    },
    ref
  ) {
    const Component = getInputComponent(variant);

    return (
      <S.InputLabel>
        <S.InputLabelText>{label}</S.InputLabelText>

        <S.InputForm disabled={disabled}>
          {iconLeft && (
            <S.InputIconWrapperLeft
              onClick={onIconLeftClick}
              disabled={disabled}
            >
              {iconLeft}
            </S.InputIconWrapperLeft>
          )}

          <Component
            ref={ref}
            $iconLeft={iconLeft !== undefined}
            $iconRight={iconRight !== undefined}
            disabled={disabled}
            {...rest}
          />

          {iconRight && (
            <S.InputIconWrapperRight
              onClick={onIconRightClick}
              disabled={disabled}
            >
              {iconRight}
            </S.InputIconWrapperRight>
          )}
        </S.InputForm>

        {error && (
          <Typography type="body2" isError={true}>
            {error}
          </Typography>
        )}
      </S.InputLabel>
    );
  })
);

export { Input };

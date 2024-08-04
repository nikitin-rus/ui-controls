import { forwardRef, InputHTMLAttributes, memo } from "react";
import * as S from "./Input.styled";
import { Typography } from "../Typography";

export type InputType =
    "default"
    | "error"
    | "success";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: InputType,
    label?: string,
    error?: string,
    iconLeft?: JSX.Element,
    iconRight?: JSX.Element,
    isIconLeftDisabled?: boolean,
    isIconRightDisabled?: boolean,
    onIconLeftClick?: () => void,
    onIconRightClick?: () => void,
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

const Input = memo(forwardRef<HTMLInputElement, InputProps>(
    function ({
        variant = "default",
        label,
        error,
        iconLeft,
        iconRight,
        isIconLeftDisabled = false,
        isIconRightDisabled = false,
        onIconLeftClick,
        onIconRightClick,
        ...rest
    }, ref) {
        const Component = getInputComponent(variant);

        return (
            <S.InputContainer>
                {label && (
                    <S.InputLabel>
                        <Typography type="body2">
                            {label}
                        </Typography>
                    </S.InputLabel>
                )}

                <S.InputForm>
                    {iconLeft && (
                        <S.InputIconWrapperLeft>
                            {iconLeft}
                        </S.InputIconWrapperLeft>
                    )}

                    <Component ref={ref}
                        $iconLeft={iconLeft !== undefined}
                        $iconRight={iconRight !== undefined}
                        {...rest}
                    />

                    {iconRight && (
                        <S.InputIconWrapperRight>
                            {iconRight}
                        </S.InputIconWrapperRight>
                    )}
                </S.InputForm>

                {error && (
                    <Typography type="body2" isError={true}>
                        {error}
                    </Typography>
                )}
            </S.InputContainer>
        );
    }
));

export { Input };
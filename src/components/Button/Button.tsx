import React, { forwardRef, memo } from "react";
import { ButtonType, ButtonProps } from "./Button.styled";
import * as S from "./Button.styled";

function getButtonComponent(type: ButtonType) {
    switch (type) {
        case "default":
            return S.DefaultButton;
        case "blue":
            return S.BlueButton;
        default:
            return S.DefaultButton;
    }
}

const Button = memo(forwardRef<HTMLButtonElement, ButtonProps>(
    function ({
        children,
        variant = "default",
        size = "default",
        type = "button",
        ...rest
    }, ref) {
        const Component = getButtonComponent(variant);

        return (
            <Component ref={ref}
                variant={variant}
                size={size}
                type={type}
                {...rest}
            >
                {children}
            </Component>
        );
    }
));

export { Button };
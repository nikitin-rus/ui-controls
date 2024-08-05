import { ButtonHTMLAttributes, forwardRef, memo } from "react";
import * as S from "./Button.styled";

export type ButtonType =
    "primary"
    | "secondary";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonType;
    size?: "default" | "small";
}

function getButtonComponent(type: ButtonType) {
    switch (type) {
        case "primary":
            return S.ButtonPrimary;
        case "secondary":
            return S.ButtonSecondary;
        default:
            return S.ButtonPrimary;
    }
}

const Button = memo(forwardRef<HTMLButtonElement, ButtonProps>(
    function ({
        children,
        variant = "primary",
        size = "default",
        type = "button",
        ...rest
    }, ref) {
        const Component = getButtonComponent(variant);

        return (
            <Component ref={ref}
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
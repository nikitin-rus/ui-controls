import React, { ButtonHTMLAttributes, forwardRef, memo } from "react";
import { getClassNames } from "../../helpers/getClassName";
import "./Button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    value?: string,
    theme?: "default" | "blue",
    size?: "default" | "small"
    iconLeft?: JSX.Element,
    iconRight?: JSX.Element,
}

function isSquare(value?: string, iconLeft?: JSX.Element, iconRight?: JSX.Element) {
    return (
        value === undefined &&
        (
            (iconLeft === undefined && iconRight !== undefined)
            || (iconRight === undefined && iconLeft !== undefined)
        )
    );
}

const Button = memo(forwardRef<HTMLButtonElement, Props>(
    function ({
        className,
        value,
        theme = "default",
        size = "default",
        type = "button",
        iconLeft,
        iconRight,
        ...rest
    }, ref) {
        const _className = "button";
        const classNames = getClassNames(_className, className, {
            [_className + "_blue"]: theme === "blue",
            [_className + "_small"]: size === "small",
            [_className + "_square"]: isSquare(value, iconLeft, iconRight),
        });

        return (
            <button className={classNames}
                ref={ref}
                {...rest}
            >
                {iconLeft}

                {value && (
                    <p className={_className + "__text"}>
                        {value}
                    </p>
                )}

                {iconRight}
            </button>
        );
    }
));

export { Button };
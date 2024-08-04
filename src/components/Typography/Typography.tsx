import { ReactNode } from "react";
import * as S from "./Typography.styled";

export type TypographyType =
    "body1"
    | "body2";

interface TypographyProps {
    type?: TypographyType;
    children?: ReactNode;
    isError?: boolean;
    isSuccess?: boolean;
}

function getTypographyComponent(type: TypographyType) {
    switch (type) {
        case "body1":
            return S.Body1;
        case "body2":
            return S.Body2;
        default:
            return S.Body1;
    }
}

const Typography = function ({
    type = "body1",
    children,
    isError = false,
    isSuccess = false,
}: TypographyProps) {
    const Component = getTypographyComponent(type);

    return (
        <Component $isError={isError} $isSuccess={isSuccess}>
            {children}
        </Component>
    );
};

export { Typography };
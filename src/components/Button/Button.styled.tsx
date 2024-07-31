import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Theme } from "../../styles/theme";

export type ButtonType =
    "default"
    | "blue";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonType;
    size?: "default" | "small";
}

const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    padding: 8px 12px;

    background-color: ${Theme["--bg-white"]};
    color: ${Theme["--font-black"]};
    border: 1px solid ${Theme["--stroke-black"]};
    box-shadow: ${Theme[("--shadow")]};
    border-radius: 5px;

    user-select: none;
    cursor: pointer;
    
    &:disabled {
        cursor: not-allowed;
        opacity: 0.75;
    }

    ${({ size }) => {
        if (size === "small") {
            return `
                column-gap: 4px;
                padding: 4px 6px;
            `;
        }
    }}
`;

export const DefaultButton = styled(StyledButton)`
    &:not([disabled]):hover {
        background-color: ${Theme["--bg-hover-gray"]};
    }
`;

export const BlueButton = styled(StyledButton)`
    background-color: ${Theme["--bg-blue"]};
    color: ${Theme["--font-white"]};
    border: none;

    &:not([disabled]):hover {
        background-color: ${Theme["--bg-hover-blue"]};
    }  
`;
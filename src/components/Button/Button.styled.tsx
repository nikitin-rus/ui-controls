import styled from "styled-components";
import { cvar } from "../../helpers/StyleHelper";

const StyledButton = styled.button<{ size: "default" | "small" }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ size }) => size === "small" ? "4px" : "8px"};
    padding: ${({ size }) => size === "small" ? "4px 6px" : "8px 12px"};

    box-shadow: ${cvar(("--shadow"))};
    border-radius: 5px;

    user-select: none;
    cursor: pointer;
    
    &:disabled {
        cursor: not-allowed;
        opacity: 0.75;
    }
`;

export const ButtonPrimary = styled(StyledButton)`
    background-color: ${cvar("--bg-blue")};
    color: ${cvar("--font-white")};
    border: none;

    &:not([disabled]):hover {
        background-color: ${cvar("--bg-hover-blue")};
    }  
`;

export const ButtonSecondary = styled(StyledButton)`
    background-color: ${cvar("--bg-white")};
    color: ${cvar("--font-black")};
    border: 1px solid ${cvar("--stroke-black")};
    
    &:not([disabled]):hover {
        background-color: ${cvar("--bg-hover-gray")};
    }
`;
import styled from "styled-components";
import { cvar } from "../../helpers/StyleHelper";
import { ChevronDown } from "../IconList";

export const Select = styled.div<{ disabled?: boolean }>`
    display: inline-flex;  
    position: relative;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;

    ${({ disabled }) => {
        if (disabled === true) {
            return `
                opacity: 0.75;
                cursor: not-allowed;
            `;
        }
    }}
`;

export const Bar = styled.div<{ disabled?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 8px;
    padding: 8px 12px;
    
    background: ${cvar("--bg-white")};
    box-shadow: ${cvar("--shadow")};
    border: 1px solid ${cvar("--stroke-black")};
    border-radius: 5px;

    &:not([disabled]):hover {
        background-color: ${cvar("--bg-hover-gray")};
    }

    ${({ disabled }) => {
        if (disabled === true) {
            return `
                pointer-events: none;
            `;
        }
    }}
`;

export const Options = styled.ul`
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    background-color: ${cvar("--bg-white")};
    box-shadow: ${cvar("--shadow")};
    border: 1px solid ${cvar("--stroke-black")};
    border-radius: 5px;

    overflow: hidden;
`;

export const Option = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 12px;

    &:hover {
        background-color: ${cvar("--bg-hover-gray")};
    }
`;

export const StyledChevronDown = styled(ChevronDown) <{ $upsideDown: boolean }>`
    transition: transform 150ms ease;
    transform: ${({ $upsideDown }) => $upsideDown ? "rotate(180deg)" : "rotate(0deg)"};
`;
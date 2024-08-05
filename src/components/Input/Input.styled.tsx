import styled from "styled-components";
import { cvar } from "../../helpers/StyleHelper";
import { Body2 } from "../Typography/Typography.styled";

export const InputLabel = styled.label`
    display: inline-flex;
    flex-direction: column;
    row-gap: 8px;
`;

export const InputLabelText = styled(Body2)`
    align-self: flex-start;
    cursor: pointer;
`;

export const InputForm = styled.div<{ disabled?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    ${({ disabled }) => {
        if (disabled === true) {
            return `
                opacity: 0.75;
            `;
        }
    }}
`;

const StyledInput = styled.input<{
    $iconLeft?: boolean,
    $iconRight?: boolean,
    disabled?: boolean,
}>`
    padding: 8px 12px;

    ${({ $iconLeft }) => {
        if ($iconLeft) {
            return `
                padding-left: 46px;
            `;
        }
    }}
    
    ${({ $iconRight }) => {
        if ($iconRight) {
            return `
                padding-right: 46px;
            `;
        }
    }}

    background-color: ${cvar("--bg-white")};
    box-shadow: ${cvar("--shadow")};
    border: 1px solid ${cvar("--stroke-black")};
    border-radius: 5px;

    &:disabled {
        cursor: not-allowed;
    }
`;

export const DefaultInput = styled(StyledInput)`
    border: 1px solid ${cvar("--stroke-black")};
`;

export const ErrorInput = styled(StyledInput)`
    border: 1px solid ${cvar("--stroke-red")};
`;

export const SuccessInput = styled(StyledInput)`
    border: 1px solid ${cvar("--stroke-light-green")};
`;

const InputIconWrapper = styled.div<{ disabled?: boolean }>`
    display: flex;
    position: absolute;
    margin: auto 0;
    cursor: pointer;

    ${({ disabled }) => {
        if (disabled === true) {
            return `
                pointer-events: none;
            `;
        }
    }}
`;

export const InputIconWrapperLeft = styled(InputIconWrapper)`
    left: 12px;
`;

export const InputIconWrapperRight = styled(InputIconWrapper)`
    right: 12px;
`;
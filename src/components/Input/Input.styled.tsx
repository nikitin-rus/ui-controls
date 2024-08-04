import styled from "styled-components";
import { cvar } from "../../helpers/StyleHelper";

export const InputContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    row-gap: 8px;
`;

export const InputLabel = styled.label`
    user-select: none;
`;

export const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

`;

const StyledInput = styled.input<{
    $iconLeft?: boolean,
    $iconRight?: boolean,
}>`
    padding: 8px 12px;

    ${({ $iconLeft }) => {
        if ($iconLeft) {
            return `
                padding-left: 48px;
            `;
        }
    }}
    
    ${({ $iconRight }) => {
        if ($iconRight) {
            return `
                padding-right: 42px;
            `;
        }
    }}

    background-color: ${cvar("--bg-white")};
    box-shadow: ${cvar("--shadow")};
    border: 1px solid ${cvar("--stroke-black")};
    border-radius: 5px;
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
                opacity: 0.75;  
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
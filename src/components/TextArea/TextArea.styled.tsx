import styled from "styled-components";
import { cvar } from "../../helpers/StyleHelper";
import { Body2 } from "../Typography/Typography.styled";

export const TextAreaLabel = styled.label`
    display: inline-flex;
    flex-direction: column;
    row-gap: 8px;
`;

export const TextAreaLabelText = styled(Body2)`
    align-self: flex-start;
    cursor: pointer;
`;

export const StyledTextArea = styled.textarea`
    display: flex;
    padding: 12px;
    
    background-color: ${cvar("--bg-white")};
    border: 1px solid ${cvar("--stroke-black")};
    box-shadow: ${cvar("--shadow")};
    border-radius: 5px;

    resize: vertical;

    &:disabled {
        cursor: not-allowed;
    }
`;
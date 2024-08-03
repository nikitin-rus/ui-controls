import styled from "styled-components";
import { cvar } from "../../helpers/StyleHelper";

const StyledBody = styled.p`
    font-family: ${() => cvar("--font-family")};
    font-weight: 400;
    font-style: normal;
    line-height: 140%;
`;

export const Body1 = styled(StyledBody)`
    font-size: 16px;
`;

export const Body2 = styled(StyledBody)`
    font-size: 14px;
`;
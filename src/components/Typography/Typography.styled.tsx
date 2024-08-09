import styled from "styled-components";
import { cvar } from "../../helpers/StyleHelper";

const StyledBody = styled.p<{
  $isError?: boolean;
  $isSuccess?: boolean;
}>`
  font-family: ${() => cvar("--font-family")};
  font-weight: 400;
  font-style: normal;
  line-height: 140%;

  ${({ $isError, $isSuccess }) => {
    if ($isError) {
      return `color: ${cvar("--font-red")};`;
    }

    if ($isSuccess) {
      return `color: ${cvar("--font-light-green")};`;
    }
  }}
`;

export const Body1 = styled(StyledBody)`
  font-size: 16px;
`;

export const Body2 = styled(StyledBody)`
  font-size: 14px;
`;

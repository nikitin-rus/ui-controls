import { Button } from "../Button";
import { Typography } from "../Typography";
import * as S from "./Limit.styled";

export interface LimitProps {
  limits: number[];
  limitIndex: number;
  onLimitChange?: (limitIndex: number) => void;
}

export function Limit({
  limits,
  limitIndex,
  onLimitChange = () => {},
}: LimitProps) {
  return (
    <S.LimitContainer>
      {limits.map((limit, index) => (
        <Button
          key={index}
          variant={limitIndex === index ? "primary" : "secondary"}
          onClick={() => onLimitChange(index)}
          size="small"
        >
          {limit}
        </Button>
      ))}

      <Typography type="body2">per page</Typography>
    </S.LimitContainer>
  );
}

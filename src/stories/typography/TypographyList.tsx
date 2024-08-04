import { Typography } from "../../components";
import { StyledTypographyList } from "./TypographyList.styled";

const TypographyList = function () {
    return (
        <StyledTypographyList>
            <Typography type="body1">Body 1</Typography>
            <Typography type="body2">Body 2</Typography>
        </StyledTypographyList>
    );
}

export { TypographyList };
import { StyledIconList } from "./IconList.styled";
import * as icons from "../../components/Icons";

const IconList = function () {
    return (
        <StyledIconList>
            {Object.values(icons).map((Icon, index) =>
                <Icon width={48} height={48} key={index} />
            )}
        </StyledIconList>
    );
}

export { IconList };
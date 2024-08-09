import { StyledIconList } from "./IconList.styled";
import * as icons from "../../components/Icons";

const IconList = function () {
  return (
    <StyledIconList>
      {Object.values(icons).map((Icon, index) => (
        <Icon key={index} />
      ))}
    </StyledIconList>
  );
};

export { IconList };

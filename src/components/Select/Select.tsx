import { forwardRef, memo, useEffect, useRef, useState } from "react";
import { Typography } from "../Typography/Typography";
import * as S from "./Select.styled";

export interface SelectProps {
  options?: SelectOption[];
  selectedIndex?: number;
  onSelect?: (selectedIndex: number) => void;
  disabled?: boolean;
}

interface SelectOption {
  name: string;
  value: string;
}

function isNode(eventTarget: EventTarget): eventTarget is Node {
  return (eventTarget as Node).nodeType != undefined;
}

function isSelectedIndexValid(selectedIndex: number, optionsLength: number) {
  return selectedIndex >= 0 && selectedIndex < optionsLength;
}

const Select = memo(
  forwardRef<HTMLDivElement, SelectProps>(function (
    { options = [], selectedIndex = -1, onSelect = () => {}, disabled = false },
    ref
  ) {
    const [isOpened, setIsOpened] = useState(false);
    const barRef = useRef<null | HTMLDivElement>(null);
    const optionsRef = useRef<null | HTMLUListElement>(null);

    useEffect(() => {
      document.addEventListener("pointerdown", handleOutsideClick);

      return () => {
        document.removeEventListener("pointerdown", handleOutsideClick);
      };
    }, []);

    const handleBarClick = () => setIsOpened(!isOpened);

    function handleSelect(selectedIndex: number) {
      setIsOpened(false);
      onSelect(selectedIndex);
    }

    function handleOutsideClick(e: PointerEvent) {
      if (
        e.target &&
        isNode(e.target) &&
        !barRef.current?.contains(e.target) &&
        !optionsRef.current?.contains(e.target)
      ) {
        setIsOpened(false);
      }
    }

    return (
      <S.Select ref={ref} disabled={disabled}>
        <S.Bar ref={barRef} onClick={handleBarClick} disabled={disabled}>
          {isSelectedIndexValid(selectedIndex, options.length) && (
            <Typography type="body1">{options[selectedIndex].value}</Typography>
          )}

          <S.StyledChevronDown $upsideDown={isOpened} />
        </S.Bar>

        {isOpened && (
          <S.Options ref={optionsRef}>
            {options.map((option, index) => {
              return (
                <S.Option key={option.name} onClick={() => handleSelect(index)}>
                  <Typography type="body1">{option.value}</Typography>
                </S.Option>
              );
            })}
          </S.Options>
        )}
      </S.Select>
    );
  })
);

export { Select };

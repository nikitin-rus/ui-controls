import { forwardRef, memo, TextareaHTMLAttributes } from "react";
import * as S from "./TextArea.styled";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = memo(
  forwardRef<HTMLTextAreaElement, TextAreaProps>(function (
    { label, value, onChange, ...rest },
    ref
  ) {
    return (
      <S.TextAreaLabel>
        <S.TextAreaLabelText>{label}</S.TextAreaLabelText>

        <S.StyledTextArea
          ref={ref}
          value={value}
          onChange={onChange}
          spellCheck={false}
          {...rest}
        />
      </S.TextAreaLabel>
    );
  })
);

export { TextArea };

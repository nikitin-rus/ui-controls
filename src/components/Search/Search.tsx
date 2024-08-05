import { forwardRef, InputHTMLAttributes, memo } from "react";
import { Input } from "../Input";
import { SearchIcon, Close } from "../Icons";

export interface SearchProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    onClear?: () => void;
    onSearch?: () => void;
}

const Search = memo(forwardRef<HTMLInputElement, SearchProps>(
    function ({
        value,
        onChange,
        onClear = () => { },
        onSearch = () => { },
        ...rest
    }, ref) {
        return (
            <Input ref={ref}
                value={value}
                onChange={onChange}
                iconLeft={<SearchIcon />}
                iconRight={<Close />}
                onIconLeftClick={() => onSearch()}
                onIconRightClick={() => onClear()}
                {...rest}
            />
        );
    }
));

export { Search };
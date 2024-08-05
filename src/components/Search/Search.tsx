import { ChangeEvent, forwardRef, InputHTMLAttributes, memo, useState } from "react";
import { Input } from "../Input";
import { SearchIcon, Close } from "../Icons";

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    onClear?: () => void;
    onSearch?: () => void; 
}

const Search = memo(forwardRef<HTMLInputElement, SearchProps>(
    function ({
        value,
        onChange,
        onClear,
        onSearch,
        ...rest
    }, ref) {
        function handleClear() {
            if (onClear) {
                onClear();
            }
        }

        function handleSearch() {
            if (onSearch) {
                onSearch();
            }
        }

        return (
            <Input ref={ref}
                value={value}
                onChange={onChange}
                iconLeft={<SearchIcon />}
                iconRight={<Close />}
                onIconLeftClick={handleSearch}
                onIconRightClick={handleClear}
                {...rest}
            />
        );
    }
));

export { Search };
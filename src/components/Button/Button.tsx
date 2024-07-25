import React from "react";

interface Props {
    value: string;
}

const Button = function ({
    value
}: Props) {
    return (
        <button>{value}</button>
    );
}

export default Button;
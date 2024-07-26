import React, { useState } from "react";
import styles from "./Button.module.scss";

interface Props {
    value: string;
}

const Button = function ({
    value
}: Props) {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <button className={[
            styles.button,
            isActive ? styles.active : ""
        ].join(" ")}
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

export default Button;
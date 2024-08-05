import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "../components";
import { ChangeEvent, useState } from "react";

const meta: Meta<typeof Search> = {
    title: "Search",
    component: Search,
    args: {
        value: "Search Text",
        placeholder: "Placeholder",
        label: "Label Text",
        disabled: false,
    },
    render: ({ value: initialValue = "", ...args }) => {
        const [value, setValue] = useState(initialValue.toString());

        function handleChange(e: ChangeEvent<HTMLInputElement>) {
            setValue(e.target.value);
        }

        function handleSearch() { }

        function handleClear() {
            setValue("");
        }

        return <Search
            value={value}
            onChange={handleChange}
            onClear={handleClear}
            onSearch={handleSearch}
            {...args}
        />
    },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
    name: "Search",
};
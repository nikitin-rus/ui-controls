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

        return <Search
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClear={() => setValue("")}
            {...args}
        />
    },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
    name: "Search",
};
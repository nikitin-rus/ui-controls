import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components";
import { useState } from "react";

const meta: Meta<typeof Select> = {
    title: "Select",
    component: Select,
    args: {
        disabled: false,
    },
    render: (args) => {
        const [selectedIndex, setSelectedIndex] = useState(0);

        const options = [
            {
                name: "relevant",
                value: "По релевантности",
            },
            {
                name: "popular",
                value: "По популярности",
            },
            {
                name: "cheap",
                value: "По возрастанию цены",
            },
            {
                name: "expensive",
                value: "По убыванию цены",
            },
        ];

        function handleSelect(selectedIndex: number) {
            setSelectedIndex(selectedIndex);
        }

        return <Select
            selectedIndex={selectedIndex}
            options={options}
            onSelect={handleSelect}
            {...args}
        />
    }
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = ({
    name: "Select",
});
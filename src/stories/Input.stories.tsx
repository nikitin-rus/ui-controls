import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components";
import { useState } from "react";

const meta: Meta<typeof Input> = {
    title: "Input",
    component: Input,
    args: {
        value: "Input Text",
        placeholder: "Placeholder",
        label: "Label Text",
        disabled: false,
    },
    argTypes: {
        variant: {
            options: ["default", "error", "success"],
            control: "select",
        },
    },
    render: ({ value: initialValue = "", ...args }) => {
        const [value, setValue] = useState(initialValue.toString());

        return <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            {...args}
        />
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Error: Story = {
    args: {
        variant: "error",
        error: "Error Message"
    }
};

export const Success: Story = {
    args: {
        variant: "success",
    }
};
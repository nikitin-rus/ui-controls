import type { Meta, StoryObj } from "@storybook/react";
import { Close, Input, Search } from "../components";

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
    }
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

export const Icons: Story = {
    args: {
        iconLeft: <Search />,
        iconRight: <Close />,
    }
};
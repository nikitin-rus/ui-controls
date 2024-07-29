import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        value: "Button"
    }
};

export const DefaultSmall: Story = {
    args: {
        value: "Button",
        size: "small"
    }
};

export const Blue: Story = {
    args: {
        value: "Button",
        theme: "blue",
    }
};

export const BlueSmall: Story = {
    args: {
        value: "Button",
        theme: "blue",
        size: "small",
    }
};
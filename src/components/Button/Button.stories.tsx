import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
    }
};

export const DefaultSmall: Story = {
    args: {
        children: "Button",
        size: "small",
    }
};

export const Blue: Story = {
    args: {
        children: "Button",
        variant: "blue",
    }
};

export const BlueSmall: Story = {
    args: {
        children: "Button",
        variant: "blue",
        size: "small",
    }
};
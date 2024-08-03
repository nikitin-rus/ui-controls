import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
    component: Typography,
    argTypes: {
        type: {
            control: "select",
        }
    }
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = ({
    name: "Typography",
    args: {
        children: "Typography",
    }
});
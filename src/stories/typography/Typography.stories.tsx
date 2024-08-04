import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../components";

const meta: Meta<typeof Typography> = {
    title: "Typography",
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
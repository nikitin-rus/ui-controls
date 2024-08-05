import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../components";
import { useState } from "react";

const meta: Meta<typeof TextArea> = {
    title: "TextArea",
    component: TextArea,
    args: {
        label: "Label Text",
        value: "I'm fine",
        placeholder: "What's up?",
        disabled: false,
    },
    render: ({ value: initialValue = "", ...args }) => {
        const [value, setValue] = useState(initialValue.toString());

        return (
            <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...args}
            />
        );
    }
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    name: "TextArea",
};
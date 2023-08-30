import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
    title: "Input/Input",
    component: Input,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "Input 컴포넌트의 Default 모양입니다.",
            },
        },
    },
    args: {
        placeholder: "Input",
    },
};

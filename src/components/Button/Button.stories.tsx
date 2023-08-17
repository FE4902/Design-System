import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
    title: "Button/Button",
    component: Button,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "Button 컴포넌트의 Default 모양입니다.",
            },
        },
    },
    args: {
        children: "Button",
    },
};

export const Color: Story = {
    parameters: {
        docs: {
            description: {
                story: "색상을 결정하는 옵션입니다. Default 색상은 primary 입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Button children="Primary" />
            <Button children="Secondary" color="secondary" />
            <Button children="Warning" color="warning" />
            <Button children="Success" color="success" />
        </div>
    ),
};

export const Size: Story = {
    parameters: {
        docs: {
            description: {
                story: "사이즈를 결정하는 옵션입니다. Default 값은 medium 입니다.",
            },
        },
    },
    render: () => (
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Button children="Small" size="small" />
            <Button children="Medium" size="medium" />
            <Button children="Large" size="large" />
        </div>
    ),
};

export const FullWidth: Story = {
    parameters: {
        docs: {
            description: {
                story: "버튼이 전체 너비를 가질지 선택하는 옵션입니다. Default 값을 false 입니다.",
            },
        },
    },
    args: {
        children: "FullWidth",
        fullWidth: true,
    },
};

export const Disabled: Story = {
    parameters: {
        docs: {
            description: {
                story: "버튼의 disabled 상태를 선택하는 옵션입니다. Default 값은 false 입니다.",
            },
        },
    },
    args: {
        children: "Disabled",
        disabled: true,
    },
};

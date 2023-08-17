// import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ButtonProps {
    /**
     * 버튼의 모양을 결정합니다.
     */
    variant?: "fill" | "outline" | "link";
    /**
     * 버튼의 사이즈를 설정합니다.
     */
    size?: "small" | "medium" | "large";
    /**
     * 버튼의 색상을 설정합니다.
     */
    color?: "primary" | "secondary" | "warning" | "success";
    /**
     * 버튼이 전체 너비를 가질지 선택합니다.
     */
    fullWidth?: boolean;
    /**
     * 버튼이 disabled 상태일지 선택합니다.
     */
    disabled?: boolean;
    /**
     * 버튼의 텍스트를 설정합니다.
     */
    children: string;
    /**
     * 버튼 클릭시 발생하는 이벤트를 설정합니다.
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    variant = "fill",
    size = "medium",
    color = "primary",
    fullWidth,
    children,
    ...props
}: ButtonProps) => {
    return (
        <StyledButton
            type="button"
            size={size}
            color={color}
            {...props}
            className={`${variant} ${fullWidth && "fullWidth"}`}
        >
            {children}
        </StyledButton>
    );
};

const colors = {
    primary: {
        color: "#fe4902",
        hoverColor: "#fe490250",
    },
    secondary: {
        color: "lightgray",
        hoverColor: "rgba(lightgray, 0.1)",
    },
    warning: {
        color: "crimson",
        hoverColor: "#fe490250",
    },
    success: {
        color: "lightgreen",
        hoverColor: "#fe490250",
    },
};

const sizes = {
    small: {
        fontSize: "12px",
        padding: "6px 12px",
    },
    medium: {
        fontSize: "16px",
        padding: "8px 16px",
    },
    large: {
        fontSize: "20px",
        padding: "10px 20px",
    },
};

const StyledButton = styled.button<ButtonProps>`
    border: 0;
    border-radius: 8px;
    background-color: transparent;
    padding: ${(props) => sizes[props.size || "medium"].padding};
    font-size: ${(props) => sizes[props.size || "medium"].fontSize};

    &:not(:disabled) {
        cursor: pointer;
    }

    &.fill {
        background-color: ${(props) => colors[props.color || "primary"].color};

        &:disabled {
            color: #fff;
            background-color: gray;
            opacity: 0.25;
        }

        &:not(:disabled):hover {
            background-color: ${(props) =>
                colors[props.color || "primary"].hoverColor};
        }
    }

    &.outline {
        border: 1px solid
            ${(props) =>
                (props.color ? colors[props.color] : colors["primary"]).color};
        color: ${(props) =>
            (props.color ? colors[props.color] : colors["primary"]).color};

        &:disabled {
            border-color: gray;
            opacity: 0.25;
        }

        &:not(:disabled):hover {
            border-color: ${(props) =>
                colors[props.color || "primary"].hoverColor};
        }
    }

    &.link {
        padding: 0;
        color: ${(props) =>
            (props.color ? colors[props.color] : colors.primary).color};

        &:disabled {
            opacity: 0.25;
        }

        &:not(:disabled):hover {
            text-decoration: underline;
            background-color: ${(props) =>
                colors[props.color || "primary"].hoverColor};
        }
    }

    &.fullWidth {
        flex-grow: 1;
        width: 100%;
    }
`;

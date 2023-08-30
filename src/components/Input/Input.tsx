import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * 인풋의 사이즈를 설정합니다.
     */
    // size?: "small" | "medium" | "large";
    /**
     * 인풋의 색상을 설정합니다.
     */
    color?: "primary" | "secondary" | "warning" | "success";
    /**
     * 인풋이 전체 너비를 가질지 선택합니다.
     */
    fullWidth?: boolean;
    /**
     * 인풋의 오른쪽에 위치할 컨텐츠를 설정합니다.
     */
    rightSlot?: React.ReactNode;
    /**
     * 인풋의 왼쪽에 위치할 컨텐츠를 설정합니다.
     */
    leftSlot?: React.ReactNode;
    /**
     * 버튼 클릭시 발생하는 이벤트를 설정합니다.
     */
    onChange?: () => void;
}

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

/**
 * Primary UI component for user interaction
 */
export const Input = ({
    // size = "medium",
    color = "primary",
    fullWidth,
    placeholder,
    leftSlot,
    rightSlot,
}: InputProps) => {
    return (
        <StyledInput>
            {rightSlot}
            <StyledInputBody placeholder={placeholder} />
            {leftSlot}
        </StyledInput>
    );
};

const StyledInput = styled.div`
    border-width: 1px;
    border-style: solid;
`;

const StyledInputBody = styled.input``;

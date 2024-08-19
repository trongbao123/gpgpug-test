import React, { type ReactNode } from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, onClick, ...rest }) => (
    <button className={`button ${rest.disabled ? 'button-disable': ""}`} onClick={onClick} disabled={rest.disabled} {...rest}>
        {icon && <span className="icon">{icon}</span>}
        {text}
    </button>
);

export default Button;

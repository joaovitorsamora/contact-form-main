import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    style: React.CSSProperties
}
export const ButtonComponent: React.FC<ButtonProps> = ({children, style, ...props}) => {
    return (
        <button style={style} {...props}>{children}</button>
    )
}
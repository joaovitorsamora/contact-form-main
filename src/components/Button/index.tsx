import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  style: React.CSSProperties
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.style?.backgroundColor || '#0C7D69'};
  padding: ${(props) => props.style?.padding || '0.6rem'};
  width: ${(props) => props.style?.width || '100%'};
  border-radius: ${(props) => props.style?.borderRadius || '0.4rem'};
  outline-style: ${(props) => props.style?.outlineStyle || 'none'};
  border: ${(props) => props.style?.border || 'none'};
  font-family: ${(props) => props.style?.fontFamily || 'Karla'};
  color: ${(props) => props.style?.color || '#FFF'};
`
export const ButtonComponent: React.FC<ButtonProps> = ({ children, style, ...props }) => {
  return (
    <StyledButton style={style} {...props}>
      {children}
    </StyledButton>
  )
}

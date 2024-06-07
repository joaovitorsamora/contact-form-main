import React from 'react'
import styled from 'styled-components'

interface TextProps {
  children: React.ReactNode
  style: React.CSSProperties
}

const StyledText = styled.p<TextProps>`
  ${(props) => props.style && { ...props.style }}
`

export const TextComponent: React.FC<TextProps> = ({ children, style, ...props }) => {
  return (
    <StyledText style={style} {...props}>
      {children}
    </StyledText>
  )
}

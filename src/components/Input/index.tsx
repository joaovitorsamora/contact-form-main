import styled from 'styled-components'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  value?: string
  text?: string
  placeholder?: string
  name?: string
  type?: string
  style?: React.CSSProperties
  checked?: boolean
}

const StyledInput = styled.input<InputProps>`
  ${(props) => props.style && { ...props.style }}
`

export const InputComponent: React.FC<InputProps> = ({
  onChange,
  onKeyDown,
  name,
  value,
  placeholder,
  text,
  style,
  type,
  checked,
  ...props
}) => {
  return (
    <StyledInput
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      placeholder={placeholder}
      title={text}
      type={type}
      style={style}
      checked={checked}
      {...props}
    />
  )
}

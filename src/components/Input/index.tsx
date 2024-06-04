interface InputProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
    value?: string
    text?: string
    placeholder?: string
    name?: string
    type?: string
    style?: React.CSSProperties
  }
  
export const InputComponent: React.FC<InputProps> = ({onChange, onKeyDown, name, value, placeholder, text, style, type}) => {
    return (
        <input name={name} onChange={onChange} onKeyDown={onKeyDown} value={value} placeholder={placeholder} title={text} type={type} style={style}/>
    )
}
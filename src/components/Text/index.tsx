interface TextProps{
    text: string
    style: React.CSSProperties
}

export const TextComponent: React.FC<TextProps> = ({text, style, ...props}) => {
    return (
        <p style={style} {...props}>{text}</p>
    )
}
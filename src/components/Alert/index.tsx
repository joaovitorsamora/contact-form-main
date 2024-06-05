import './style.css'
interface AlertProps{
    message: string
    subMessage?: string
}

export const AlertComponent: React.FC<AlertProps> = ({message, subMessage}) => {
    return (
        <div className='alert-container'>
            <h4 className='message'>
                {message}
            </h4>
            <h5 className='subMessage'>
                {subMessage}
            </h5>
        </div>
    )
}
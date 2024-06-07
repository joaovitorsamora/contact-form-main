import styled from 'styled-components'
interface AlertProps {
  message: string
  subMessage?: string
}

const AlertContainer = styled.div`
  background-color: #2a4244;
  font-family: 'Karla';
  color: #fff;
  padding: 0.1rem;
  border: none;
  border-radius: 0.4rem;
`
const Message = styled.h4`
  padding: 0 0.4rem;
  font-weight: 400;
`
const SubMessage = styled.h5`
  padding: 0 0.4rem;
  font-weight: 300;
`

export const AlertComponent: React.FC<AlertProps> = ({ message, subMessage }) => {
  return (
    <AlertContainer>
      <Message>{message}</Message>
      <SubMessage>{subMessage}</SubMessage>
    </AlertContainer>
  )
}

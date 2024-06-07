# Contact Form Application

This is a simple contact form application built using **React** with **TypeScript**. The application allows users to submit their contact details along with a query type (General Enquiry or Support Request). The form data is sent via email using the **EmailJS** service.

## Features

- **Form Validation**: Ensures all required fields are filled before allowing submission.
- **Styled Components**: Uses styled-components for styling individual components.
- **Alerts**: Displays an alert message upon successful form submission.
- **Dynamic Form Handling**: Handles different types of inputs (text, email, radio, checkbox) dynamically.
- **Environment Variables**: Stores sensitive information like EmailJS service IDs in environment variables.

## Project Structure 👨‍💻

- **App.tsx**: Main application component.
- **components/**: Directory containing reusable components (AlertComponent, ButtonComponent, InputComponent, TextComponent).
- **App.css**: Global CSS file for general styling.

## Components 🧰

### AlertComponent

Displays an alert message upon successful form submission.

```bash
export const AlertComponent: React.FC<AlertProps> = ({ message, subMessage }) => {
  return (
    <AlertContainer>
      <Message>{message}</Message>
      <SubMessage>{subMessage}</SubMessage>
    </AlertContainer>
  )
}
```

### ButtonComponent

Renders a styled button.

```bash
export const ButtonComponent: React.FC<ButtonProps> = ({ children, style, ...props }) => {
  return (
    <StyledButton style={style} {...props}>
      {children}
    </StyledButton>
  )
}
```

### InputComponent

Renders an input field with various types

```bash
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
```

### TextComponent

Renders a text element.

```bash
export const TextComponent: React.FC<TextProps> = ({ children, style, ...props }) => {
  return (
    <StyledText style={style} {...props}>
      {children}
    </StyledText>
  )
}
```

## Installation

1.Clone the repository:

```bash
git clone https://github.com/yoshi00/contact-form-main.git
```

2.Install the dependencies:

```bash
npm install
```

3.Create a .env file in the root of the project and add your EmailJS service IDs:

```bash
REACT_APP_USER_ID=your_user_id
REACT_APP_TEMPLATE_ID=your_template_id
REACT_APP_SERVICE_ID=your_service_id
```

4.Start the development server:

```bash
npm run dev or npm start //depends on your package manager
```

## Usage 👨‍💻

1. Fill out the form with your contact details.

2. Select the type of query (General Enquiry or Support Request).

3. Agree to be contacted by checking the consent checkbox.

4. Submit the form.

```bash
Upon submission, an email will be sent using EmailJS and an alert message will be displayed confirming the form submission.
```

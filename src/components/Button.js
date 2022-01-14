import { StyledButton } from "./styled/SubmitButton.styled";

export const Button = ({ children, onClick, ...otherProps }) => {
  return (
    <StyledButton {...otherProps} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

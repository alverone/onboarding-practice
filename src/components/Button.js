import { StyledButton } from "./styled/SubmitButton.styled";

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

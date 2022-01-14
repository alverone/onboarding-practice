import { StyledButton } from "./styled/SubmitButton.styled";

export function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

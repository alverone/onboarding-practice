import { StyledButton } from "./styled/Button.styled";

export const Button = ({ children, onClick, warning }) => {
  return (
    <StyledButton warning={warning} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

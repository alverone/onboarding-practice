import { StyledSubmitButton } from "./styled/Button.styled";

export const SubmitButton = ({ children, margined }) => {
  return (
    <StyledSubmitButton margined={margined}>{children}</StyledSubmitButton>
  );
};

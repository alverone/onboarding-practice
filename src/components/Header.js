import { StyledHeader } from "./styled/Header.styled";
import { Button } from "./Button";

export const Header = ({ modalHandler }) => {
  return (
    <StyledHeader>
      <Button onClick={modalHandler}>Add user</Button>
    </StyledHeader>
  );
};

import { StyledHeader } from "./styled/Header.styled";
import { Button } from "./Button";

export function Header({ modalHandler }) {
  return (
    <StyledHeader>
      <Button onClick={modalHandler}>Add user</Button>
    </StyledHeader>
  );
}

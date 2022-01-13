import { StyledHeader } from "./styled/Header.styled";
import { Button, Typography } from "@mui/material";

export function Header({ modalHandler }) {
  return (
    <StyledHeader>
      <Button
        sx={{
          fontFamily: "Inter",
          fontSize: 18,
          fontWeight: 500,
          marginRight: "16px",
        }}
      >
        <Typography>Log in</Typography>
      </Button>
      <Button variant="contained" onClick={modalHandler}>
        <Typography
          variant="p"
          sx={{ fontFamily: "Inter", fontSize: 18, fontWeight: 600 }}
        >
          Add user
        </Typography>
      </Button>
    </StyledHeader>
  );
}

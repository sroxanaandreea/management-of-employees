import { Box, Button, Grid, styled, TextField, Typography } from "@material-ui/core";


export const StyledTypografy = styled(Typography)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  });
  
  export  const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  });
  
  export const StyledButton = styled(Button)({
    width: "30%",
    borderColor: "rgba(161, 0, 255, 1)",
    "&:hover": {
      backgroundColor: "rgba(161, 0, 255, 1)",
    },
  });
  
  export const StyledTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "rgba(161, 0, 255, 1)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(161, 0, 255, 1)",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "rgba(161, 0, 255, 1)",
      },
    },
    width: "40%",
  });
  
  export const StyledGrid = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  });
import { Box, Grid, Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { auth, signIn, signUp } from "../providers/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  StyledTypografy,
  StyledButton,
  StyledBox,
  StyledTextField,
  StyledGrid,
} from "../Styles/styles";
import { useEffect, useState } from "react";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (user) {
      navigate("/homePage");
    }
  }, [user, loading, error, navigate]);

  return (
    <Grid
      container
      spacing={2}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid
        item
        xs={12}
        lg={6}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <StyledBox
          style={{
            backgroundColor: "rgba(161, 0, 255, 1)",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              xs={12}
              style={{
                position: "absolute",
                left: "0",
                top: "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                <Box
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    height: "30px",

                    width: "30px",
                  }}
                ></Box>
                <StyledTypografy
                  style={{
                    fontSize: "20px",
                    marginLeft: "8px",
                  }}
                >
                  Accenture
                </StyledTypografy>
              </div>
            </Grid>
            <Grid xs={12}>
              <StyledTypografy
                style={{
                  fontSize: "26px",
                }}
              >
                Nice to see you again
              </StyledTypografy>
            </Grid>
            <Grid xs={12}>
              <StyledTypografy
                style={{
                  fontSize: "50px",
                }}
              >
                WELCOME BACK!
              </StyledTypografy>
            </Grid>
            <StyledGrid xs={12}>
              <Box
                style={{
                  backgroundColor: "white",
                  height: "3px",
                  width: "200px",
                }}
              ></Box>
            </StyledGrid>
          </Grid>
        </StyledBox>
      </Grid>
      <Grid
        xs={12}
        lg={6}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <StyledBox>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <StyledTypografy style={{ color: "black", fontSize: "24px" }}>
                Login Account
              </StyledTypografy>
              <Paper />
              <StyledGrid xs={12}>
                <StyledTextField
                  id="outlined-basic"
                  label="Username"
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                />
              </StyledGrid>
              <StyledGrid xs={12}>
                <StyledTextField
                  id="outlined-basic"
                  type="password"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                />
              </StyledGrid>
              <StyledGrid xs={12}>
                <StyledButton
                  variant="outlined"
                  onClick={() => {
                    signIn(email, password);
                  }}
                >
                  Submit
                </StyledButton>
              </StyledGrid>
            </Grid>
          </Grid>
        </StyledBox>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

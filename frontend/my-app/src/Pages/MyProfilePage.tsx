import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledGrid, StyledTextField } from "../Styles/styles";
import { auth, changeUserPassword, signOut } from "../providers/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import male from "../Images/male.svg";
import { useState } from "react";

const MyProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const [enableTextField, setEnableTextField] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const [email, setEmail] = useState<string | null>(
    user !== null && user !== undefined ? user.email : ""
  );

  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "rgba(161, 0, 255, 1)" }}
        >
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/homePage")}>
              Home
            </Button>
            <Button variant="contained">My Profile</Button>
            <Button
              color="inherit"
              onClick={async () => {
                await signOut();
                navigate("/loginPage");
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2}>
        <StyledGrid xs={12} lg={6} item>
          <img src={male} width="156" height="156" />
        </StyledGrid>
        <StyledGrid xs={12} lg={6} item>
          <Box
            sx={{ flexDirection: "column" }}
            style={{
              width: "40%",
            }}
          >
            <div>
              <StyledButton
                variant="outlined"
                onClick={() => {
                  setEnableTextField(!enableTextField);
                  setIsShown(!isShown);
                }}
                disabled={!enableTextField}
                style={{ width: "100%" }}
              >
                Edit
              </StyledButton>
            </div>
            <div>
              {!enableTextField && (
                <StyledButton
                  style={{ marginTop: 12, width: "100%" }}
                  onClick={() => {
                    if (
                      user !== null &&
                      user !== undefined &&
                      user?.email !== null &&
                      email !== null
                    )
                      changeUserPassword(
                        user.email,
                        password,
                        newPassword,
                        email
                      );
                  }}
                  variant="outlined"
                >
                  Save
                </StyledButton>
              )}
            </div>
          </Box>
        </StyledGrid>
        <StyledGrid xs={12} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-read-only-input"
            type="text"
            variant="outlined"
            placeholder="Username"
            helperText="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>
        <StyledGrid xs={12} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-read-only-input"
            type="text"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            helperText="Password"
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>

        <StyledGrid xs={12} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-read-only-input"
            type="text"
            variant="outlined"
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            helperText="New Password"
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>
        <StyledGrid xs={12} item>
          <div style={{ width: "80%" }}>
            <Typography>
              - You can change only email or password at a moment in time
            </Typography>
            <br />
            <Typography>- The Password should to be at least 8 char</Typography>
          </div>
        </StyledGrid>
      </Grid>
    </div>
  );
};

export default MyProfilePage;

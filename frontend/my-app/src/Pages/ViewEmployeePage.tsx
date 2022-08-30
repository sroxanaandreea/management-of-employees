import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { StyledButton, StyledGrid, StyledTextField } from "../Styles/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { EmployeeModel, UserNavigationMdodel } from "../utils/models";
import { auth, signOut } from "../providers/firebase";
import { NavigationType } from "../utils/enums";
import { routes } from "../Services/endpints";
import axiosInstance from "../Services/axiosInstance";
import uuid from "react-uuid";
import ProfileImage from "../Components/ProfileImage";

const ViewEmployeePage: React.FC = () => {
  const navigate = useNavigate();
  const [enableTextField, setEnableTextField] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const location = useLocation();

  const [props, setProps] = useState<UserNavigationMdodel>(
    location.state as UserNavigationMdodel
  );

  const [userValue, setUserValue] = useState<EmployeeModel>(props.userData);

  const postEmp = async (uid: string) => {
    axiosInstance.post(routes.employees.addEmp, {
      ...userValue,
      enterpriseID: uid,
    });
  };

  const putEmp = async () => {
    axiosInstance.put(
      routes.employees.updateEmp(userValue.enterpriseID),
      userValue
    );
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "rgba(161, 0, 255, 1)" }}
      >
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/homePage")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/myProfilePage")}>
            My Profile
          </Button>
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
      <Grid container spacing={2}>
        <StyledGrid xs={12} lg={6} item>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <ProfileImage
              height="156"
              width="156"
              isFeminin={userValue.gender === "F"}
            />
          </div>
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
                  onClick={async () => {
                    if (props.types === NavigationType.AddNavigation) {
                      await postEmp(uuid());
                      navigate("/homePage");
                    } else if (props.types === NavigationType.EditNavigation) {
                      await putEmp();
                      navigate("/homePage");
                    }
                  }}
                  variant="outlined"
                >
                  Save
                </StyledButton>
              )}
            </div>
          </Box>
        </StyledGrid>

        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="Email"
            helperText="Email"
            value={userValue.email}
            onChange={(e) => {
              setUserValue({ ...userValue, email: e.target.value });
              // suprascriem email si resutl raman la fel
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>
        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="First Name"
            helperText="First Name"
            value={userValue.firstName}
            onChange={(e) => {
              setUserValue({ ...userValue, firstName: e.target.value });
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>

        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="Last name"
            helperText="Last name"
            value={userValue.lastName}
            onChange={(e) => {
              setUserValue({ ...userValue, lastName: e.target.value });
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>
        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="date"
            placeholder="Date of birth"
            helperText="Date of birth"
            value={userValue.birthDay}
            onChange={(e) => {
              setUserValue({ ...userValue, birthDay: e.target.value });
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>

        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="Gender"
            helperText="Gender"
            value={userValue.gender}
            onChange={(e) => {
              setUserValue({ ...userValue, gender: e.target.value });
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>
        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="Department"
            helperText="Department"
            value={userValue.departament}
            onChange={(e) => {
              setUserValue({ ...userValue, departament: e.target.value });
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>

        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="Position"
            helperText="Position"
            value={userValue.position}
            onChange={(e) => {
              setUserValue({ ...userValue, position: e.target.value });
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>
        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="number"
            placeholder="Salary"
            helperText="Salary"
            value={userValue.salary}
            onChange={(e) => {
              setUserValue({ ...userValue, salary: +e.target.value });
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>

        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="date"
            placeholder="Start Date"
            helperText="Start Date"
            value={userValue.startDate}
            onChange={(e) => {
              setUserValue({ ...userValue, startDate: e.target.value });
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>
        <StyledGrid xs={12} lg={6} item>
          <StyledTextField
            style={{ width: "80%" }}
            id="outlined-basic"
            variant="outlined"
            type="date"
            placeholder="End Date"
            helperText="End Date"
            value={userValue.endDate}
            onChange={(e) => {
              setUserValue({ ...userValue, endDate: e.target.value });
            }}
            InputProps={{
              readOnly: enableTextField,
            }}
          />
        </StyledGrid>
      </Grid>
    </div>
  );
};

export default ViewEmployeePage;

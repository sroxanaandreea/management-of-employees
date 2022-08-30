import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { auth, signOut } from "../providers/firebase";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { StyledButton } from "../Styles/styles";
import { useNavigate } from "react-router-dom";
import { routes } from "../Services/endpints";
import axiosInstance from "../Services/axiosInstance";
import { useEffect, useState } from "react";
import { EmployeeModel } from "../utils/models";
import { NavigationType } from "../utils/enums";
import { useAuthState } from "react-firebase-hooks/auth";
import ProfileImage from "../Components/ProfileImage";
import Pagination from "@mui/material/Pagination/Pagination";

export interface GetRequestModel {
  employees: EmployeeModel[];
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const [employees, setEmployees] = useState<EmployeeModel[][] | undefined>();
  const [page, setPage] = useState<number>(1);

  const getAllEmp = async () => {
    axiosInstance
      .get(routes.employees.getAllEmp)
      .then(({ data }) => setEmployees(data.employees));
  };

  const deleteAEmp = async (id: number | string) => {
    axiosInstance
      .delete(routes.employees.deleteEmp(id))
      .then(async () => await getAllEmp());
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAllEmp();
    };

    fetchData().catch(console.error);
  }, []);

  const employeesList =
    employees !== undefined ? (
      employees[page - 1]?.map((emp: EmployeeModel) => (
        <Box>
          <ListItem
            button
            alignItems="flex-start"
            onClick={() =>
              navigate("/viewEmployeePage", {
                state: {
                  types: NavigationType.EditNavigation,
                  userData: emp,
                },
              })
            }
          >
            <ListItemAvatar>
              <Avatar>
                <ProfileImage
                  height="38"
                  width="38"
                  isFeminin={emp.gender === "F"}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <div>
                <Typography style={{ fontSize: "30px", fontWeight: "400" }}>
                  {`${emp.firstName} ${emp.lastName}`}
                </Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "100" }}>
                  {emp.email}
                </Typography>
              </div>
            </ListItemText>

            <ListItemSecondaryAction>
              <IconButton onClick={() => deleteAEmp(emp.enterpriseID)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" component="li" />
        </Box>
      ))
    ) : (
      <Box></Box>
    );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "rgba(161, 0, 255, 1)" }}
        >
          <Toolbar>
            <Button variant="contained" onClick={() => navigate("/homePage")}>
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
      </Box>
      <Grid container>
        <Grid
          xs={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography style={{ fontSize: "35px" }}>Employees</Typography>
        </Grid>
        <Grid
          xs={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledButton
            variant="outlined"
            onClick={() =>
              navigate("/viewEmployeePage", {
                state: {
                  types: NavigationType.AddNavigation,
                  userData: {},
                },
              })
            }
          >
            +
          </StyledButton>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <List
          style={{
            width: "100%",
            maxWidth: 700,
          }}
        >
          {employeesList}
        </List>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={employees !== undefined ? employees.length : 0}
          sx={{ mb: 2, mt: 2 }}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default HomePage;

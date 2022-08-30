import { NavigationType } from "./enums";

export interface EmployeeModel {
  _id?: string;
  enterpriseID: number | string;
  firstName: string;
  lastName: string;
  email: string;
  birthDay: string;
  gender: string;
  departament: string;
  position: string;
  salary: number;
  startDate: string;
  endDate: string;
}

export interface UserNavigationMdodel {
  types: NavigationType;
  userData: EmployeeModel;
}

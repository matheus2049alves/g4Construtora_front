import { BrowserRouter } from "react-router-dom";
import { ClientRoutes } from "./clients.routes";
import { AuthRoutes } from "./auth.routes";
import {EmployeeRoutes } from "./employee.routes";

export function Routes(){
  return(
    <BrowserRouter>
      <EmployeeRoutes/>
    </BrowserRouter>
  )
}

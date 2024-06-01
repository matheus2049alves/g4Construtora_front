import { BrowserRouter } from "react-router-dom";
import { ClientRoutes } from "./clients.routes";
import { AuthRoutes } from "./auth.routes";
import {EmployeeRoutes } from "./employee.routes";
import { useAuth } from "../hook/auth";
import { EmployeeHome } from "../pages/EmployeeHome";

 

export function Routes(){
  const {id} = useAuth()
  return(
    <BrowserRouter>
   {id ?  <EmployeeRoutes/> :  <AuthRoutes/>  }
    </BrowserRouter>
  )
}

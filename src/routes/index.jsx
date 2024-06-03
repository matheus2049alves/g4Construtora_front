import { BrowserRouter } from "react-router-dom";
import { ClientRoutes } from "./clients.routes";
import { AuthRoutes } from "./auth.routes";
import {EmployeeRoutes } from "./employee.routes";
import { useAuth } from "../hook/auth";

 

export function Routes(){
  const {user} = useAuth()
  return(
    <BrowserRouter>
   {user ?  <EmployeeRoutes/> :  <AuthRoutes/>  }
    </BrowserRouter>
  )
}

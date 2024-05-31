import { Routes, Route} from "react-router-dom";
import { ManagerHome } from "../pages/ManagerHome";
import { EmployeeHome } from "../pages/EmployeeHome"
import { Sales } from "../pages/Sales";
export function EmployeeRoutes(){
  return(
    <Routes>
      <Route path="/" element = {<EmployeeHome/>}/>
      <Route path="/manager" element= {<ManagerHome/>}/>
      <Route path="/sales" element = {<Sales/>}/>
    </Routes>
  )
}

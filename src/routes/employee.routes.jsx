import { Routes, Route} from "react-router-dom";
import { EmployeeHome } from "../pages/EmployeeHome"
import { Sales } from "../pages/Sales";
export function EmployeeRoutes(){
  return(
    <Routes>
      <Route path="/" element = {<EmployeeHome/>}/>
      <Route path="/sales" element = {<Sales/>}/>
    </Routes>
  )
}

import { Routes, Route} from "react-router-dom";
import { FuncHome } from "../pages/FuncHome"
import { Sales } from "../pages/Sales";
export function EmployeeRoutes(){
  return(
    <Routes>
      <Route path="/" element = {<FuncHome/>}/>
      <Route path="/sales" element = {<Sales/>}/>
    </Routes>
  )
}

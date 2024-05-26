import { Routes, Route} from "react-router-dom";
import { FuncHome } from "../pages/FuncHome"
export function EmployeeRoutes(){
  return(
    <Routes>
      <Route path="/" element = {<FuncHome/>}/>
    </Routes>
  )
}
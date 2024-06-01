import { Routes, Route} from "react-router-dom";
import { BrokerHome } from "../pages/BrokerHome";
import { ManagerHome } from "../pages/ManagerHome";
import { EmployeeHome } from "../pages/EmployeeHome";
import { DetailsProperty } from "../pages/DetailsProperty";
import { Properties } from "../pages/Properties";
import { Employees } from "../pages/Employees";
import { Sales } from "../pages/Sales";
export function EmployeeRoutes(){
  return(
    <Routes>
      <Route path="/" element = {<EmployeeHome/>}/>
      <Route path="/broker" element = {<BrokerHome/>}/>
      <Route path="/manager" element= {<ManagerHome/>}/>
      <Route path="/details" element= {<DetailsProperty/>}/>
      <Route path="/properties" element = {<Properties/>}/>
      <Route path="/sales" element = {<Sales/>}/>
      <Route path="/employees" element = {<Employees/>}/>
    </Routes>
  )
}

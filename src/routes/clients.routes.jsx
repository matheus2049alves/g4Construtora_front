import { Routes, Route} from "react-router-dom";
import { ClientHome } from "../pages/Client-Home";
import { Profile } from "../pages/Profile";
import { PropertyDetails } from "../pages/ProperTyDetails";
export function ClientRoutes(){
  return(
    <Routes>
      <Route path="/" element = {<ClientHome/>}/>
      <Route path="/profile" element = {<Profile/>}/>
      <Route path="/property/:id" element = {<PropertyDetails/>}/>
    </Routes>
  )
}
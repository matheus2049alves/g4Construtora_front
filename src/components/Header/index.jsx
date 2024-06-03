import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout } from "./styles";
import { useAuth } from "../../hook/auth";
export function Header () {
  const {signOut} = useAuth()
  return (
    <Container>
        <h2>G4</h2>

        <nav>
          <ul>
            <li> <a href="#">Imóveis</a></li>
            <li>
             <a href="#">Area do Cliente</a>
             <ul className="DropDown">
              <li><a href="#">Compras</a></li>
              <li> <a href="/profile"> Meus Dados</a></li>
             </ul>
            </li>
          </ul>
        </nav>
    

      <Logout onClick={signOut}>
        <RiShutDownLine/>
       
      </Logout>

    </Container>
  )
}

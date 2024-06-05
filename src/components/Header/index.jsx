import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout } from "./styles";
import { useAuth } from "../../hook/auth";
import { Link } from "react-router-dom";
export function Header () {
  const {signOut} = useAuth()
  return (
    <Container>
        <h2>G4</h2>

        <nav>
          <ul>
            <li> <a href="#">Imóveis</a></li>
            <li>
             <a href="#">Área do Cliente</a>

             <ul className="DropDown">
              <li><a href="#">Compras</a></li>
              <li>
                <Link to="/perfil">
                  Meus Dados
                </Link>
              </li>
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

import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header () {
  return (
    <Container>
      <Profile >

        <img 
          src="http://github.com/diogobrasil.png" 
          alt="Foto do Usuário" 
        />

        <div>

          <span>Bem-Vindo</span>
          <strong>Nome do Usuário</strong>

        </div>
        
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}

import { RiShutDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

import { Container, Header, Logout, Label, Avatar, Content} from './styles';

export function EmployeeHome() {

  return (
    <Container>
      
      <Header>

        <h1>G4</h1>

        <div>
          <Link to="#">Listar Imóveis</Link>
          <Link to="#">Cadastrar Imóvel</Link>
        </div>

        <Logout>
          <RiShutDownLine />
        </Logout>

      </Header>

      <Avatar>

        <img
          src="http://github.com/diogobrasil.png"
          alt="Foto do Usuário"
        />

        <div>
          <span>Bem-Vindo</span>
          <strong>Diogo Brasil</strong>
        </div>
      </Avatar>

      <Label><h2>Informações</h2></Label>

      <Content id="content">

        <dl>
          <dt>Nome Completo</dt>
          <dd>Diogo Brasil Da Silva</dd>
          <dt>Cargo</dt>
          <dd>Serviços Gerais</dd>
          <dt>Contrato</dt>
          <dd>Temporário</dd>
          <dt>Data de Início de Contrato</dt>
          <dd>01/01/2024</dd>
          <dt>Data do Final de Contrato</dt>
          <dd>01/01/2030</dd>
          <dt>Tempo de Contrato</dt>
          <dd>5 Anos</dd>
        </dl>

      </Content>

    </Container>
  )
}

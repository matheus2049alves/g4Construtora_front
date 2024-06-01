import { FiPlus} from 'react-icons/fi';
import { RiShutDownLine } from "react-icons/ri";

import { Container, Header, Logout, Brand, Menu, Avatar, Label, Content, Create } from './styles';

import { ButtonText } from '../../components/ButtonText';

export function BrokerHome() {

  return (
    <Container>
      <Brand>
        <h2>
          G4
        </h2>
      </Brand>

      <Header>

        <Logout>
          <RiShutDownLine />
        </Logout>

      </Header>

      <Menu>

        <li>
          <ButtonText title="Imóveis" to="/properties" />
        </li>

        <li>
          <ButtonText title="Vendas" to="/sales" />
        </li>

      </Menu>

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
          <dd>Corretor</dd>
          <dt>Contrato</dt>
          <dd>Temporário</dd>
          <dt>Data de Início de Contrato</dt>
          <dd>01/01/2024</dd>
          <dt>Data do Final de Contrato</dt>
          <dd>01/01/2025</dd>
          <dt>Tempo de Contrato</dt>
          <dd>1 Ano</dd>
        </dl>

      </Content>


      <Create>
        <FiPlus />
        Cadastrar Imóvel
      </Create>

    </Container>
  )
}

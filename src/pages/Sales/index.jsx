import { FiPlus, FiSearch } from 'react-icons/fi';
import { RiShutDownLine } from "react-icons/ri";

import { Container, Header, Logout, Brand, Menu, Search, Label, Content, Create } from './styles';

import { Input } from '../../components/Input';
import { Sale } from '../../components/Sale';
import { ButtonText } from '../../components/ButtonText';

export function Sales() {

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
          <ButtonText title="Listar Imóveis" to="/" />
        </li>

        <li>
          <ButtonText title="Minhas Vendas" to="/sales" />
        </li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo id" icon={FiSearch} />
      </Search>

      <Label><h2>Vendas</h2></Label>

      <Content id="content">

        <Sale data={
          {
            id: '12345',
            descricao: 'Casa de dois andares, com varanda e vista para o mar. Ótima para criar os filhos, convidar a família e amigos para um churrascos. Vizinhos tranquilos e gentis.',
            status: "EM ANDAMENTO"
          }
        }
        />

      </Content>

      
      <Create>
        <FiPlus />
        Cadastrar Imóvel
      </Create>

    </Container>
  )
}

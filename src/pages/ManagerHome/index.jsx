import { FiPlus, FiSearch} from 'react-icons/fi';
import { RiShutDownLine } from "react-icons/ri";

import { Container, Header, Logout, Brand, Menu, Search, Label, Content, Create, CreateEmployee } from './styles';

import { Input } from '../../components/Input';
import { Property } from '../../components/Property';
import { ButtonText } from '../../components/ButtonText';

export function ManagerHome() {

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
          <ButtonText title="Listar Imóveis" to="/manager" />
        </li>

        <li>
          <ButtonText title="Vendas" to="/sales" />
        </li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo id" icon={FiSearch} />
      </Search>

      <Label><h2>Imóveis</h2></Label>

      <Content id="content">

        <Property data={
          {
            id: '12345',
            descricao: 'Casa de dois andares, com varanda e vista para o mar. Ótima para criar os filhos, convidar a família e amigos para um churrascos. Vizinhos tranquilos e gentis.',
            endereco: {
              cep: '65370-000',
              rua: 'Rua Das Flores',
              bairro: 'Povoado Bambu',
              cidade: 'Pindaré Mirim'
            },
            status: "DISPONÍVEL"

          }
        }
        />

      </Content>

      
      <Create to="#">
        <FiPlus />
        Cadastrar Imóvel
      </Create>

      <CreateEmployee to="#">
        <FiPlus/>
        Cadastrar Funcionário
      </CreateEmployee>

    </Container>
  )
}

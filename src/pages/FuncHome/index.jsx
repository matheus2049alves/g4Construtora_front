import { FiPlus, FiSearch, FiDollarSign } from 'react-icons/fi';
import { RiShutDownLine } from "react-icons/ri";

import { Container, Header, Logout, Brand, Menu, Search, Label, Content, Create, Sale } from './styles';

import { Input } from '../../components/Input';
import { Imovel } from '../../components/Imovel';
import { ButtonText } from '../../components/ButtonText';

export function FuncHome() {

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
          <ButtonText title="Todos" />
        </li>

        <li>
          <ButtonText title="Disponiveis" />
        </li>

        <li>
          <ButtonText title="Vendidos" />
        </li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo id" icon={FiSearch} />
      </Search>

      <Label><h2>Imóveis</h2></Label>

      <Content id="content">

        <Imovel data={
          {
            id: '12345',
            descricao: 'Casa de dois andares, com varanda e vista para o mar. Ótima para criar os filhos, convidar a família e amigos para um churrascos. Vizinhos tranquilos e gentis.',
            endereco: {
              cep: '65370-000',
              rua: 'Rua Das Flores',
              bairro: 'Povoado Bambu',
              cidade: 'Pindaré Mirim'
            },
            status: "CONCLUIDO"

          }
        }
        />

      </Content>

      <Sale to="/sales">
        <FiDollarSign />
        Acompanhar Vendas
      </Sale>

      <Create>
        <FiPlus />
        Cadastrar Imóvel
      </Create>

    </Container>
  )
}

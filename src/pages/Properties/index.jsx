import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import { RiShutDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { Container, Header, Logout, Search, Label, Content } from './styles';

import { Input } from '../../components/Input';
import { Property } from '../../components/Property';

export function Properties() {

  return (
    <Container>

      <Header>
        
        <Link to="/">

          <FiArrowLeft />

        </Link>

        <Logout>
          <RiShutDownLine />
        </Logout>

      </Header>

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

    </Container>
  )
}

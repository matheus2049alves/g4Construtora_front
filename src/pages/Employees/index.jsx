import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import { RiShutDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { Container, Header, Logout, Search, Label, Content } from './styles';

import { Input } from '../../components/Input';
import { Employee } from '../../components/Employee';

export function Employees () {

  return (
    <Container>

      <Header>
        
        <Link to="/manager">

          <FiArrowLeft />

        </Link>

        <Logout>
          <RiShutDownLine />
        </Logout>

      </Header>

      <Search>
        <Input placeholder="Pesquisar pelo id" icon={FiSearch} />
      </Search>

      <Label><h2>Funcionários</h2></Label>

      <Content id="content">

        <Employee data={
          {
            nome : "Diogo Brasil Da Silva",
            id: '12345',
            descricao: 'Lider. Ajuda os seus companheiros.',
            tempocontrato : '5 anos',
            endereco: {
              cep: '65370-000',
              rua: 'Rua Das Flores',
              bairro: 'Povoado Bambu',
              cidade: 'Pindaré Mirim'
            },
            cargo: "CORRETOR"

          }
        }
        />

      </Content>

    </Container>
  )
}

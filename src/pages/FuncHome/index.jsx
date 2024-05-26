import { FiPlus, FiSearch, FiDollarSign } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, Create, Sale} from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Imovel } from '../../components/Imovel';
import { ButtonText } from '../../components/ButtonText';

export function FuncHome () {
  
  return (
    <Container>
      <Brand>
        <h1>
          G4 Construtora
        </h1>
      </Brand>

      <Header/>

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
        <Input placeholder="Pesquisar pelo id" icon={FiSearch}/>
      </Search>

      <Content id="content">
      
        <Section title="Imóveis">
          
          <Imovel data={
            {
              id : '12345',
              descricao: 'Casa de dois andares, com varanda e vista para o mar. Ótima para criar os filhos, convidar a família e amigos para um churrascos. Vizinhos tranquilos e gentis.',
              endereco : {
                cep : '65370-000', 
                rua : 'Rua Das Flores',
                bairro : 'Povoado Bambu',
                cidade : 'Pindaré Mirim'
              },
              status : "disponivel"
               
            }
          }
          />

        </Section>

      </Content>

      <Sale>
        <FiDollarSign/>
        Acompanhar Vendas
      </Sale>

      <Create>
        <FiPlus/>
        Cadastrar Imóvel
      </Create>

    </Container>
  )
}

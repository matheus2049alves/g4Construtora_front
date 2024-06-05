import { FiSearch, FiArrowLeft } from 'react-icons/fi';
import { RiShutDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { Container, Header, Logout, Search, Label, Content } from './styles';

import { Input } from '../../components/Input';
import { Property } from '../../components/Property';
import { useState,useEffect } from 'react';
import { api } from '../../services/api';

export function Properties() {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await api.get("/imovel/listar");
        setProperty(response.data.imoveis);
      } catch (error) {
        if (error){
          alert(error.response.data.message)
        }
        console.error("Erro ao buscar imóveis:", error);
      }
    }
  
    fetchProperties(); 
  }, []); 
  console.log(property)



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
        <Input placeholder="Pesquisar" icon={FiSearch} />
      </Search>

      <Label><h2>Imóveis</h2></Label>

      <Content id="content">

      {property.map((property) => (
    
        <Property key= {property.id} data = {{
                id : `${property.id}`,
                descricao : `${property.aminidades}`,
                endereco : {
                  cep : `${property.cep}`,
                  rua :`${property.rua}`,
                  cidade : `${property.cidade}`,

                }
              }
            }
          />
        ))} 
      </Content>

    </Container>
  )
}

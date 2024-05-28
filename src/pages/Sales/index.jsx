import { FiArrowLeft, FiSearch } from "react-icons/fi";

import { Link } from "react-router-dom";

import { Container, Header, Search, Label, Content } from "./styles";
import { Input } from "../../components/Input";
import { Sale } from "../../components/Sale";
import { Section } from "../../components/Section";

export function Sales() {
  return (

    <Container>

      <Header>

        <Link to="/">
          <FiArrowLeft />
        </Link>

        <h2>
          G4
        </h2>

      </Header>

      <Search>
        <Input placeholder="Pesquisar pelo id" icon={FiSearch} />
      </Search>

      <Label><h2>Vendas</h2></Label>

      <Content>

        <Sale data={
          {
            id: "1234",
            descricao: "Venda de imóvel",
            status: "VENDIDO"
          }
        }
        />

      </Content>



    </Container>
  )
}

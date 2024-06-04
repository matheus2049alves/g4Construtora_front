import { Container, Form,InputContainer,Header } from "./styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function CondominiumRegistration(){
  return(
    <Container>
  
      <Header>
        <h1>G4 Construtora</h1>
        <p>Construa sua vida com a gente</p>
      </Header>
      <div>
      <Form>
        
        <h2>Cadastro de Condomínio</h2>

        <InputContainer>
          <div className="wrapper">
          
            <Label htlmFor={"name"}>Nome</Label>
            <Input 
              width={"23.15rem"}
              placeholder = "nome do condomínio"
              type = "text"
              id = "name"
            />
          </div>
          <div >
            <Label htlmFor={"last_name"}>Quantidade de Imóveis</Label>
              <Input 
                width={"23.15rem"}
                placeholder = "Quantos imóveis?"
                type = "text"
                />
          </div>
        </InputContainer>
        <InputContainer>
          <div className="wrapper">
          
            <Label htlmFor={"tax"}>Taxa</Label>
            <Input 
              width={"23.15rem"}
              placeholder = "20%"
              type = "text"
              id = "tax"
            />
          </div>
          <div >
            <Label htlmFor={"last_name"}>Ano de Construção</Label>
              <Input 
                width={"23.15rem"}
                type = "number"
                />
          </div>
        </InputContainer>
        <Label htlmFor={"status"}>Status</Label>
            <Input 
              width={"49.8rem"}
              placeholder = "Novo"
              type = "status"
              id = "tax"
        
        />
        <Label htlmFor={"amenidades"}>Amenidades</Label>
        <textarea name="amenidades" id="amenidades"></textarea>

        <legend>Informações de Endereço</legend>
        <InputContainer>
          <div className="wrapper">
          
            <Label htlmFor={"rua"}>Estado</Label>
            <Input 
              width={"23.15rem"}
              placeholder = "Maranhão"
              type = "text"
              id = "name"
            />
          </div>
          <div >
            <Label htlmFor={"City"}>Cidade</Label>
              <Input 
                width={"23.15rem"}
                placeholder = "São Luis"
                type = "text"
                />
          </div>
        </InputContainer>
        <InputContainer>
          <div className="wrapper">
          
            <Label htlmFor={"Rua"}>Rua</Label>
            <Input 
              width={"23.15rem"}
              placeholder = "Rua das Oliveiras"
              type = "text"
              id = "name"
            />
          </div>
          <div >
            <Label htlmFor={"last_name"}>Número da Casa</Label>
              <Input 
                width={"23.15rem"}
                placeholder = "203"
                type = "number"
                />
          </div>
        </InputContainer>
        <Label htlmFor={"status"}>CEP</Label>
            <Input 
              width={"49.8rem"}
              placeholder = "65213-000"
              type = "text"
              id = "CEP"
        
        />
      </Form>
      </div>
  
    </Container>
  )
}
import { Container, Form,InputContainer,Header, Page} from "./styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api"; 

export function CreateProperty(){

  const [idCondomio,setIDCondominio] = useState(0)
  const [tipo, setTipoImovel] = useState(" ")
  const [usa_preco, setPreco] = useState(0)
  const [area, setArea] = useState(0)
  const [estado, setStatus] = useState("")
  const [recebe_quartos, setQuarto] = useState(0)
  const [recebe_banheiros, setBanheiro] = useState(0)
  
  
  function handleSignUp(){
    if (!idCondomio || !tipo || !usa_preco || !area || !estado || !recebe_quartos || !recebe_banheiros ){

      return (alert("Preencha todos os campos"))
    }

    const id_condominio = Number(idCondomio)
    const preco = Number(usa_preco)
    const area_total = Number(area)
    const num_quartos = Number(recebe_quartos)
    const num_banheiros = Number(recebe_banheiros)

    api.post("/imovel/cadastrar", { tipo, preco, area_total,num_quartos, num_banheiros, id_condominio, status: estado })
    .then(() => {
      alert("Imóvel cadastrado")
    }).catch(error => {
      if (error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível cadastrar")
      }
    })
  }

  return(
    <Container>

      <Page>

        <Header>
          <h1>Cadastro de Imóvel</h1>
          <p>Preencha o formulário abaixo para cadastrar um novo imóvel</p>
        </Header>

        <Form>
          
          <legend>Informações Gerais</legend>

          <InputContainer>
            <div className="wrapper">
            
              <Label htlmFor={"condominio"}>ID do Condominio</Label>
              <Input 
                width={"30rem"}
                placeholder = "Ao qual o imóvel pertence"
                type = "text"
                id = "condominio"
                onChange = {e => setIDCondominio(e.target.value)}
              />
            </div>
            <div >
              <Label htlmFor={"tipo_imovel"}>Tipo do Imóvel</Label>
                <Input 
                  width={"30rem"}
                  placeholder = "Qual tipo de imóvel?"
                  type = "text"
                  onChange = {e => setTipoImovel(e.target.value)}
                  />
            </div>
          </InputContainer>
          <InputContainer>
            <div className="wrapper">
            
              <Label htlmFor={"preco"}>Preço</Label>
              <Input 
                width={"30rem"}
                placeholder = "R$"
                type = "number"
                id = "preco"
                onChange = {e => setPreco(e.target.value)}
              />
            </div>
            <div >
              <Label htlmFor={"area"}>Área</Label>
                <Input 
                  placeholder="M²"
                  width={"30rem"}
                  type = "number"
                  onChange = {e => setArea(e.target.value)}
                  />
            </div>
          </InputContainer>

          <InputContainer>
            <div className="wrapper">
            
              <Label htlmFor={"quartos"}>Número de Quartos</Label>
              <Input 
                width={"30rem"}
                placeholder = "Nº Quartos"
                type = "number"
                id = "quartos"
                onChange = {e => setQuarto(e.target.value)}
              />
            </div>
            <div >
              <Label htlmFor={"banheiros"}>Número de Banheiros</Label>
                <Input 
                  width={"30rem"}
                  placeholder = "Nº Banheiros"
                  type = "number"
                  onChange = {e => setBanheiro(e.target.value)}
                  />
            </div>
          </InputContainer>
          <div>
          <Label htlmFor={"status"}>Status</Label>
              <Input 
                width={"62.2rem"}
                placeholder = "Novo"
                type = "status"
                id = "tax"
                onChange = {e => setStatus(e.target.value)}
          
          />
          </div>

          <Button title={"Cadastrar"} onClick = {handleSignUp}/>

        </Form>

      </Page>
 
    </Container>
  )
}

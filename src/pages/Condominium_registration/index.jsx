import { Container, Form,InputContainer,Header, Page} from "./styles";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api"; 

export function CondominiumRegistration(){
  const [nome,setNome] = useState("")
  const [quantideImoveis, setQuantidadeImoveis] = useState(0)
  const [amenidades, setAmenidades] = useState("")
  const [usa_taxa, setTaxa] = useState(0)
  const [anoConstrução, setAnoConstrução] = useState(0)
  const [status, setStatus] = useState("")
  const [rua, setRua] = useState("")
  const [recebe_numero, setNumero] = useState(0)
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [cep, setCep] = useState("")
  
  function handleSignUp(){
    if (!quantideImoveis || !nome || !amenidades || !usa_taxa || !anoConstrução || !status || !rua || !recebe_numero || !cidade || !estado || !cep ){
      return (alert("Preencha todos os campos"))
    }

    const quantidade_imoveis = Number(quantideImoveis)
    const taxa = Number(usa_taxa)
    const ano_construcao = Number(anoConstrução)
    const numero = Number(recebe_numero)

    api.post("/condominio/cadastrar", {quantidade_imoveis, taxa,ano_construcao,numero, nome, amenidades,status, rua, cidade, estado, cep})
    .then(() => {
      alert("Condomínio cadastrado")
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
          <h1>Cadastro de Condomínio</h1>
          <p>Preencha o formulário abaixo para cadastrar um novo condomínio</p>
        </Header>
        <Form>
          
         
          <legend>Informações Gerais</legend>
          <InputContainer>
            <div className="wrapper">
            
              <Label htlmFor={"name"}>Nome</Label>
              <Input 
                width={"30rem"}
                placeholder = "nome do condomínio"
                type = "text"
                id = "name"
                onChange = {e => setNome(e.target.value)}
              />
            </div>
            <div >
              <Label htlmFor={"last_name"}>Quantidade de Imóveis</Label>
                <Input 
                  width={"30rem"}
                  placeholder = "Quantos imóveis?"
                  type = "text"
                  onChange = {e => setQuantidadeImoveis(e.target.value)}
                  />
            </div>
          </InputContainer>
          <InputContainer>
            <div className="wrapper">
            
              <Label htlmFor={"tax"}>Taxa</Label>
              <Input 
                width={"30rem"}
                placeholder = "20%"
                type = "text"
                id = "tax"
                onChange = {e => setTaxa(e.target.value)}
              />
            </div>
            <div >
              <Label htlmFor={"last_name"}>Ano de Construção</Label>
                <Input 
                  width={"30rem"}
                  type = "number"
                  onChange = {e => setAnoConstrução(e.target.value)}
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

          <div className="amenidades">
          <Label htlmFor={"amenidades"}>Amenidades</Label>
          <textarea name="amenidades" id="amenidades"  onChange = {e => setAmenidades(e.target.value)}></textarea>
          </div>
          <legend>Informações de Endereço</legend>
          <InputContainer>
            <div className="wrapper">
            
              <Label htlmFor={"rua"}>Estado</Label>
              <Input 
                width={"30rem"}
                placeholder = "Maranhão"
                type = "text"
                id = "name"
                onChange = {e => setEstado(e.target.value)}
              />
            </div>
            <div >
              <Label htlmFor={"City"}>Cidade</Label>
                <Input 
                  width={"30rem"}
                  placeholder = "São Luis"
                  type = "text"
                  onChange = {e => setCidade(e.target.value)}
                  />
            </div>
          </InputContainer>
          <InputContainer>
            <div className="wrapper">
            
              <Label htlmFor={"Rua"}>Rua</Label>
              <Input 
                width={"30rem"}
                placeholder = "Rua das Oliveiras"
                type = "text"
                id = "name"
                onChange = {e => setRua(e.target.value)}
              />
            </div>
            <div >
              <Label htlmFor={"last_name"}>Número da Casa</Label>
                <Input 
                  width={"30rem"}
                  placeholder = "203"
                  type = "number"
                  onChange = {e => setNumero(e.target.value)}
                  />
            </div>
          </InputContainer>
          <Label htlmFor={"status"}>CEP</Label>
              <Input 
                width={"62.2rem"}
                placeholder = "65213-000"
                type = "text"
                id = "CEP"
                onChange = {e => setCep(e.target.value)}
          
          />
          <Button title={"Cadastrar"} onClick = {handleSignUp}/>
        </Form>
      </Page>
 
    </Container>
  )
}
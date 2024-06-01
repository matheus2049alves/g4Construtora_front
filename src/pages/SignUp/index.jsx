import { Container,Form,InputContainer,Select, Header } from "./styles";
import { Input } from "../../components/Input";
import {FiMail,FiLock} from "react-icons/fi"
import { Button } from "../../components/Button";
import { Label } from "../../components/Label";
import { IoIosArrowDown } from "react-icons/io"

export function SignUp(){
  return(
    <Container>

      <Header>
        <h1>G4 Construtora</h1>
        <p>Construa sua vida com a gente</p>
      </Header>
    <div>
      <Form>
        
        <h2>Crie Sua Conta</h2>

        <InputContainer>
          <div className="wrapper">
          
            <Label htlmFor={"name"}>Nome</Label>
            <Input 
              width={"23.15rem"}
              placeholder = "seu primeiro nome"
              type = "text"
              id = "name"
            />
          </div>
          <div >
            <Label htlmFor={"last_name"}>Sobrenome</Label>
              <Input 
                width={"23.15rem"}
                placeholder = "Sobrenome"
                type = "text"
                />
          </div>
        </InputContainer>

        <InputContainer>

          <div>
            <Label htlmFor={"CPF"}>CPF</Label>
            <Input 
              width={"23.15rem"}
              placeholder = "000.000.000-00"
              type = "tel"
              id = "CPF"
            />
          </div>

          <div>
            <Label htlmFor={""}>N° de Filhos</Label>
            <Input 
              width={"23.15rem"}
              placeholder = "Quantos filhos você tem?"
              type = "text"
            />
          </div>
        </InputContainer>

        <InputContainer>
          <div>
            <Label htlmFor={""}>Estado Civil</Label>
            <Select id="estadoCivil" name="estadoCivil">
              <option value="solteiro">Solteiro(a)</option>
              <option value="casado">Casado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
            </Select>
          
          </div>

          <div>
            <Label htlmFor={""}>Renda</Label>
            <Input 
              width={"23.15rem"}
                placeholder = "Renda"
                type = "text"
            />
          </div>
          </InputContainer>
          {/* <div>
            <Label htlmFor={""}>E-mail</Label>

            <Input
            width={"47.8rem"}
              placeholder = "E-mail"
              type = "text"
              icon={FiMail}
            />
          </div> */}
          <div>
            <Label htlmFor={""}>Senha</Label>
              <Input
                width={"47.8rem"}
                placeholder = "Senha"
                type = "password"
                icon={FiLock}    
            />

          </div>

            
        <Button title={"Cadastrar"}/>
        
        </Form>
      </div>
    </Container>
  )

}
import { Container, Form, Background } from './styles';
import { FiMail, FiLock} from 'react-icons/fi';
import { useAuth, } from '../../hook/auth';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';

export function SignIn () {
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  
  function handleSignIn(){
    signIn({cpf,password})
  }
  
  const {signIn} = useAuth()
  return (
    <Container>
      <Form>

        <h1>G4 Construtora</h1>
        <p>Construa sua vida com a gente</p>

        <h2>Faça seu Login</h2>

        
        <Label htmlFor={"CPF"} className="label">CPF</Label>
        
        <Input
          placeholder="CPF"
          width={"47.8rem"}
          type="text"
          icon={FiMail}
          id="CPF"
          onChange = {e => setCpf(e.target.value)}
  
        />

        <Label htmlFor={"password"} className="label">Senha</Label>

        <Input
          placeholder="Senha"
          width={"47.8rem"}
          type="password"
          icon={FiLock}
          onChange = {e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick = {handleSignIn}/>

        <a href="/">
          Criar Conta
        </a>

      </Form>

      <Background/>
      
    </Container>
  )
}

import { Container, Form, Background } from './styles';
import { FiMail, FiLock} from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';

export function SignIn () {
  return (
    <Container>
      <Form>

        <h1>G4 Construtora</h1>
        <p>Construa sua vida com a gente</p>

        <h2>Faça seu Login</h2>

        
        <Label htmlFor={"email"} className="label">E-Mail</Label>
        
        <Input
          placeholder="E-mail"
          width={"47.8rem"}
          type="text"
          icon={FiMail}
          id="email"
        />

        <Label htmlFor={"email"} className="label">Senha</Label>

        <Input
          placeholder="Senha"
          width={"47.8rem"}
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <a href="/">
          Criar Conta
        </a>

      </Form>

      <Background/>
      
    </Container>
  )
}

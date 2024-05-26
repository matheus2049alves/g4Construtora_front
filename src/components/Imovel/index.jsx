import { Container } from './styles';

import { Status } from '../../components/Status';

export function Imovel ({ data, ...rest}) {
  return (
    <Container {...rest}>
      <div className='titulo'>

        <h1>ID : {data.id}</h1>
        <p>{data.descricao}</p>

      </div>
      
      <div className='endereco'>
        <p> {data.endereco.cidade} , {data.endereco.cep}</p>
        <p> {data.endereco.rua} , {data.endereco.bairro}</p>
      </div>

      { 
        data.status &&
          <footer>
            <Status title={data.status} sold={data.status === "vendido" ? true : false }/>
          </footer>
      }

    </Container>
  )
}

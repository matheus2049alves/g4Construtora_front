import { Container} from './styles';

export function Employee({ data, ...rest }) {
  return (
    <Container {...rest}>
      <div className='titulo'>

        <h1>{data.nome}</h1>
        <h2>ID : {data.id}</h2>
        <h3>Tempo de contrato: {data.tempocontrato}</h3>
        <p>{data.descricao}</p>

      </div>

      <div className='endereco'>
        <p> {data.endereco.cidade} , {data.endereco.cep}</p>
        <p> {data.endereco.rua} , {data.endereco.bairro}</p>
      </div>

      <footer>
        <span>{data.cargo}</span>
      </footer>

    </Container>
  )
}

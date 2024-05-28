import { Container } from './styles';

import { Status } from '../../components/Status';

export function Sale ({ data, ...rest}) {
  return (
    <Container {...rest}>
      <div className='titulo'>

        <h1>ID : {data.id}</h1>
        <p>{data.descricao}</p>

      </div>
      
      { 
        data.status &&
          <footer>
            <Status title={data.status} sold={String(data.status).toLocaleLowerCase() === "concluido" ? true : false }/>
          </footer>
      }

    </Container>
  )
}

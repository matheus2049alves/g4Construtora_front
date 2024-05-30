import { Container, StatusDesign } from './styles';
import { Status } from '../../components/Status';
export function Sale({ data, ...rest }) {
  return (
    <Container {...rest}>
      <div className='titulo'>

        <h1>ID : {data.id}</h1>
        <p>{data.descricao}</p>

      </div>

      {
        data.status &&
        <footer>

          {   String(data.status).toLocaleLowerCase() == "interrompido" ? <Status title={data.status} sold={false}/>  :  <StatusSale title={data.status} sold={String(data.status).toLocaleLowerCase() === "concluida" ? true : false}/>
          }
           
        </footer>
      }

    </Container>
  )
}

function StatusSale ( { title, sold, ...rest}) {
  return (
    <StatusDesign {...rest}>
      <div className={sold ? "status-green" : "status-orange"}>
        {title}
      </div>
    </StatusDesign>
  )
}

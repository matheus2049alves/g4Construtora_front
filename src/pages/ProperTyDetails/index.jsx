import { Container,Details, AboutProperty} from "./styles";
import { Button } from "../../components/Button";
import {Header} from "../../components/Header"

export function PropertyDetails(){
  return(
    <Container>
      <Header/>
      <Details>
        <img 
        src="https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt="foto da propriedade" 
         />

         <div className="NameInformation">
          <p>São Luis</p>
          <h2>Limoeiro Verde</h2>
         </div>

        <div className="PurchaseBox">
          <p>Ficou interpresado?</p>
          <Button title={" Solicitar Compra"}/>
        </div>

        <AboutProperty>
          <h2>Detalhes do imóvel</h2>
          <dl>
            <dt>Nome do condomínio</dt>
            <dd>Vila Sésamo</dd>
            <dt>Tipo de imóvel</dt>
            <dd>Casa</dd>
            <dt>Área do imóvel</dt>
            <dd>500 x 600</dd>
            <dt>Estado do imóvel</dt>
            <dd>Novo</dd>
            <dt>Número de quartos</dt>
            <dd>4</dd>
            <dt>Número de banheiros</dt>
            <dd>2</dd>
          </dl>

        </AboutProperty>
      </Details>
    </Container>
  )
}
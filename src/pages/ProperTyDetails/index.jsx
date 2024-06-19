import { Container,Details, AboutProperty} from "./styles";
import { Button } from "../../components/Button";
import {Header} from "../../components/Header"
import { useParams } from "react-router-dom";
import { useEffect , useState} from "react";
import { api } from "../../services/api";
import { MdBathroom } from "react-icons/md";

export function PropertyDetails(){
  const {id} = useParams()
  const [property, setProperty] = useState("");

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await api.get(`/imovel/buscar/${id}`);
        const {imovel} = response.data
        setProperty(imovel)
      } catch (error) {
        if (error){
          alert(error.response.data.message)
        }
        console.error("Erro ao buscar imóveis:", error);
      }
    }

    
  
    fetchProperties(); 
  }, [id]); 
  console.log(property)
  

  return(
    <Container>
      <Header/>
      <Details>
        <img 
        src="https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt="foto da propriedade" 
         />

         <div className="NameInformation">
          <p>{property.cidade}</p>
          <h2>{property.nome}</h2>
         </div>

        <div className="PurchaseBox">
          <p>Ficou interpresado?</p>
          <Button title={" Solicitar Compra"}/>
        </div>

        <AboutProperty>
          <h2>Detalhes do imóvel</h2>
          <dl>
            <dt>Nome do condomínio</dt>
            <dd>{property.nome}</dd>
            <dt>Tipo de imóvel</dt>
            <dd>{property.tipo}</dd>
            <dt>Área do imóvel</dt>
          <dd>{`${property.area_total} m²`}</dd>
            <dt>Estado do imóvel</dt>
            <dd>{property.imovel_estado}</dd>
            <dt>Número de quartos</dt>
            <dd>{property.num_quartos}</dd>
            <dt>Número de banheiros {<MdBathroom/>}</dt>
            <dd>{property.num_banheiros}</dd>
          </dl>

        </AboutProperty>
      </Details>
    </Container>
  )
}
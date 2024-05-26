import { Container, Filter } from "./styles";
import { PropertyCard } from "../../components/PropertyCard";
import {Header} from "../../components/Header";

export function ClientHome() {
  return (
    <Container>
      <Header/>
      <Filter/>
    </Container>
  )
}
import { PropertyCard } from "../../components/PropertyCard";
import { Container } from "./styles";

export function ClientHome() {
  return (
    <Container>
      <PropertyCard
      img={"https://cdn.architecturendesign.net/wp-content/uploads/2014/09/1-red-accent-decor.jpeg" }
      title={"Apartamento Alpha Vile, Enzo House"}
      price={"R$ 1.000,00"}
      description={"2 quartos, vista pro mar"}
      />
    </Container>
  )
}
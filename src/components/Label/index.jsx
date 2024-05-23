import { Container } from "./styles";

export function Label ({htlmFor,children}){
  return(
    <Container>
      <label htmlFor= {htlmFor}>
        {children}
      </label>
    </Container>
  )
}
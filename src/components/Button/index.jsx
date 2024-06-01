import { Container } from "./styles";

export function Button({title, label, ...rest}) {
 return (
  <Container type = "button" {...rest}>
    {title}
  </Container>
 ) 
}
import { Container } from "./styles";

export function Status ( { title, sold, ...rest}) {
  return (
    <Container {...rest}>
      <div className={sold ? "vendido" : "disponivel"}>
        {title}
      </div>
    </Container>
  )
}

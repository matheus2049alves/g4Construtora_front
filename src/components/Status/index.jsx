import { Container } from "./styles";

export function Status ( { title, sold, ...rest}) {
  return (
    <Container {...rest}>
      <div className={sold ? "status-red" : "status-green"}>
        {title}
      </div>
    </Container>
  )
}

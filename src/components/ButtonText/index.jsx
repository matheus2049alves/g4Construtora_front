import { Container } from './styles'

export function ButtonText ({title, isActive = false , onClick, ...rest}) {
  return (
    <Container 
      type="button"
      $isactive={isActive.toString()}
      onClick={onClick}
      {...rest}
    >
      { title }
    </Container>
  )
}

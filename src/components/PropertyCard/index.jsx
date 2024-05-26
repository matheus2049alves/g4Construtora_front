import {Container, Image, AboutProperty} from "./styles"

export function PropertyCard({img,price,title,description}){
  return(
    <Container>
     <Image src={img} alt={title} />
     <AboutProperty>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{price}</span>
      
     </AboutProperty>
    </Container>
  )
}
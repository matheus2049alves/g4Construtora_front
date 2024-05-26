import styled from "styled-components";
import background from "../../assets/background_filter.jpg"


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem 34.5rem auto 20rem;
  grid-template-areas:  
  "header" "filter" "content" "footer" ;
`

export const Filter = styled.div`
  grid-area: filter;
  background: url(${background}) no-repeat center center;
  background-size: cover;



`
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

export const Slider = styled.div`
  grid-area: content;
  width: 105.2rem;
  margin:0 auto ;
  padding: 5rem 0;

  > div {
    text-align: center;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.COLORS.TITLE_100};
  }

`







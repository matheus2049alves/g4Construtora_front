import styled from "styled-components";

export const Container = styled.span`

  font-size: 1.2rem;
  margin-right: 0.6rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  .vendido {
    width: 100%;
    padding: 0.5rem 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.ORANGE };
    border-radius: 0.5rem;
  }
   
  .disponivel {
    width: 100%;
    padding: 0.5rem 1.4rem;
    background-color: green;
    border-radius: 0.5rem;
  }

`;


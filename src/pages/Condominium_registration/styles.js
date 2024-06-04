import styled from "styled-components";
import Background from "../../assets/background.jpeg"

export const Container = styled.div`
  &::before {
    content: "";
    background: ${({ theme }) => theme.COLORS.GRAY_300};;
    display: block;
    width: 100%;
    height: 43.6rem;
    position: absolute;
   z-index: -1;
  }
   
`
export const Page = styled.div`
  width: 75rem;
  margin: 0 auto 30rem;
  padding-top: 13rem;
  margin-bottom: 30rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  min-height: 40rem;
  border-radius: 20px 20px 20px 20px;
  background: #FFF;
  padding: 6.4rem; 
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};
  
  >legend {
    color: ${({theme}) => theme.COLORS.TITLE_100};
    font-size: 2.4rem;
    line-height: 3.4rem;
    width: 100%;
    border-bottom: 1px solid #E6E6F0;
    padding-bottom: 1.6rem;
  }

  .amenidades {
    width: 100%;

    textarea {
      width: 100%;
      min-height: 150px; 
      border: 1px solid #ccc; 
      border-radius: .4rem;   
      resize: vertical;      
      font-size: 1.6rem;     
      padding: 1rem;
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};

      &:focus {
      outline: none;         
      border-color: #007bff;
     
    }
  }
  }
  
  

  >h2 {
    font-size: 24px;
    margin: 48px 0;
    margin-bottom: 24px;
    color: ${({theme}) => theme.COLORS.TITLE_200};
    text-align: center;
  }

  >a {
    margin-top: 50px;
  
  }

`

export const InputContainer = styled.div`
  display: flex;
  gap: 2.2rem;
  margin-bottom: 1.5rem;

`

export const Header = styled.header`
 
  
  >h1 {
    font-size: 3.5rem;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  >p {

  font-size: 2rem;
  color: ${({theme}) => theme.COLORS.BACKGROUND_200};
  line-height: normal;
  max-width: 41.7rem;
  margin-bottom: 5.8rem;
  }
`

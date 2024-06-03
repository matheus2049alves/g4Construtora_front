import styled from "styled-components";
import Background from "../../assets/background.jpeg"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-bottom: 30rem;

    >div {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;

      
    }
   

`

export const Form = styled.form`
  width: 75rem;
  height: 110rem;
  margin-top: 2.5rem;
  justify-content: center;
  border-radius: 20px 20px 20px 20px;
  background: #FFF;
  padding: 6.4rem;
  
  >textarea {
    width: 50rem;
    height: 15rem;
    padding: .5rem;
    margin-bottom: 2rem;
  }

  >legend {
    color: ${({theme}) => theme.COLORS.TITLE_200};
    margin-bottom: 1rem;
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
  gap: 3.3rem;
  margin-bottom: 1.5rem;

`

export const BackgroundImg = styled.div`
  flex : 1;
  background: url(${Background}) no-repeat center center;
  background-size: cover;
`

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 20px;
  z-index: 10; 
  align-items: center;
  text-align: center;
  
  >h1 {
    font-size: 3.5rem;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  >p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.BACKGROUND_200}
  }
`

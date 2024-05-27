import styled from "styled-components";
import Background from "../../assets/background.jpeg"

export const Container = styled.div`
    width: 75rem;
    margin: 0 auto 20rem;
    padding-top: 5rem;

`

export const Form = styled.form`
  margin-top: 2.5rem;
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  

  >h2 {
    font-size: 24px;
    margin: 48px 0;
    margin-bottom: 24px;
    color: ${({theme}) => theme.COLORS.TITLE_200};
  }

  >a {
    margin-top: 50px;
  
  }

`

export const InputContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

`

export const BackgroundImg = styled.div`
  flex : 1;
  background: url(${Background}) no-repeat center center;
  background-size: cover;
`

export const Select = styled.select`
  width: 23.15rem;
  height: 5.6rem;
  padding: 1.6rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  color: ${({ theme }) => theme.COLORS.TEXT_200};
  border: none;
  border-radius: 1rem;
  margin-bottom: .8rem;
  background-image: url();

`;


export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
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











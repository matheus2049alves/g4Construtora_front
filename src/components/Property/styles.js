import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 1rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;

  .titulo {

    h1 {
      flex: 1;
      text-align: left;
      font-weight: 700;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.TITLE_100};
    }
  
    p {
      width: 40%;
      margin-top: 1.2rem;
  
      text-align: left;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.TEXT};
    }
  }

  .endereco {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-top: 1.2rem;

    p {
      text-align: left;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.TITLE_100};
    }
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`;

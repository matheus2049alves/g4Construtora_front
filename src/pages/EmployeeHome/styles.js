import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 6.5rem 12.8rem 12.8rem auto 6.4rem;
  grid-template-areas:
  "brand header"
  "menu search"
  "menu label"
  "menu content"
  "create content"
  ;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
`;

export const Header = styled.header`

  grid-area: header;

  height: 6.5rem;
  width: 100%;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
 

  display: flex;
  justify-content: right;
  align-items: center;

  padding: 0 8rem;

`;
 
export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.TITLE_100};
    font-size: 3.6rem;
  }
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};

  > h2 {
    font-size: 5rem;
    color: ${({ theme }) => theme.COLORS.TITLE_100};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding-top: 16rem;
  text-align: center;

  > li {
    margin-bottom: 2.4rem;
  }

`;

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem 6.4rem 0;
`;

export const Label = styled.section`
  grid-area: label;

  margin: 2.8rem 0;
  padding: 0 6.4rem;

  h2 {
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 1.6rem;
    margin-bottom: 2.8rem;

    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: 2.0rem;
    font-weight:  400;
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 6.4rem;
  overflow-y: auto;
`;

export const Create = styled.button`
  grid-area: create;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200 };
  color: ${({ theme }) => theme.COLORS.BACKGROUND_TEXT};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius:0 0.5rem 0 0;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.8rem;
  }
`;


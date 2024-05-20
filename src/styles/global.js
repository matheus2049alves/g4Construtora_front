import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.Colors.WHITE};
  -webkit-font-smoothing : antialised
 }
 body, button, textarea,input {
  font-family: "Oswald", sans-serif;
  font-size: 16px;
  outline: none;

 }

 a {
  text-decoration: none;
 }

 a, button {
  cursor: pointer;
 transition: filter 0.2s;
 }

 a:hover, button:hover {
  filter: brightness(0.9);
 }
`
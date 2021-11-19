import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline:0
}
 :root{
    --coral: #c6878f;
    --yellow: #b79d94;
    --green: #969696;
    --cinza: #67697c;
    --blue: #253d5b;
 }

 body{
     background: var(--yellow);
     color: var(--green);
 }

 body,input,button{
     font-family: "Lato", serif;
     font-size: 1rem;
 }

 h1,h2,h3,h4,h5,h6{
     font-family: "M PLUS 1",serif;
     font-weigth:600;
 }
 
 button{
     cursor:pointer; 
 }

 a{
     text-decoration: none;
 }
`;

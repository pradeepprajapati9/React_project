import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
 }
 
 html{
        scroll-behavior: smooth;
        font-size: 62.5%;
        overflow-x: hidden;
 }
 
 h1{
    font-size: 4.5rem;
    font-weight:900;
    color:${({ theme }) => theme.colors.heading};
    white-space:normal;
    text-align:center;
 }
 
 h2{
    font-size: 4.4rem;
    font-weight:300;
    color:${({ theme }) => theme.colors.heading};
    white-space:normal;
    text-align:center;
 }

 h3{
    font-size: 1.8rem;
    font-weight:400;
 }

 p{
    font-size: 1.65rem;
    font-weight:400;
    opacity:7;
    line-height: 1.5rem;
    margin-top:1rem;
    color:${({ theme }) => theme.colors.heading};
    white-space:normal;
    text-align:center;
}

a{
    text-decoration:none;
}
li{
    list-style:none;
}

.container{
   max-width:120rem;
   margint:0 auto;
}
.grid{
   display:grid;
   gap:9rem;
}

.grid-tow-column{
   grid-template-columns:repeat(2,1fr);
   margin:0 auto;
   padding:1.4rem;
}

.grid-three-column{
   grid-template-columns:repeat(3,1fr);
}
.grid-four-column{
   grid-template-columns:1fr 1.2fr .5fr .8fr;
}

 `;


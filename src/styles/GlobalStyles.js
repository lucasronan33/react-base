import {
    primaryColor,
    primaryDarkColor,
    errorColor,
    infoColor,
    warningColor
} from "../config/colors";

import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    font-family: sans-serif;
    background-color: ${primaryDarkColor};
    color: ${primaryColor};
}
html,border-style,#root{
    height: 100%;
}
button{
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    padding: 10px 20px;
    color: #fff;
    border-radius: 4px;
    font-weight: 700;
}
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
`

export const Container = styled.section`
max-width: 360px;
margin: 30px auto;
background-color: #fff;
padding: 30px;
border-radius: 4px;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
`
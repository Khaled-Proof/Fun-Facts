import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/mailchimp-6kajEqr84iY-unsplash.jpg';
// @ts-ignore

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: Black;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 90px;
    text-align: center;
    margin: 20px;
  }
  .button{
    cursor: pointer;
    background: linear-gradient(45deg, red 0 50%, blue 50% 100%);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 20px;
    margin: 10px 0;
    padding: 0 40px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
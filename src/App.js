import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="App">Hello Pizza</div>
        </>
    );
}

export default App;

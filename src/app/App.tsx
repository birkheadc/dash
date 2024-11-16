// import * as React from 'react';

import { BrowserRouter } from "react-router-dom";
import PageContainer from "../components/common/PageContainer/PageContainer";
import { ContextProviders } from "../contexts/ContextProviders/ContextProviders";

function App() {
  return (
    <ContextProviders>
      <BrowserRouter>
        <PageContainer></PageContainer>
      </BrowserRouter>
    </ContextProviders>
  );
}

export default App;

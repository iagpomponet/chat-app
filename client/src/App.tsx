import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import theme from "./theme/theme";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;

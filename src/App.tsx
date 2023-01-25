import Home from "./pages/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";

function App(){
  return(
    <>
      <ApolloProvider client={client}>
        <Home/>
      </ApolloProvider>
    </>
  )
}
export default App;
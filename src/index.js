// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

// create httpLink that will connect to ApolloClient instance with the GraphQL API
const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

// instantiate ApolloClient by passing in the httpLink and a new instance of an InMemoryCache
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

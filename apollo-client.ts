import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ieadmin.eng.cmu.ac.th/graphql",
  cache: new InMemoryCache(),
});

export default client;

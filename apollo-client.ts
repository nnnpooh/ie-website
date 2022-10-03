import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://10.10.12.140:81/?graphql=true",
  cache: new InMemoryCache(),
});

export default client;

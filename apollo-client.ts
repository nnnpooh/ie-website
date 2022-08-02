import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://35.213.138.100/graphql",
    cache: new InMemoryCache(),
});

export default client;
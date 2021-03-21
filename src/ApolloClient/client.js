import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io', // Coinbase GraphQL API
    cache: new InMemoryCache()
});


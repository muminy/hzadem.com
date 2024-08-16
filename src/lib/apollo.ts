import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://hzadem.codejs.dev/graphql",
  cache: new InMemoryCache(),
})

export default client

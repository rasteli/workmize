import {
  InMemoryCache,
  ApolloClient,
  gql,
  createHttpLink
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: "https://hiring-api.workmize.com/graphql"
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("@workmize:token")

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
      withCredentials: token ? true : false,
      "Access-Control-Allow-Credentials": token ? true : false
    }
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  typeDefs: gql`
    enum Roles {
      ADMIN
      MEMBER
    }
  `
})

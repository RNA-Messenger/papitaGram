import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  concat,
  HttpLink,
  createHttpLink,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import { App } from "./App";
import { AppProvider } from "./context/AppContext";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  const authorization = token ? `bearer ${token}` : "";
  operation.setContext({
    headers: {
      authorization,
    },
  });
  return forward(operation);
});
// const authLink = setContext((_, { headers }) => {
//   const token = window.sessionStorage.getItem("token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const httpLink = new HttpLink({
//   uri: "https://papitaGram-api.vercel.app/graphql",
// });

const httpLink = createHttpLink({
  uri: "https://papitaGram-api.vercel.app/graphql",
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: (error) => {
    console.log(cache);
    const { networkError } = error;
    if (networkError && networkError.result.code === "invalid_token") {
      // window.sessionStorage.removeItem("token");
      window.location.href = "/user";
    }
  },
});

console.log(window.sessionStorage.getItem("token"));

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById("app")
);

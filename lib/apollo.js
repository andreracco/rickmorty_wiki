// import { withData } from 'next-apollo'
// import { HttpLink } from 'apollo-boost'

// const config = {
// 	link: new HttpLink({
// 		uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn'
// 	})
// }

// export default withData(config)

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql'

const link = createHttpLink({
	fetch, // Switches between unfetch & node-fetch for client & server.
	uri: GRAPHQL_URL
})

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
	// You can get headers and ctx (context) from the callback params
	// e.g. ({ headers, ctx, initialState })
	({ initialState }) =>
		new ApolloClient({
			link: link,
			cache: new InMemoryCache()
				//  rehydrate the cache using the initial data passed from the server:
				.restore(initialState || {})
		})
)

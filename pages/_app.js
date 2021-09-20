import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import withData from '../lib/apollo';

import {
	CharacterProvider
} from '../components/CharacterContext';

class MyApp extends App {
	render() {
		const { Component, pageProps, apollo } = this.props;
		return (
			<ApolloProvider client={apollo}>
				<CharacterProvider>
					<Component {...pageProps} />
				</CharacterProvider>
			</ApolloProvider>
		);
	}
}

export default withData(MyApp);

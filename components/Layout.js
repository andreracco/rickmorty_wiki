import Head from 'next/head'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from '../common/style/theme'
import { Container } from './Container'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout = props => (
	<ThemeProvider theme={customTheme}>
		<CSSReset />
		<Head>
			<title>Rick and Morty Wiki</title>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<meta charSet='utf-8' />
		</Head>

		<Header>Rick&Morty Wiki</Header>

		<Container>
			{props.children}
		</Container>

		<Footer> created by andre.racco </Footer>
	</ThemeProvider>
)

export default Layout

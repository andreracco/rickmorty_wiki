import { Flex, Heading } from '@chakra-ui/core'

export const Header = props => (
	<Flex align='center' justify='center' py={['2.2rem', '3rem']} bg='gray.50' {...props}>
		<Heading size={['md', 'lg']} fontSize={['32px', '40px']} color='tomato'>
			{props.children}
		</Heading>
	</Flex>
)
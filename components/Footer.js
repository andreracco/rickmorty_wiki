import { Flex, Heading } from '@chakra-ui/core'

export const Footer = props => (
	<Flex
		align='center'
		justify='center'
		as='footer'
		py='2rem'
		bg='gray.50'
		{...props}
		width='100vw'
	>
		<Heading
			size={['sm', 'md']}
			mt={5}
			fontWeight='medium'
			fontSize={12}
			rounded={8}
			py={2}
			px={5}
			bg='gray.100'
			color='gray.400'
		>
			{props.children}
		</Heading>
	</Flex>
)

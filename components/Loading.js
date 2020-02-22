import { Flex, Spinner } from '@chakra-ui/core'

export const Loading = () => (
	<Flex height='60vh' alignItems='center' justifyItems='center'>
		<Spinner
			thickness='4px'
			speed='0.65s'
			emptyColor='gray.200'
			color='orange.500'
			size='xl'
		/>
	</Flex>
)

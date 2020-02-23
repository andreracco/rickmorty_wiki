import { IconButton, Box, Flex } from '@chakra-ui/core'
import { styles } from './styles'

const isDisabled = page => !page

export const Pagination = ({ previousButton, pageNumber, nextButton }) => (
	<Flex align='center' justify='center' size='100%'>
		<IconButton
			{...styles.iconButton}
			{...styles.left}
			onClick={previousButton.onClick}
			isDisabled={isDisabled(previousButton.page)}
		/>

		<Box rounded='md' bg='tomato' color='white' py={1} px={3} h={8}>
			{pageNumber}
		</Box>

		<IconButton
			{...styles.iconButton}
			{...styles.right}
			onClick={nextButton.onClick}
			isDisabled={isDisabled(nextButton.page)}
		/>
	</Flex>
)

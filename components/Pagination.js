import { IconButton, Box, Flex } from '@chakra-ui/core'

const isDisabled = page => !page
export const Pagination = ({previousButton, pageNumber, nextButton}) => (
	<Flex
				align='center'
				justify='center'
				size='100%'
				wrap='wrap'
				margin='auto'
			>
				
						<IconButton
							variant='text'
							color='tomato'
							aria-label='Previous'
							fontSize='20px'
							icon='chevron-left'
							onClick={previousButton.onClick}
							isDisabled={isDisabled(previousButton.page)}
						/>

						<Box
							rounded='md'
							bg='tomato'
							color='white'
							py={1}
							px={4}
							h={8}
						>
							{pageNumber}
						</Box>

						<IconButton
							variant='text'
							color='tomato'
							aria-label='Next'
							fontSize='20px'
							icon='chevron-right'
							onClick={nextButton.onClick}
							isDisabled={isDisabled(nextButton.page)}
							_focus={{ boxShadow: 'none' }}
						/>
			</Flex>
)
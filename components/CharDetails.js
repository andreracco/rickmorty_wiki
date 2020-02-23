import {
	Text,
	Icon,
	Box,
	Flex,
	Badge,
	PseudoBox,
	Divider
} from '@chakra-ui/core'

export const CharDetail = ({ char }) => (
	<PseudoBox
		bg='white'
		rounded='lg'
		overflow='hidden'
		margin={5}
		w={['80%', '96%']}
		h={['auto', 500]}
		boxShadow='0 -12px 20px 0 #E2E8F0'
		style={{
			backgroundImage: `linear-gradient(to bottom, #ffffff30 50%, #F7FAFC 100%)`
		}}
	>
		<Flex wrap='wrap' height='100%'>
			<Box
				h={[322, '100%']}
				w={['100%', '40%']}
				style={{
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundImage: `linear-gradient(to bottom, #ffffff30 60%, #F7FAFC 100%), url(${char.image})`
				}}
			/>
			<Flex w={['90%', '56%']} direction='column' m='auto' my={2}>
				<Flex wrap='wrap' p={1}>
					<Box
						mt='1'
						fontSize='xl'
						isTruncated
						fontWeight='semibold'
						color='gray.600'
						marginRight='auto'
					>
						{char.name}{' '}
						<Badge variantColor='blue'>{char.species}</Badge>
					</Box>

					{char.location && (
						<Text
							my='auto'
							fontWeight='semibold'
							align='right'
							fontSize='sm'
							isTruncated
							color='orange.600'
							alignSelf='flex-end'
							verticalAlign='top'
						>
							<Icon size='16px' name='at-sign' />{' '}
							{char.location.name}
						</Text>
					)}
				</Flex>
				<Divider borderColor='tomato' />
				<Text
					fontWeight='semibold'
					pl={1}
					color='orange.700'
					rounded={10}
					my={2}
				>
					EPISODES
				</Text>

				<Flex wrap='wrap'>
					{char.episode.map((ep, index) => (
						<Box
							key={index}
							align='center'
							fontSize='xs'
							rounded={8}
							color='orange.600'
							bg='orange.100'
							mr={2}
							mb={2}
							p={2}
						>
							{ep.name}
						</Box>
					))}
				</Flex>
			</Flex>
		</Flex>
	</PseudoBox>
)

import { AvatarBadge, Text, Avatar, Flex, PseudoBox } from '@chakra-ui/core'
import Link from 'next/link'

const colorStatus = { Dead: 'red', Alive: 'green', unknown: 'blue' }

const getColorByStatus = status => (
	<AvatarBadge
		border='2px solid white'
		size='0.9em'
		bg={`${colorStatus[status]}.100`}
	>
		<Text
			fontSize={11}
			fontWeight='semibold'
			color={`${colorStatus[status]}.700`}
		>
			{status === 'unknown' ? 'Unkn' : status}
		</Text>
	</AvatarBadge>
)

export const CharCard = ({ char }) => (
	<Link href='/details/[id]' as={`/details/${char.id}`}>
		<a>
			<PseudoBox
				cursor='pointer'
				maxW='sm'
				bg='white'
				borderWidth='1px'
				rounded='lg'
				overflow='hidden'
				pt={1}
				mx={3}
				my={4}
				w={150}
				h={170}
				transition='box-shadow 0.3s ease-in-out'
				boxShadow='0 0 10px 0 #CBD5E0'
				_hover={{
					borderColor: 'red.100',
					boxShadow: '0 0 20px 0 #FC8181'
				}}
			>
				{/* {getColorByStatus(char.status)} */}
				<Flex
					// direction='column'
					align='center'
					justify='center'
					wrap='wrap'
					m='auto'
					px={2}
					py={1}
					mt={1}
				>
					<Avatar size='xl' name={char.name} src={char.image}>
						{getColorByStatus(char.status)}
					</Avatar>

					<Flex
						direction='column'
						justifyItems='center'
						wrap='nowrap'
						// m='auto'
						py='10px'
						px='10px'
						minW='140px'
						maxW='140px'
					>
						<Text
							mt='1'
							fontSize='xs'
							isTruncated
							fontWeight='semibold'
							color='gray.700'
						>
							{char.name}
						</Text>
						<Text
							fontWeight='semibold'
							align='center'
							fontSize='xs'
							isTruncated
							color='orange.600'
						>
							{char.species}
						</Text>
					</Flex>
				</Flex>
			</PseudoBox>
		</a>
	</Link>
)

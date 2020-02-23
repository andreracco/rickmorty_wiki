import { AvatarBadge, Text, Avatar, Flex, PseudoBox } from '@chakra-ui/core'
import Link from 'next/link'

import { styles } from './styles'
const colorStatus = { Dead: 'red', Alive: 'green', unknown: 'blue' }

const getBadgeByStatus = status => (
	<AvatarBadge
		border='2px solid white'
		size='0.9em'
		bg={`${colorStatus[status]}.100`}
	>
		<Text
			fontSize={10}
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
			<PseudoBox {...styles.root}>
				<Flex justify='center' wrap='wrap' py={1} mt={1}>
					<Avatar size='xl' name={char.name} src={char.image}>
						{getBadgeByStatus(char.status)}
					</Avatar>

					<Flex direction='column' p={3} minW='140px'>
						<Text {...styles.text} isTruncated color='gray.600'>
							{char.name}
						</Text>
						<Text {...styles.text} isTruncated color='orange.600'>
							{char.species}
						</Text>
					</Flex>
				</Flex>
			</PseudoBox>
		</a>
	</Link>
)

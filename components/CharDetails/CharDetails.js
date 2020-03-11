import {
	Text,
	Icon,
	Box,
	Flex,
	Badge,
	PseudoBox,
	Divider
} from '@chakra-ui/core'

import { styles } from './styles'

export const CharDetail = ({ char }) => (
	<PseudoBox {...styles.root} rounded='lg'>
		<Flex wrap='wrap' height='100%'>
			<Box
				{...styles.image}
				style={{
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundImage: `linear-gradient(to bottom, #ffffff30 60%, #F7FAFC 100%), url(${char.image})`
				}}
			/>
			<Flex w={['90%', '46%']} direction='column' m='auto' my={2}>
				<Flex wrap='wrap' p={1}>
					<Box {...styles.title} isTruncated color='gray.600'>
						{char.name}{' '}
						<Badge variantColor='blue'>{char.species}</Badge>
					</Box>

					{char.location && (
						<Text
							{...styles.subTitle}
							isTruncated
							color='orange.600'
						>
							<Icon size='16px' name='at-sign' />{' '}
							{char.location.name}
						</Text>
					)}
				</Flex>
				<Divider borderColor='tomato' />
				<Text fontWeight='semibold' pl={1} color='orange.700' my={2}>
					EPISODES
				</Text>

				<Flex wrap='wrap'>
					{char.episode.map((ep, index) => (
						<Box
							key={index}
							{...styles.episode}
							rounded={8}
							color='orange.600'
							bg='orange.100'
						>
							{ep.name}
						</Box>
					))}
				</Flex>
			</Flex>
		</Flex>
	</PseudoBox>
)

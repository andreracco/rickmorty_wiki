import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Loading } from '../../../components/Loading'
import {
	Text,
	Icon,
	Button,
	Box,
	Flex,
	Badge,
	PseudoBox,
	Divider
} from '@chakra-ui/core'

import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import {GET_CHARACTER} from '../../../components/Query'
import Layout from '../../../components/Layout'



const Details = () => {

	const router = useRouter()
	const { id } = router.query

	const { loading, error, data } = useQuery(GET_CHARACTER, {
		variables: { id: id }
	})

	return (
		<Layout>
			{loading ? (
				<Loading />
			) : (
				<Flex
					align='center'
					justify='center'
					size='100%'
					maxW='1160px'
					maxH=''
					wrap='wrap'
					mx='auto'
					my={0}
				>
					{data && (
						<PseudoBox
							maxW='sm'
							bg='white'
							borderWidth='1px'
							rounded='lg'
							overflow='hidden'
							margin={5}
							w={['80%','96%']}
							h={['auto', 500]}
							minH={500}
							maxW='96vw'
							maxh='90vh'
							boxShadow='0 0 20px 0 #FC8181'
							borderColor='red.200'
						>
							<Flex wrap='wrap' height='100%'>
								<Box
									h={[320, '100%']}
									w={['100%', '40%']}
									style={{
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
										backgroundImage: `linear-gradient(to bottom, #ffffff30 50%, #fff 100%), url(${data.character.image})`
									}}
								/>
								<Flex w={['90%', '56%']} direction='column' m='auto' my={2}>
									<Flex wrap='wrap' p={1}>
										<Text
											mt='1'
											fontSize='xl'
											isTruncated
											fontWeight='semibold'
											color='gray.600'
											marginRight='auto'
										>
											{data.character.name} <Badge variantColor='blue'>{data.character.species}</Badge>
										</Text>

										{data.character.location && (
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
												<Icon size="16px" name='at-sign'/> {data.character.location.name}
											</Text>
										)}
									</Flex>
									<Divider borderColor='tomato' />
									<Text fontWeight='semibold' pl={1} color='orange.700' rounded={10} my={2}>EPISODES</Text>
									
									<Flex wrap='wrap'>
										
										{data.character.episode.map(ep => (
											<Box
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
					)}
				</Flex>
			)}
			<Button leftIcon='arrow-back' variantColor='orange' variant='ghost' _focus={{ boxShadow: 'none' }}>
				<Link href='/'>go back
				</Link>
			</Button>
		</Layout>
	)
}

export default Details

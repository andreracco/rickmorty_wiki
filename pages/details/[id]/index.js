import React from 'react'
import { useRouter } from 'next/router'
import { Loading } from '../../../components/Loading'
import { Button, Flex } from '@chakra-ui/core'

import { useQuery } from '@apollo/react-hooks'
import { GET_CHARACTER } from '../../../components/Query'
import Layout from '../../../components/Layout'
import { CharDetail } from '../../../components/CharDetails/CharDetails'

const Details = () => {
	const router = useRouter()
	const { id } = router.query

	const { loading, data } = useQuery(GET_CHARACTER, {
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
					{data && <CharDetail char={data.character} />}
				</Flex>
			)}
			<Button
				leftIcon='arrow-back'
				variantColor='orange'
				variant='ghost'
				mt='auto'
				_focus={{ boxShadow: 'none' }}
				onClick={() => router.back()}
			>
				go back
			</Button>
		</Layout>
	)
}

export default Details

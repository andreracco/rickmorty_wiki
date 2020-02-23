import React from 'react'
import { Flex } from '@chakra-ui/core'

export const Container = props => {
	return (
		<Flex
			direction='column'
			alignItems='center'
			justifyContent='flex-start'
			bg='gray.50'
			minH='72vh'
			{...props}
		/>
	)
}

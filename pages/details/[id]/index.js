import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { Loading } from '../../../components/Loading';
import { Button, Flex } from '@chakra-ui/core';
import Layout from '../../../components/Layout';
import { CharDetail } from '../../../components/CharDetails/CharDetails';
import { CharacterContext } from '../../../components/CharacterContext';
import { GET_CHARACTER } from '../../../components/Query';

const Details = (props) => {
	const router = useRouter();
	const { id } = router.query;

	const { state } = useContext(CharacterContext);

	const currentCharacter = state.characters.find(char => char.id === id);

	return (
		<Layout>
			{!currentCharacter ? (
				<Loading />
			) : (
				<Flex
					align='center'
					justify='center'
					size='100%'
					maxW='1160px'
					minH='72vh'
					wrap='wrap'
					mx='auto'
					my={0}
				>
					<CharDetail char={currentCharacter} />
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
	);
};

export default Details;

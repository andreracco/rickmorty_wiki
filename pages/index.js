import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/core';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout';
import { Loading } from '../components/Loading';
import { SelectFilter } from '../components/SelectFilter';
import { CharCard } from '../components/ChardCard/CharCard';
import { GET_CHARACTERS } from '../components/Query';
import { Pagination } from '../components/Pagination/Pagination';
import { useRouter } from 'next/router';
import { GENDER_LIST, SPECIES_LIST, STATUS_LIST } from '../common/constants'

const Home = () => {
	const router = useRouter();

	const [dataFilter, setDataFilter] = useState({
		gender: '',
		status: '',
		species: ''
	});

	const pageNumber = parseInt(router.query.page) || 1;

	const { loading, data } = useQuery(GET_CHARACTERS, {
		variables: { filter: dataFilter, page: pageNumber }
	});

	const goToPage = page => {
		router.push(`/?page=${page}`, `/${page}`);
	};

	const onChangeSelect = (event, type) => {
		setDataFilter({ ...dataFilter, [type]: event.target.value });
	};

	return (
		<Layout>
			<Flex
				align='center'
				justify='space-between'
				w='90%'
				maxW={600}
				wrap='nowrap'
			>
				<SelectFilter
					placeholder='All Genders'
					onChange={e => onChangeSelect(e, 'gender')}
					options={GENDER_LIST}
				/>
				<SelectFilter
					placeholder='All Status'
					onChange={e => onChangeSelect(e, 'status')}
					options={STATUS_LIST}
				/>
				<SelectFilter
					placeholder='All Species'
					onChange={e => onChangeSelect(e, 'species')}
					options={SPECIES_LIST}
				/>
			</Flex>

			<Flex
				justify='center'
				size='100%'
				maxW='1000px'
				minH={500}
				wrap='wrap'
				mx='auto'
				my={8}
			>
				{loading ? (
					<Loading />
				) : (
					data &&
					data.characters.results &&
					data.characters.results.map(char => (
						<CharCard key={char.id} char={char} />
					))
				)}
			</Flex>

			<Flex
				align='center'
				justify='center'
				size='100%'
				wrap='wrap'
				margin='auto'
			>
				{data && (
					<Pagination
						previousButton={{
							onClick: () => goToPage(data.characters.info.prev),
							page: data.characters.info.prev
						}}
						pageNumber={pageNumber}
						nextButton={{
							onClick: () => goToPage(data.characters.info.next),
							page: data.characters.info.next
						}}
					/>
				)}
			</Flex>
		</Layout>
	);
};

export default Home;

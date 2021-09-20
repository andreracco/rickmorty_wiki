import React, { useState, useEffect, useContext } from 'react';
import { Flex } from '@chakra-ui/core';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/Layout';
import { Loading } from '../components/Loading';
import { SelectFilter } from '../components/SelectFilter';
import { CharCard } from '../components/ChardCard/CharCard';
import { Pagination } from '../components/Pagination/Pagination';
import { useRouter } from 'next/router';
import { GENDER_LIST, SPECIES_LIST, STATUS_LIST } from '../common/constants';
import { CharacterContext } from '../components/CharacterContext';

const Home = props => {
	let { state, dispatch } = useContext(CharacterContext);

	const router = useRouter();

	const [dataFilter, setDataFilter] = useState({
		gender: '',
		status: '',
		species: ''
	});

	const pageNumber = parseInt(router.query.page) || 1;

	// const { loading, data } = useQuery(GET_CHARACTERS, {
	// 	variables: { filter: dataFilter, page: pageNumber },
	// 	onCompleted: () =>
	// 		dispatch({
	// 			type: 'LOADED'
	// 		})
	// });

	const goToPage = page => {
		dispatch({ type: 'IS_LOADING' });
		router.push(`/?page=${page}`, `/${page}`);
		pageChange(page);
	};

	const onChangeSelect = (event, type) => {
		dispatch({ type: 'IS_LOADING' });
		goToPage(1);
		setDataFilter({ ...dataFilter, [type]: event.target.value });
		filterData({ ...dataFilter, [type]: event.target.value });
	};

	const filterData = filter => dispatch({ type: 'FILTER', payload: filter });

	const pageChange = page => dispatch({ type: 'GOTO_PAGE', payload: page });
	// let dec = () => dispatch({ type: 'decrement' });
	// let reset = () => dispatch({ type: 'reset' });
	// let setColor = color => () =>
	// 	dispatch({ type: 'set-color', payload: color });

	// useEffect(() => {
	// 	dispatch({ type: 'LOAD_DATA', payload: data && data.characters });
	// }, [data]);

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
				{state.isLoading ? (
					<Loading />
				) : (
					state &&
					state.characters &&
					state.characters.map(char => (
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
				{state.info && (
					<Pagination
						previousButton={{
							onClick: () => goToPage(state.info.prev),
							page: state.info.prev
						}}
						pageNumber={pageNumber}
						nextButton={{
							onClick: () => goToPage(state.info.next),
							page: state.info.next
						}}
					/>
				)}
			</Flex>
		</Layout>
	);
};

export default Home;

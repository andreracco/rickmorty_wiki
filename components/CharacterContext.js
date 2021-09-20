import React, { useState, useEffect, createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';
import { GET_CHARACTERS } from '../components/Query';

// const GET_CHARACTERS = gql`
// 	query getCharacters($filter: FilterCharacter, $page: Int) {
// 		characters(filter: $filter, page: $page) {
// 			results {
// 				id
// 				name
// 				image
// 				status
// 				gender
// 				species
// 				episode {
// 					name
// 					air_date
// 				}
// 				location {
// 					name
// 					type
// 					dimension
// 				}
// 			}
// 			info {
// 				count
// 				pages
// 				prev
// 				next
// 			}
// 		}
// 	}
// `;

const CharacterContext = createContext();

const initialState = {
	characters: [],
	filter: { gender: '', status: '', species: '' },
	info: {},
	currentPage: 1,
	isLoading: true,
	currentCharacter: {}
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOAD_DATA':
			return {
				...state,
				characters: action.payload && action.payload.results,
				info: action.payload && action.payload.info,
				isLoading: false
			};
		case 'FILTER':
			return { ...state, filter: action.payload };
		case 'GOTO_PAGE':
			return { ...state, currentPage: action.payload };
		case 'IS_LOADING':
			return { ...state, isLoading: true };
		case 'LOADED':
			return { ...state, isLoading: false };
		// case 'SET_CURRENT_CHARACTER':
		// 	return { ...state, currentCharacter: action.payload };
	}
};

const CharacterProvider = props => {
	let [state, dispatch] = React.useReducer(reducer, initialState);
	let value = { state, dispatch };

	const [pageNumber, setPageNumber] = useState(1);

	const { loading, data } = useQuery(GET_CHARACTERS, {
		variables: { filter: state.filter, page: state.currentPage },
		onCompleted: () =>
			dispatch({
				type: 'LOAD_DATA',
				payload: data && data.characters
			})
	});

	// useEffect(() => {
	// 	dispatch({
	// 		type: 'LOAD_DATA',
	// 		payload: data && data.characters //&& data.characters.results
	// 	});
	// }, [data]);
	// const characters =
	// 	loading || !data.characters ? null : data.characters.results;

	return (
		<CharacterContext.Provider value={value}>
			{props.children}
		</CharacterContext.Provider>
	);
};

const CharacterConsumer = CharacterContext.Consumer;

export { CharacterContext, CharacterProvider, CharacterConsumer };

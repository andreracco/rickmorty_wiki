import { gql } from 'apollo-boost'

export const GET_CHARACTERS = gql`
	query getCharacters($filter: FilterCharacter, $page: Int) {
		characters(filter: $filter, page: $page) {
			results {
				id
				name
				image
				status
				gender
				species
				episode {
					name
					air_date
				}
				location {
					name
					type
					dimension
				}
			}
			info {
				count
				pages
				prev
				next
			}
		}
	}
`;

export const GET_CHARACTER = gql`
	query getCharacter($id: Int) {
		character(id: $id) {
			name
			gender
			status
			species
			image
			episode {
				name
				air_date
			}
			location {
				name
				type
				dimension
			}
		}
	}
`

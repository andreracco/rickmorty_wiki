import { Select } from '@chakra-ui/core'

export const SelectFilter = props => (
	<Select
		backgroundColor='tomato'
		borderColor='tomato'
		color='white'
		variant='outline'
		placeholder={props.placeholder}
		maxW={160}
		fontSize={[12, 16]}
		w={[100, 160]}
		onChange={props.onChange}
	>
		{props.options.map((gender, index) => (
			<option key={index} value={gender}>{gender}</option>
		))}
	</Select>
)

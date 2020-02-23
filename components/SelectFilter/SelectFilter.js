import { Select } from '@chakra-ui/core'
import { styles } from './styles'

export const SelectFilter = props => (
	<Select
		{...styles.root}
		placeholder={props.placeholder}
		onChange={props.onChange}
	>
		{props.options.map((gender, index) => (
			<option key={index} value={gender}>
				{gender}
			</option>
		))}
	</Select>
)

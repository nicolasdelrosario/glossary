import { Search } from 'lucide-react'

import styles from './styles.module.css'

interface ISearchProps {
	type?: string
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onClick: () => void
	onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
	placeholder?: string
}

export default function SearchInput({
	type = 'text',
	value,
	onChange,
	onClick,
	onKeyPress,
	placeholder,
}: ISearchProps) {
	return (
		<div className={styles.search}>
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				onKeyPress={onKeyPress}
			></input>

			<Search onClick={onClick} color='var(--background-images)' size={24} />
		</div>
	)
}

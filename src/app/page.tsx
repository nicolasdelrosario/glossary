'use client'

import { useEffect, useState } from 'react'
import { useDictionaryStore } from '@/stores/useDictionaryStore'
import { Search, Content } from '@/components'

export default function Page() {
	const query = useDictionaryStore(state => state.search)
	const definition = useDictionaryStore(state => state.definition)
	const setQuery = useDictionaryStore(state => state.setSearch)
	const setDefinition = useDictionaryStore(state => state.setDefinition)
	const [loading, setLoading] = useState(true)

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	const handleSearchClick = () => {
		if (query.length > 0) {
			setLoading(true)
			setDefinition(query).finally(() => setLoading(false))
		}
	}

	useEffect(() => {
		setDefinition('glossary').finally(() => setLoading(false))
	}, [])

	return (
		<>
			<Search
				value={query}
				placeholder='Search'
				onChange={handleSearch}
				onClick={handleSearchClick}
				onKeyPress={event => event.key === 'Enter' && handleSearchClick()}
			/>
			<Content loading={loading} definition={definition} />
		</>
	)
}

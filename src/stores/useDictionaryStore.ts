import { create } from 'zustand'
import { getDefinition } from '@/services/definition.service'
import { IWordData } from '@/types/word-data'

type Dictionary = {
	search: string
	setSearch: (search: string) => void
	definition: IWordData[]
	setDefinition: (word: string) => Promise<void>
}

export const useDictionaryStore = create<Dictionary>(set => ({
	search: '',
	setSearch: search => set({ search }),
	definition: [],
	setDefinition: async (word: string) => {
		set({ definition: [] })
		set({ search: '' })
		const definition = await getDefinition(word)
		set({ definition })
	},
}))

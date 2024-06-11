import { api } from './api'
import { IWordData } from '@/types/word-data'

export const getDefinition = async (word: string): Promise<IWordData[]> => {
	const { data } = await api.get(`/${word}`)
	return data
}

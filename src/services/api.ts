import axios from 'axios'

/**
 * Instancia de axios con la url base del dominio
 */
export const api = axios.create({
	baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
})

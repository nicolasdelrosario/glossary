export interface IPhonetic {
	text: string
	audio?: string
}

export interface IDefinition {
	definition: string
	example?: string
}

export interface IMeaning {
	partOfSpeech: string
	definitions: IDefinition[]
	synonyms: string[]
}

export interface IWordData {
	word: string
	phonetics: IPhonetic[]
	sourceUrls: string[]
	meanings: IMeaning[]
}

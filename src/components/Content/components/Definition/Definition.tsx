import { Source, Meaning } from '@/components/Content/components'
import { IWordData } from '@/types/word-data'

import styles from './styles.module.css'

interface IDefinitionProps {
	wordData: IWordData[]
}

export default function Definition({ wordData }: IDefinitionProps) {
	const { word, phonetics, sourceUrls, meanings } = wordData[0]
	return (
		<section className={styles.definition}>
			<h2>{word}</h2>
			<span>{phonetics[0]?.text}</span>

			{meanings.map(meaning => (
				<Meaning key={word} meaning={meaning} />
			))}

			<Source source={sourceUrls[0]} />
		</section>
	)
}

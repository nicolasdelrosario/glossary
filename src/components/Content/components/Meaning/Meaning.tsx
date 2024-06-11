import { IMeaning } from '@/types/word-data'

import styles from './styles.module.css'

interface IMeaningProps {
	meaning: IMeaning
}

export default function Meaning({ meaning }: IMeaningProps) {
	const { partOfSpeech, definitions, synonyms } = meaning

	return (
		<div className={styles.meaning}>
			<div className={styles.title}>
				<h3>{partOfSpeech}</h3>
				<hr />
			</div>
			<div className={styles.definitions}>
				<h4>Meaning</h4>
				<ul>
					{definitions?.map(definition => (
						<li key={definition.definition}>
							{definition.definition}
							{definition.example && <span>{`"${definition.example}"`}</span>}
						</li>
					))}
				</ul>

				{synonyms.length > 0 && (
					<>
						<h4>Synonyms</h4>
						<ul className={styles.synonyms}>
							{synonyms?.map(synonym => <li key={synonym}>{synonym}</li>)}
						</ul>
					</>
				)}
			</div>
		</div>
	)
}

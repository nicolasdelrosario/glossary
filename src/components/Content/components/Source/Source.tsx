import Link from 'next/link'

import styles from './styles.module.css'

interface ISourceProps {
	source: string
}

export default function Source({ source }: ISourceProps) {
	return (
		<div className={styles.source}>
			<hr />
			<div>
				<span>Source</span>
				<Link target='_blank' href={source}>
					{source}
				</Link>
			</div>
		</div>
	)
}

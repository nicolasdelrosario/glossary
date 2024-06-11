import Link from 'next/link'

import styles from './styles.module.css'

export default function notFound() {
	return (
		<div className={styles.not_found}>
			<h1>This content does not exist</h1>

			<Link href='/'>Go Back</Link>
		</div>
	)
}

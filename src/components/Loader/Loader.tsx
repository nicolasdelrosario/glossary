import { Sparkles } from 'lucide-react'

import styles from './styles.module.css'

export default function Loader() {
	return (
		<section className={styles.loader}>
			<div>
				<Sparkles size={32} color='var(--background-images)' />
				<h2>Loading...</h2>
			</div>
		</section>
	)
}

import Link from 'next/link'
import { ThemeToggleButton } from '@/components'
import { Book } from 'lucide-react'

import styles from './styles.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<figure>
					<Book color='var(--background-images)' size={32} />
					<figcaption>
						<h1>Glossario</h1>
					</figcaption>
				</figure>
			</Link>
			<figure>
				<ThemeToggleButton />
			</figure>
		</header>
	)
}

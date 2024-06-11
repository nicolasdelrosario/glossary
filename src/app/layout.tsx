import { metadata } from './metadata'
import { Poppins } from 'next/font/google'

import { Header } from '@/components'

import '@/styles/index.css'

export { metadata }

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '800', '900'],
})

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' data-theme='light'>
			<body className={poppins.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}

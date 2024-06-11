'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
} as const

type Theme = (typeof THEMES)[keyof typeof THEMES]

export default function ThemeToggleButton() {
	const [theme, setTheme] = useState<Theme | null>(null)

	useEffect(() => {
		const localTheme = localStorage.getItem('theme') as Theme | null
		const systemTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)')
			.matches
			? THEMES.DARK
			: THEMES.LIGHT
		setTheme(localTheme || systemTheme)
	}, [])

	useEffect(() => {
		if (theme) {
			const root = document.querySelector(':root') as HTMLElement
			root.dataset.theme = theme
			localStorage.setItem('theme', theme)

			const handleSystemThemeChange = (e: MediaQueryListEvent) => {
				setTheme(e.matches ? THEMES.DARK : THEMES.LIGHT)
			}

			const systemThemeWatcher = window.matchMedia(
				'(prefers-color-scheme: dark)'
			)
			systemThemeWatcher.addEventListener('change', handleSystemThemeChange)

			return () => {
				systemThemeWatcher.removeEventListener(
					'change',
					handleSystemThemeChange
				)
			}
		}
	}, [theme])

	const toggleTheme = () => {
		setTheme(prevTheme =>
			prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
		)
	}

	if (theme === null) {
		return null
	}

	return (
		<button onClick={toggleTheme}>
			{theme === THEMES.DARK ? (
				<Moon color='var(--background-images)' size={32} />
			) : (
				<Sun color='var(--background-images)' size={32} />
			)}
		</button>
	)
}

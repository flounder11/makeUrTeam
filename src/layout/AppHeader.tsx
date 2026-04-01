import { NavLink } from 'react-router-dom'

export default function AppHeader() {
	return (
		<header className="flex h-16 items-center justify-between border-b px-6">
			<div className="text-sm text-muted-foreground">Привет дебил</div>
			<NavLink to="/login">
				<button>Login</button>
			</NavLink>
		</header>
	)
}

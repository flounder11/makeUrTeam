import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import LoginPage from './pages/LoginPage'
import ManagerPage from './pages/ManagerPage'
import ProfilePage from './pages/ProfilePage'
import { default as TeamPage, default as UserPage } from './pages/TeamPage'

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/login"
					element={<LoginPage />}
				/>

				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<UserPage />}
					/>

					<Route
						path="/manager"
						element={<ManagerPage />}
					/>
					<Route
						path="/profile"
						element={<ProfilePage />}
					/>
					<Route
						path="/team"
						element={<TeamPage />}
					/>
				</Route>
			</Routes>
		</>
	)
}

export default App

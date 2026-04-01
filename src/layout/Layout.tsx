import { Outlet } from 'react-router-dom'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger
} from '../components/ui/sidebar'
import AppHeader from './AppHeader'
import { AppSidebar } from './AppSidebar'

export default function Layout() {
	return (
		<SidebarProvider>
			<AppSidebar />

			<SidebarInset>
				<AppHeader />
				<main>
					<SidebarTrigger />
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	)
}

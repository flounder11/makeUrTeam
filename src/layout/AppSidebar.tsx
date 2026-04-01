import { NavLink } from 'react-router-dom'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '../components/ui/sidebar'

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader className="border-b">
				<div className="p-4">
					<div className="text-lg font-semibold">MakeUrTeam</div>
					<div className="text-sm text-muted-foreground">Панель</div>
				</div>
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Основное</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<NavLink
										to="/team"
										end
									>
										Главная
									</NavLink>
								</SidebarMenuButton>
							</SidebarMenuItem>

							<SidebarMenuItem>
								<SidebarMenuButton>
									<NavLink
										to="/profile"
										end
									>
										Профиль
									</NavLink>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel>Управление</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<NavLink to="/manager">Распределить команды</NavLink>
								</SidebarMenuButton>
							</SidebarMenuItem>

							<SidebarMenuItem>
								<SidebarMenuButton>Пользователи</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="border-t">
				<div className="p-4 text-sm text-muted-foreground">footer</div>
			</SidebarFooter>
		</Sidebar>
	)
}

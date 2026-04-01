import userImg from '../assets/user.png'
import { Button } from '../components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '../components/ui/card'
import { Input } from '../components/ui/input'

export default function ProfilePage() {
	return (
		<section className="p-6">
			<div className="mx-auto max-w-2xl">
				<Card className="gap-6">
					<CardHeader>
						<CardTitle>Профиль</CardTitle>
						<CardDescription>
							Здесь можно изменить имя и при желании обновить аватар.
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-6">
						<div className="flex flex-col gap-6 md:flex-row md:items-start">
							<div className="flex flex-col items-center gap-3">
								<div className="overflow-hidden rounded-2xl border bg-muted">
									<img
										src={userImg}
										alt="avatar"
										className="h-28 w-28 object-cover"
									/>
								</div>

								<Button
									variant="outline"
									type="button"
								>
									Выбрать аватарку
								</Button>

								<p className="text-center text-xs text-muted-foreground">
									Можно загрузить новое изображение
								</p>
							</div>

							<div className="flex-1 space-y-5">
								<div className="space-y-2">
									<label className="text-sm font-medium">Имя</label>
									<Input
										defaultValue="Алексей"
										placeholder="Введите имя"
									/>
								</div>

								<div className="grid gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<label className="text-sm font-medium">Группа</label>
										<Input
											value="исп9-kt21"
											disabled
											readOnly
										/>
										<p className="text-xs text-muted-foreground">
											Это поле изменить нельзя
										</p>
									</div>

									<div className="space-y-2">
										<label className="text-sm font-medium">Команда</label>
										<Input
											value="Команда 2"
											disabled
											readOnly
										/>
										<p className="text-xs text-muted-foreground">
											Команда назначается автоматически
										</p>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-sm font-medium">Новая аватарка</label>
									<Input type="file" />
									<p className="text-xs text-muted-foreground">
										Поле необязательное
									</p>
								</div>
							</div>
						</div>
					</CardContent>

					<CardFooter className="justify-end gap-3">
						<Button
							variant="ghost"
							type="button"
						>
							Отмена
						</Button>

						<Button type="button">Сохранить изменения</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	)
}

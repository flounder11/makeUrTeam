import {
	Award,
	Camera,
	FolderKanban,
	ShieldCheck,
	Sparkles,
	Users
} from 'lucide-react'
import userImg from '../assets/user.png'
import { Button } from '../components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

const profileStats = [
	{
		label: 'Статус',
		value: 'Готов к работе',
		icon: ShieldCheck,
		tone: 'bg-emerald-500/15 text-emerald-100 ring-1 ring-emerald-400/30'
	},
	{
		label: 'Группа',
		value: 'исп9-kt21',
		icon: FolderKanban,
		tone: 'bg-white/10 text-white ring-1 ring-white/15'
	},
	{
		label: 'Команда',
		value: 'Команда 2',
		icon: Users,
		tone: 'bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/30'
	}
]

const profileHighlights = [
	{
		label: 'Роль в команде',
		value: 'Лидер',
		description: 'Ты координируешь участников и задаешь темп работе.'
	},
	{
		label: 'Прогресс профиля',
		value: '88%',
		description: 'Почти все поля заполнены, осталось обновить аватар.'
	},
	{
		label: 'Последнее обновление',
		value: 'Сегодня',
		description: 'Изменения будут сразу видны остальной команде.'
	}
]

export default function ProfilePage() {
	return (
		<section className="relative overflow-hidden px-4 py-6 sm:px-6">
			<div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(24,24,27,0.14),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_30%)]" />

			<div className="mx-auto flex max-w-6xl flex-col gap-6">
				<div className="rounded-[2rem] border border-zinc-900/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-6 text-white shadow-2xl shadow-zinc-950/15 sm:p-8">
					<div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
						<div className="space-y-6">
							<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/80 uppercase">
								<Sparkles className="size-3.5" />
								Личный кабинет
							</div>

							<div className="flex flex-col gap-5 sm:flex-row sm:items-center">
								<div className="relative mx-auto sm:mx-0">
									<div className="absolute inset-0 rounded-[2rem] bg-sky-400/30 blur-2xl" />
									<div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-1.5 backdrop-blur">
										<img
											src={userImg}
											alt="Аватар пользователя"
											className="h-28 w-28 rounded-[1.4rem] object-cover sm:h-32 sm:w-32"
										/>
									</div>
								</div>

								<div className="space-y-3 text-center sm:text-left">
									<div className="space-y-2">
										<p className="text-sm text-white/65">
											Управляй профилем, аватаром и данными команды в одном месте.
										</p>
										<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
											Алексей
										</h1>
										<p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
											Профиль теперь выглядит как полноценная рабочая зона: важные
											данные на виду, форма не перегружена, а действия читаются
											сразу.
										</p>
									</div>

									<div className="flex flex-col gap-3 sm:flex-row">
										<Button
											type="button"
											size="lg"
											className="bg-white text-zinc-950 hover:bg-white/90"
										>
											<Camera className="size-4" />
											Обновить фото
										</Button>
										<Button
											type="button"
											size="lg"
											variant="outline"
											className="border-white/20 bg-white/8 text-white hover:bg-white/14"
										>
											<Award className="size-4" />
											Посмотреть достижения
										</Button>
									</div>
								</div>
							</div>
						</div>

						<div className="grid gap-3">
							{profileStats.map(({ label, value, icon: Icon, tone }) => (
								<div
									key={label}
									className={`rounded-2xl p-4 backdrop-blur ${tone}`}
								>
									<div className="flex items-start justify-between gap-4">
										<div>
											<p className="text-xs uppercase tracking-[0.24em] text-white/55">
												{label}
											</p>
											<p className="mt-2 text-lg font-semibold text-white">
												{value}
											</p>
										</div>
										<div className="rounded-2xl bg-black/15 p-2.5">
											<Icon className="size-4" />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
					<Card className="rounded-[2rem] border border-zinc-900/10 bg-white/85 py-0 shadow-xl shadow-zinc-950/5 backdrop-blur">
						<CardHeader className="border-b border-border/70 px-6 py-6 sm:px-8">
							<CardTitle className="text-xl">Основная информация</CardTitle>
							<CardDescription className="max-w-2xl text-sm leading-6">
								Редактируй ключевые данные профиля и загружай новый аватар в более
								аккуратном, понятном формате.
							</CardDescription>
						</CardHeader>

						<CardContent className="space-y-6 px-6 py-6 sm:px-8">
							<div className="grid gap-5 md:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="name">Имя</Label>
									<Input
										id="name"
										defaultValue="Алексей"
										placeholder="Введите имя"
										className="h-11 rounded-xl bg-background/80 px-4"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="role">Роль</Label>
									<Input
										id="role"
										value="Лидер команды"
										disabled
										readOnly
										className="h-11 rounded-xl bg-muted/70 px-4"
									/>
									<p className="text-xs text-muted-foreground">
										Роль отображается для команды и меняется в разделе выбора ролей.
									</p>
								</div>
							</div>

							<div className="grid gap-5 md:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="group">Группа</Label>
									<Input
										id="group"
										value="исп9-kt21"
										disabled
										readOnly
										className="h-11 rounded-xl bg-muted/70 px-4"
									/>
									<p className="text-xs text-muted-foreground">
										Это поле закреплено системой и недоступно для редактирования.
									</p>
								</div>

								<div className="space-y-2">
									<Label htmlFor="team">Команда</Label>
									<Input
										id="team"
										value="Команда 2"
										disabled
										readOnly
										className="h-11 rounded-xl bg-muted/70 px-4"
									/>
									<p className="text-xs text-muted-foreground">
										Состав команды формируется автоматически на основе распределения.
									</p>
								</div>
							</div>

							<div className="space-y-3">
								<Label htmlFor="avatar">Новая аватарка</Label>
								<div className="rounded-[1.5rem] border border-dashed border-border bg-muted/35 p-4 sm:p-5">
									<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
										<div className="space-y-1">
											<p className="font-medium text-foreground">
												Загрузи изображение профиля
											</p>
											<p className="text-sm leading-6 text-muted-foreground">
												Лучше всего подойдёт квадратное фото в PNG или JPG.
											</p>
										</div>

										<Button
											type="button"
											variant="outline"
											className="rounded-xl"
										>
											<Camera className="size-4" />
											Выбрать файл
										</Button>
									</div>

									<Input
										id="avatar"
										type="file"
										className="mt-4 h-11 rounded-xl bg-background/80 px-4"
									/>
								</div>
							</div>

							<div className="flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:justify-end">
								<Button
									variant="ghost"
									type="button"
									size="lg"
									className="rounded-xl px-5"
								>
									Отмена
								</Button>
								<Button
									type="button"
									size="lg"
									className="rounded-xl px-5"
								>
									Сохранить изменения
								</Button>
							</div>
						</CardContent>
					</Card>

					<div className="space-y-6">
						<Card className="rounded-[2rem] border border-zinc-900/10 bg-linear-to-br from-white to-zinc-50 py-0 shadow-lg shadow-zinc-950/5">
							<CardHeader className="px-6 py-6">
								<CardTitle className="text-xl">Сводка профиля</CardTitle>
								<CardDescription>
									Короткий обзор, который помогает быстро понять текущее состояние
									аккаунта.
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-4 px-6 pb-6">
								{profileHighlights.map((item) => (
									<div
										key={item.label}
										className="rounded-2xl border border-border/70 bg-background/90 p-4"
									>
										<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
											{item.label}
										</p>
										<p className="mt-2 text-lg font-semibold">{item.value}</p>
										<p className="mt-1 text-sm leading-6 text-muted-foreground">
											{item.description}
										</p>
									</div>
								))}
							</CardContent>
						</Card>

						<Card className="rounded-[2rem] border border-sky-100 bg-sky-50/80 py-0 shadow-lg shadow-sky-100/50">
							<CardContent className="px-6 py-6">
								<div className="space-y-3">
									<div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
										Совет
									</div>
									<p className="text-lg font-semibold text-zinc-950">
										Добавь новое фото, чтобы участникам команды было проще тебя
										узнавать.
									</p>
									<p className="text-sm leading-6 text-zinc-600">
										Даже небольшое обновление аватара делает командный интерфейс
										живее и улучшает навигацию в списках участников.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}

import leaderImg from '../assets/leader.png'
import oratorImg from '../assets/orator.png'
import userImg from '../assets/user.png'

export default function TeamPage() {
	return (
		<section className="p-6 space-y-8">
			<div className="space-y-4">
				<span className="text-2xl font-semibold">Выбор роли</span>

				<div className="flex max-w-md justify-between items-center gap-3">
					<button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition">
						<img
							src={userImg}
							alt="player"
							className="w-7 h-7"
						/>
						<span>Участник</span>
					</button>

					<button className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-muted transition">
						<img
							src={leaderImg}
							alt="lead"
							className="w-7 h-7"
						/>
						<span>Лидер</span>
					</button>

					<button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition">
						<img
							src={oratorImg}
							alt="orator"
							className="w-7 h-7"
						/>
						<span>Оратор</span>
					</button>
				</div>

				<button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition">
					Подтвердить выбор роли
				</button>
			</div>

			{/* Участники */}
			<div className="space-y-4">
				<span className="text-2xl font-semibold">Участники команды</span>

				<div className="grid gap-3 max-w-md">
					<div className="flex items-center justify-between p-3 rounded-lg border">
						<div className="flex items-center gap-3">
							<img
								src={leaderImg}
								className="w-8 h-8"
							/>
							<div>
								<p className="font-medium">Алексей</p>
								<span className="text-sm text-muted-foreground">Лидер</span>
							</div>
						</div>

						<span className="text-xs text-green-500">Готов</span>
					</div>

					<div className="flex items-center justify-between p-3 rounded-lg border">
						<div className="flex items-center gap-3">
							<img
								src={oratorImg}
								className="w-8 h-8"
							/>
							<div>
								<p className="font-medium">Мария</p>
								<span className="text-sm text-muted-foreground">Оратор</span>
							</div>
						</div>

						<span className="text-xs text-yellow-500">Выбирает</span>
					</div>

					<div className="flex items-center justify-between p-3 rounded-lg border">
						<div className="flex items-center gap-3">
							<img
								src={userImg}
								className="w-8 h-8"
							/>
							<div>
								<p className="font-medium">Дмитрий</p>
								<span className="text-sm text-muted-foreground">Участник</span>
							</div>
						</div>

						<span className="text-xs text-muted-foreground">Не готов</span>
					</div>
				</div>
			</div>
		</section>
	)
}

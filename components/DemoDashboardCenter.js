import DemoDashboardMember from './DemoDashboardMember'

export default function DemoDashboardCenter() {
	return (
		<div className="border bg-white rounded px-4 pt-4">
			<span className="text-circle-black font-semibold inline-block mb-4">
				Live session 42 - Mindful parenting
			</span>
			<DemoDashboardMember name="Adelle Farley" image="/images/avatar-member-current.png" leftBar />
			<div className="mt-6 w-full">
				<video loop autoPlay muted>
					<source src="/videos/circle-live-video.mp4" type="video/mp4" />
				</video>
			</div>
			<div>
				<div className="-mt-8 ml-4 relative z-10 flex items-center">
					<div className="rounded-full bg-red-500 h-2 w-2 mr-1"></div>
					<span className="text-white text-xs font-medium tracking-widest">LIVE</span>
				</div>
			</div>
			<div className="mt-10 flex justify-between">
				<div className="flex items-center">
					<img src="/images/liked-avatars.png" className="h-8 mr-3" />
					<span className="text-circle-light text-xs">Liked by 3 people</span>
				</div>
				<div>
					<img src="/images/icon-hand.svg" className="h-5" />
				</div>
			</div>
			<div className="mt-6">
				<DemoDashboardMember name="Kason Irving" image="/images/avatar-kason.png" leftBar />
			</div>
			<div className="mt-5 relative">
				<p className="text-sm text-circle-light pl-10 max-w-xl">
					Phasellus a velit feugiat, sodales tellus et, laoreet risus. Cras vel diam lacus. Quisque malesuada
					enim sodales aliquam aliquam. In sit amet lorem nunc. Cras maximus, velit at aliquet lobortis, ante
					turpis varius massa
				</p>
				<div
					className="absolute left-0 top-auto right-0 bottom-0 h-20"
					style={{ backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff 89%)' }}
				></div>
			</div>
		</div>
	)
}

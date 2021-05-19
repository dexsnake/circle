import DemoDashboard from './DemoDashboard'

export default function HeroSection() {
	return (
		<div className="relative overflow-hidden">
			<div className="max-w-4xl mx-auto text-center mt-16 px-4 relative z-10">
				<h1 className="text-4xl sm:text-6xl font-semibold text-circle-black mb-6">
					The modern community <br /> platform for
					<span className="text-circle"> creators</span>
				</h1>
				<p className="text-lg sm:text-2xl text-circle-light leading-snug">
					Bring together your discussions, memberships, and content. <br className="hidden sm:block" />{' '}
					Integrate a thriving community wherever your audience is, all under your own brand.
				</p>
				<div className="mt-10">
					<button className="bg-circle px-8 py-4 rounded-md hover:bg-opacity-90 text-white text-xl font-semibold">
						Start your 14-day free trial
					</button>
				</div>
			</div>
			<div className="block absolute top-0 left-0 right-1/2 bottom-0">
				<img
					src="/images/hero-photos-left.png"
					alt="people"
					className="absolute max-w-4xl"
					style={{ top: 180, right: 540 }}
				/>
			</div>
			<div className="block absolute top-0 left-1/2 right-0 bottom-0">
				<img
					src="/images/hero-photos-right.png"
					alt="people"
					className="absolute max-w-4xl"
					style={{ top: 180, left: 540 }}
				/>
			</div>
			<div className="px-4 mb-20">
				<DemoDashboard />
			</div>
		</div>
	)
}

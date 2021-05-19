export default function TrustSection() {
	return (
		<div className="w-full max-w-screen-xl mx-auto">
			<h4 className="font-medium text-circle-dark text-2xl text-center mb-8">Trusted by world class creators</h4>
			<div className="flex flex-wrap justify-center items-center mb-32">
				<img src="/images/forte-labs.png" className="max-h-7 pr-6 mb-4" />
				<img src="/images/teachable.png" className="max-h-7 px-6 mb-4" />
				<img src="/images/spi.svg" className="max-h-14 px-6 mb-4" />
				<img src="/images/makerpad.png" className="max-h-7 px-6 mb-4" />
				<img src="/images/ness-labs.png" className="max-h-7 pl-6 mb-4" />
			</div>
			<div
				className="w-full flex flex-wrap items-center pt-20 pb-28"
				style={{ backgroundImage: 'linear-gradient(270deg, #f8f9fb, #f8f9fb 70%, transparent 0, transparent)' }}
			>
				<div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
					<video controls className="rounded">
						<source src="/videos/trust.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="w-full lg:w-1/2 px-4 mb-4">
					<p className="text-center lg:text-left text-lg sm:text-xl text-circle-light leading-relaxed lg:leading-snug mb-8">
						“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're
						building a community where you want the focus to be on your members and the discussion, I highly
						recommend checking out Circle. I'm so glad we made this decision.”
					</p>
					<span className="font-semibold text-circle-black block text-2xl text-center lg:text-left">
						Pat Flynn
					</span>
					<span className="text-circle-light block text-center lg:text-left">Smart Passive Income</span>
				</div>
			</div>
		</div>
	)
}

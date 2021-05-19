import UseCaseCard from '../components/UseCaseCard'

export default function UseCaseSection() {
	return (
		<div className="w-full max-w-screen-xl mx-auto mt-32">
			<div className="max-w-lg mx-auto px-4">
				<h2 className="font-semibold text-circle-black text-3xl sm:text-4xl text-center mb-4">
					Easily set up a premium community for every use-case
				</h2>
			</div>
			<div className="max-w-xl mx-auto mb-20">
				<p className="text-lg sm:text-xl text-circle-light leading-snug text-center">
					You can make Circle work for your project. Circle is flexible, white-labeled, and powers hundreds of
					diverse community types.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-none md:grid-rows-4 lg:grid-rows-3 gap-8 p-4">
				<div className="bg-gray-50 p-6 w-full h-full row-span-2">
					<div className="text-circle-black font-medium text-xl flex items-center mb-4">
						<span className="text-4xl inline-block mr-3">👋</span> Membership communities
					</div>
					<p className="text-lg text-circle-light leading-relaxed mb-6">
						Circle offers the flexibility to create a membership experience that's truly yours.
					</p>
					<p className="text-lg text-circle-light leading-relaxed mb-6">
						With direct integrations to tools like Memberstack and Memberspace, Circle can fit seamlessly
						into the rest of your membership stack.
					</p>
					<p className="text-lg text-circle-light leading-relaxed mb-6">Examples include...</p>
					<div className="text-circle-black font-medium text-lg flex items-center mb-3">
						<img src="/images/check-mark-blue-circle.svg" className="h-5 mr-4" /> Exclusive memberships
					</div>
					<div className="text-circle-black font-medium text-lg flex items-center mb-3">
						<img src="/images/check-mark-blue-circle.svg" className="h-5 mr-4" /> Communities for courses
					</div>
					<div className="text-circle-black font-medium text-lg flex items-center mb-3">
						<img src="/images/check-mark-blue-circle.svg" className="h-5 mr-4" /> Premium masterminds
					</div>
					<div className="text-circle-black font-medium text-lg flex items-center mb-3">
						<img src="/images/check-mark-blue-circle.svg" className="h-5 mr-4" /> Paid newsletters
					</div>
					<div className="text-circle-black font-medium text-lg flex items-center mb-3">
						<img src="/images/check-mark-blue-circle.svg" className="h-5 mr-4" /> Conference communities
					</div>
				</div>
				<UseCaseCard
					icon="📚"
					title="Course communities"
					text="Add a community to your course, help your students connect with each other, and improve student-outcomes. Integrate with Teachable, Kajabi, and other course platforms."
				/>
				<UseCaseCard
					icon="⛳️"
					title="Coaching communities"
					text="Provide a dedicated home for your coaching clients to get access to resources, connect with each other, and interact directly with you."
				/>
				<UseCaseCard
					icon="🚲"
					title="Product communities"
					text="Give your customers the space to share ideas with each other for how to best use your product."
				/>
				<UseCaseCard
					icon="🎯"
					title="Brands & startups"
					text="Building an engaged community is a super power for any brand. Integrate your community directly into your product or website."
				/>
				<UseCaseCard
					icon="🧒🏽"
					title="Microschools"
					text="Provide a space for your students, parents, and teachers to gather for your microschool pod. Share resources, discuss schoolwork, and stay organized."
				/>
				<UseCaseCard
					icon="📰"
					title="Newsletter communities"
					text="Your readers are smart and have so much in common. Help them meet each other and continue the discussion inside of your own community."
				/>
				<UseCaseCard
					icon="🎤"
					title="Podcast communities"
					text="Your listeners want to keep the conversation going after the episode is over. Offer premium content they can’t get anywhere else."
				/>
			</div>
		</div>
	)
}

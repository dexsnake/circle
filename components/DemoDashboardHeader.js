export default function DemoDashboardHeader() {
	return (
		<div className="bg-white w-full px-6 sm:px-12 py-3 flex items-center">
			<div className="w-1/6">
				<img src="/images/modern-mind.svg" alt="modern mind" className="h-3" />
			</div>
			<div className="w-2/3 px-5">
				<div className="w-full h-7 border border-gray-100 rounded bg-gray-50 flex items-center px-2">
					<img src="/images/icon-search.svg" alt="search icon" className="h-4" />
				</div>
			</div>
			<div className="w-1/6">
				<div className="flex justify-end items-center">
					<img src="/images/icon-stats.svg" className="hidden sm:block h-6 mr-2" />
					<img src="/images/icon-dm.svg" className="hidden sm:block h-7 mr-2" />
					<img src="/images/icon-notifications.svg" className="h-7 mr-2" />
					<img src="/images/avatar-member-current.png" className="h-7" />
				</div>
			</div>
		</div>
	)
}

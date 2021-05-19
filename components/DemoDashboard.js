import DemoDashboardCenter from './DemoDashboardCenter'
import DemoDashboardHeader from './DemoDashboardHeader'
import DemoDashboardLeftBar from './DemoDashboardLeftBar'
import DemoDashboardRightBar from './DemoDashboardRightBar'

export default function DemoDashboard() {
	return (
		<div className="w-full max-w-screen-xl mx-auto overflow-hidden rounded shadow-lg bg-gray-50 relative z-10 mt-20">
			<DemoDashboardHeader />
			<div className="w-full px-6 sm:px-12 py-4 sm:py-8 grid grid-cols-1 sm:grid-cols-demo-2-col lg:grid-cols-demo-3-col gap-5">
				<div className="hidden sm:block">
					<DemoDashboardLeftBar />
				</div>
				<div className="">
					<DemoDashboardCenter />
				</div>
				<div className="hidden lg:block">
					<DemoDashboardRightBar />
				</div>
			</div>
		</div>
	)
}

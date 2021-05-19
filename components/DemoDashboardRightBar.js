import DemoDashboardMember from './DemoDashboardMember'
import DemoDashboardSectionHeader from './DemoDashboardSectionHeader'

export default function DemoDashboardRightBar() {
	return (
		<div>
			<div className="border bg-white rounded px-4 py-2 w-full mb-6">
				<DemoDashboardSectionHeader text="Members" top />
				<div className="mb-3">
					<DemoDashboardMember name="Nicole Carr" image="/images/avatar-nicole.png" />
				</div>
				<div className="mb-3">
					<DemoDashboardMember name="Eleri Benson" image="/images/avatar-eleri.png" />
				</div>
				<div className="mb-3">
					<DemoDashboardMember name="Jena Trust" image="/images/avatar-jena.png" />
				</div>
				<div className="mb-3">
					<DemoDashboardMember name="Pierre Walls" image="/images/avatar-pierre.png" />
				</div>
			</div>
			<div className="border bg-white rounded px-4 py-2 w-full mb-6">
				<DemoDashboardSectionHeader text="Moderator" top />
				<div className="mb-3">
					<DemoDashboardMember name="Meg Rogers" image="/images/avatar-meg.png" />
				</div>
			</div>
			<div className="border bg-white rounded px-4 py-2 w-full mb-6">
				<DemoDashboardSectionHeader text="Pinned Topics" top />
				<div className="w-32 h-1.5 bg-gray-200 rounded-full mb-4"></div>
				<div className="w-20 h-1.5 bg-gray-200 rounded-full mb-4"></div>
				<div className="w-28 h-1.5 bg-gray-200 rounded-full mb-4"></div>
			</div>
		</div>
	)
}

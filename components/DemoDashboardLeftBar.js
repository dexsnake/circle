import DemoDashboardLeftBarItem from './DemoDashboardLeftBarItem'
import DemoDashboardSectionHeader from './DemoDashboardSectionHeader'

export default function DemoDashboardLeftBar() {
	return (
		<div>
			<DemoDashboardSectionHeader text="Welcome" top />
			<DemoDashboardLeftBarItem icon="🙏" text="Getting started" />
			<DemoDashboardLeftBarItem icon="👋" text="Introductions" notifications={7} />
			<DemoDashboardSectionHeader text="Theory" />
			<DemoDashboardLeftBarItem icon="🎯" text="Basics" />
			<DemoDashboardLeftBarItem icon="💬" text="Conversations" notifications="3" />
			<DemoDashboardLeftBarItem icon="🎧" text="Weekly Q&A" notifications="1" />
			<DemoDashboardSectionHeader text="Practice" badge="PRO" />
			<DemoDashboardLeftBarItem text="Live sessions" locked highlighted />
			<DemoDashboardLeftBarItem text="Upcoming events" locked />
			<DemoDashboardLeftBarItem text="Challenges" locked />
			<DemoDashboardSectionHeader text="Meditation Groups" />
			<DemoDashboardLeftBarItem icon="🌿" text="Zen club" />
			<DemoDashboardLeftBarItem icon="🏔" text="Koan way" />
			<DemoDashboardLeftBarItem icon="🌻" text="Metta kindness" />
		</div>
	)
}

export default function DemoDashboardMember(props) {
	return (
		<div className="flex items-center">
			<img src={props.image} className="h-8 mr-3" />
			<div className="mr-3">
				<span className="text-xs text-circle-light">{props.name}</span>
				<div className="w-12 h-1 bg-gray-200 rounded-full mt-1"></div>
			</div>
			{props.leftBar && <div className="w-8 h-1 bg-gray-200 rounded-full"></div>}
		</div>
	)
}

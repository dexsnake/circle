export default function DemoDashboardSectionHeader(props) {
	return (
		<div className={`mb-3 ${props.top ? '' : 'mt-5'}`}>
			<span className="text-circle-black font-medium text-xs inline-block mr-2">{props.text}</span>
			{props.badge && (
				<span
					className="bg-circle-light text-white px-1 rounded"
					style={{ fontSize: 11, paddingTop: 2, paddingBottom: 2 }}
				>
					{props.badge}
				</span>
			)}
		</div>
	)
}

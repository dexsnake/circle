export default function UseCaseCard(props) {
	return (
		<div className="bg-gray-50 p-6 w-full h-full">
			<div className="text-circle-black font-medium text-xl flex items-center mb-3">
				<span className="text-4xl inline-block mr-3">{props.icon}</span> {props.title}
			</div>
			<p className="text-lg text-circle-light leading-relaxed mb-8">{props.text}</p>
		</div>
	)
}

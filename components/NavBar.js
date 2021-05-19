import Link from 'next/link'

export default function NavBar() {
	return (
		<div className="mx-auto max-w-screen-xl">
			<div className="px-8 sm:px-4 py-10 flex justify-between items-center">
				<img src="/images/logo.svg" alt="logo" className="h-6" />
				<div className="hidden sm:flex justify-center items-center">
					<Link href="/pricing">
						<span className="cursor-pointer text-circle-dark font-semibold inline-block mr-8">Pricing</span>
					</Link>
					<Link href="/login">
						<span className="cursor-pointer text-circle-dark font-semibold inline-block mr-8">Login</span>
					</Link>
					<Link href="/sign-up">
						<span className="cursor-pointer font-semibold bg-circle bg-opacity-10 hover:bg-opacity-20 text-circle px-4 py-2 rounded-md">
							Get started
						</span>
					</Link>
				</div>
				<div className="block sm:hidden cursor-pointer">
					<div className="h-0.5 bg-circle-black w-5 mb-1"></div>
					<div className="h-0.5 bg-circle-black w-5 mb-1"></div>
					<div className="h-0.5 bg-circle-black w-5 mb-1"></div>
				</div>
			</div>
		</div>
	)
}

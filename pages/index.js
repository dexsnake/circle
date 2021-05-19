import Head from 'next/head'
import AnnouncementBar from '../components/AnnouncementBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import TrustSection from '../components/TrustSection'
import UseCaseSection from '../components/UseCaseSection'

export default function Home() {
	return (
		<>
			<Head>
				<title>Circle: The modern community platform for creators</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<AnnouncementBar />
			<NavBar />
			<HeroSection />
			<TrustSection />
			<UseCaseSection />
		</>
	)
}

import { Benefit } from "@/components/component/benefit";
import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { Hero } from "@/components/component/hero";
import { Testimonial } from "@/components/component/testimonial";
import { Tutorial } from "@/components/component/tutorial";
import { Video } from "@/components/component/video";

export default function Home() {
	return (
		<>
			<div className="flex flex-col min-h-[100dvh]">
				<Header />
				<main className="flex-1">
					<Hero />
					<Benefit />
					<Tutorial />
					<Video />
					<Testimonial />
				</main>
				<Footer />
			</div>
		</>
	);
}

function CheckIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}

function MilkIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M8 2h8" />
			<path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
			<path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
		</svg>
	);
}

function XIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}

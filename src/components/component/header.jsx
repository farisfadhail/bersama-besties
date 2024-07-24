import Link from "next/link";
import { MilkIcon } from "lucide-react";

export function Header() {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 right-0 backdrop-blur-sm z-10 transition-all duration-300">
			<Link href="#" className="flex items-center justify-center" prefetch={false}>
				<MilkIcon className="h-6 w-6" />
				<span className="sr-only">Cow Dung Fertilizer</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Benefits
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Tutorial
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Video
				</Link>
				<Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
					Testimonials
				</Link>
			</nav>
		</header>
	);
}

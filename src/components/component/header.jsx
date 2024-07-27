import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import logoKKN from "../../../public/logo.png";

export function Header() {
	return (
		<header className="px-4 lg:px-8 h-16 flex items-center fixed top-0 left-0 right-0 backdrop-blur-sm z-10 transition-all duration-300">
			{/* <header className="bg-white shadow-sm backdrop-blur-sm z-10 transition-all duration-300"> */}
			<div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
				<Link href="#beranda" className="flex items-center" prefetch={false}>
					<Image src={logoKKN} alt="Logo KKN UMD 144 Desa Sumber Salam" />
				</Link>
				<nav className="hidden space-x-4 md:flex">
					<Link href="#beranda" className="text-sm font-medium text-primary hover:text-[#719D2A] transition-colors" prefetch={false}>
						Beranda
					</Link>
					<Link href="#problem" className="text-sm font-medium text-primary hover:text-[#719D2A] transition-colors" prefetch={false}>
						Problem
					</Link>
					<Link href="#program" className="text-sm font-medium text-primary hover:text-[#719D2A] transition-colors" prefetch={false}>
						Program
					</Link>
					<Link href="#tutorial" className="text-sm font-medium text-primary hover:text-[#719D2A] transition-colors" prefetch={false}>
						Tutorial
					</Link>
					<Link href="#testimonial" className="text-sm font-medium text-primary hover:text-[#719D2A] transition-colors" prefetch={false}>
						Testimonial
					</Link>
				</nav>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="md:hidden">
							<MenuIcon className="h-6 w-6" />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<div className="flex flex-col space-y-4 p-4">
							<Link href="#" className="flex items-center text-lg font-medium text-primary" prefetch={false}>
								<Image src={logoKKN} alt="Logo KKN UMD 144 Desa Sumber Salam" className="mb-4" />
							</Link>
							<nav className="space-y-4">
								<Link href="#beranda" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
									Beranda
								</Link>
								<Link href="#problem" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
									Problem
								</Link>
								<Link href="#program" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
									Program
								</Link>
								<Link href="#tutorial" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
									Tutorial
								</Link>
								<Link href="#testimonial" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
									Testimonial
								</Link>
							</nav>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}

function MenuIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MountainIcon(props) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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

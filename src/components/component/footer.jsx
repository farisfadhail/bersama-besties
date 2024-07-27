import React from "react";
import Link from "next/link";

export function Footer() {
	return (
		<footer id="footer" className="gap-2 sm:flex-row py-6 w-full shrink-0 px-4 md:px-6 border-t space-y-4">
			<nav className="sm:ml-auto md:flex gap-4 sm:gap-6 justify-center hidden">
				<div className="flex space-x-4 items-center">
					<Link href="#problem" className="text-xs hover:underline underline-offset-4" prefetch={false}>
						Informasi
					</Link>
					<Link href="#program" className="text-xs hover:underline underline-offset-4" prefetch={false}>
						Program
					</Link>
				</div>
				<div className="text-2xl font-semibold" style={{ color: "#719D2A" }}>
					BERSAMA BESTIES
				</div>
				<div className="flex space-x-4 items-center">
					<Link href="#tutorial" className="text-xs hover:underline underline-offset-4" prefetch={false}>
						Tutorial
					</Link>
					<Link href="#testimonial" className="text-xs hover:underline underline-offset-4" prefetch={false}>
						Testimonial
					</Link>
				</div>
			</nav>
			<p className="text-xs text-muted-foreground text-center">&copy; 2024 KKN 144 Sumber Salam. All rights reserved.</p>
		</footer>
	);
}

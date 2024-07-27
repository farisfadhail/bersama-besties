"use client";
import Link from "next/link";
import logoKKN from "../../../public/logo.png";
import Image from "next/image";
import { useState } from "react";

export function Header1() {
	const [activeSection, setActiveSection] = useState("");

	const handleScroll = (section) => {
		setActiveSection(section);
	};

	return (
		<header className="px-4 lg:px-8 h-20 flex items-center fixed top-0 left-0 right-0 backdrop-blur-sm z-10 transition-all duration-300">
			<Link href="#beranda" className="flex items-center justify-center" prefetch={false}>
				<Image src={logoKKN} alt="Logo KKN UMD 144 Desa Sumber Salam" />
				<span className="sr-only">Cow Dung Fertilizer</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link href="#" className={`text-sm font-medium hover:underline underline-offset-4`} style={{ color: activeSection === "#testimoni" ? "black" : "#719D2A" }} prefetch={false}>
					Beranda
				</Link>
				<Link href="#tentang" className={`text-sm font-medium hover:underline underline-offset-4`} prefetch={false}>
					Tentang
				</Link>
				<Link href="#tutorial" className={`text-sm font-medium hover:underline underline-offset-4`} prefetch={false}>
					Tutorial
				</Link>
				<Link href="#informasi" className={`text-sm font-medium hover:underline underline-offset-4`} prefetch={false}>
					Informasi
				</Link>
				<Link href="#testimoni" className={`text-sm font-medium hover:underline underline-offset-4`} style={{ color: activeSection === "#testimoni" ? "#719D2A" : "black" }} prefetch={false}>
					Testimoni
				</Link>
			</nav>
		</header>
	);
}

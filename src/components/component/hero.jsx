import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../../public/hero.png";

export function Hero() {
	return (
		<section id="beranda" className="w-full py-20 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4" data-aos="fade-right">
						<div className="space-y-2">
							<h1 className=" mb-4 text-sm font-semibold sm:text-base xl:text-lg/none" data-aos="fade-right">
								Sumber Salam Bebas Kotoran Sapi
							</h1>
							<h1 className="mb-4 text-2xl font-bold sm:text-4xl xl:text-5xl/none">
								<span style={{ color: "#719D2A" }}>Selamat</span> Datang di Website Modul <span style={{ color: "#719D2A" }}>Bersama Besties</span>
							</h1>
							<p className="pb-8 max-w-2xl md:text-lg text-justify md:text-left" data-aos="fade-right">
								Program &quot;Bersama Besties&quot; adalah bentuk upaya pemanfaatan kotoran sapi untuk kelestarian lingkungan. Mari kita menjaga lingkungan demi masa depan yang lebih baik!
							</p>
							<Link
								data-aos="fade-right"
								data-aos-duration="500"
								href="#problem"
								className="inline-flex h-12 items-center justify-center rounded-md bg-[#719D2A] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								Selengkapnya...
							</Link>
						</div>
					</div>
					<Image data-aos="fade-left" src={heroImage} width="550" height="550" alt="Pupuk dari Kotoran Sapi" className="mx-auto overflow-hidden rounded-xl object-cover sm:hidden lg:block lg:order-last lg:aspect-auto" />
				</div>
			</div>
		</section>
	);
}

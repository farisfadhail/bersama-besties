import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Unlock the Power of Cow Dung Fertilizer</h1>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								Discover the natural and sustainable way to enrich your soil and grow bountiful crops with our step-by-step tutorial on using cow dung as fertilizer.
							</p>
							<Link
								href="#"
								className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
								prefetch={false}
							>
								Get Started
							</Link>
						</div>
					</div>
					<Image src="/placeholder.svg" width="550" height="550" alt="Cow Dung Fertilizer" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
				</div>
			</div>
		</section>
	);
}

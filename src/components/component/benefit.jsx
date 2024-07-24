/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export function Benefit() {
	return (
		<section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Benefits</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Use Cow Dung Fertilizer?</h2>
						<p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Cow dung fertilizer offers a range of benefits for your garden and the environment. Discover why it's the natural choice for sustainable and healthy plant growth.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-4">
							<li className="flex items-start gap-2">
								<CheckIcon className="mt-1 h-5 w-5 text-primary" />
								<div>
									<h3 className="text-lg font-bold">Nutrient-Rich</h3>
									<p className="text-muted-foreground">Cow dung is packed with essential nutrients like nitrogen, phosphorus, and potassium, which are vital for plant growth.</p>
								</div>
							</li>
							<li className="flex items-start gap-2">
								<CheckIcon className="mt-1 h-5 w-5 text-primary" />
								<div>
									<h3 className="text-lg font-bold">Improves Soil Structure</h3>
									<p className="text-muted-foreground">The organic matter in cow dung helps to aerate the soil and improve its water-holding capacity, creating an ideal environment for plant roots to thrive.</p>
								</div>
							</li>
							<li className="flex items-start gap-2">
								<CheckIcon className="mt-1 h-5 w-5 text-primary" />
								<div>
									<h3 className="text-lg font-bold">Eco-Friendly</h3>
									<p className="text-muted-foreground">Using cow dung as fertilizer is a sustainable and environmentally-friendly alternative to chemical fertilizers, reducing your carbon footprint.</p>
								</div>
							</li>
							<li className="flex items-start gap-2">
								<CheckIcon className="mt-1 h-5 w-5 text-primary" />
								<div>
									<h3 className="text-lg font-bold">Improves Plant Growth</h3>
									<p className="text-muted-foreground">The nutrients in cow dung fertilizer help to promote vigorous plant growth, leading to healthier and more productive crops.</p>
								</div>
							</li>
						</ul>
					</div>
					<Image src="/placeholder.svg" width="550" height="310" alt="Benefits of Cow Dung Fertilizer" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
				</div>
			</div>
		</section>
	);
}

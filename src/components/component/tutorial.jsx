import Image from "next/image";
import React from "react";
import { CheckIcon } from "lucide-react";

export function Tutorial() {
	return (
		<section id="tutorial" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tutorial</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How to Use Cow Dung Fertilizer</h2>
						<p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Follow our step-by-step guide to properly prepare and apply cow dung fertilizer for maximum benefits in your garden.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<Image src="/placeholder.svg" width="550" height="310" alt="Cow Dung Fertilizer Tutorial" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
					<div className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-4">
							<li className="flex items-start gap-2">
								<CheckIcon className="mt-1 h-5 w-5 text-primary" />
								<div>
									<h3 className="text-lg font-bold">Collect the Dung</h3>
									<p className="text-muted-foreground">Gather fresh cow dung from a local farm or ranch. Ensure it is free from any contaminants.</p>
								</div>
							</li>
							<li className="flex items-start gap-2">
								<CheckIcon className="mt-1 h-5 w-5 text-primary" />
								<div>
									<h3 className="text-lg font-bold">Compost the Dung</h3>
									<p className="text-muted-foreground">Mix the cow dung with other organic matter like straw or leaves, and let it decompose for 4-6 weeks to create a nutrient-rich compost.</p>
								</div>
							</li>
							<li className="flex items-start gap-2">
								<CheckIcon className="mt-1 h-5 w-5 text-primary" />
								<div>
									<h3 className="text-lg font-bold">Apply to Your Garden</h3>
									<p className="text-muted-foreground">Spread the compost evenly around the base of your plants, ensuring it is mixed into the top layer of soil. Water thoroughly after application.</p>
								</div>
							</li>
							<li className="flex items-start gap-2">
								<CheckIcon className="mt-1 h-5 w-5 text-primary" />
								<div>
									<h3 className="text-lg font-bold">Photos of the Process</h3>
									<p className="text-muted-foreground">Check out our photos showing the step-by-step process of collecting, composting, and applying cow dung fertilizer to your garden.</p>
									<div className="grid grid-cols-2 gap-4 mt-4">
										<Image src="/placeholder.svg" width="300" height="200" alt="Collecting Cow Dung" className="rounded-lg object-cover" />
										<Image src="/placeholder.svg" width="300" height="200" alt="Composting Cow Dung" className="rounded-lg object-cover" />
										<Image src="/placeholder.svg" width="300" height="200" alt="Applying Cow Dung Fertilizer" className="rounded-lg object-cover" />
										<Image src="/placeholder.svg" width="300" height="200" alt="Healthy Plants with Cow Dung Fertilizer" className="rounded-lg object-cover" />
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

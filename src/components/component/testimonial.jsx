/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { CardContent } from "../ui/card";
import Image from "next/image";
import Placeholder from "../../../public/placeholder.svg";

export function Testimonial() {
	return (
		<section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
						<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Hear from real gardeners who have experienced the benefits of using cow dung fertilizer in their gardens.
						</p>
					</div>
				</div>
				<div className="mx-auto py-12 flex items-center justify-center">
					<Carousel plugins={[Autoplay({ delay: 2000 })]} opts={{ loop: true }} className="w-full">
						<CarouselContent>
							{[1, 2, 3, 4, 5, 6].map((i) => (
								<CarouselItem key={i} className="basis-1/3">
									<blockquote className="rounded-md border bg-background p-6 shadow-sm">
										<p className="text-muted-foreground">"Using cow dung fertilizer has transformed my garden. My\n vegetables are thriving, and I've never seen such vibrant\n colors and healthy growth."</p>
										<cite className="mt-4 flex items-center gap-2 not-italic">
											<Image src={Placeholder} width="40" height="40" alt="Avatar" className="h-10 w-10 rounded-full" />
											<div>
												<div className="font-medium">Jane Doe</div>
												<div className="text-sm text-muted-foreground">Organic Gardener</div>
											</div>
										</cite>
									</blockquote>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</section>
	);
}

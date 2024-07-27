/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Placeholder from "../../../public/placeholder.svg";

export function Testimonial() {
	return (
		<section id="testimonial" className="w-full py-12 md:py-24 lg:py-32">
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
								<CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3">
									{/* <blockquote className="rounded-md border bg-background p-6 shadow-sm">
										<p className="text-muted-foreground">"Using cow dung fertilizer has transformed my garden. My\n vegetables are thriving, and I've never seen such vibrant\n colors and healthy growth."</p>
										<cite className="mt-4 flex items-center gap-2 not-italic">
											<Image src={Placeholder} width="40" height="40" alt="Avatar" className="h-10 w-10 rounded-full" />
											<div>
												<div className="font-medium">Jane Doe</div>
												<div className="text-sm text-muted-foreground">Organic Gardener</div>
											</div>
										</cite>
									</blockquote> */}
									<Card className="p-6 font-poppins">
										<CardContent className="text-xl relative mb-2">
											<svg
												className=" absolute top-0 left-0 text-20xl text-cyan-300"
												fill="none"
												height="24"
												stroke="#719D2A"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												width="24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
												<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
											</svg>
											<br />
											"Generating a testimonial card component with a prompt-driven interface is pretty cool... Well done, Vercel!"
										</CardContent>
										<CardHeader className="pt-0">
											<div className="flex items-center">
												<Image alt="John Doe's Avatar" className="mr-2 rounded-full" height="40" src="/placeholder.svg" width="40" />
												<div>
													<CardTitle className="text-base">John Doe</CardTitle>
													<CardDescription>CEO, Example Corp.</CardDescription>
												</div>
											</div>
										</CardHeader>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</section>
	);
}

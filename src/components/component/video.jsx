/* eslint-disable react/no-unescaped-entities */
import React from "react";

export function Video() {
	return (
		<section id="video" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Video</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Watch How to Use Cow Dung Fertilizer</h2>
						<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Check out our step-by-step video tutorial to see how to properly prepare and apply cow dung fertilizer for your garden.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="rounded-xl overflow-hidden">
						<video className="w-full aspect-video" src="https://www.youtube.com/watch?v=By9wCB9IZp0" controls />
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<h3 className="text-2xl font-bold">Applying Cow Dung Fertilizer</h3>
						<p className="text-muted-foreground">
							In this video, we'll show you the proper way to collect, compost, and apply cow dung fertilizer to your garden for maximum benefits. Follow along and get ready to see your plants thrive!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

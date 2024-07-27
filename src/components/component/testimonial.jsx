/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import sylvia from "../../../public/sylvia.png";
import bambang from "../../../public/bambang.png";
import bagas from "../../../public/bagas.png";
import cahya from "../../../public/cahya.png";

const data = [
	{
		quote: "Saya menanam bermacam sayuran dikebun rumah dan memberikan pupuk organik yang berbahan kotoran sapi ini, sayurannya tumbuh lebih subur dan panennya lebih banyak.",
		name: "Sylvia Putri",
		title: "Ibu Rumah Tangga",
	},
	{
		quote: "Saya sudah menggunakan pupuk organik selama 2 tahun dan hasilnya sangat memuaskan. Hasil panen padi saya meningkat 20% dibandingkan dengan saat saya menggunakan pupuk kimia.",
		name: "Bambang Salman",
		title: "Petani",
	},
	{
		quote: "Biaya produksi yang saya gunakan jadi berkurang, hal tersebut dikarenakan saya menggunakan pupuk organik, dimana harganya lebih murah daripada pupuk kimia.",
		name: "Bagas Ardiansyah",
		title: "Pecinta Tanaman",
	},
	{
		quote: "Menurut saya pupuk organik telah terbukti memberikan banyak sekali manfaat bagi para pengguna, baik dari segi peningkatan hasil panen, kesehatan tanaman, dan keamanan lingkungan.",
		name: "Cahya Arunika",
		title: "Pengamat Pupuk",
	},
];

export function Testimonial() {
	return (
		<section id="testimonial" className="w-full pt-6 md:py-6 lg:py-8 bg-[#719D2A]" data-aos="fade-up">
			<div className="container px-4 md:px-6 md:grid grid-cols-12">
				<div className="flex flex-col items-center justify-center space-y-4 text-center col-span-3">
					<div className="space-y-3">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm" style={{ color: "#719D2A" }} data-aos="fade-up">
							Testimonials
						</div>
						<h2 className="text-2xl font-bold sm:text-3xl text-white" data-aos="fade-up">
							Testimoni dari masyarakat Desa Sumber Salam
						</h2>
						<p className="max-w-[800px] text-muted-foreground md:text-sm/relaxed lg:text-xs/relaxed xl:text-sm/relaxed text-white" data-aos="fade-up">
							Dengarkan testimoni dari para masyarakat Desa Sumber Salam yang telah merasakan manfaat menggunakan pupuk kotoran sapi.
						</p>
					</div>
				</div>
				<div className="col-span-1"></div>
				<div className=" py-12 flex items-center justify-center col-span-8" data-aos="fade-up">
					<Carousel plugins={[Autoplay({ delay: 3000 })]} opts={{ align: "start", loop: true }} className="w-full">
						<CarouselContent>
							<CarouselItem className="sm:basis-1/2 md:basis-1/3">
								<Card className="p-4 font-poppins h-full flex flex-col justify-between">
									<CardContent className="text-sm relative mb-2">
										<svg
											className=" mb-2 top-0 text-20xl text-cyan-300"
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
										"Saya menanam bermacam sayuran dikebun rumah dan memberikan pupuk organik yang berbahan kotoran sapi ini, sayurannya tumbuh lebih subur dan panennya lebih banyak."
									</CardContent>
									<CardHeader className="pt-0">
										<div className="flex items-center">
											<Image alt="Sylvia Putri's Avatar" className="mr-2 aspect-square" style={{ borderRadius: 9999 }} height="40" src={sylvia} width="40" />
											<div>
												<CardTitle className="text-base">Sylvia Putri</CardTitle>
												<CardDescription>Ibu Rumah Tangga</CardDescription>
											</div>
										</div>
									</CardHeader>
								</Card>
							</CarouselItem>
							<CarouselItem className="sm:basis-1/2 md:basis-1/3">
								<Card className="p-4 font-poppins h-full flex flex-col justify-between">
									<CardContent className="text-sm relative mb-2">
										<svg
											className=" mb-2 top-0 text-20xl text-cyan-300"
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
										"Saya sudah menggunakan pupuk organik selama 2 tahun dan hasilnya sangat memuaskan. Hasil panen padi saya meningkat 20% dibandingkan dengan saat saya menggunakan pupuk kimia."
									</CardContent>
									<CardHeader className="pt-0">
										<div className="flex items-center">
											<Image alt="Bambang Salman's Avatar" className="mr-2 aspect-square" style={{ borderRadius: 9999 }} height="40" src={bambang} width="40" />
											<div>
												<CardTitle className="text-base">Bambang Salman</CardTitle>
												<CardDescription>Petani</CardDescription>
											</div>
										</div>
									</CardHeader>
								</Card>
							</CarouselItem>
							<CarouselItem className="sm:basis-1/2 md:basis-1/3">
								<Card className="p-4 font-poppins h-full flex flex-col justify-between">
									<CardContent className="text-sm relative mb-2">
										<svg
											className=" mb-2 top-0 text-20xl text-cyan-300"
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
										"Biaya produksi yang saya gunakan jadi berkurang, hal tersebut dikarenakan saya menggunakan pupuk organik, dimana harganya lebih murah daripada pupuk kimia."
									</CardContent>
									<CardHeader className="pt-0">
										<div className="flex items-center">
											<Image alt="Bagas Ardiansyah's Avatar" className="mr-2 aspect-square" style={{ borderRadius: 9999 }} height="40" src={bagas} width="40" />
											<div>
												<CardTitle className="text-base">Bagas Ardiansyah</CardTitle>
												<CardDescription>Pecinta Tanaman</CardDescription>
											</div>
										</div>
									</CardHeader>
								</Card>
							</CarouselItem>
							<CarouselItem className="sm:basis-1/2 md:basis-1/3">
								<Card className="p-4 font-poppins h-full flex flex-col justify-between">
									<CardContent className="text-sm relative mb-2">
										<svg
											className=" mb-2 top-0 text-20xl text-cyan-300"
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
										"Menurut saya pupuk organik telah terbukti memberikan banyak sekali manfaat bagi para pengguna, baik dari segi peningkatan hasil panen, kesehatan tanaman, dan keamanan lingkungan."
									</CardContent>
									<CardHeader className="pt-0">
										<div className="flex items-center">
											<Image alt="Cahya Arunika's Avatar" className="mr-2 aspect-square" style={{ borderRadius: 9999 }} height="40" width="40" src={cahya} />
											<div>
												<CardTitle className="text-base">Cahya Arunika</CardTitle>
												<CardDescription>Pengamat Pupuk</CardDescription>
											</div>
										</div>
									</CardHeader>
								</Card>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</section>
	);
}

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import problemImage from "../../../public/problem.png";

export function Problem() {
	return (
		<section id="problem" className="w-full md:py-6 lg:py-8">
			<div className="container px-4 md:px-6" data-aos="fade-up">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm" style={{ color: "#719D2A" }} data-aos="fade-up">
							Permasalahan Yang Dihadapi
						</div>
						<h2 data-aos="fade-up" data-aos-duration="600" className="text-2xl font-bold tracking-tighter sm:text-5xl">
							Pencemaran Lingkungan Akibat Kotoran Sapi
						</h2>
						<p data-aos="fade-up" data-aos-duration="700" className="max-w-[980px] mx-auto text-muted-foreground md:text-sm/relaxed lg:text-xs/relaxed xl:text-base/relaxed">
							Banyaknya warga yang beternak sapi mengakibatkan banyaknya kotoran sapi yang dihasilkan, hal tersebut mimbulkan masalah tersendiri pada pengolahan kotoran sapi yang belum ditangani secara optimal. Berikut adalah
							permasalahan lain yang ditemukan oleh kami
						</p>
					</div>
				</div>
				<div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center gap-6 py-8 ">
					<div className="flex flex-col justify-center space-y-4 md:pr-16">
						<ul className="grid gap-4">
							<li className="flex items-start gap-2" data-aos="fade-up">
								<CheckIcon className="h-10 w-10" style={{ color: "#719D2A" }} />
								<div>
									<h3 className="text-base font-bold" data-aos="fade-up">
										Pembuangan Limbah Kotoran Sapi
									</h3>
									<p className="text-muted-foreground text-sm mt-1" data-aos="fade-up" data-aos-duration="600">
										Mayoritas masyarakat masih membuang limbah kotoran sapi ke dalam sungai dan selokan, hal tersebut menyebabkan terjadinya pencemaran lingkungan utamanya pada pencemaran air.{" "}
									</p>
								</div>
							</li>
							<li className="flex items-start gap-2" data-aos="fade-up">
								<CheckIcon className="h-10 w-10" style={{ color: "#719D2A" }} />
								<div>
									<h3 className="text-base font-bold" data-aos="fade-up">
										Kesadaran Masyarakat Untuk Mengolah Limbah Kotoran Sapi
									</h3>
									<p className="text-muted-foreground text-sm mt-1" data-aos="fade-up" data-aos-duration="600">
										Kurangnya kesadaran masyarakat untuk mengolah limbah kotoran sapi, sehingga kotoran sapi belum bisa dimanfaatkan secara maksimal.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-2" data-aos="fade-up">
								<CheckIcon className="h-10 w-10" style={{ color: "#719D2A" }} />
								<div>
									<h3 className="text-base font-bold" data-aos="fade-up">
										Ketergantungan Masyarakat Terhadap Pupuk Non-Organik
									</h3>
									<p className="text-muted-foreground text-sm mt-1" data-aos="fade-up" data-aos-duration="600">
										Intensitas penggunaan pupuk non organik yang masih tinggi di masyarakat petani Desa Sumber Salam. Hal ini disebabkan oleh ketergantungan petani terhadap pupuk non-organik untuk peningkatan hasil
										produksinya
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="md:w-9/12 my-2">
						<Image src={problemImage} data-aos="fade-up" data-aos-duration="400" alt="Problem of Cow Dung" className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full" />
					</div>
				</div>
			</div>
		</section>
	);
}

import { CheckIcon } from "lucide-react";
import Image from "next/image";
import programImage from "../../../public/program.png";

export function Program() {
	return (
		<section id="program" className=" pb-20 md:pb-32">
			<div className="">
				<div className="w-full bg-[#719D2A] grid grid-cols-1 md:grid-cols-2 my-3 md:my-6 lg:my-12 place-items-center">
					<div className=" ms-12 my-6 md:my-8 bg-black" style={{ color: "white" }}>
						<h2>Tentang Program</h2>
						<h1 className=" text-3xl font-bold">Kenalan Lebih Dekat Dengan Program Bersama Besties</h1>
					</div>
					<div className="mx-12 mb-6 md:my-8" style={{ color: "white" }}>
						<p className=" text-sm text-justify ">
							Program Bersama Besties diartikan sebagai program Sumber Salam Bebas Kotoran Sapi. Program ini dilakukan karena adanya potensi Desa Sumber Salam pada bidang pertanian dan banyaknya warga yang beternak sapi,
							tingginya jumlah kotoran sapi yang dihasilkan mendorong lahirnya ide untuk memanfaatkannya utamanya pada bidang pertanian
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12 container px-4 md:px-4">
					<Image src={programImage} data-aos="fade-up" data-aos-duration="400" alt="Problem of Cow Dung" className="order-2 md:order-first mx-auto overflow-hidden rounded-xl object-cover sm:w-full" />

					<div className="mt-6 md:mt-0">
						<div className=" text-base mb-2">Manfaat adanya program bersama besties:</div>
						<div className="flex flex-col justify-center space-y-4">
							<ul className="grid gap-4">
								<li className="flex items-start gap-2" data-aos="fade-up">
									<CheckIcon className="h-10 w-10" style={{ color: "#719D2A" }} />
									<div>
										<h3 className="text-base font-bold" data-aos="fade-up">
											Pengurangan Limbah Kotoran Sapi
										</h3>
										<p className="text-muted-foreground text-sm mt-1" data-aos="fade-up" data-aos-duration="600">
											Dengan memanfaatkan kotoran sapi yang ada berdampak pada berkurangnya pembuangan limbah kotoran sapi ke dalam selokan, sehingga akan mengurangi pencemaran lingkungan(air dan udara).
										</p>
									</div>
								</li>
								<li className="flex items-start gap-2" data-aos="fade-up">
									<CheckIcon className="h-10 w-10" style={{ color: "#719D2A" }} />
									<div>
										<h3 className="text-base font-bold" data-aos="fade-up">
											Meningkatnya Pengetahuan dan Kesadaran Masyarakat
										</h3>
										<p className="text-muted-foreground text-sm mt-1" data-aos="fade-up" data-aos-duration="600">
											Bersama Besties akan memberikan pengetahuan yang lebih luas kepada masyarakat, dengan pengetahuan ini diharapkan masyarakat dapat lebih mudah mengolah kotoran sapi serta peduli terhadap pencemaran
											lingkungan akibat kotoran sapi.
										</p>
									</div>
								</li>
								<li className="flex items-start gap-2" data-aos="fade-up">
									<CheckIcon className="h-10 w-10" style={{ color: "#719D2A" }} />
									<div>
										<h3 className="text-base font-bold" data-aos="fade-up">
											Pengurangan Pencemaran Lingkungan
										</h3>
										<p className="text-muted-foreground text-sm mt-1" data-aos="fade-up" data-aos-duration="600">
											Pencemaran lingkungan terjadi dikarenakan kotoran sapi yang dibuang sembarang, saat kotoran sapi dapat diolah menjadi pupuk, akan berdampak baik pada pengurangan pencemaran lingkungan.
										</p>
									</div>
								</li>
								<li className="flex items-start gap-2" data-aos="fade-up">
									<CheckIcon className="h-10 w-10" style={{ color: "#719D2A" }} />
									<div>
										<h3 className="text-base font-bold" data-aos="fade-up">
											Pupuk Organik Mendukung Pertanian Berkelanjutan
										</h3>
										<p className="text-muted-foreground text-sm mt-1" data-aos="fade-up" data-aos-duration="600">
											Pemanfaatan kotoran sapi menjadi pupuk organik akan mengurangi penggunaan bahan kimia pada pertanian dan sejalan dengan pertanian berkelanjutan untuk menjaga produktivitas tanah dalam jangka
											panjang, melestarikan lingkungan, dan memenuhi kebutuhan pangan generasi sekarang dan mendatang tanpa merusak sumber daya alam
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

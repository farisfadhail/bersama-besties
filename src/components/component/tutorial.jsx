"use client";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import dekomposer from "../../../public/persiapan_larutan_dekomposer.jpg";
import bahan from "../../../public/persiapan_bahan.jpg";
import pencampuran from "../../../public/pencampuran.jpg";
import pendiaman from "../../../public/pendiaman.jpg";
import pembalikan from "../../../public/pembalikan.jpg";
import ujiCoba from "../../../public/uji_coba.jpg";

export function Tutorial() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedPhoto, setSelectedPhoto] = useState(null);
	const handlePhotoClick = (photo) => {
		setSelectedPhoto(photo);
		setIsModalOpen(true);
	};
	const handleModalClose = () => {
		setIsModalOpen(false);
		setSelectedPhoto(null);
	};
	return (
		<section id="tutorial" className="w-full md:py-4 lg:py-8">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm" style={{ color: "#719D2A" }} data-aos="fade-up">
							Tutorial
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-aos="fade-up">
							Langkah Pembuatan
						</h2>
						<p className="max-w-[1000px]  text-justify md:text-center mx-auto text-muted-foreground md:text-sm/relaxed lg:text-xs/relaxed xl:text-base/relaxed" data-aos="fade-up">
							Pemanfaatan kotoran sapi menjadi pupuk organik dapat dibuat dalam waktu 7 hari, untuk membuat pupuk organik memerlukan alat gembor, cangkul, parang, karung bekas ukuran 25 kg, dan bahan dekomposer biokompos cair
							1 tutup botol, dekomposer biokompos bubuk 3 sdm, jerami 2 karung, dedak 5kg, air 6 liter, serta kotoran sapi 2 karung. Berikut adalah langkah pembuatannya
						</p>
					</div>
				</div>
				<div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
					<div className="relative after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 pl-6 after:left-0 grid gap-10">
						<div className="grid gap-3 text-sm relative">
							<div className="aspect-square w-5 bg-[#719D2A] absolute left-0 translate-x-[-34.5px] z-10 top-1" style={{ borderRadius: 9999 }} />
							<div className="font-medium text-lg" data-aos="fade-up">
								Persiapan Larutan Dekomposer
							</div>
							<div className="text-muted-foreground" data-aos="fade-up">
								Larutkan 1 tutup botol biokompos cair, 3 sendok makan biokompos bubuk dan dedak 5kg yang dicampur dengan 6 liter air.
							</div>
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePhotoClick(dekomposer)} data-aos="fade-up">
								<Image src={dekomposer} alt="Photo" width={80} height={80} style={{ borderRadius: 9999 }} className="aspect-square" />
								<span className="text-muted-foreground">Photo 1</span>
							</div>
						</div>
						<div className="grid gap-3 text-sm relative">
							<div className="aspect-square w-5 bg-[#719D2A] absolute left-0 translate-x-[-34.5px] z-10 top-1" style={{ borderRadius: 9999 }} />
							<div className="font-medium text-lg" data-aos="fade-up">
								Persiapan Bahan
							</div>
							<div className="text-muted-foreground" data-aos="fade-up">
								Kotoran sapi non fermentasi 50kg dan jerami 2 karung yang telah dicacah halus. Simpan bahan pada tempat yang ternaungi.
							</div>
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePhotoClick(bahan)} data-aos="fade-up">
								<Image src={bahan} alt="Photo" width={80} height={80} style={{ borderRadius: 9999 }} className="aspect-square" />
								<span className="text-muted-foreground">Photo 2</span>
							</div>
						</div>
						<div className="grid gap-3 text-sm relative">
							<div className="aspect-square w-5 bg-[#719D2A] absolute left-0 translate-x-[-34.5px] z-10 top-1" style={{ borderRadius: 9999 }} />
							<div className="font-medium text-lg" data-aos="fade-up">
								Tahap Pencampuran
							</div>
							<div className="text-muted-foreground" data-aos="fade-up">
								Campurkan seluruh bahan yang akan digunakan kemudian dicampur dengan larutan yang telah disiapkan.
							</div>
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePhotoClick(pencampuran)} data-aos="fade-up">
								<Image src={pencampuran} alt="Photo" width={80} height={80} style={{ borderRadius: 9999 }} className="aspect-square" />
								<span className="text-muted-foreground">Photo 3</span>
							</div>
						</div>
						<div className="grid gap-3 text-sm relative">
							<div className="aspect-square w-5 bg-[#719D2A] absolute left-0 translate-x-[-34.5px] z-10 top-1" style={{ borderRadius: 9999 }} />
							<div className="font-medium text-lg" data-aos="fade-up">
								Tahap Pendiaman
							</div>
							<div className="text-muted-foreground" data-aos="fade-up">
								Setelah semua bahan tercampur, tutup dengan karung bekas agar tetap lembab.
							</div>
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePhotoClick(pendiaman)} data-aos="fade-up">
								<Image src={pendiaman} alt="Photo" width={80} height={80} style={{ borderRadius: 9999 }} className="aspect-square" />
								<span className="text-muted-foreground">Photo 4</span>
							</div>
						</div>
						<div className="grid gap-3 text-sm relative">
							<div className="aspect-square w-5 bg-[#719D2A] absolute left-0 translate-x-[-34.5px] z-10 top-1" style={{ borderRadius: 9999 }} />
							<div className="font-medium text-lg" data-aos="fade-up">
								Tahap Pembalikan
							</div>
							<div className="text-muted-foreground" data-aos="fade-up">
								Lakukan pembalikan selama 2 hari sekali selama 1 minggu.
							</div>
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePhotoClick(pembalikan)} data-aos="fade-up">
								<Image src={pembalikan} alt="Photo" width={80} height={80} style={{ borderRadius: 9999 }} className="aspect-square" />
								<span className="text-muted-foreground">Photo 5</span>
							</div>
						</div>
						<div className="grid gap-3 text-sm relative">
							<div className="aspect-square w-5 bg-[#719D2A] absolute left-0 translate-x-[-34.5px] z-10 top-1" style={{ borderRadius: 9999 }} />
							<div className="font-medium text-lg" data-aos="fade-up">
								Uji Coba Pupuk
							</div>
							<div className="text-muted-foreground" data-aos="fade-up">
								Uji cobakan hasil pembuatan pupuk pada tanaman apabila pupuk memiliki kondisi seperti berikut,
								<ul className="ms-8">
									<li data-aos="fade-up">• Aroma : seperti bau tanah pada umumnya</li>
									<li data-aos="fade-up">• Warna : coklat kehitaman seperti tanah</li>
									<li data-aos="fade-up">• Volume/berat pupuk : menyusut hingga 40%</li>
									<li data-aos="fade-up">• Suhu : lebih rendah dari suhu ruang (lebih dingin dibanding suhu ruang)</li>
								</ul>
							</div>
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => handlePhotoClick(ujiCoba)} data-aos="fade-up">
								<Image src={ujiCoba} alt="Photo" width={80} height={80} style={{ borderRadius: 9999 }} className="aspect-square" />
								<span className="text-muted-foreground">Photo 6</span>
							</div>
						</div>
					</div>
					{isModalOpen && (
						<Dialog open={isModalOpen} onOpenChange={handleModalClose}>
							<DialogContent className="max-w-[75vw] max-h-[75vh] overflow-auto backdrop-blur-sm">
								<Image src={selectedPhoto} alt="Selected Photo" width={800} height={800} className="w-full" />
							</DialogContent>
						</Dialog>
					)}
				</div>
			</div>
		</section>
	);
}

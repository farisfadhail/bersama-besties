/* eslint-disable react/no-unescaped-entities */
"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export function Impact() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};
	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	return (
		<section id="impact" className="w-full md:py-6 lg:py-8">
			<div className="container px-4 md:px-6" data-aos="fade-up">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm" style={{ color: "#719D2A" }} data-aos="fade-up">
							Dampak Pupuk Organik dan Non-Organik
						</div>
						<h2 data-aos="fade-up" data-aos-duration="600" className="text-xl font-bold tracking-tighter sm:text-4xl">
							Yuk Ketahui Dampak Pupuk Organik dan Non-Organik
						</h2>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-4">
							<li className="flex items-start gap-2" data-aos="fade-up">
								<div>
									<h3 className="text-base font-bold" data-aos="fade-up">
										Pupuk Non-Organik
									</h3>
									<p className="text-muted-foreground text-sm mt-1" data-aos="fade-up" data-aos-duration="600">
										Pupuk non organik atau mineral merupakan pupuk dari senyawa non organik. Pupuk non organik merupakan pupuk yang dihasilkan dari serangkaian proses kimia atau penggunaan bahan kimia, sehingga dalam
										penggunaannya harus tepat dosis dan terukur. Pupuk non organik mampu menyediakan hara dalam waktu relatif lebih cepat.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-2" data-aos="fade-up">
								<div>
									<h3 className="text-base font-bold" data-aos="fade-up">
										Dampak Positif
									</h3>
									<ul className="text-muted-foreground text-sm mt-1 ms-6" data-aos="fade-up" data-aos-duration="600">
										<li>• Efek cepat</li>
										<li>• Kandungan nutrisi yang terukur</li>
										<li>• Mudah digunakan</li>
									</ul>
								</div>
							</li>
							<li className="flex items-start gap-2" data-aos="fade-up">
								<div>
									<h3 className="text-base font-bold" data-aos="fade-up">
										Dampak Negatif
									</h3>
									<ul className="text-muted-foreground text-sm mt-1 ms-6" data-aos="fade-up" data-aos-duration="600">
										<li>• Dapat menyebabkan pencemaran lingkungan</li>
										<li>• Dapat membunuh mikroorganisme tanah</li>
										<li>• Meningkatkan keasaman tanah</li>
										<li>• Meningkatkan resistensi hama dan penyakit</li>
										<li>• Membuat tanah menjadi keras</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
					<div className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-4">
							<li className="flex items-start gap-2" data-aos="fade-up">
								<div>
									<h3 className="text-base font-bold" data-aos="fade-up">
										Pupuk Organik
									</h3>
									<p className="text-muted-foreground text-sm mt-1" data-aos="fade-up" data-aos-duration="600">
										Pupuk organik adalah jenis pupuk yang berasal dari bahan-bahan alami yang mengandung bahan organik, seperti bahan tumbuhan, hewan, atau limbah organik lainnya. Sederhananya, pupuk organik adalah pupuk
										yang terbuat dari sisa-sisa makhluk hidup.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-2" data-aos="fade-up">
								<div>
									<h3 className="text-base font-bold" data-aos="fade-up">
										Dampak Positif
									</h3>
									<ul className="text-muted-foreground text-sm mt-1 ms-6" data-aos="fade-up" data-aos-duration="600">
										<li>• Meningkatkan kualitas & kesuburan tanah</li>
										<li>• Ramah lingkungan & meningkatkan produksi tanaman</li>
										<li>• Mencegah erosi</li>
									</ul>
								</div>
							</li>
							<li className="flex items-start gap-2" data-aos="fade-up">
								<div>
									<h3 className="text-base font-bold" data-aos="fade-up">
										Dampak Negatif
									</h3>
									<ul className="text-muted-foreground text-sm mt-1 ms-6" data-aos="fade-up" data-aos-duration="600">
										<li>• Ketersediaan yang terbatas</li>
										<li>• Kandungan nutrisi yang bervariasi</li>
										<li>• Waktu yang dibutuhkan lebih lama</li>
										<li>• Rentan terhadap hama dan penyakit</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex justify-end">
					<div
						data-aos="fade-up"
						data-aos-duration="500"
						className="inline-flex h-12 items-center justify-center rounded-md bg-[#719D2A] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#719D2A]/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
						onClick={() => handleOpenModal()}
					>
						Baca lebih lanjut
					</div>
				</div>
			</div>
			{isModalOpen && (
				<Dialog open={isModalOpen} onOpenChange={handleModalClose}>
					<DialogContent className="max-w-[75vw] max-h-[75vh] overflow-auto backdrop-blur-sm">
						<div>
							<div className="w-full bg-[#719D2A] h-20 mt-6 flex items-center">
								<h1 className="ms-8 text-white font-semibold text-lg">Pupuk Non-Organik</h1>
							</div>
							<ul>
								<li>
									<div className="ms-8 mt-4">
										<h3 className="text-base font-bold">Dampak Positif :</h3>
										<ul className="text-muted-foreground text-sm mt-1 ms-6 space-y-1" data-aos-duration="600">
											<li>• Efek cepat</li>
											<li>Pupuk non-organik memberikan efek yang cepat dalam meningkatkan pertumbuhan tanaman.</li>
											<li>• Kandungan nutrisi yang terukur</li>
											<li>Kandungan nutrisi dalam pupuk non-organik dapat ditentukan secara akurat, sehingga memudahkan dalam pemberian dosis.</li>
											<li>• Mudah digunakan</li>
											<li>Pupuk non-organik mudah diaplikasikan dan tersedia dalam berbagai bentuk.</li>
										</ul>
									</div>
								</li>
								<li>
									<div className="ms-8 mt-4">
										<h3 className="text-base font-bold">Dampak Negatif :</h3>
										<ul className="text-muted-foreground text-sm mt-1 ms-6 space-y-0.5" data-aos-duration="600">
											<li>• Mencemari lingkungan</li>
											<li>Penggunaan pupuk non-organik secara berlebihan dapat menyebabkan pencemaran tanah, air, dan udara.</li>
											<li>• Membunuh mikroorganisme tanah</li>
											<li>Bahan kimia dalam pupuk non-organik dapat membunuh mikroorganisme tanah yang bermanfaat.</li>
											<li>• Meningkatkan keasaman tanah</li>
											<li>Penggunaan pupuk non-organik dalam jangka panjang dapat menyebabkan tanah menjadi masam.</li>
											<li>• Meningkatkan resistensi hama dan penyakit</li>
											<li>Penggunaan pestisida yang seringkali dikombinasikan dengan pupuk non-organik dapat menyebabkan hama dan penyakit menjadi resisten terhadap pestisida.</li>
											<li>• Membuat tanah menjadi keras</li>
											<li>Penggunaan pupuk non-organik dalam jangka panjang dapat membuat struktur tanah menjadi keras dan mengurangi kemampuannya dalam menahan air.</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						<div>
							<div className="w-full bg-[#719D2A] h-20 mt-6 flex items-center">
								<h1 className="ms-8 text-white font-semibold text-lg">Pupuk Organik</h1>
							</div>
							<ul>
								<li>
									<div className="ms-8 mt-4">
										<h3 className="text-base font-bold">Dampak Positif :</h3>
										<ul className="text-muted-foreground text-sm mt-1 ms-6 space-y-1" data-aos-duration="600">
											<li>• Meningkatkan kualitas tanah & kesuburan tanah</li>
											<li>
												Pupuk organik membantu memperbaiki struktur tanah, meningkatkan kapasitas menahan air, dan meningkatkan aktivitas mikroorganisme tanah yang bermanfaat. Pupuk organik menyediakan nutrisi secara
												perlahan dan berkelanjutan, sehingga tanaman dapat menyerap nutrisi secara optimal.
											</li>
											<li>• Ramah lingkungan & Meningkatkan produksi tanaman</li>
											<li>dan kesehatan manusia. Dalam jangka panjang, penggunaan pupuk organik dapat meningkatkan produktivitas tanaman dan kualitas hasil panen.</li>
											<li>• Mencegah erosi</li>
											<li>Penggunaan pupuk organik membantu menjaga kestabilan tanah dan mengurangi risiko erosi.</li>
										</ul>
									</div>
								</li>
								<li>
									<div className="ms-8 mt-4">
										<h3 className="text-base font-bold">Dampak Negatif :</h3>
										<ul className="text-muted-foreground text-sm mt-1 ms-6 space-y-0.5" data-aos-duration="600">
											<li>• Ketersedian yang terbatas</li>
											<li>Sumber bahan baku pupuk organik seringkali terbatas dan \ harganya cenderung lebih mahal dibandingkan pupuk non- organik.</li>
											<li>• Kandungan nutrisi yang bervariasi</li>
											<li>Kandungan nutrisi dalam pupuk organik dapat bervariasi tergantung pada bahan bakunya, sehingga sulit untuk menentukan dosis yang tepat.</li>
											<li>• Waktu yang dibutuhkan lebih lama</li>
											<li>Efektivitas pupuk organik dalam meningkatkan kesuburan tanah membutuhkan waktu yang lebih lama dibandingkan pupuk non organik.</li>
											<li>• Rentan terhadap hama dan penyakit</li>
											<li>Tanaman yang dipupuk dengan pupuk organik mungkin lebih rentan terhadap serangan hama dan penyakit karena tidak memiliki perlindungan tambahan dari bahan kimia</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</DialogContent>
				</Dialog>
			)}
		</section>
	);
}

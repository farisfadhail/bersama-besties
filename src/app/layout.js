import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AOSProvider from "@/components/component/AosProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Bersama Besties",
	description: "Create by KKN 144 SumberSalam",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
			<body className={inter.className} style={{ fontFamily: "poppins" }}>
				{/* <SpeedInsights></SpeedInsights> */}
				<Analytics>
					<AOSProvider>{children}</AOSProvider>
				</Analytics>
			</body>
		</html>
	);
}

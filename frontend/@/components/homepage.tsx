/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/tDPHTO4dgtC
 */
import Link from "next/link.js";
import { CardContent, Card } from "@/components/ui/card";

export function Homepage() {
	return (
		<div className="dark bg-[#1F2937] min-h-screen flex flex-col">
			<header className="flex justify-between items-center p-6 bg-[#4B5563] text-white rounded-none">
				<h1 className="text-3xl font-semibold">Welcome to Our Platform</h1>
				<Link className="text-white text-sm underline" href="#">
					Explore More
				</Link>
			</header>
			<main className="flex-1 p-6">
				<section className="mb-6 bg-[#374151] p-6 rounded-none flex flex-col md:flex-row">
					<div className="w-full md:w-1/2">
						<img
							className="mb-4 md:mb-0"
							height="200"
							src="/placeholder.svg"
							style={{
								aspectRatio: "200/200",
								objectFit: "cover",
							}}
							width="200"
						/>
					</div>
					<div className="w-full md:w-1/2">
						<h2 className="text-[#D1D5DB] text-2xl font-semibold mb-4">
							About Us
						</h2>
						<p className="text-gray-400 text-sm">
							We are a dedicated team of professionals committed to providing
							the best services to our clients. We believe in the power of
							communication and strive to create a platform that facilitates
							seamless interactions.
						</p>
					</div>
				</section>
				<section className="mb-6 bg-[#1F2937] p-6 rounded-none flex flex-col md:flex-row-reverse">
					<div className="w-full md:w-1/2">
						<img
							className="mb-4 md:mb-0"
							height="200"
							src="/placeholder.svg"
							style={{
								aspectRatio: "200/200",
								objectFit: "cover",
							}}
							width="200"
						/>
					</div>
					<div className="w-full md:w-1/2">
						<h2 className="text-[#D1D5DB] text-2xl font-semibold mb-4">
							Our Story
						</h2>
						<p className="text-gray-400 text-sm">
							Our journey began with a simple idea: to create a platform that
							empowers individuals and businesses to communicate effectively.
							Over the years, we have evolved and adapted to the changing needs
							of our clients, but our commitment to excellence has remained
							constant.
						</p>
					</div>
				</section>
				<section className="mb-6 bg-[#374151] p-6 rounded-none flex flex-col md:flex-row">
					<div className="w-full md:w-1/2">
						<img
							className="mb-4 md:mb-0"
							height="200"
							src="/placeholder.svg"
							style={{
								aspectRatio: "200/200",
								objectFit: "cover",
							}}
							width="200"
						/>
					</div>
					<div className="w-full md:w-1/2">
						<h2 className="text-[#D1D5DB] text-2xl font-semibold mb-4">
							Our Service
						</h2>
						<Card className="bg-[#1F2937] shadow-lg rounded-none">
							<CardContent>
								<h3 className="text-[#D1D5DB] text-lg mb-2">Service 1</h3>
								<p className="text-gray-400 text-sm">
									Description of Service 1
								</p>
							</CardContent>
						</Card>
					</div>
				</section>
				<section className="mb-6 bg-[#1F2937] p-6 rounded-none flex flex-col md:flex-row-reverse">
					<div className="w-full md:w-1/2">
						<img
							className="mb-4 md:mb-0"
							height="200"
							src="/placeholder.svg"
							style={{
								aspectRatio: "200/200",
								objectFit: "cover",
							}}
							width="200"
						/>
					</div>
					<div className="w-full md:w-1/2">
						<h2 className="text-[#D1D5DB] text-2xl font-semibold mb-4">
							Our Advantages
						</h2>
						<p className="text-gray-400 text-sm">
							With our platform, you get the advantage of seamless
							communication, advanced features, and dedicated support. We are
							constantly innovating to provide you with the best possible
							experience.
						</p>
					</div>
				</section>
			</main>
			<footer className="p-6 bg-[#4B5563] text-white rounded-none">
				<div className="flex justify-between items-center">
					<p className="text-sm">© 2024 Our Platform</p>
					<div className="flex space-x-2">
						<Link className="text-white text-sm underline" href="#">
							Terms
						</Link>
						<Link className="text-white text-sm underline" href="#">
							Privacy
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}

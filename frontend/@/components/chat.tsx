import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";

enum Side {
	Left = "left",
	Right = "right",
}

export function Chat() {
	return (
		<div key="1" className="bg-[#1E1E2D] h-screen flex flex-col">
			<section className="w-full bg-[#2D303E] p-1">
				<header className="flex justify-between items-center mb-2">
					<h2 className="flex-grow break-words ml-2 text-white text-sm font-semibold">
						Discussing Project Milestones Discussing Project Milestones
						Discussing Project Milestones Discussing Project Milestones
					</h2>
					<div className="flex items-center space-x-2">
						<Select className="w-24">
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select bot" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="bot1">Bot 1</SelectItem>
								<SelectItem value="bot2">Bot 2</SelectItem>
								<SelectItem value="bot3">Bot 3</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</header>
			</section>
			<section className="flex-grow flex flex-col flex-1 p-6">
				<ScrollArea className="flex-grow mb-6">
					<div className="space-y-4">
						<Message
							content="How does it sound for you?"
							backgroundColor="#6C5DD3"
							textColor="text-white"
							side={Side.Right}
						/>
						<Message
							content="Yes, that sounds good!"
							backgroundColor="#353945"
							textColor="text-white"
							side={Side.Left}
						/>
						<Message
							content="How does it sound for you?"
							backgroundColor="#6C5DD3"
							textColor="text-white"
							side={Side.Right}
						/>
						<Message
							content="Yes, that sounds good!"
							backgroundColor="#353945"
							textColor="text-white"
							side={Side.Left}
						/>
					</div>
				</ScrollArea>
				<div className="flex items-center space-x-2">
					<Input
						className="flex-1"
						placeholder="Type your message here..."
						type="text"
					/>
					<Button className="bg-[#6C5DD3] text-white">
						<SendIcon />
					</Button>
				</div>
			</section>
		</div>
	);
}

type MessageProps = {
	content: string;
	backgroundColor: string;
	textColor: string;
	side: Side;
};

function Message({ content, backgroundColor, textColor, side }: MessageProps) {
	const flex_direction = side === Side.Left ? "flex-row" : "flex-row-reverse";
	const avatar_margin = side === Side.Left ? "mr-2" : "ml-2";
	return (
		<div
			className={`flex flex-1 items-end float-${side} justify-between ${flex_direction}`}
		>
			<Avatar className={avatar_margin}>
				<AvatarImage
					alt="Russel Hue"
					src="/avatar_placeholder.svg?height=40&width=40"
				/>
			</Avatar>
			<div
				className={`rounded-lg p-2 bg-[${backgroundColor}] ${textColor} text-sm`}
			>
				{content}
			</div>
		</div>
	);
}

function SendIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="text-white"
		>
			<title>Send</title>
			<path d="m22 2-7 20-4-9-9-4Z" />
			<path d="M22 2 11 13" />
		</svg>
	);
}

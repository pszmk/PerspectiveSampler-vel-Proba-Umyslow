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

export function BotSelect() {
	return (
		<div className="flex-grow flex flex-col items-center justify-center">
			{/* <div className="rounded-lg w-full pt-5 pb-5 pl-2 pr-2 bg-neutral flex flex-col items-center"> */}
			<h1 className="text-4xl text-white font-bold mb-4">Welcome!</h1>
			<section className="max-w-80 w-full p-1 flex items-center">
				<header className="flex-grow light  space-x-2 mb-2">
					<Select
						onValueChange={() => {
							// TODO: Navigate to /chat using the router
							location.href = "/chat";
						}}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select bot" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="bot1" className="hover:bg-primary">
								Bot 1
							</SelectItem>
							<SelectItem value="bot2" className="hover:bg-primary">
								Bot 2
							</SelectItem>
							<SelectItem value="bot3" className="hover:bg-primary">
								Bot 3
							</SelectItem>
						</SelectContent>
					</Select>
				</header>
			</section>
			{/* </div> */}
		</div>
	);
}

export function Messenger() {
	return (
		<div className="flex flex-1 flex-col">
			<ScrollArea className="flex-grow mb-6">
				<div className="space-y-4">
					<div className="w-full max-w-25 rounded-lg bg-neutral font-semibold p-4 text-white text-sm">
						<div className="text-gray-400 font-light italic">
							Discussion topic:
						</div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					</div>
					<Message
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?"
						backgroundColor="bg-primary"
						textColor="text-white"
						side={Side.Right}
					/>
					<Message
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
						backgroundColor="bg-secondary"
						textColor="text-white"
						side={Side.Left}
					/>
					<Message
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?"
						backgroundColor="bg-primary"
						textColor="text-white"
						side={Side.Right}
					/>
					<Message
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
						backgroundColor="bg-secondary"
						textColor="text-white"
						side={Side.Left}
					/>
				</div>
			</ScrollArea>
			<div className="flex items-center space-x-2">
				<Input
					className="light flex-1"
					placeholder="Type your message here..."
					type="text"
				/>
				<Button className="bg-accent text-white">
					<SendIcon />
				</Button>
				<Button className="bg-destructive text-white">
					<TrashIcon />
				</Button>
			</div>
		</div>
	);
}

export function Chat(props: { children: JSX.Element[] }) {
	return (
		<div key="1" className="dark bg-muted h-screen flex flex-col">
			<section className="flex-grow flex flex-col flex-1 p-6">
				{props.children}
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
		<div className={`flex flex-1 items-center float-${side} ${flex_direction}`}>
			<Avatar className={avatar_margin}>
				<AvatarImage
					alt="Russel Hue"
					src="/avatar_placeholder.svg?height=40&width=40"
				/>
			</Avatar>
			<div className={`rounded-lg ${backgroundColor} p-2 ${textColor} text-sm`}>
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

function TrashIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Trash</title>
			<path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" />
		</svg>
	);
}

import type { MetaFunction } from "@remix-run/node";
import { Chat, Messenger, BotSelect } from "@/components/chat";
import { BoxSelect } from "lucide-react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function ChatPage() {
	return <Chat>{[<BotSelect />]}</Chat>;
}

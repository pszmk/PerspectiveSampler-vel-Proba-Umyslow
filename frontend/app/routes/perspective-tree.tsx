import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Chat, Messenger, BotSelect } from "@/components/chat";
import * as Progress from "@radix-ui/react-progress";
import { BoxSelect } from "lucide-react";
import appStylesHref from "../perspective-tree.css";
import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

function Node({ left, top, radius, text, type }) {
  const style = {
    position: "absolute",
    top,
    left,
    width: radius,
    height: `${radius}px`,
    marginTop: `-${radius / 2}px`,
    marginLeft: `-${radius / 2}px`,
  };

  const textNode = (
    <span className="text-white text-sm text-center">{text}</span>
  );

  if (type === "primary") {
    return (
      <div
        className="rounded-full border-4 border-[#6C5DD3] bg-[#2e303d] flex items-center justify-center"
        style={style}
      >
        {textNode}
      </div>
    );
  } else if (type === "secondary") {
    return (
      <div
        className="rounded-full border-4 border-[#d555bc] bg-[#2e303d] flex items-center justify-center"
        style={style}
      >
        {textNode}
      </div>
    );
  } else {
    return (
      <div
        className="rounded-full border-4 border-[#3c3c47] bg-[#282835] flex items-center justify-center [&>span]:text-[#62626c] [&>span]:text-2xl"
        style={style}
      >
        {textNode}
      </div>
    );
  }
}

export default function ChatPage() {
  return (
    <Chat>
      {[
        <div key="idk" className="w-full h-full">
          <img
            alt="idk"
            src="/background.png"
            style={{
              opacity: "0.05",
              position: "absolute",
              right: "1.5rem",
              left: "1.5rem",
              top: "1.5rem",
              zIndex: "0",
              objectFit: "fill",
              bottom: "1.5rem",
              height: "calc(100% - 3rem)",
              width: "calc(100% - 3rem)",
            }}
          />
          <Link to="/chat">
            <Button className="absolute left-[1rem] top-[1rem]">Back</Button>
          </Link>
          <div className="text-white text-4xl text-center  font-light">
            Tree of Perspectives
          </div>
          <div className="text-md mt-2 text-gray-200 font-light text-center">
            Navigating Progress: The Role of Individual Ambition and Government
            Support
          </div>
          <div
            className="absolute m-10 mt-20 left-0 top-0"
            style={{
              width: "calc(100vw - 5rem)",
              height: "calc(100vh - 10rem)",
            }}
          >
            <Node top="80%" left="30%" radius={120} type="primary" text="For" />
            <Node
              top="80%"
              left="70%"
              radius={120}
              type="primary"
              text="Against"
            />
            <Node top="93%" left="65%" radius={50} type="muted" text="?" />
            <Node top="93%" left="35%" radius={50} type="muted" text="?" />
            <Node
              top="60%"
              left="20%"
              radius={80}
              type="secondary"
              text="Freedom"
            />
            <Node top="60%" left="80%" radius={80} type="muted" text="?" />
            <Node top="40%" left="80%" radius={80} type="muted" text="?" />
            <Node top="20%" left="80%" radius={80} type="muted" text="?" />
            <Node
              top="60%"
              left="60%"
              radius={80}
              type="secondary"
              text="Collective"
            />
            <Node
              top="40%"
              left="60%"
              radius={80}
              type="secondary"
              text="State support"
            />
            <Node top="50%" left="10%" radius={50} type="muted" text="?" />
            <Node top="50%" left="90%" radius={50} type="muted" text="?" />
            <Node top="50%" left="70%" radius={50} type="muted" text="?" />
            <Node top="50%" left="50%" radius={50} type="muted" text="?" />
            <Node top="50%" left="30%" radius={50} type="muted" text="?" />
            <Node top="20%" left="20%" radius={80} type="muted" text="?" />
            <Node top="40%" left="20%" radius={80} type="muted" text="?" />
            <Node top="40%" left="40%" radius={80} type="muted" text="?" />
            <Node top="10%" left="10%" radius={50} type="muted" text="?" />
            <Node top="10%" left="30%" radius={50} type="muted" text="?" />
            <Node top="10%" left="70%" radius={50} type="muted" text="?" />
            <Node top="10%" left="90%" radius={50} type="muted" text="?" />
          </div>
          <div className="text-white absolute bottom-0 left-0 right-0 h-[90px] flex flex-col justify-center items-center">
            <div className="mb-2">
              Explored <b>22%</b> of the Tree!
            </div>
            {/* <img src='/progress_bar.png'/> */}
            <Progress.Root className="ProgressRoot" value={22}>
              <Progress.Indicator
                className="ProgressIndicator"
                style={{ transform: `translateX(-${100 - 22}%)` }}
              />
            </Progress.Root>
          </div>
        </div>,
      ]}
    </Chat>
  );
}

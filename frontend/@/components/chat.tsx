import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import { AnimatePresence, motion } from "framer-motion";
import { green, mauve, mauveA, red } from "@radix-ui/colors";
import { styled } from "@stitches/react";

import * as Icons from "@radix-ui/react-icons";

import * as ToastPrimitive from "@radix-ui/react-toast";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";

enum Side {
  Left = "left",
  Right = "right",
}

const debates = [
  {
    avatar: "/thatcher_avatar.png?height=50&width=50",
    topic:
      "Navigating Progress: The Role of Individual Ambition and Government Support",
    description:
      "Delve into the intricate interplay between personal initiative and state involvement in shaping a nation's journey towards progress and prosperity.",
    personName: "Margaret Thatcher",
  },
  {
    avatar: "/jefferson.png?height=50&width=50",
    topic: "Liberty or Order: The Balancing Act",
    description:
      "Debate the fine line between maintaining order and upholding personal freedoms, reflecting Jefferson's advocacy for individual rights and limited government.",
    personName: "Thomas Jefferson",
  },
  {
    avatar: "/tesla.png?height=50&width=50",
    topic: "Innovation or Regulation: Steering Technological Progress",
    description:
      "Debate the role of innovation and regulation in technological advancement, considering Tesla's groundbreaking inventions and his challenges with patents and corporate control.",
    personName: "Nikola Tesla",
  },
  {
    avatar: "/gandhi.png?height=50&width=50",
    topic: "Cultural Evolution: Tradition vs. Modernization",
    description:
      "Contemplate the balance between preserving cultural traditions and embracing modernity, drawing insights from Gandhi's philosophy of non-violent resistance and his views on societal progress.",
    personName: "Mahatma Gandhi",
  },
  {
    avatar: "/montessori.png?height=50&width=50",
    topic: "Education and Enlightenment: Foundations of a Society",
    description:
      "Discuss the impact of educational philosophies on societal development and individual growth, inspired by Montessori's revolutionary approach to child-centric education.",
    personName: "Maria Montessori",
  },
];

const DebateTopic = ({ avatar, topic, personName, description }) => {
  return (
    <Link to="/chat">
      <div className="w-full max-w-25 rounded-lg bg-neutral font-semibold p-4 text-white text-sm mb-5 flex items-center h-[180px]">
        <div className="mr-5 flex flex-col items-center w-[80px]">
          <Avatar>
            <AvatarImage alt="Russel Hue" src={avatar} />
          </Avatar>
          <div className="text-gray-200 font-light mt-2 text-center">
            {personName}
          </div>
        </div>
        <div className="basis-0 grow">
          <div className="mt-2">{topic}</div>
          <div className="text-gray-400 font-light mt-2">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export function BotSelect() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      {/* <div className="rounded-lg w-full pt-5 pb-5 pl-2 pr-2 bg-neutral flex flex-col items-center"> */}
      <h1 className="text-4xl text-white font-bold mb-4">Welcome!</h1>
      <h3 className="text-xl text-white font-bold mb-4">
        Choose your debate topic:
      </h3>
      <section className="w-full p-1">
        {debates.map((debate) => (
          <DebateTopic key={debate.personName} {...debate} />
        ))}
      </section>
      {/* </div> */}
    </div>
  );
}

export function Messenger() {
  const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);
  const [notifications, setNotifications] = useState(new Map());
  const isPositionedTop = true;
  const [showMessage0, setShowMessage0] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);

  const handleAddToast = React.useCallback((toast) => {
    setNotifications((prev) => {
      const newMap = new Map(prev);
      newMap.set(String(Date.now()), { ...toast });
      return newMap;
    });
  }, []);

  const handleRemoveToast = React.useCallback((key) => {
    setNotifications((prev) => {
      const newMap = new Map(prev);
      newMap.delete(key);
      return newMap;
    });
  }, []);

  useEffect(() => {
    if (showMessage1) {
      setTimeout(() => setShowMessage2(true), 1500);
    }
  }, [showMessage1]);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage0(true);
    }, 800);
  }, []);

  const handleDispatchSuccess = React.useCallback(
    (message) => handleAddToast({ message, type: "success" }),
    [handleAddToast]
  );

  const handleDispatchError = React.useCallback(
    (message) => handleAddToast({ message, type: "error" }),
    [handleAddToast]
  );

  return (
    <div className="flex flex-1 flex-col h-full">
      <ScrollArea className="flex-grow mb-6">
        <div className="space-y-4">
          <div className="w-full max-w-25 rounded-lg bg-neutral font-semibold p-4 text-white text-sm">
            <div className="text-gray-400 font-light">Debate topic:</div>
            Navigating Progress: The Role of Individual Ambition and Government
            Support
          </div>
          {showMessage0 && (
            <Message
              content="Should the future of a nation be shaped by the hands of its government or by the indomitable spirit of its people? This philosophy we discuss today is grounded in the belief that every individual, equipped with determination and resolve, deserves the freedom to forge their own destiny, unshackled by the burdens of an overreaching state. Shouldn't one's path in life be carved by personal ambition and hard work, rather than dictated by the circumstances of their birth?
			
			And now, in the spirit of democratic dialogue and with a genuine respect for diverse viewpoints, I turn to my esteemed opponent. Will they argue for a path of dependence, or can they offer a vision that truly empowers the individual, uplifts societies, and honors the potential within each of us?"
              backgroundColor="bg-secondary"
              textColor="text-white"
              side={Side.Left}
            />
          )}
          {(showMessage1 || showMessage2) && (
            <Message
              content="Is the strength of a society solely derived from individual ambition, or does it also grow from our collective will and shared responsibilities? The philosophy presented by my opponent certainly champions individual freedom, but does it fully grasp the intricate tapestry of community and mutual support that binds us all?

			While individual initiative is undeniably powerful, should we not also consider the role of a supportive state in nurturing environments where every citizen, regardless of their starting point, has the opportunity to thrive? Can we truly advance as a society if we do not also address the disparities and challenges that confront us collectively?"
              backgroundColor="bg-primary"
              textColor="text-white"
              side={Side.Right}
            />
          )}
          {showMessage2 && (
            <Message
              content="Certainly, the role of a supportive state is not to be overlooked. However, it is imperative to distinguish between a state that supports and one that stifles. A state that empowers its citizens, not one that binds them in a web of dependency. Is it not the hallmark of a truly progressive society to create an environment where individuals are encouraged to excel, and in doing so, lift the entire community with them?

			Our vision is not one of exclusivity but of empowerment. It is a vision where success is not a zero-sum game but a shared aspiration, achieved through the synergy of individual effort and a conducive, enabling environment. Should we not strive for a balance where the state serves its people by fostering an environment ripe for innovation, enterprise, and personal development, rather than constraining these very elements that drive a society forward?"
              backgroundColor="bg-secondary"
              textColor="text-white"
              side={Side.Left}
            />
          )}
        </div>
      </ScrollArea>
      <div className="flex items-center space-x-2">
        <Input
          className="light flex-1"
          placeholder="Type your response here..."
          type="text"
        />
        <Button
          className="bg-accent text-white"
          onClick={() => {
            if (!showMessage1) {
              handleAddToast({
                message: "Discovered a new Perspective!",
                type: "success",
              });
            }
            setShowMessage1(true);
          }}
        >
          <SendIcon />
        </Button>
        {/* <Button className="bg-destructive text-white">
          <TrashIcon />
        </Button> */}
      </div>
      <ToastPrimitive.Provider duration={100000000}>
        <AnimatePresence>
          {Array.from(notifications).map(([key, notification]) => {
            return (
              <ToastRoot
                onOpenChange={(open) => {
                  if (!open) handleRemoveToast(key);
                }}
                key={key}
                type={notification.type}
                asChild
                forceMount
              >
                <motion.li
                  initial={{
                    y: isPositionedTop ? -100 : 100,
                    scale: 0.6,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                  exit={{
                    scale: 0.9,
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                  layout
                >
                  <div
                    style={{ display: "flex", gap: 14, alignItems: "center" }}
                  >
                    <ToastIconContainer aria-hidden type={notification.type}>
                      {notification.type === "success" ? (
                        <Icons.CheckIcon />
                      ) : (
                        <Icons.Cross2Icon />
                      )}
                    </ToastIconContainer>

                    <div>
                      <ToastTitle>{notification.message}</ToastTitle>
                      <ToastDescription>
                        Monday, July 11, 9:55 AM
                      </ToastDescription>
                    </div>
                  </div>
                  <ToastClose>
                    <Link to="/perspective-tree">
                      <Button
                        variant="outline"
                        className="bg-white text-black"
                        size="icon"
                      >
                        <ChevronRightIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                  </ToastClose>
                </motion.li>
              </ToastRoot>
            );
          })}
        </AnimatePresence>

        <ToastViewport position="topLeft" />
      </ToastPrimitive.Provider>
    </div>
  );
}

export function Chat(props: { children: JSX.Element[] }) {
  return (
    <div
      key="1"
      className="dark bg-muted h-screen flex flex-col overflow-y-scroll"
    >
      <section className="flex-grow flex flex-col flex-1 p-6 h-full">
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
    <div className={`flex flex-1 items-top float-${side} ${flex_direction}`}>
      <Avatar className={avatar_margin}>
        <AvatarImage
          alt="Russel Hue"
          src={
            side === Side.Left
              ? "/thatcher_avatar.png?height=50&width=50"
              : "/avatar_placeholder.svg?height=40&width=40"
          }
        />
      </Avatar>
      <div
        className={`rounded-lg ${backgroundColor} p-2 ${textColor} text-sm whitespace-pre-line`}
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

const ToastRoot = styled(ToastPrimitive.Root, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: mauve.mauve2,
  padding: "14px 18px",
  width: "100%",
  borderRadius: 8,
  boxShadow: `0 2px 4px ${mauveA.mauveA10}, 0 10px 15px ${mauveA.mauveA1}`,
  outline: "none",
  variants: {
    type: {
      success: {
        backgroundColor: green.green1,
      },
      error: {
        backgroundColor: red.red1,
      },
    },
  },
  "&:focus-visible": {
    boxShadow: `0 0 0 3px ${mauveA.mauveA12}`,
  },
});

const ToastTitle = styled(ToastPrimitive.Description, {
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 14,
  marginBottom: 2,
});

const ToastDescription = styled(ToastPrimitive.Description, {
  color: mauve.mauve10,
  fontSize: 14,
});

const ToastIconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  borderRadius: "100%",

  variants: {
    type: {
      success: {
        color: green.green1,
        backgroundColor: green.green10,
      },
      error: {
        color: red.red1,
        backgroundColor: red.red10,
      },
    },
  },
});

const ToastClose = styled(ToastPrimitive.Close, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   height: 24,
  //   width: 24,
  //   borderRadius: "100%",
  //   padding: 0,
  //   color: mauve.mauve12,
  //   boxShadow: `0 0 0 2px ${mauve.mauve6}`,
  //   "&:focus-visible": {
  //     boxShadow: `0 0 0 3px ${mauveA.mauveA12}`,
  //   },
});

const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: "fixed",
  padding: 50,
  display: "flex",
  flexDirection: "column",
  gap: 15,
  outline: "none",
  width: "100%",
  variants: {
    position: {
      bottomRight: { bottom: 0, right: 0 },
      bottomLeft: { bottom: 0, left: 0 },
      topRight: { top: 0, right: 0, flexDirection: "column-reverse" },
      topLeft: { top: 0, left: 0, flexDirection: "column-reverse" },
    },
  },
});

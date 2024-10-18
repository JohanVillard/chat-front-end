import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function ChatBubbleIcon() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <ChatBubbleBottomCenterTextIcon className="h-20 w-20" />
      <p className="text-[44px]">Simple Chat</p>
    </div>
  );
}

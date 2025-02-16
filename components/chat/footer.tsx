import { FOOTER_MESSAGE } from "@/app/configuration/ui";

export default function ChatFooter() {
  return (
    <div className="w-full text-xs flex pt-2 justify-center items-center text-gray-500 text-center">
      {FOOTER_MESSAGE}
    </div>
  );
}

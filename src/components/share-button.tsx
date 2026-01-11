import { Check, ShareIcon } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  return (
    <div
      className="w-32 bg-[#02410f] cursor-pointer border-2 border-solid border-[#483214] h-10 p-3 items-center rounded-md flex justify-center space-x-2 text-[#F8FACD] hover:bg-[#01300b]"
      onClick={handleCopy}
    >
      {copied ? (
        <>
          <Check size={20} />
          <span className="font-tab text-sm">Copied</span>
        </>
      ) : (
        <>
          <ShareIcon size={20} />
          <span className="font-tab text-sm">Share tree</span>
        </>
      )}
    </div>
  );
}

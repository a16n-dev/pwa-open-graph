import { useState } from "react";
import { Button } from "@mui/joy";

interface ShareButtonProps {}

const ShareButton = ({}: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button size={"lg"} onClick={handleCopy}>
      {copied ? "Copied Link!" : "Share"}
    </Button>
  );
};

export default ShareButton;

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Share2, FacebookIcon, TwitterIcon, PhoneIcon } from "lucide-react";
import { Bluesky } from "./icons/Bluesky";

interface ShareMenuProps {
  url: string;
  title: string;
}

export function ShareMenu({ url, title }: ShareMenuProps) {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    bluesky: `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => window.open(shareUrls.bluesky, "_blank")}
          >
            <Bluesky className="mr-2 h-4 w-4" />
            Share on Bluesky
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => window.open(shareUrls.facebook, "_blank")}
          >
            <FacebookIcon className="mr-2 h-4 w-4" />
            Share on Facebook
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => window.open(shareUrls.twitter, "_blank")}
          >
            <TwitterIcon className="mr-2 h-4 w-4" />
            Share on Twitter
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => window.open(shareUrls.whatsapp, "_blank")}
          >
            <PhoneIcon className="mr-2 h-4 w-4" />
            Share on WhatsApp
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

"use client";

import Link from "next/link";
import { Facebook, Youtube, Instagram, Cloud, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();

  const socials = [
    {
      icon: <Facebook className="h-4 w-4" />,
      href: "https://www.facebook.com/superluminalpsy",
      label: "Facebook",
    },
    {
      icon: <Youtube className="h-4 w-4" />,
      href: "https://www.youtube.com/channel/UCGePscP8I_b2ta5Vuj1j-bQ",
      label: "YouTube",
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      href: "https://www.instagram.com/superluminal_psy",
      label: "Instagram",
    },
    {
      icon: <FontAwesomeIcon icon={faPatreon} />,
      href: "https://www.patreon.com/c/superluminal_kabayun_yasmin",
      label: "Patreon",
    },
    {
      icon: <Cloud className="h-4 w-4" />,
      href: "https://soundcloud.com/superluminal-sangoma",
      label: "SoundCloud",
    },
    {
      icon: <Music2 className="h-4 w-4" />,
      href: "https://open.spotify.com/artist/7IHjVGAMreozL1Jk2BBj6h",
      label: "Spotify",
    },
  ];

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-2 pt-2">
            <div className="relative h-20 w-full">
              <Image
                src="/Logo_white.png"
                alt="Superluminal"
                fill
                className={`object-contain object-left ${theme === "light" ? "invert" : ""}`}
              />
            </div>
            <p className="text-sm text-muted-foreground pl-1">
              Peace, Love & Psychedelic Trance
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex gap-8">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href="/music"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Music
                </Link>
                <Link
                  href="/video"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Video
                </Link>
              </nav>

              <Separator orientation="vertical" className="h-auto" />

              <nav className="flex flex-col space-y-2">
                <Link
                  href="/shows"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Shows
                </Link>
                <Link
                  href="/learn"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Learn
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </nav>

              <Separator orientation="vertical" className="h-auto" />

              <nav className="flex flex-col space-y-2">
                <Link
                  href="https://kabayun.bandcamp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Shop
                </Link>
                <Link
                  href="https://www.patreon.com/c/superluminal_kabayun_yasmin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Patreon
                </Link>
                <Link
                  href="https://www.kabayun.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Kabayun
                </Link>
              </nav>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex flex-wrap gap-2">
              {socials.map((social, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-foreground"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Management</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <a
                href="https://fm-booking.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors block"
              >
                FM Booking
              </a>
              <a
                href="https://www.sangomarecords.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors block"
              >
                Sangoma Records
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Superluminal | Kabayun. All rights
            reserved.
          </p>
          <nav className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

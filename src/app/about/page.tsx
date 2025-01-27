"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faSoundcloud,
  faFacebookF,
  faInstagram,
  faYoutube,
  faPatreon,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" /> */}

        <div className="relative mx-auto px-4">
          <div className="flex min-h-[80vh] sm:min-h-[100vh] items-center">
            {/* Content Column */}
            <div className="relative z-20 w-full lg:w-[45%] space-y-4 md:space-y-8 py-4 md:py-0 px-4 md:px-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center rounded-full border px-2 md:px-3 py-1 text-xs md:text-sm 
              text-muted-foreground backdrop-blur-sm border-primary/20 bg-background/50"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                Sangoma Records
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 md:space-y-6"
              >
                <h1
                  className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text 
              text-transparent text-4xl md:text-6xl font-bold leading-tight tracking-tighter"
                >
                  Superluminal
                </h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-base md:text-lg text-muted-foreground space-y-4 md:space-y-6"
                >
                  <p>
                    Superluminal emerges from the creative symbiosis between
                    Kabayun and his partner, muse, and wife Yasmin. Born on the
                    dancefloor and steeped in the spirit of Goa, their
                    collaboration transcends traditional boundaries—she creates
                    art to his music, he composes to her visuals, each
                    constantly inspiring the other in an endless creative dance.
                  </p>
                  <p>
                    With pumping basslines and twisted soundscapes, Superluminal
                    celebrates psychedelic trance&apos;s power to elevate
                    collective consciousness. Their music invites dancers to
                    kick up dust, shake their chakras, and journey to new
                    heights of awareness, embodying the transformative potential
                    they discovered together on those very same dancefloors that
                    sparked their love.
                  </p>
                </motion.div>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-2 md:gap-3 py-4 md:py-0 px-8 md:px-0 justify-center md:justify-start"
              >
                {[
                  {
                    icon: <FontAwesomeIcon icon={faFacebookF} />,
                    href: "https://www.facebook.com/superluminalpsy",
                    color: "bg-[#1877f2]",
                  },
                  {
                    icon: <FontAwesomeIcon icon={faYoutube} />,
                    href: "https://www.youtube.com/channel/UCGePscP8I_b2ta5Vuj1j-bQ",
                    color: "bg-red-600",
                  },
                  {
                    icon: <FontAwesomeIcon icon={faInstagram} />,
                    href: "https://www.instagram.com/superluminal_psy",
                    color: "bg-[#C13584]",
                  },
                  {
                    icon: <FontAwesomeIcon icon={faPatreon} />,
                    href: "https://www.patreon.com/superluminal_kabayun_yasmin",
                    color: "bg-[#ff424d]",
                  },
                  {
                    icon: <FontAwesomeIcon icon={faSoundcloud} />,
                    href: "https://soundcloud.com/superluminal-sangoma",
                    color: "bg-[#ff7700]",
                  },
                  {
                    icon: <FontAwesomeIcon icon={faSpotify} />,
                    href: "https://open.spotify.com/artist/7IHjVGAMreozL1Jk2BBj6h",
                    color: "bg-[#1db954]",
                  },
                  {
                    icon: <FontAwesomeIcon icon={faMusic} />,
                    href: "https://music.apple.com/us/artist/superluminal/445248461",
                    color: "bg-[#fa233b]",
                  },
                  {
                    icon: <FontAwesomeIcon icon={faAmazon} />,
                    href: "https://music.amazon.com/artists/B0057UIFUA/superluminal",
                    color: "bg-[#0DBFF5]",
                  },
                  {
                    icon: (
                      <Image
                        src="/youtube-music.png"
                        alt="YouTube Music"
                        width={38}
                        height={38}
                        className="object-contain"
                      />
                    ),
                    href: "https://music.youtube.com/channel/UCXweVbUB237yaalHEUE5uxQ",
                    color: "bg-[#ff0000]",
                  },
                ].map((social, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} w-10 h-10 rounded-full text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80`}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              {/* Label Logos Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="w-full py-2 md:py-4"
              >
                <div className="flex flex-row items-center justify-start gap-2 md:gap-4 max-w-3xl">
                  <div>
                    <Link
                      href="https://www.sangomarecords.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform duration-300 hover:scale-105"
                    >
                      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-24">
                        <Image
                          src="/Sangoma_Logo_2018_Horizontal_Black.png"
                          alt="Sangoma Records"
                          width={150}
                          height={60}
                          className={`max-w-[150px] w-full transition-all duration-300 ${
                            theme === "dark" ? "" : "invert"
                          }`}
                        />
                      </div>
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="http://fm-booking.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform duration-300 hover:scale-105"
                    >
                      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-24">
                        <Image
                          src="/FM Booking-white-black.png"
                          alt="FM Booking"
                          width={150}
                          height={60}
                          className={`max-w-[150px] w-full transition-all duration-300 ${
                            theme === "dark" ? "" : "invert"
                          }`}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute right-0 top-0 bottom-0 w-[65%]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background from-10% via-background/60 to-transparent z-10" />
              <div className="absolute -right-[10%] top-0 bottom-0 w-full">
                <Image
                  src="https://res.cloudinary.com/ddp2xfpyb/image/upload/v1711600118/superluminal/DSC03154-JK_asmosr.jpg"
                  alt="Superluminal - Sangoma Records"
                  fill
                  className="object-cover object-center opacity-40 md:opacity-100"
                  priority
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

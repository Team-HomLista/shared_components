import { FC } from "react";

interface SocialMediaIconsProps {
  icons: { src: string; alt: string; link: string }[];
}

export const SocialMediaIcons: FC<SocialMediaIconsProps> = ({ icons }) => {
  return (
    <div className="flex h-full w-full flex-row flex-wrap items-end justify-center gap-2 sm:gap-0 lg:justify-end">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pl-2 transition-opacity hover:opacity-80 sm:pl-4 lg:pl-8"
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="h-6 w-6 items-end justify-end sm:h-8 sm:w-8 lg:h-full lg:w-full"
          />
        </a>
      ))}
    </div>
  );
};

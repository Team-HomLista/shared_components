import { FC } from "react";

interface SocialMediaIconsProps {
  icons: { src: string; alt: string; link: string }[];
}

export const SocialMediaIcons: FC<SocialMediaIconsProps> = ({ icons }) => {
  return (
    <div className="flex flex-row justify-end items-end w-full h-full">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity pl-8"
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-full h-full justify-end items-end"
          />
        </a>
      ))}
    </div>
  );
};

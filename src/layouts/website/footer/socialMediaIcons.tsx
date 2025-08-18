import { FC } from "react";

interface SocialMediaIconsProps {
  icons: { src: string; alt: string; link: string }[];
}

export const SocialMediaIcons: FC<SocialMediaIconsProps> = ({ icons }) => {
  return (
    <div className="flex h-8 gap-3">
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img src={icon.src} alt={icon.alt} className="size-8 items-end justify-end" />
        </a>
      ))}
    </div>
  );
};

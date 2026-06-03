import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Url } from "url";

interface CardComponentProps {
  image: string | StaticImageData;
  cardName: string;
  className?: string;
  link: string | Url;
}

export default function CardComponent({
  image,
  cardName,
  className,
  link,
}: CardComponentProps) {
  return (
<div className="flex justify-center">
<div className="flex-shrink-0" >
        <Link href={link}  target="_blank"
  rel="noopener noreferrer">
        <Image
        src={image}
        alt={cardName}
        width={400}
        height={500}
        className={className}
        priority
      />
             </Link>
             <Link href={link}  target="_blank"
  rel="noopener noreferrer">
      <p className="text-center py-4 text-sm max-w-xs">{cardName}</p>
 </Link>

    </div>
</div>
  );
}
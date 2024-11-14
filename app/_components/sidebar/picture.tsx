/**
 *
 * @file: picture.tsx
 *
 * @copyright: Jonathan Gabioud
 *
 * @version: 1.0
 *
 **/

import Image from "next/image";
import PersonalPicture from "@/public/perso_aout_2024.jpg";

export default function Picture() {
  return (
    <>
      <div className="p-5 flex items-center justify-center">
        <Image
          className="rounded-lg"
          src={PersonalPicture}
          alt="personal-picture"
          width={100}
          height={100}
        />
      </div>
    </>
  );
}

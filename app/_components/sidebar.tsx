/**
 *
 * @file: sidebar.tsx
 *
 * @copyright: Jonathan Gabioud
 *
 * @version: 1.0
 *
 **/

import PersonalPicture from "@/public/perso_aout_2024.jpg";
import ContactDetail from "./sidebar/contact-detail";
import Language from "./sidebar/language";
import Skill from "./sidebar/skills";
import Philosophy from "./sidebar/philosophy";
import Picture from "./sidebar/picture";

export default function Sidebar() {
  return (
    <div className="box-border w-2/6 bg-gradient-to-r from-indigo-800 to-cyan-600 text-white p-5 sidebar">
      <Picture />
      <ContactDetail />
      <Philosophy />
      <Skill />
      <Language />
    </div>
  );
}

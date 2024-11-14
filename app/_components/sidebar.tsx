/**
 *
 * @file: Home page
 *
 * @copyright: Jonathan Gabioud
 *
 * @version: 1.0
 *
 **/

import { CalendarDays, House, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import PersonalPicture from "@/public/perso_aout_2024.jpg";

export default function Sidebar() {
  return (
    <div className="box-border w-2/6 bg-gradient-to-r from-indigo-800 to-cyan-600 text-white p-5 sidebar">
      <div className="p-5 flex items-center justify-center">
        <Image
          className="rounded-lg"
          src={PersonalPicture}
          alt="personal-picture"
          width={100}
          height={100}
        />
      </div>
      <h3 className="sidebar-subtitles">OBJECTIF</h3>
      <div className="pl-2">
        <p>
          Développeur d'application créatif, capable de concevoir des solutions
          logicielles pertinentes.
        </p>
      </div>

      <h3 className="sidebar-subtitles">COMPÉTENCES</h3>
      <div className="pl-2">
        <ul>
          <li>• Docker</li>
          <li>• React / Next.js</li>
          <li>• HTML/CSS</li>
          <li>• Tailwind</li>
          <li>• BDDR</li>
          <li>• Node.js</li>
          <li>• PHP</li>
          <li>• Cloud computing</li>
          <li>• Python</li>
          <li>• Java</li>
        </ul>
      </div>

      <h3 className="sidebar-subtitles">LANGUES</h3>
      <div className="pl-2">
        <p>Anglais :</p>
        <p> Compétence professionnelle complète</p>
        <p>Allemand :</p>
        <p> Compétence professionnelle limitée</p>
      </div>

      <h3 className="sidebar-subtitles">COORDONNÉES</h3>
      <div className="pl-2">
        <p className="details">
          <Mail className="w-3" />
          jonathan.gabioud@hotmail.com
        </p>
        <p className="details">
          <House className="w-3" />
          Route de la Cantine 59
        </p>
        <p className="details">
          <Phone className="w-3" />
          +41 78 922 40 47
        </p>
        <p className="details">
          <CalendarDays className="w-3" />
          28 Déc, 1987
        </p>
      </div>
      <div className="mt-36">
        <a href="https://www.linkedin.com/in/jonathan-gabioud-6b0454248">
          <Linkedin />
        </a>
      </div>
    </div>
  );
}
